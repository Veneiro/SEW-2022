"use strict";
class Player {
  constructor() {
    this.on = false;
    this.created = false;
    this.blob = window.URL || window.webkitURL;
    if (!this.blob) {
      console.log("Your browser does not support Blob URLs :(");
      return;
    }
    //window.localStorage.clear();
    this.cloudSave = window.localStorage.getItem("saved");
    console.log(this.cloudSave);
    this.load();
    if (this.cloudSave) {
      let aux1 = window.localStorage.getItem("names");
      var res = JSON.parse(aux1);
      this.playlistSongNames = res;

      let aux2 = window.localStorage.getItem("playlist");
      console.log(aux2);
      //var res2 = JSON.parse(aux2);
      //this.playlist = res2;

      let aux3 = window.localStorage.getItem("index");
      //var res3 = JSON.parse(aux3);
      //this.playlistIndex = res3;
    } else {
      this.playlistSongNames = [];
      this.playlist = [];
      this.playlistIndex = 0;
    }
    this.cloudSave = false;
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
    var fileURL = this.blob.createObjectURL(this.archive);
    this.playlistSongNames.push(this.archive.name);
    this.playlist.push(fileURL);
    console.log(this.playlist);
    $(document.getElementsByName("Actual-Song")[0]).html(
      '<audio crossorigin="anonymous" name="audio" src="' +
        this.playlist[this.playlistIndex] +
        '"></audio>'
    );
    $("main").append("<section>" + this.archive.name + "</section>");
    document.getElementsByName("Power")[0].disabled = false;
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
    window.localStorage.setItem(
      "song",
      document.getElementsByName("Actual-Song")[0].innerHTML
    );
    window.localStorage.setItem("names", JSON.stringify(this.playlistSongNames));
    window.localStorage.setObject("playlist", JSON.stringify(this.playlist));
    window.localStorage.setObject("index", JSON.stringify(this.playlistIndex));
    window.localStorage.setItem(
      "main",
      document.getElementsByName("songs")[0].innerHTML
    );
    this.cloudSave = true;
    window.localStorage.setItem("saved", this.cloudSave);
  }

  load() {
    if (this.cloudSave) {
      $(document.getElementsByName("Actual-Song")[0]).html(
        window.localStorage.getItem("song")
      );
      $(document.getElementsByName("songs")[0]).html(
        window.localStorage.getItem("main")
      );
    }
  }

  arraySave(){
    Storage.prototype.setObj = function(key, obj) {
      return window.localStorage.setItem(key, JSON.stringify(obj))
    }
    Storage.prototype.getObj = function(key) {
        return JSON.parse(window.localStorage.getItem(key))
    }
  }

  clear() {
    window.localStorage.removeItem("song");
    window.localStorage.removeItem("names");
    window.localStorage.removeItem("playlist");
    window.localStorage.removeItem("index");
    window.localStorage.removeItem("main");
    window.localStorage.removeItem("saved");
    this.cloudSave = false;
  }
}

var player = new Player();
