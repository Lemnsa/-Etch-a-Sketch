const divContainers = document.getElementById("container");

let appendDiv = (container) => {
    const div = document.createElement("div");
    div.setAttribute("style", "flex: 1 0 calc(100% / 16); height: calc(100% / 16");
    return container.appendChild(div);
}

for(let i = 0; i < 256; i++) {

        appendDiv(divContainers);
}

function getRandomColor() {
    const colors = ["green","yellow","red","blue"];
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}



divContainers.addEventListener("mouseout", (e) => {
    const activeDiv = e.target;
    if (activeDiv.id !== 'container') {
        activeDiv.style.backgroundColor = `${getRandomColor()}`;
    }
}); 