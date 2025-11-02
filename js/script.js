console.log("script.js loaded");

async function getGif() {
  const searchInput = document.querySelector("#search-input"); //Get the input field

  const searchTerm = searchInput.value; //Get the value from the input field

  //Update the endpoint with the search term
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=h0ZNqgdqFrKxlgItueQRwqslfTq0lSEU&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`;
  
  const response = await fetch(endpoint);
  const data = await response.json();

  //Make an empty array to store image URLs
  const images_url = [];

  //Loop through each GIF 
  for (let i = 0; i < data.data.length; i++) {
    const gif = data.data[i];
    const url = gif.images.original.url; //Get the url of the original image
    images_url.push(url); //Add the url to the array
  }

  const gifContainer = document.querySelector("#gif-container");

  for (let i = 0; i < images_url.length; i++) {
      gifContainer.innerHTML += `<img src="${images_url[i]}" class = "col-3 mb-3" alt="gif image">`;
    }
}

const button = document.querySelector("#fetch-gif-btn");
button.addEventListener("click", getGif); 