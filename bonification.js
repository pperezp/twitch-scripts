function bonification() {
    setInterval(function () {
        let divs = document.getElementsByTagName("div");
        let searchText = "¡Haz clic para hacerte con una bonificación!";
        let found;

        for (let i = 0; i < divs.length; i++) {
            if (divs[i].textContent == searchText) {
                console.log("Encontrado " + new Date());
                found = divs[i];
                found.children[0].children[0].children[0].children[0].click();
                break;
            }
        }

        if(found === undefined){
            console.log("No encontrado " + new Date());
        }
    }, (1000 * 60));
}
   
bonification();