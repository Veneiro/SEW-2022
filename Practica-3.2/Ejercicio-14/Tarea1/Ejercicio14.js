"use strict";

class Connection {
  constructor(action) {
    this.aux = [];
    const request = indexedDB.open("songs", 3);

    request.onerror = this.error.bind(this);

    request.onupgradeneeded = this.onUpgrader.bind(this);

    request.onsuccess = action;
  }

  setAux(e) {
    this.aux.push(e);
  }

  error(e) {
    console.error(e);
  }

  getAux() {
    return this.aux;
  }

  onUpgrader(event) {
    var db = event.target.result;
    db.createObjectStore("songs", { keyPath: "name" });
  }
}

class Player {
  constructor() {
    Storage.prototype.setObj = function (key, obj) {
      return window.localStorage.setItem(key, obj);
    };
    Storage.prototype.getObj = function (key) {
      var value = this.getItem(key);
      return JSON.parse(value);
    };
    this.on = false;
    this.created = false;
    this.cloudSave = window.localStorage.getItem("saved");
    var names = [];
    if (this.cloudSave) {
      var c = new Connection((event) => {
        const db = event.target.result;
        const songObjectStore = db
          .transaction("songs", "readwrite")
          .objectStore("songs");
        songObjectStore.openCursor().onsuccess = (event) => {
          const cursor = event.target.result;
          if (cursor) {
            c.setAux(cursor.value.url);
            names.push(cursor.value.name);
            $("main").append("<section>" + cursor.value.name + "</section>");
            cursor.continue();
          }
          this.playlist = c.getAux();
          //let aux1 = window.localStorage.getObj("names");
          this.playlistSongNames = names;
          let aux3 = window.localStorage.getObj("index");
          this.playlistIndex = aux3;
          $(document.getElementsByName("Actual-Song")[0]).html(
            '<audio crossorigin="anonymous" name="audio" src="' +
              this.playlist[this.playlistIndex] +
              '"></audio>'
          );
          $(document.getElementsByName("CurrentPlaying")[0]).html(
            "Playing: " + this.playlistSongNames[this.playlistIndex]
          );
        };
      });
      document.getElementsByName("Power")[0].disabled = false;
    } else {
      this.playlistSongNames = [];
      this.playlist = [];
      this.playlistIndex = 0;
    }
  }

  powerOn() {
    if (this.on === false) {
      $(document.getElementsByName("power")[0]).html("🟩");
      this.on = true;
      if (this.created == false) {
        this.init();
        this.created = true;
      }
      $(document.getElementsByName("Power")[0]).html("ON");
      document.getElementsByName("Play")[0].disabled = false;
      document.getElementsByName("Backward")[0].disabled = false;
      document.getElementsByName("Forward")[0].disabled = false;
      document.getElementsByName("volume")[0].disabled = false;
    } else if (this.on === true) {
      $(document.getElementsByName("power")[0]).html("🟥");
      this.on = false;
      if (this.created == true) {
        if (this.playButton.dataset.playing === "true") {
          this.audioElement.pause();
          this.audioElement.currentTime = 0;
          this.playButton.dataset.playing = "false";
          document.getElementsByName("Importer")[0].disabled = false;
        } else {
          this.audioElement.currentTime = 0;
        }
      }
      $(document.getElementsByName("Power")[0]).html("OFF");
      document.getElementsByName("Play")[0].disabled = true;
      document.getElementsByName("Backward")[0].disabled = true;
      document.getElementsByName("Forward")[0].disabled = true;
      document.getElementsByName("volume")[0].disabled = true;
    }
  }
  init() {
    this.audioContext = new AudioContext();
    // get the audio element
    this.audioElement = document.getElementsByName("audio")[0];

    this.audioElement.addEventListener(
      "ended",
      () => {
        this.next();
        //this.playButton.dataset.playing = "false";
      },
      false
    );

    // pass it into the audio context
    var track = this.audioContext.createMediaElementSource(this.audioElement);

    this.gainNode = this.audioContext.createGain();

    track.connect(this.gainNode).connect(this.audioContext.destination);
    this.playButton = document.getElementsByName("Play")[0];
    // Check if context is in suspended state (autoplay policy)
    if (this.audioContext.state === "suspended") {
      this.audioContext.resume();
    }
  }

  initAfterNext() {
    this.audioContext = new AudioContext();
    // get the audio element
    this.audioElement = document.getElementsByName("audio")[0];

    this.audioElement.addEventListener(
      "ended",
      () => {
        this.next();
        //this.playButton.dataset.playing = "false";
      },
      false
    );

    // pass it into the audio context
    var track = this.audioContext.createMediaElementSource(this.audioElement);

    this.gainNode = this.audioContext.createGain();

    this.volume();

    track.connect(this.gainNode).connect(this.audioContext.destination);

    this.playButton = document.getElementsByName("Play")[0];
    // Check if context is in suspended state (autoplay policy)
    if (this.audioContext.state === "suspended") {
      this.audioContext.resume();
    }
  }

