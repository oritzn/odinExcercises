function createDivs(pi, pn) {
    const container = document.querySelector("#containerGrid");

    for(let i = 1; i <= pi; i++) {
        for(let n = 1; n <= pn; n++) {

            document.querySelector("#containerGrid").style.width = 15 * pn + "px";
            document.querySelector("#containerGrid").style.height = 15 * pi + "px";

            const elem = document.createElement("div");
            elem.classList.add("elem");
            elem.id = i + "_" + n;
            container.append(elem);


            elem.addEventListener("mouseenter", (event) => {
                const el = event.target;

                if (!el.dataset.alpha) {
                    el.dataset.alpha = 0.2;
                    el.dataset.r = Math.floor(Math.random() * 256);
                    el.dataset.g = Math.floor(Math.random() * 256);
                    el.dataset.b = Math.floor(Math.random() * 256);
                } else {
                    el.dataset.alpha = Math.min(parseFloat(el.dataset.alpha) + 0.1, 1);
                }

                const color = `rgba(${el.dataset.r}, ${el.dataset.g}, ${el.dataset.b}, ${el.dataset.alpha})`;
                el.style.backgroundColor = color;
            });

        }
    }
}


function changeGridSize() {
    const newSize = prompt("Enter new grid size (Seperated by a x)");
    
    const rows = newSize.split("x")[0];
    const cols = newSize.split("x")[1];

    const container = document.querySelector("#containerGrid");
    container.innerHTML = "";
    alert("New grid size: " + rows + " x " + cols);
    createDivs(rows, cols);
}

