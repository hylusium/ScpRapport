const materialInput = document.querySelector(".materielInput input");
const materialContainer = document.querySelector(".othermaterielPicker");

materialInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		const materialValue = materialInput.value.trim();
		if (materialValue === "") return;

		const materialDiv = document.createElement("div");
		const para = document.createElement("p");
		const eraseButton = document.createElement("button");

		para.textContent = materialValue;
		eraseButton.textContent = "X";

		materialDiv.classList.add("name");
		eraseButton.classList.add("Erasebutton");

		materialDiv.appendChild(para);
		materialDiv.appendChild(eraseButton);
		materialContainer.appendChild(materialDiv);

		materialInput.value = "";

		eraseButton.addEventListener("click", function () {
			materialDiv.remove();
		});
	}
});
