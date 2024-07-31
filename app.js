const divContainers = document.getElementById("container");

let appendDiv = (container) => {
    const div = document.createElement("div");
    div.setAttribute("style", "flex: 1 0 calc(100% / 16); height: calc(100% / 16");
    return container.appendChild(div);
}

for(let i = 0; i < 256; i++) {

        appendDiv(divContainers);
}