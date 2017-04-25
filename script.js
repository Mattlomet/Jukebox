
var classicJukeBox = new JukeBox();
var caseyjones = new Song ("caseyjones.mp3","GratefulDead");

var audioHTML = document.getElementById("audio");
var songTitle = document.getElementById("currentsong");

classicJukeBox.fetchSong(caseyjones);

var playButton= document.getElementById("playbtn");
playButton.addEventListener("click", classicJukeBox.playSong);
var stopButton= document.getElementById("stopbtn");
stopButton.addEventListener("click", classicJukeBox.stopSong);
var loadButton = document.getElementById('musicbaybutton');
loadButton.addEventListener("click",classicJukeBox.loadSong);
var inputbox = document.getElementById("fileload");

function JukeBox (){
this.fetchSong= fetchSong;
this.playSong=playSong;
this.stopSong=stopSong;
this.loadSong=loadSong;

	function fetchSong (song){
		songTitle.innerHTML= song.fileName;
		audioHTML.src=song.fileName;
	}
	function playSong (event){
		audioHTML.play()
	}
	function stopSong(event){
		audioHTML.pause();
	}
	function loadSong(event){
		audioHTML.src="";
		var inputsong = inputbox.value;		
		inputsong = inputsong.replace("C:\\fakepath\\", ""); 
		songTitle.innerHTML= inputsong;
		audioHTML.src=inputsong; 
	}

}

function Song (fileName,artist){
	this.fileName=fileName;
	this.artist=artist
	this.createSongFromLibary=createSongFromLibary;

	//function createSongFromLibary(event){
		//var inputtedbox = inputbox.value;
		 //inputtedbox = inputtedbox.replace("C:\\fakepath\\", "");
		 //var creation = new Song(inputtedbox);
		 //songGallery.push(creation);

	//}
}
