export class Ui {
  constructor(m) {}

  displayGameCard(gamesList, cardsContainer) {
    let container = ``;
    for (let index = 0; index < gamesList.length; index++) {
      container += `<div class="game-item col-md-6 col-lg-4 col-xl-3 mt-4 rounded-2">
                        <div class="game-card rounded-2 d-flex flex-column justify-content-between align-items-center">
                            <div class="game-data p-3">
                                <img src="${gamesList[index].thumbnail}" class="game-img w-100" alt="">
                                <div class="name-badge mt-3 d-flex align-items-center justify-content-between">
                                    <h3 class="game-name">${gamesList[index].title}</h3>
                                    <span class="badge text-bg-primary fs-6">Free</span>  
                                </div>


                                <div class="brief-container">
                                    <p class="game-brief mt-3 text-center">${gamesList[index].short_description}</p>
                                </div>
                                
                            </div>
                            
                            <div class="card-footer w-100">
                                <div class="line"></div>
                                <div class="cat-plat d-flex justify-content-between p-2">
                                    <span class="badge game-category text-bg-secondary">${gamesList[index].genre}</span>
                                    <span class="badge game-platform text-bg-secondary">${gamesList[index].platform}</span>
                                </div>  
                            </div>
                        </div>
                    </div>`;
    }

    cardsContainer.innerHTML = container;
  }

  displayGameDetails(gameData, detailsContainer) {
    console.log(gameData);
    
    let container = `
                        <div class="game-img-container">
                            <img class="game-img" src="${gameData.thumbnail}" class="w-100" alt="">
                        </div>
                    

                   
                        <div class="game-info">
                            <h3>Title: <span class="game-name">${gameData.title}</span></h3>
                            <p>Category : <span class="badge text-bg-primary game-category">${gameData.genre}</span></p>
                            <p>Platform : <span class="badge text-bg-primary game-platform">${gameData.platform}</span></p>
                            <p>Status : <span class="badge text-bg-primary game-status">${gameData.status}</span></p>
                            <p class="game-description">${gameData.description}</p>
                            <a class="game-link" href="${gameData.game_url}"><button class="btn btn-outline-warning text-white">Show Game</button></a>
                        </div>
                    `;
    
    detailsContainer.innerHTML = container; 
  }

  displayLoadingScreen(loadingScreen){
    loadingScreen.classList.remove("d-none");
  }

  hideLoadingScreen(loadingScreen){
    loadingScreen.classList.add("d-none");
  }
}
