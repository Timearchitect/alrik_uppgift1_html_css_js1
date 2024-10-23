document.addEventListener("DOMContentLoaded", function () {
    eventhandlers.initialize()

    documentEdit.logMessage()


})

var documentEdit = (function () {
    function logMessage() {
        console.log("hello there")
        console.log("hello again")
    }

    return {
        logMessage
    }
})()

var eventhandlers = (function (){
    function initialize(){
        var clickMeBtn = document.getElementById("click-me-btn")
        clickMeBtn.addEventListener("click", onClickClickMeBtn) 
    }

    function onClickClickMeBtn(){
        alert("FUNKADE HUR BRA SOM HELST")


    }
    return {
        initialize
    }
})()
var documentEdit = (function () {
	function logMessage() {
		console.log("hello there");
		console.log("hello again");
	}

	return {
		logMessage
	};
})();
