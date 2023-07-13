let buttons = document.querySelectorAll("button");
let view = document.querySelector(".view");
view.innerHTML = ""
buttons.forEach((e, ind) => {
    e.onclick = () => {
        e.value === "ac"
        ? view.innerHTML = ""
        :   e.value === "del"
        ? view.innerHTML = view.innerHTML.slice(0, view.innerHTML.length - 1) 
        :   e.value === "/"
        ? e.classList.add("bg-red-500")
        : view.innerHTML += e.value 
    }
})

console.log(view)