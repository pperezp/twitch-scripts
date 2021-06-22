let bonificationThread;
let pointsThread;
let oldPoints;
let totalEarnedScore = 0;

function startBonificationBot() {
    console.clear();
    bonificationBot();
    bonificationThread = setInterval(bonificationBot, (1000 * 60));
}

function bonificationBot(){
    let divs = document.getElementsByTagName("div");
    let searchText = "¡Haz clic para hacerte con una bonificación!";
    let found;

    for (let i = 0; i < divs.length; i++) {
        if (divs[i].textContent == searchText) {
            found = divs[i];
            found.children[0].children[0].children[0].children[0].click();
            break;
        }
    }
}

function getBalancePoints(){
    for(let div of document.getElementsByTagName("div")){
        if(div.dataset.testSelector != undefined && div.dataset.testSelector == "balance-string"){
            return Number.parseInt(div.children[0].innerHTML);
        }
    }
}

function startPointsThread(){
    oldPoints = getBalancePoints();

    console.log("Current Points: " + oldPoints);

    pointsThread = setInterval(function() {
        let currentPoints = getBalancePoints();

        if(currentPoints != oldPoints){
            let differencePoints = currentPoints - oldPoints;
            console.log("Points has changed: " + " From " + oldPoints + " to " + currentPoints + " (+" + differencePoints + ")");
            oldPoints = currentPoints;
            accumalateScore(differencePoints);
            console.log("Total Earned Score: " + totalEarnedScore);
        }
    }, (1000));
}

function accumalateScore(score){
    totalEarnedScore += score;
}

function stopInterval(){
    clearInterval(bonificationThread);
    console.log("bonificationThread stoped");
    clearInterval(pointsThread);
    console.log("pointsThread stoped");
}

startBonificationBot();
startPointsThread();