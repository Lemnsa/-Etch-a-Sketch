const divContainers = document.getElementById("container");

const button = document.querySelector("button");

button.addEventListener("click", function () {
    divContainers.innerText = '';
    let numberOfDivsByUser = Number(prompt("Enter the number Of Squares"));

if (numberOfDivsByUser > 100) {
    alert("Enter a Number not greater than 100!");
}
else{
    let appendDiv = (container) => {
    const div = document.createElement("div");
    div.setAttribute("style", `flex: 1 0 calc(100% / ${numberOfDivsByUser}); height: calc(100% / ${numberOfDivsByUser}`);
    return container.appendChild(div);
}

let numberOfSquares = numberOfDivsByUser * numberOfDivsByUser;

    for(let i = 0; i < numberOfSquares; i++) {

        appendDiv(divContainers);
    }
}

})

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