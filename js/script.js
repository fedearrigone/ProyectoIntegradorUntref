// Abrir el modal
function openModal() {
    document.getElementById("modal").style.display = "block";
  }
  
  // Cerrar el modal
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  // Validar el formulario
  function validateForm() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
  
    // Validar que los campos no estén vacíos
    if (nombre === "" || apellido === "" || email === "" || telefono === "") {
      alert("Por favor, completa todos los campos.");
      return false;
    }
  
    // Validar el formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un email válido.");
      return false;
    }
  
    // Validar el formato del teléfono (solo dígitos, sin espacios)
    const telefonoRegex = /^\d+$/;
    if (!telefonoRegex.test(telefono)) {
      alert("Por favor, ingresa un número de teléfono válido.");
      return false;
    }
  
    // Si todo es válido, enviar el formulario
    alert("Formulario enviado correctamente.");
    closeModal();
    return true;
  }

  function toggleMenu() {
    var enlacesNav = document.getElementById("enlaces-nav");
    if (enlacesNav.style.display === "none") {
        enlacesNav.style.display = "flex";
    } else {
        enlacesNav.style.display = "none";
    }
}

// Función para cargar el mapa de Google Maps con ubicación en Palermo, Capital Federal
function loadMap() {
  const coordinates = { lat: -34.589159, lng: -58.424789 }; // Coordenadas de Palermo, Capital Federal
  const mapUrl = `https://maps.google.com/maps?q=${coordinates.lat},${coordinates.lng}&output=embed`;

  const mapIframe = document.getElementById("mapIframe");
  mapIframe.src = mapUrl;
}

// Cargar el mapa cuando el documento se haya cargado
document.addEventListener("DOMContentLoaded", loadMap);
