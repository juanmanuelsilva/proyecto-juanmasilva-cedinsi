'use strict';

const navPlaceholder = document.getElementById('nav-placeholder');

const navBar = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="imagenes/logo-jms-fondo-transp.png" alt="logo Juan M Silva"
                width="50px"></a> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sobre.html">Acerca de mí</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="experiencia.html">Experiencia</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contacto.html">Contáctame</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="usuarios.html">Area Miembros</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
`;

navPlaceholder.innerHTML = navBar;
