console.log("script.js loaded");

const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=h0ZNqgdqFrKxlgItueQRwqslfTq0lSEU&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

async function getGif() {
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
  console.log(images_url);
  // Update the DOM with the dog fact
  //const output = document.getElementById("gif"); 
  //output.src = images_url;
}

//const button = document.getElementById('fetch-gif-btn');
//button.addEventListener('click', function() {
  //  getGif();
//});
getGif();