/* USERNAME

el nombre de usuario tiene que ser un email (explora validaciónes REGEX en internet!).
el nombre de usuario no puede estar vacío.
el nombre de usuario no puede tener más de 35 caracteres.
PASSWORD

la contraseña tiene que tener al menos un número.
la contraseña tiene que tener una longitud entre 6 y 10 caracteres. */
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate({ username, password }) {
  const errors = {};
  let cantNumeros = 0;
  password?.split("").forEach((element) => {
    if (!isNaN(parseInt(element))) cantNumeros++;
  });
  //errors.name = !name ? "Se requiere un nombre" : errors.name;
  /* console.log(username)
console.log(password) */
  if (username.length > 35)
    errors.username = "El usuario no puede superar los 35 caracteres";
  if (!regexEmail.test(username))
    errors.username = "El usuario debe ser un correo electrónico correcto";
  if (password.length < 6 || password.length > 10)
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  if (cantNumeros === 0)
    errors.password = "La contraseña debe tener al menos un numero";
  if (!password) errors.password = "Se requiere una contraseña";
  if (!username) errors.username = "Se requiere un usuario";
  return errors;
}
