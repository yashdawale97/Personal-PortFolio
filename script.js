const search=document.querySelector('.search');
const input=document.querySelector('.input');
const btn=document.querySelector('.btn');

btn.addEventListener('click',() =>{
    search.classList.toggle('active');
    input.focus();
})


// let slideIndex = 1;
// showSlides(slideIndex)

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }
// var form=document.getElementById('addform');
// var itemList=document.getElementById('items');
// var filter=document.getElementById('filter');

// // form submit event
// form.addEventListener('submit',additem);

// //Delete event
// itemList.addEventListener('click', removeitem);

// //filter event
// filter.addEventListener('keyup',filteritems);

// // Add item function
// function additem(e){
//     e.preventDefault();

//     var newitem=document.getElementById('name').value;

//     // create new list Element
//     var li=document.createElement('li');
//     // add class name
//     li.className='list-grp';
//     //Add text node with input value
//     li.appendChild(document.createTextNode(newitem));

//     // create delete Button for input value
//     var deletebtn= document.createElement('button');

//     // Add class name
//     deletebtn.className='deleteit';

//     // Enter text inside button 
//     deletebtn.appendChild(document.createTextNode('X'));

//     li.appendChild(deletebtn);

    
//     itemList.appendChild(li);
// }
// function removeitem(e){
//     if(e.target.classList.contains('deleteit')){
//         if(confirm("Are you sure ?")){
//             var li =e.target.parentElement;
//             itemList.removeChild(li);
//         }
//     }
// }

// function filteritems(e){
//     //convert into lowercase
//     var text= e.target.value.tolowerCase();
//     //Get List
//     var items = itemList.getElementsByTagName('li');
//     //convert into array
//     Array.from(items).forEach(function(name){
//         var itemName = items.firstChild.textContent;
//         if(itemName.toLowerCase().indexOf(text) != -1){
//             item.style.display='block';
//         }else{
//             item.style.display='none';
//         }
//     });
// }

// const panels=document.querySelectorAll('.panel')

// panels.forEach(panel =>{
//     panel.addEventListener('click',()=>{
//         removeActiveClasses()
//         panel.classList.add('active')
//     })
// })
// function removeActiveClasses(){
//     panels.forEach(panel =>{
//         panel.classList.remove('active')
//     })
// }

const jokeEL=document.querySelector('#joke');
const jokebtn=document.querySelector('#jokebtn');

jokebtn.addEventListener('click',generated)
generated()
 
 async function generated(){
    const config={
        headers:{
            Accept:'application/json',
        },
    }
    const res= await fetch('https://icanhazdadjoke.com',config)
    const data= await res.json()
    jokeEL.innerHTML=data.joke;
    
}

