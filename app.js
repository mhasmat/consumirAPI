// const API_URL = 'https://jsonplaceholder.typicode.com';

const API_URL = 'http://localhost:3000';

const contenedor = document.getElementById('contenedor-peliculas');

const ul = document.createElement('ul');

const HTMLResponse = document.querySelector('#app');

fetch(`${API_URL}/peliculas`)
  .then((response) => response.json())
  .then((peliculas) => {
    peliculas.forEach((pelicula) => {
      const div = document.createElement('div');
      div.classList.add('pelicula');
      div.innerHTML = `
              <img src=${pelicula.img} alt="">
              <h3>Título: ${pelicula.nombre}</h3>
              <p>Director: ${pelicula.director}</p>
              `;

      contenedor.appendChild(div);
    });
  });

HTMLResponse.appendChild(ul);

// const tpl = users.map(
//   (user) => `<li>Nombre: ${user.name} | e-mail: ${user.email}</li>`
// );
// HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
