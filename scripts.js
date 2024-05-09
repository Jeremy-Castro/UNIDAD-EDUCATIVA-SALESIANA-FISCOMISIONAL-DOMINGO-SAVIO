function generarCodigoQR() {
    var texto = document.getElementById("qrText").value;
    var qrCodeContainer = document.getElementById("qrCodeContainer");

    // Limpiar el contenido previo del contenedor
    qrCodeContainer.innerHTML = "";

    // Generar el código QR con opciones de diseño personalizadas
    var qrCode = new QRCode(qrCodeContainer, {
        text: texto,
        width: 200,
        height: 200,
        colorDark: "#000000", // Color oscuro
        colorLight: "#ffffff", // Color claro
        correctLevel: QRCode.CorrectLevel.H // Nivel de corrección de errores
    });

    // Mostrar el enlace de descarga del código QR
    var downloadLink = document.getElementById("downloadLink");
    downloadLink.href = qrCodeContainer.firstChild.toDataURL("image/png");
    downloadLink.style.display = "inline";
}