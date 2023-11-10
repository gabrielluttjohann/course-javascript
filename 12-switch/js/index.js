function checkColor() {
	var day = new Date().getDay();

	switch (day) {
		case "red":
			document.body.style.backgroundColor = "red";
			break;
		case "green":
			document.body.style.backgroundColor = "green";
			break;
		case "blue":
			document.body.style.backgroundColor = "blue";
			break;
		default:
			document.getElementById("test").innerHTML =
				"Error: color not found: " + color;

			document.body.style.backgroundColor = "white";
	}
}
