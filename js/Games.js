import { Details } from "./gameDetails.js";
import { Ui } from "./UI.js";

export class Games{
    constructor(){
        this.apiGames("mmorpg")
            document.querySelectorAll(".menu a").forEach((link)=>{
            link.addEventListener('click', (e)=>{
            document.querySelector('.menu .active').classList.remove('active')
            e.target.classList.add('active')
            this.apiGames(e.target.getAttribute('data-category'))
            })
        })
        this.Ui = new Ui()
    }
    async apiGames(Category){
        let loading = document.querySelector('.loading')
        loading.classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '03bf45b30amsh83c74de82d65748p12b544jsna6250868db13',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        };
        let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${Category}`, options);
        let result = await response.json();
        this.Ui.displayGameData(result)
        this.start();
        loading.classList.add('d-none')
    }
    start(){
        document.querySelectorAll('.card').forEach((card)=>{
            card.addEventListener('click', () => {
                let id = card.dataset.id
                this.show(id)
            })
        })
    }

    show(game){
        let details = new Details(game)
        document.querySelector('.games').classList.add('d-none')
        document.querySelector('.details').classList.remove('d-none')
    }
}