// if and else

function check() {
	let name = document.getElementById("name").value;

	let paragraph = document.getElementById("test");

	if (name === "" || name === null) {
		paragraph.innerHTML = "The field cannot be empty.";
		paragraph.style.color = "red";
	} else if (name.length < 3) {
		paragraph.innerHTML = "At least 3 characters are required";
		paragraph.style.color = "yellow";
	} else {
		paragraph.innerHTML = "Form Submitted Successfully";
		paragraph.style.color = "green";
	}
}
