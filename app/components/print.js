const container = document.querySelector("#container"); //se trae el div container para meter toda la informacion filtrada

export const printBreeds = (param) => {  //esta funcion imprime mediante un bucle los elementos que nos llegan en (param)
    container.innerHTML = "";
    param.forEach(breed => {
        const printBreed = document.createElement("div"); //creamos un div contenedor por cada breed
        printBreed.classList.add("breed");
         printBreed.innerHTML = `
            <div class="name">
                <h2>${breed.name}</h2>
            </div>
            <div class="dog-info">
                <div class="image">
                    <img src="${breed.image}" alt="picture of a ${breed.name}"/>
                </div>
                <div class="details">
                    <p><strong>Daily excercice:</strong> ${breed.excercice}</p>
                    <p><strong>Personality:</strong> ${breed.personality}</p>
                    <p>${breed.description}</p>
                </div>
            </div>
         `; 
         container.appendChild(printBreed); // le anadimos al padre dinamicamente.
     });
     if (container.innerHTML == ""){
        container.innerHTML = "<div class='empty-result'>Please, use the filter above to search your perfect doggy</div>"
     };
}
