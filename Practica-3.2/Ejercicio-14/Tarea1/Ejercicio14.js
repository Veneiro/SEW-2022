"use strict";

class Player {
  constructor() {
    Storage.prototype.setObj = function(key, obj) {
      return window.localStorage.setItem(key, obj);
    }
    Storage.prototype.getObj = function(key) {
      var value = this.getItem(key);
      return JSON.parse(value);
    }
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

      let res4 = window.localStorage.getObj("files");
      this.files = res4;

      for(let i = 0; i < this.files.length; i++){

        this.fileData = new LocalFileData(files[i]);
        this.archive = constructFileFromLocalFileData(this.fileData);
        
        var fileURL = this.blob.createObjectURL(this.archive);
        this.playlist.push(fileURL);
        $("main").append("<section>" + this.archive.name + "</section>");
      }


      let aux3 = window.localStorage.getItem("index");
      var res3 = JSON.parse(aux3);
      this.playlistIndex = res3;

      //$("main").html(window.localStorage.getItem("main"));
      console.log(window.localStorage.getItem("song"));
      $(document.getElementsByName("Actual-Song")).html(window.localStorage.getItem("song"));
      document.getElementsByName("Power")[0].disabled = false;
      
    } else {
      this.playlistSongNames = [];
      this.playlist = [];
      this.playlistIndex = 0;
      this.files = [];
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
    this.files.push(this.archive.path);
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
    console.log(this.playlist[0])
    window.localStorage.setItem(
      "song",
      document.getElementsByName("Actual-Song")[0].innerHTML
    );
    window.localStorage.setItem("names", JSON.stringify(this.playlistSongNames));
    window.localStorage.setObj("playlist", JSON.stringify(this.playlist));
    window.localStorage.setObj("index", JSON.stringify(this.playlistIndex));
    window.localStorage.setObj("files", JSON.stringify(this.files));
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

//  arraySave(){
//    Storage.prototype.setObj = function(key, obj) {
//      return window.localStorage.setItem(key, JSON.stringify(obj))
//    }
//    Storage.prototype.getObj = function(key) {
//        return JSON.parse(window.localStorage.getItem(key))
//    }
//  }

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
