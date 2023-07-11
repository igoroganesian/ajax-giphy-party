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
const searchTerm = "cats"; //change to function results

  let giphyResults = await axios.get(
    GIPHY_URL, { params: {q: searchTerm, api_key: API_KEY}}
    );

  return giphyResults;
}





/** on submit, get info and add to ??? */

function getSubmitInfo() {

  $submitButton.on("click", )
}

/** add image to site */

