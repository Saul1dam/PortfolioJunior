/* Formulario*/

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nombre = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensaje = document.getElementById('message').value.trim();
    const nombreError = document.querySelector('#name');
    const emailError = document.querySelector('#email');
    const mensajeError = document.querySelector('#message');

    
    if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, rellene todos los campos del formulario.');
      if (nombre === ''){        
        nombreError.classList.add("error");
      } else {
        nombreError.classList.remove("error");
      } 
      if (email === ''){        
        emailError.classList.add("error");
      } else {
        emailError.classList.remove("error");
      }
      if (mensaje === ''){        
        mensajeError.classList.add("error");
      } else {
        mensajeError.classList.remove("error");
      }
    } else {
      alert('Los datos se han enviado correctamente.');
      nombreError.classList.remove("error");
      emailError.classList.remove("error");
      mensajeError.classList.remove("error");
    }
    

  });