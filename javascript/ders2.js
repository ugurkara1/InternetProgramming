//Selectors (Seçiciler) -style özellikleri

//classname,id,tag name

//getElementById: id ye göre elementi yakalar 

// let value;

// const button =document.getElementById("todoAddButton")
// console.log(button)
// console.log(button.getAttribute("id"))
// console.log(button.className)

// console.log(value)
// let elementaByTag=document.querySelectorAll("a");
// console.log(elementaByTag)
// let buttonText=button.textContent; //içerdeki değeri
// let buttontext2=button.innerHTML;  //dışınıda algılar
// console.log(buttontext2)
// console.log(buttonText)

// button.innerHTML="<b> Todo  Ekleyin</b>";


// //?Style özelliğini anlamak
// const todo=document.querySelectorAll(".list-group-item")[0];
// todo.style.color="red"
// todo.style.backgroundColor="purple"
// todo.style.fontWeight="300"
// todo.style.paddingTop="20px"
// todo.style.paddingLeft="70px"
// //console.log(todo)

//!HTML ELEMANLARI ÜZERİNDE GEZİNMEK

// const todo=document.querySelector(".list-group-item")
// const todolist=document.querySelector(".list-group")
// const card=document.querySelector("card")
// value = todolist;
// value = todolist.children
// value = todolist.children[3].textContent="değişti" //metin değişti   
// console.log(value)

// const clearButton=document.querySelector("#todoClearB   utton")
// clearButton.addEventListener("click",function(){
//     alert("merhaba")
// })

// let paragraphs = document.querySelectorAll("p");
// paragraphs.forEach(function(paragraph) {
//     console.log(paragraph.textContent);
// });
