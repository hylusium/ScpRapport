document.addEventListener("DOMContentLoaded", function () {
	const buttonExport = document.querySelector(".buttonToExport");
	const exportTextArea = document.getElementById("exportText");
	const container = document.querySelector(".container");
	const interventionInput = document.querySelector(".interventionInput");

	function exportContainerAsImage() {
		const textContent = exportTextArea.value;

		const tempDiv = document.createElement("div");
		tempDiv.classList.add("export-text");
		tempDiv.textContent = textContent;

		interventionInput.appendChild(tempDiv);
		exportTextArea.style.display = "none";

		html2canvas(container)
			.then((canvas) => {
				const dataUrl = canvas.toDataURL("image/png");
				const link = document.createElement("a");
				link.href = dataUrl;
				link.download = "contenu_exporte.png";
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);

				interventionInput.removeChild(tempDiv);
				exportTextArea.style.display = "block";
			})
			.catch((error) => {
				console.error(
					"Erreur lors de l'exportation de la page en image",
					error
				);
			});
	}

	buttonExport.addEventListener("click", function () {
		exportContainerAsImage();
	});
});
