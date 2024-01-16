import { Ui } from "./UI.js";

export class Details{
    constructor(id) {
    this.Ui = new Ui();
    document.getElementById("btnClose").addEventListener("click", ()=>{
        closeBtn()
    });
    document.addEventListener("keydown", (e)=> {
        if (e.key == "Escape") {
            closeBtn()
        }
      });
      
    this.apiDetails(id);
}
async apiDetails(idGames){
    let loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "03bf45b30amsh83c74de82d65748p12b544jsna6250868db13",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
    };
    let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`,options);
    let result = await response.json();
    this.Ui.displayDetails(result);
    loading.classList.add("d-none");
}

}
function closeBtn() {
    document.querySelector(".games").classList.remove("d-none");
    document.querySelector(".details").classList.add("d-none");
}
