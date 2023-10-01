// Función para mostrar la información adicional
function mostrarInformacion() {
  const additionalInfo = document.getElementById('additionalInfo');
  additionalInfo.style.display = 'block';
}

// Función para alternar la visibilidad de la información adicional
function alternarInformacion() {
  const additionalInfo = document.getElementById('additionalInfo');
  additionalInfo.style.display = additionalInfo.style.display === 'none' || additionalInfo.style.display === '' ? 'block' : 'none';
}

// Evento al hacer clic en el botón para mostrar información
const mostrarInfoBtn = document.getElementById('mostrarInfoBtn');
mostrarInfoBtn.addEventListener('click', mostrarInformacion);

// Evento al hacer clic en el botón para alternar la información
const toggleInfoBtn = document.getElementById('toggleInfoBtn');
toggleInfoBtn.addEventListener('click', alternarInformacion);
