const divContainers = document.getElementById("container");

const numberOfDivsByUser = Number(prompt("Enter the number Of Squares"));

if (numberOfDivsByUser > 100) {
    alert("Enter a Number not greater than 100!");
}
else{
    const numberOfRowsAndColumns = Math.sqrt(numberOfDivsByUser);
    const rounded = Math.ceil(numberOfRowsAndColumns);

    console.log(rounded);
    let appendDiv = (container) => {
    const div = document.createElement("div");
    div.setAttribute("style", `flex: 1 0 calc(100% / ${rounded}); height: calc(100% / ${rounded}`);
    return container.appendChild(div);
}

    for(let i = 0; i < numberOfDivsByUser; i++) {

        appendDiv(divContainers);
    }
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