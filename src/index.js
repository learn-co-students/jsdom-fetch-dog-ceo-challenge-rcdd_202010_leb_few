const letter = event.target.value

  // filter the array
  const filteredBreeds = breedList.filter(function(breed) {
    return breed.startsWith(letter)
  })
  const filteredBreeds = breedList.filter((breed) => breed.startsWith(letter))

  // (also, clear the list)
  dogList.innerHTML = ''

  // use that list to display
  filteredBreeds.forEach(function(breed) {
    renderBreed(breed)
  })

  console.log(filteredBreeds)

  // iterate over all the list items
  // dogList.querySelectorAll("li").forEach(li => {
  //   // check if it starts with the letter
  //   if (!li.textContent.startsWith(letter)) {
  //     // hide it!
  //     li.style.display = "none"
  //   } else {
  //     li.style.display = ""
  //   }
  // })
  filteredBreeds.forEach((breed) => renderBreed(breed) )
})

// find the closest parent

dogList.addEventListener("click", event => {
  }
})

function renderImage(imageUrl) {
const renderImage = (imageUrl) => {
  const img = document.createElement("img")
  img.src = imageUrl
  const imageContainer = document.querySelector("#dog-image-container")
  imageContainer.append(img)
}

function renderAllImages(data) {
const renderAllImages = (data) => {
  // when we have the data
  const images = data.message

 function renderAllImages(data) {
  })
}

function loadImages() {
const loadImages = () => {
  // when the page loads
  // make a GET request
  fetch("https://dog.ceo/api/breeds/image/random/4")
 function loadImages() {
}


function renderBreed(breed) {
const renderBreed = (breed) => {
  const li = document.createElement("li")
  li.textContent = breed
  dogList.append(li)
  let content = `<li>${breed}</li>` 
  dogList.insertAdjacentHTML("afterbegin", content)
}

function loadBreeds() {
const loadBreeds = () => {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
      // Object.keys
      // for..in
      breedList = Object.keys(data.message)
      breedList.forEach(breed => {
        renderBreed(breed)
      })
    })
}
loadBreeds()
loadImages()
