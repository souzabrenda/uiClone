const Eat = document.querySelector('#eat')
const Drink = document.querySelector('#drink')
const ButtonEat = document.querySelector('#eatbtn')
const ButtonDrink = document.querySelector('#drinkbtn')

const currentTab = 0

ButtonEat.addEventListener('click', (event) => {
   Eat.classList.remove('menu-list-hiden')
   ButtonEat.classList.add('active')
   Drink.classList.add('menu-list-hiden')
   ButtonDrink.classList.remove('active')


})

ButtonDrink.addEventListener('click', (event) => {
  Eat.classList.add('menu-list-hiden')
  ButtonEat.classList.remove('active')
  Drink.classList.remove('menu-list-hiden')
  ButtonDrink.classList.add('active')
})