  play() {
    if (this.on === true) {
      // Play or pause track depending on state
      if (this.playButton.dataset.playing === "false") {
        this.audioElement.play();
        $(document.getElementsByName("CurrentPlaying")[0]).html(
          "Playing: " + this.playlistSongNames[this.playlistIndex]
        );
        this.playButton.dataset.playing = "true";
        document.getElementsByName("Importer")[0].disabled = true;
      } else if (this.playButton.dataset.playing === "true") {
        this.audioElement.pause();
        this.playButton.dataset.playing = "false";
        document.getElementsByName("Importer")[0].disabled = false;
      }
    }
  }
  volume() {
    if (this.on === true) {
      this.volumeControl = document.getElementsByName("volume")[0];
      this.gainNode.gain.value = this.volumeControl.value;
    }
  }

  addSong(files) {
    this.archive = files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        var url = reader.result;
        this.playlistSongNames.push(this.archive.name);
        this.playlist.push(url);
        var song = { name: this.archive.name, url: url };
        new Connection((event) => {
          const db = event.target.result;
          const songObjectStore = db
            .transaction("songs", "readwrite")
            .objectStore("songs");
          songObjectStore.add(song);
        });

        $(document.getElementsByName("Actual-Song")[0]).html(
          '<audio crossorigin="anonymous" name="audio" src="' +
            this.playlist[this.playlistIndex] +
            '"></audio>'
        );
        $("main").append("<section>" + this.archive.name + "</section>");
        document.getElementsByName("Power")[0].disabled = false;
      },
      false
    );

    reader.readAsDataURL(this.archive);
    this.save();
    this.cloudSave = true;
  }

  next() {
    if (this.playButton.dataset.playing === "true") {
      if (this.playlistIndex + 1 < this.playlist.length) {
        $(document.getElementsByName("Actual-Song")[0]).html(
          '<audio crossorigin="anonymous" name="audio" src="' +
            this.playlist[this.playlistIndex + 1] +
            '"></audio>'
        );
        this.playlistIndex += 1;
        this.play();
        this.initAfterNext();
        this.play();
      } else {
        this.playlistIndex = 0;
        $(document.getElementsByName("Actual-Song")[0]).html(
          '<audio crossorigin="anonymous" name="audio" src="' +
            this.playlist[this.playlistIndex] +
            '"></audio>'
        );
        this.play();
        this.initAfterNext();
        this.play();
      }
    } else if (this.playButton.dataset.playing === "false") {
      if (this.playlistIndex + 1 < this.playlist.length) {
        $(document.getElementsByName("Actual-Song")[0]).html(
          '<audio crossorigin="anonymous" name="audio" src="' +
            this.playlist[this.playlistIndex + 1] +
            '"></audio>'
        );
        this.playlistIndex += 1;

        this.initAfterNext();
        this.play();
      } else {
        this.play();
      }
    }
  }

  previous() {
    if (this.playButton.dataset.playing === "true") {
      if (this.playlistIndex - 1 >= 0) {
        $(document.getElementsByName("Actual-Song")[0]).html(
          '<audio crossorigin="anonymous" name="audio" src="' +
            this.playlist[this.playlistIndex - 1] +
            '"></audio>'
        );
        this.playlistIndex -= 1;
        this.play();
        this.initAfterNext();
        this.play();
      } else {
        this.play();
      }
    } else if (this.playButton.dataset.playing === "false") {
      if (this.playlistIndex - 1 >= 0) {
        $(document.getElementsByName("Actual-Song")[0]).html(
          '<audio crossorigin="anonymous" name="audio" src="' +
            this.playlist[this.playlistIndex - 1] +
            '"></audio>'
        );
        this.playlistIndex -= 1;
        this.initAfterNext();
        this.play();
      } else {
        this.play();
      }
    }
  }

  save() {
    window.localStorage.setItem(
      "names",
      JSON.stringify(this.playlistSongNames)
    );
    window.localStorage.setObj("index", JSON.stringify(this.playlistIndex));
    window.localStorage.setItem(
      "main",
      document.getElementsByName("songs")[0].innerHTML
    );
    this.cloudSave = true;
    window.localStorage.setItem("saved", this.cloudSave);
  }

  clear() {
    window.localStorage.clear();
    new Connection((event) => {
      const db = event.target.result;
      this.playlistSongNames.forEach((name) => {
        const request = db
          .transaction(["songs"], "readwrite")
          .objectStore("songs")
          .delete(name);
      });
    });
    window.location.reload();
  }
}

var player = new Player();
