"use strict";

import { Ui } from "./ui.js";
import { Home } from "./home-module.js";
import { Details } from "./details-module.js";

// DOM Elements selection
const gameCardsContainer = document.querySelector(".cards-container");
const gameCategories = Array.from(document.querySelectorAll(".nav-link"));
const loadingScreen = document.querySelector(".loading-screen");
const homeSection = document.querySelector(".home-section");
const detailsSection = document.querySelector(".details-section");
const gameDetails = document.querySelector(".game-details");
const closeDetails = document.querySelector(".close-btn");

// Creating class instances
const uiMethods = new Ui();
const homeObj = new Home();
const detailsObj = new Details();

// Global data array used to help with retrieving the game id
let globalData = [] ;

// API Options
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4885d466d9msheef8e335b43c1d2p18c303jsnf3449a6994e2',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};



// Returns the data of the games according to the category passed to it by fetching this data from the API
async function getGamesByCategory(category) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    
    // Show loading screen before fetching the data
    uiMethods.displayLoadingScreen(loadingScreen);
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        globalData = result; //Update the global data
        uiMethods.displayGameCard(result, gameCardsContainer); // Display game cards after fetching
    } catch (error) {
        console.error(error);
        uiMethods.hideLoadingScreen(loadingScreen);
    }
    finally
    {
        uiMethods.hideLoadingScreen(loadingScreen);
    }   
}


// Returns the data of the game according to the ID passed to it by fetching this data from the API
async function getGameById(id) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    uiMethods.displayLoadingScreen(loadingScreen);
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        uiMethods.displayGameDetails(result, gameDetails);
    } catch (error) {
        console.error(error);
        uiMethods.hideLoadingScreen(loadingScreen);
    }
    finally
    {
        uiMethods.hideLoadingScreen(loadingScreen);
    }   
}

// This event listener is added to the cards container, it handles the retrieving of the game id that the user clicks on so it can be sent to the API
gameCardsContainer.addEventListener('click', async function(event){

    // Ensure the clicked element or its ancestor is a card
    const clickedCard = event.target.closest('.game-item');
    
    
    // If a card was clicked
    if (clickedCard) {
        // Get the list of all cards
        const cards = Array.from(gameCardsContainer.getElementsByClassName('game-item'));

        // Find the index of the clicked card
        const clickedCardIndex = cards.indexOf(clickedCard);

        // Get the game id from the global data
        const gameId = globalData[clickedCardIndex].id

        // Hide home section
        homeObj.hideHomeSection(homeSection);
        // Fetch game details from the API
        await getGameById(gameId);
        // Display details section
        detailsObj.displayDetailsSection(detailsSection);

    }
    
});

// This event listner is attached to the close btn of the details screen to handle the closing of it
closeDetails.addEventListener('click', function() {
    homeObj.displayHomeSection(homeSection);
    detailsObj.hideDetailsSection(detailsSection);
});


// This event listener handles the games category switch from the navbar click
for (let index = 0; index < gameCategories.length; index++) {

    // This event listener handles the color change of a nav link click
    gameCategories[index].addEventListener('click', async function(e){
        for (let index = 0; index < gameCategories.length; index++) {
            gameCategories[index].classList.remove("active");
        }

        gameCategories[index].classList.add("active");
        await getGamesByCategory(gameCategories[index].innerHTML);
    });
}


// App start
getGamesByCategory('mmorpg');











