// let input = document.querySelector("input");
// input.addEventListener('input', ()=>{
//     window.open(`https://${input.value}.com`);
// })

// let select = document.querySelector("#stinet");
// let p = document.querySelector("p");
// select.addEventListener("change", ()=>{
//     p.innerHTML = `Keni selektuar: ${select.value}`;
// })

const buttonElem = document.querySelector("#button");

buttonElem.addEventListener("click", ()=>{
    const oldText = buttonElem.innerHTML;
    return buttonElem.innerHTML = oldText === "ON" ? "OFF" : "ON";
})