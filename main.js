var cells = document.querySelectorAll('[data-cell'); //I want all the elements with data-cell attribute

// for (let i = 0; i < cells.length; i++) {
//     cell[i];
// }


// this will give each element an event listener
cells.forEach((cell, i) => {
    cell.addEventListener("click", handleclick, {
        once: true
    })
});

// var red =0;
// var blue =0;


var choice = false;
let counter = 0;

function handleclick(e) {
    //change the value in that cell
    counter++;
    let cell = e.target;
    // console.log(cell);
    // console.log(e);
    // cell.style.background = "red";
    if (choice) {
        cell.style.backgroundImage = "url('./x-png-15.png')";
        cell.style.backgroundSize = "cover";
    } else {
        cell.style.backgroundImage = "url('./o-blue.png')";
        cell.style.backgroundSize = "cover";
    }
    console.log(counter);
    check("red");
    check("blue");
    choice = !choice;

}

let win = false;

function check(pick) {

    if (
        cells[0].style.background === pick &&
        cells[1].style.background === pick &&
        cells[2].style.background === pick
    ) {
        alert(pick + " is the winner");
        return;
    } else if (
        cells[3].style.background === pick &&
        cells[4].style.background === pick &&
        cells[5].style.background === pick
    ) {
        alert(pick + " is the winner");
        return;
    } else if (
        cells[6].style.background === pick &&
        cells[7].style.background === pick &&
        cells[8].style.background === pick
    ) {
        alert(pick + " is the winner");
        return;
    } else if (
        cells[0].style.background === pick &&
        cells[3].style.background === pick &&
        cells[6].style.background === pick
    ) {
        alert(pick + " is the winner");
        return;
    } else if (
        cells[1].style.background === pick &&
        cells[4].style.background === pick &&
        cells[7].style.background === pick
    ) {
        alert(pick + " is the winner");
        return;
    } else if (
        cells[2].style.background === pick &&
        cells[5].style.background === pick &&
        cells[8].style.background === pick
    ) {
        alert(pick + " is the winner");
        return;
    } else if (
        cells[0].style.background === pick &&
        cells[4].style.background === pick &&
        cells[8].style.background === pick
    ) {
        alert(pick + " is the winner");
        return;
    } else if (
        cells[2].style.background === "red" &&
        cells[4].style.background === "red" &&
        cells[6].style.background === "red"
    ) {
        alert(pick + " is the winner");
        return;
    } else if (counter >= 9) {
        alert("It's a draw");
    }
}

// window.reload();

function clean() {
    window.location.reload()
}