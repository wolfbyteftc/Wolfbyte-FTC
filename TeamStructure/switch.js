const startbutton = document.getElementById("startbutton")
let count = 1;

let currentelem

const nextbuttons = document.getElementsByClassName("nextbuton")

for (let i = 0; i < nextbuttons.length; i++) {
    nextbuttons[i].onclick = nextbuttonthings
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function returnslideforcount(count) {
    if (count == 1) {
        return "Hardware";
    } else if (count == 2) {
        return "Robot-Design";
    } else if (count == 3) {
        return "Journal"
    } else if (count == 4) {
        return "Software"
    } else if (count == 5) {
        return "Logistics"
    } else if (count == 6) {
        return "Outreach"
    } else {
        console.warn("Too high count")
    }
}

async function switchslide(newslidename) {
    if (currentelem) {
        currentelem.style.opacity = "0%"
        await wait(1000)
        currentelem.style.display = "none"
    }
    
    currentelem = document.getElementById(newslidename);
    currentelem.style.display = "flex"
    await wait(10)
    currentelem.style.opacity = "100%"
}

function nextbuttonthings() {
    count = count + 1;
    if (count > 6) {
        count = 1
    }

    switchslide(returnslideforcount(count))
}

startbutton.onclick = async function () {
    startbutton.style.opacity = "0%";
    await wait(1000);
    startbutton.style.display = "none";
    currentelem = document.getElementById(returnslideforcount(count));
    currentelem.style.display = "flex";
    await wait(10);
    currentelem.style.opacity = "100%";
};