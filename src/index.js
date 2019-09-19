// console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
  fetchImages();
  allBreeds();
  filterDogs();
})

function fetchImages(){
  let imageContainer = document.querySelector("#dog-image-container")
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(response => response.json())
  .then(object => {
    let imageURLs = object.message
    for(const imageURL of imageURLs){
      let imageTag = document.createElement("img")
      imageTag.src = imageURL
      imageContainer.appendChild(imageTag)
    }
  })
}

function allBreeds(){
  let dogBreedsContainer = document.querySelector("#dog-breeds")
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(thing => {
    let breeds = Object.keys(thing.message)
    for(const breed of breeds){
      let listTag = document.createElement("li")
      listTag.innerText = breed
      dogBreedsContainer.appendChild(listTag)
        listTag.addEventListener("click", colorChange)
    }
  })
}

  function colorChange(e){
    if(e.target.style.color === "green"){
      e.target.style.color = "black"
    }
    else{
      e.target.style.color = "green"
    }
  }

function filterDogs(){
  document.querySelector("#breed-dropdown").onchange = () => {
    let selectedLetter = document.querySelector("#breed-dropdown").value
    const dogList = document.querySelectorAll("li")
    const ogDogList = [...dogList]
    let dogBreedsCo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Vntainer = document.querySelector("#dog-breeds")
    dogBreedsContainer.innerHTML = ""
    for(const dog of ogDogList){
      if(dog.innerText[0] === selectedLetter){
        dogBreedsContainer.appendChild(dog)
      }
    }
  }
}




// let newDogList = []
// console.log(dogList)
// for(const dog of dogList){
  //   if(dog.innerText[0] === selectedLetter){
    //     newDogList.push(dog)
    //   }
    // }
    // let dogBreedsContainer = document.querySelector("#dog-breeds")
    // dogBreedsContainer.innerHTML = newDogList
