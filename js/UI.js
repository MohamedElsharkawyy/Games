
export class Ui{

    displayGameData(detailGame){
        let box = ``
        for (let i = 0; i < detailGame.length; i++){
            box +=`
            <div class="col">
            <div data-id=${detailGame[i].id} class="card h-100 bg-transparent" role="button">
                <div class="card-body">
                    <figure class="position-relative">
                        <img src="${detailGame[i].thumbnail}" class="card-img-top object-fit-cover h-100">
                    </figure>
                    <figcaption>
                        <div class="hstack justify-content-between">
                            <h6 class="small">${detailGame[i].title}</h6>
                            <span class=" text-bg-info p-1">Free</span>
                        </div>
                        <p class="card-text small text-center opacity-50">
                        ${detailGame[i].short_description.split(" ",8)}
                        </p>
                    </figcaption>
                </div>
                <footer class="card-footer small hstack justify-content-between">
                    <span class="dark">${detailGame[i].genre}</span>
                    <span class="dark">${detailGame[i].platform}</span>
                </footer>
            </div>
        </div>
            `
        }
        document.getElementById("gameData").innerHTML = box;
    }
    displayDetails(detailGame){
        let box=`
        <div class="col-md-4">
                        <img src="${detailGame.thumbnail}" class="w-75" alt="image">
                    </div>
                    <div class="col-md-8">
                        <h3>Title: ${detailGame.title}</h3>
                        <p>Category: <span class="badge text-bg-info"> ${detailGame.genre}</span></p>
                        <p>Platform: <span class="badge text-bg-info"> ${detailGame.platform}</span></p>
                        <p>Status: <span class="badge text-bg-info"> ${detailGame.status}</span></p>
                        <p class="small">${detailGame.description}</p>
                        <a href="${detailGame.game_url}" class="btn btn-outline-info" target="_blank">Show Game</a>`
        document.getElementById("detailsContent").innerHTML = box
    }
}