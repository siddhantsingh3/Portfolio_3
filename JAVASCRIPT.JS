const btns = document.querySelectorAll('.buttons button');
const cards = document.querySelectorAll('.porto .card');

//deifne filteCards fi=unction
function filterCards(e){  
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);

    //itrate for each

    cards.forEach(card =>{
        card.classList.add("hide")
        //check if the card name matches
        if(card.dataset.card === e.target.dataset.name || e.target.dataset.name === "all" ){
            card.classList.remove("hide");
        }
    })
}
// add event
btns.forEach(button =>{
    button.addEventListener('click', filterCards);
})


// drag event
