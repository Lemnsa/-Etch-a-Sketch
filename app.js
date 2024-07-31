const divContainers = document.getElementById("container");

let appendDiv = (container) => {
    const div = document.createElement("div");
    div.setAttribute("style", "flex: 1 0 calc(100% / 16); height: calc(100% / 16");
    return container.appendChild(div);
}

for(let i = 0; i < 256; i++) {

        appendDiv(divContainers);
}

let colorDiv = (div) => {
    const colors = ["green","yellow","red","blue"];
    let randomIndex = Math.floor(Math.random() * colors.length);
    let coloredDiv = div.setAttribute("style", `background-color: ${colors[randomIndex]}`);
    return coloredDiv;
}