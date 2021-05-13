// obteniendo elementos por su id
const cards = document.getElementById('cards')
// obteniendo templates
const templateCard = document.getElementById('template-card').content

const fragment = document.createDocumentFragment()
// eventos
// capturar los datos
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
}) 
cards.addEventListener('click', e => {
    addCarrito(e)
})
// consumiendo la api.json
const fetchData = async () => {
    try {
        const res = await fetch('./assets/api.json') 
        const data = await res.json()
        pintarCards(data)
    } 
    catch (error) {
        console.log(error);
    }
}
// pintar catalogo
const pintarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute('src', producto.thumbnailUrl)
        templateCard.querySelector('.btn-dark').dataset.id = producto.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
 })
 cards.appendChild(fragment)
}
const addCarrito = e => {
    if((e.target.classList.contains('btn-dark'))) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}