"use strict";

class Connection {

  constructor(action) {
    const request = indexedDB.open("songs", 3);

    request.onerror = this.error.bind(this);

    request.onupgradeneeded = this.onUpgrader.bind(this);

    request.onsuccess = action;

  }

  error(e) {
    console.error(e);
  }

  onUpgrader(event) {
    var db = event.target.result;
    db.createObjectStore("songs", { keyPath: "name" });
  }
}

class Player {
  constructor() {

    new Connection((event) => {
      const db = event.target.result;
      const songObjectStore = db.transaction("songs", "readwrite").objectStore("songs");
    
      songObjectStore.getAll().onsuccess = (event) => {
        const songs = event.target.result;
        songs.forEach(song => {
          console.log(song)
        });
      };
    }); 

    Storage.prototype.setObj = function (key, obj) {
      return window.localStorage.setItem(key, obj);
    };
    Storage.prototype.getObj = function (key) {
      var value = this.getItem(key);
      return JSON.parse(value);
    };
    this.on = false;
    this.created = false;
    this.blob = window.URL || window.webkitURL;
    if (!this.blob) {
      console.log("Your browser does not support Blob URLs :(");
      return;
    }
    this.cloudSave = window.localStorage.getItem("saved");
    console.log(this.cloudSave);
    if (this.cloudSave) {
      console.log("Aqui");
      let aux1 = window.localStorage.getObj("names");
      this.playlistSongNames = aux1;

      let aux3 = window.localStorage.getObj("index");
      this.playlistIndex = aux3;

      let aux2 = window.localStorage.getObj("playlist");
      this.playlist = aux2;

      $(document.getElementsByName("Actual-Song")[0]).html(
        '<audio crossorigin="anonymous" name="audio" src="' +
          this.playlist[this.playlistIndex] +
          '"></audio>'
      );

      document.getElementsByName("Power")[0].disabled = false;
      this.load();
    } else {
      this.playlistSongNames = [];
      this.playlist = [];
      this.playlistIndex = 0;
    }
  }

  powerOn() {
    if (this.on === false) {
      $("label").html("🟩");
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
      $("label").html("🟥");
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
        this.playButton.dataset.playing = "false";
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
        this.playButton.dataset.playing = "false";
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
        console.log(this.audioElement);
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
        var fileURL = this.blob.createObjectURL(this.archive);
        this.playlistSongNames.push(this.archive.name);
        this.playlist.push(url);
        var song = {name: this.archive.name, url: url}
        
        new Connection((event) => {
          const db = event.target.result;
          const songObjectStore = db.transaction("songs", "readwrite").objectStore("songs");
          songObjectStore.add(song);
        });
        //this.files.push(fileURL);

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
  }

  next() {
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
    }
  }

  previous() {
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
    }
  }

  save() {
    console.log(this.playlist[0]);
    window.localStorage.setItem(
      "song",
      document.getElementsByName("Actual-Song")[0].innerHTML
    );
    window.localStorage.setItem(
      "names",
      JSON.stringify(this.playlistSongNames)
    );
    window.localStorage.setObj("playlist", JSON.stringify(this.playlist));
    window.localStorage.setObj("index", JSON.stringify(this.playlistIndex));
    //window.localStorage.setObj("files", this.files);
    window.localStorage.setItem(
      "main",
      document.getElementsByName("songs")[0].innerHTML
    );
    this.cloudSave = true;
    window.localStorage.setItem("saved", this.cloudSave);
  }

  

  load() {
    if (this.cloudSave) {
      //$(document.getElementsByName("Actual-Song")[0]).html(
      //  window.localStorage.getItem("song")
      //);
      $(document.getElementsByName("songs")[0]).html(
        window.localStorage.getItem("main")
      );
    }
  }

  clear() {
    window.localStorage.clear();
    //window.localStorage.removeItem("song");
    //window.localStorage.removeItem("names");
    //window.localStorage.removeItem("playlist");
    //window.localStorage.removeItem("index");
    //window.localStorage.removeItem("main");
    //window.localStorage.removeItem("saved");
    //this.cloudSave = false;
  }
}

var player = new Player();
