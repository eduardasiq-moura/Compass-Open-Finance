
const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green', 'Orange', 'Pink']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

//ação do click
btn.addEventListener('click', function(){
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]
    color.textContent = colors[randomColor]
})
//Gera os numeros randomicos
function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}