let interval;
let oldPoints;

function startBotBonification() {
    interval = setInterval(function () {
        let divs = document.getElementsByTagName("div");
        let searchText = "¡Haz clic para hacerte con una bonificación!";
        let found;

        for (let i = 0; i < divs.length; i++) {
            if (divs[i].textContent == searchText) {
                oldPoints = getBalancePoints();
                console.log("Encontrado " + new Date());
                found = divs[i];
                found.children[0].children[0].children[0].children[0].click();

                setTimeout(() => { 
                    let currentPoints = getBalancePoints();
                    console.log("Current points: " + currentPoints + " (+" + (currentPoints - oldPoints) + ")");
                }, 1000);

                break;
            }
        }

        if(found === undefined){
            console.log("No encontrado " + new Date());
        }
    }, (1000 * 60));
}

function getBalancePoints(){
    for(let div of document.getElementsByTagName("div")){
        if(div.dataset.testSelector != undefined && div.dataset.testSelector == "balance-string"){
            return Number.parseInt(div.children[0].innerHTML);
        }
    }
}

function stopInterval(){
    clearInterval(interval);
}

startBotBonification();
