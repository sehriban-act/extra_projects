const container = document.querySelector("container")
const numberShow = document.querySelector("p");
const lowerBtn = document.querySelectorAll("button")[0];
const addBtn = document.querySelectorAll("button")[1];
let n = 0;


lowerBtn.addEventListener('click', (e) => {
        n -= 1;
        numberShow.innerHTML = `${n}`;
        if (n < 0) {
            numberShow.style.color = "red";
        }
    }

)
addBtn.addEventListener('click', (e) => {
        n += 1;
        numberShow.innerHTML = `${n}`;
        if (n > 0) {
            numberShow.style.color = "green";
        }
    }

)


console.log(addBtn.innerText);