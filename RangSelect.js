const rangCheckBox = document.querySelectorAll(".rang");

rangCheckBox.forEach((checkbox) => {
	checkbox.addEventListener("click", function () {
		rangCheckBox.forEach((cb) => {
			if (cb !== checkbox) {
				cb.checked = false;
			}
		});
	});
});
