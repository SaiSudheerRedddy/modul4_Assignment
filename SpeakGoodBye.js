(function(window){
	var byeSpeaker = {};
	byeSpeaker.speakWord = "Good Bye";
	byeSpeaker.out = function(name) {
	  console.log(byeSpeaker.speakWord + " " + name);
	}
	window.byeSpeaker = byeSpeaker;
})(window);