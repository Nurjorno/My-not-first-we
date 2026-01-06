const h = document.querySelector('.h1')
const p = document.querySelector('.p')

h.addEventListener('click', (event) => {
    function sayHello() {
   p.textContent = 'Вы нажали на кнопку! Привет!'
   setTimeout(() => {
    p.textContent = 'Это мой не первый сайт'
   }, 2000)
   

   
}
sayHello()
})


