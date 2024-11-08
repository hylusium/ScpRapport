const personnelInput = document.querySelector(".otherDistInput input");
const personnelContainer = document.querySelector(".OtherNamePicker");

personnelInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		const personnelValue = personnelInput.value.trim();
		if (personnelValue === "") return;

		const personnelDiv = document.createElement("div");
		const para = document.createElement("p");
		const eraseButton = document.createElement("button");

		para.textContent = personnelValue;
		eraseButton.textContent = "X";

		personnelDiv.classList.add("name");
		eraseButton.classList.add("Erasebutton");

		personnelDiv.appendChild(para);
		personnelDiv.appendChild(eraseButton);
		personnelContainer.appendChild(personnelDiv);

		personnelInput.value = "";

		eraseButton.addEventListener("click", function () {
			personnelDiv.remove();
		});
	}
});
