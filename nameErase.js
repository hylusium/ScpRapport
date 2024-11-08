document
	.querySelector(".OtherNamePicker")
	.addEventListener("click", function (event) {
		if (event.target.classList.contains("Erasebutton")) {
			console.log("Suppression de l'élément parent");
			event.target.parentElement.remove();
		}
	});
