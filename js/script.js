//Aquí tu código

function rickAndMorty (pagina){
const characterList=document.getElementById ("character-list");
characterList.innerHTML=""
fetch("https://rickandmortyapi.com/api/character/?page="+ pagina)
  .then((response)=>response.json()) //respuesta del servidor 
  .then((data)=>{
    console.log(data)
    console.log(data.results)
    
    data.results.forEach((elements) => {
      const nuevoContenedorJs =document.createElement("div") //creo un nuevo contenedor donde voy a meter todos esos datos api 
      nuevoContenedorJs.classList.add ("nuevoDiv")
      //añado imagen, name y species
      nuevoContenedorJs.innerHTML= `  
       <img src="${elements.image}">
       <h4><span class="bold">Name:</span> ${elements.name}</h4>
       <h4><span class="bold">Species:</span>${elements.species}</h4>
     `; 
      characterList.appendChild(nuevoContenedorJs);
    });
  });
}



//paginación
const prevPageButton=document.getElementById ("prev-page");
const nextPageButton=document.getElementById ("next-page");

let paginaActual=0;

	// Incrementar "paginaActual"
function avanzarPagina() {
	paginaActual = paginaActual + 1;
  rickAndMorty(paginaActual)
}
   
function retrocederPagina() {   // Disminuye "paginaActual"
  paginaActual = paginaActual - 1; 
  if (paginaActual === 1) {    //quitar la opción una vez que esta en pag 1 que siga hacia atrás
    prevPageButton.setAttribute("disabled", true);
      } else {
      prevPageButton.removeAttribute("disabled");
      }
  rickAndMorty(paginaActual)
}
  prevPageButton.addEventListener("click", retrocederPagina);
  nextPageButton.addEventListener("click", avanzarPagina);

  //.catch (error) maneja el error
  //.finaly

  rickAndMorty(paginaActual) //llamar a la funcion para que me vuelque todo