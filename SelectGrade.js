function updateSelectedGrade() {
	const select = document.getElementById("gradeSelect");
	const display = document.getElementById("selectedGradeDisplay");
	display.textContent = select.options[select.selectedIndex].text;
}
