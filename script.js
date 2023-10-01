function toggleInfo() {
  const toggleButton = document.getElementById('toggleButton');
  const additionalInfo = document.getElementById('additionalInfo');

  if (additionalInfo.style.display === 'none' || additionalInfo.style.display === '') {
    additionalInfo.style.display = 'block';
    toggleButton.textContent = 'Ocultar Información Adicional';
  } else {
    additionalInfo.style.display = 'none';
    toggleButton.textContent = 'Mostrar Información Adicional';
  }
}
