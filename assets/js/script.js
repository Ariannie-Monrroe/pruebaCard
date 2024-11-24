// variables
const precioInicial = document.querySelector("#precioInicial")
const cantidad = document.querySelector("#cantidad")
const total = document.querySelector("#total")

// botones
const menos = document.querySelector("#menos")
const mas = document.querySelector("#mas")

// funcionalidad de botones
mas.addEventListener('click', () => {
    cantidad.innerHTML++
    total.innerHTML= (precioInicial.innerHTML*cantidad.innerHTML).toLocaleString()
})

menos.addEventListener('click', () => {
    cantidad.innerHTML--
    total.innerHTML= (precioInicial.innerHTML*cantidad.innerHTML).toLocaleString()
})
