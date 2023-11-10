// TIME EVENTS

/*

The events allow code execution on time intervals specified. This intervals are named Timing events.

The two key-methods to use with JavaScript are:

setTimeout(function, milliseconds time)
-> Execute a function, after wait a specified milliseconds number.

setInterval(function, milliseconds)
-> It's the same that setTimeout(), but repeats the execution for a while
*/

function activateCount() {
	// document.getElementById("time").innerHTML = "Start to count.";

	// Activates the function, only once, when the specified time is given:
	// time = setTimeout(function () {
	// 	document.getElementById("time").innerHTML = "Executed the 'setTimeout()'.";
	// 	document.body.style.backgroundColor = "black";
	// 	document.body.style.color = "white";
	// }, 5000);

	time = setInterval(function () {
		var countdown = document.getElementById("time").innerHTML;
		var sub = parseInt(countdown) - 1;

		if (sub === 0) {
			document.getElementById("time").innerHTML = "Time Out!";
			stopCount();
		} else {
			document.getElementById("time").innerHTML = sub;
		}
	}, 1000);
}

function stopCount() {
	// clearTimeout(time)
	// document.getElementById("time").innerHTML = "Stop to count.";
	clearInterval(time);
}
