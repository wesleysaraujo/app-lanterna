window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

function lanterna(){
	window.plugins.flashlight.available(function(isAvailable) {
		if (isAvailable) {

		    // switch on
		    window.plugins.flashlight.toggle(success, error); // success/error callbacks may be passed
		    // switch off after 3 seconds
		    /*
		    setTimeout(function() {
		      window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
		    }, 3000);
			*/	
		} else {
			alert("Flashlight not available on this device");
		}
		});

	function success(){
		if ($('#btn-lanterna').hasClass('btn-primary')) {
			$('#btn-lanterna').text('Desligar Lanterna').removeClass('btn-primary').addClass('btn-danger');
		} else {
			$('#btn-lanterna').text('Ligar Lanterna').removeClass('btn-danger').addClass('btn-primary');
		}
	}

	function error(){
		console.log('Erro na lanterna')
	}

	document.addEventListener("backbutton", function() {
	  // pass exitApp as callbacks to the switchOff method
	  window.plugins.flashlight.switchOff(exitApp, exitApp);
	}, false);

	function exitApp() {
	  navigator.app.exitApp();
	}
}