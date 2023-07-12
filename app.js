"use strict";

const GIPHY_URL = "http://api.giphy.com/v1/gifs/search";
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

"http://api.giphy.com/v1/gifs/search"
"?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"

const $input = $("#input");
const $gifContainer = $("#container");

$("#form")
const $submitButton = $("#submit-button");





/** get results from giphy */

async function getGiphyImages() {
const searchTerm = $input.val(); //change to function results

  let giphyResults = await axios.get(
    GIPHY_URL, { params: {q: searchTerm, api_key: API_KEY}}
    );

  return giphyResults;
  //returns object with data property containing ~50 gifs; make
  //function to access random gif (0-49)
}

function pickRandomGifIndex() {
  const randomIndex = (Math.floor(Math.random() * 50));
  return randomIndex;
  //eventually giphyResults.data[randomIndex];
}







/** on submit, get info and add to ??? */

async function getSubmitInfo(evt) {
  evt.preventDefault();

  const urls = getGiphyImages();

  addImage(urls);
}

/** add image to site */

// function addImage() {

// }