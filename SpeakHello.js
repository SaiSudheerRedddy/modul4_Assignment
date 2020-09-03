(function(window){
	var helloSpeaker = {};
	helloSpeaker.speakWord = "Hello";
	helloSpeaker.out = function(name) {
   console.log(helloSpeaker.speakWord + " " + name);
}
   window.helloSpeaker = helloSpeaker;
 
})(window);
