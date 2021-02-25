
// food search start
const search = document.getElementById('search-input');
const submit = document.getElementById('submit');
const mealElement = document.getElementById('meal');
const resultFood = document.getElementById('resutl-food');


// searchMeal
function searchMeal(e){
    e.preventDefault();

    // get search Meal
    const term = search.value;

    // check for Empty
    if(term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}
        `)
        .then(res => res.json())
        .then(data => console.log(data))
    }
}


// event listerners 
submit.addEventListener('submit', searchMeal);

// food search end


    // allFood event handler start
    allEventHandler('vegan-inner', 'vegan-details')
    allEventHandler('sandwich-inner', 'sandwich-details')
    allEventHandler('momo-inner', 'momo-details')
    allEventHandler('noodles-inner', 'noodles-details')
    allEventHandler('avocado-inner', 'avocado-details')
    allEventHandler('cabbage-inner', 'cabbage-details')
    allEventHandler('carrot-inner', 'carrot-details')
    allEventHandler('mozzarella-inner', 'mozzarella-details')


    function allEventHandler(foodInner,  foodDetails){
        let allInner = document.getElementById(foodInner) ;
        allInner.addEventListener('click', function(){
            const allFood = document.getElementById('vegan-food');
            allFood.style.display='none';
            const allDetails = document.getElementById(foodDetails);
            allDetails.style.display='block'

        })
    }
     // allFood event handler end