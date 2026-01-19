const form = document.getElementById('formRegistro');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const btn = document.getElementById('btnEnviar');
const msgNombre = document.getElementById('msgNombre');
const msgEmail = document.getElementById('msgEmail');
const exito = document.getElementById('exito');

function chequearTodo() {
  const nom = nombre.value.trim();
  const em = email.value.trim();
  
  let okNombre = false;
  let okEmail = false;

  // Nombre
  if (nom.length === 0) {
    msgNombre.textContent = "El nombre es obligatorio";
    nombre.className = 'mal';
  } else if (nom.length < 3) {
    msgNombre.textContent = "Mínimo 3 caracteres";
    nombre.className = 'mal';
  } else {
    msgNombre.textContent = "";
    nombre.className = 'bien';
    okNombre = true;
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (em.length === 0) {
    msgEmail.textContent = "El correo es obligatorio";
    email.className = 'mal';
  } else if (!emailRegex.test(em)) {
    msgEmail.textContent = "Correo no válido";
    email.className = 'mal';
  } else {
    msgEmail.textContent = "";
    email.className = 'bien';
    okEmail = true;
  }

  btn.disabled = !(okNombre && okEmail);
}

nombre.addEventListener('input', chequearTodo);
email.addEventListener('input', chequearTodo);

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!btn.disabled) {
    exito.classList.remove('oculto');
    setTimeout(() => {
      form.reset();
      exito.classList.add('oculto');
      nombre.className = '';
      email.className = '';
      btn.disabled = true;
      msgNombre.textContent = "";
      msgEmail.textContent = "";
    }, 2200);
  }
});
