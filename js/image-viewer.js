const heroImage = document.getElementById("hero-image")
// // // version 1
// // // get a reference to the cat link using the DOM method
// // const catLink = document.getElementById("cat")
// // // listen for click event 
// // catLink.addEventListener("click", showCatImage)
// // // execute this function on click
// // function showCatImage(){
// //     // change the src of the hero image to cat
// //     heroImage.src ="images/cat.jpg"
// // }
// // // as above...
// // const dogLink = document.getElementById("dog")
// // dogLink.addEventListener("click", showDogImage)
// // function showDogImage(){
// //     heroImage.src ="images/dog.jpg"
// // }
// // const guineaLink = document.getElementById("piggy")
// // guineaLink.addEventListener("click", showPiggyImage)
// // function showPiggyImage(){
// //     heroImage.src ="images/guinea-pig.jpg"
// // }
// // const hamsterLink = document.getElementById("Hamster")
// // hamsterLink.addEventListener("click", showHamsterImage)
// // function showHamsterImage(){
// //     heroImage.src ="images/hamster.jpg"
// // }
// // const rabbitLink = document.getElementById("rabbit")
// // rabbitLink.addEventListener("click", showRabbitImage)
// // function showRabbitImage(){
// //     heroImage.src ="images/rabbit.jpg"
// // }

// // version 2 
// const menuLinks = document.getElementsByClassName("menu-item")
// for(let i = 0; i< menuLinks.length;i++){
//     let animal = menuLinks[i].children[0].innerHTML
//     menuLinks[i].addEventListener("click", function(event){
//         handleClick(animal)
//     })
// }
// function handleClick(animal){
//     if(animal == "Cat"){
//         heroImage.src ="images/cat.jpg"
//     }else if(animal == "Dog"){
//         heroImage.src ="images/dog.jpg"
//     }else if (animal == "Guinea Pig"){
//         heroImage.src ="images/guinea-pig.jpg"
//     }else if(animal == "Hamster"){
//         heroImage.src ="images/hamster.jpg"
//     }else{ heroImage.src ="images/rabbit.jpg"}
// }

// version 3
const imagePaths =["images/cat.jpg", "images/dog.jpg","images/guinea-pig.jpg","images/hamster.jpg", "images/rabbit.jpg"]
const menuLinks = document.getElementsByClassName("menu-item")
for(let i =0; i<menuLinks.length; i++){
    menuLinks[i].addEventListener("click", function(){
        heroImage.src = imagePaths[i]
    })
}