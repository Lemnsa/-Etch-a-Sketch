const divContainers = document.getElementById("container");

let appendDiv = (container) => {
    const div = document.createElement("div");
    return container.appendChild(div);
}

for(let i = 0; i < 256; i++) {

        appendDiv(divContainers);
}