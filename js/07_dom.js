// DOM Access Methods

let title = document.getElementById("title");
let desc = document.getElementsByClassName("description");
let span = document.getElementsByTagName("span");
let cont = document.querySelector(".container");

// DOM Methods
let newElement = document.createElement("p");
newElement.innerText = "New Element";

let subHeading = document.createElement("h3");
subHeading.innerText = "Subheading";

cont.appendChild(newElement);
cont.insertBefore(subHeading, newElement);
span[0].replaceWith(document.createElement("hr"));
// span[0].remove();

//DOM Properties
title.innerText = "Updated DOM Heading";
title.classList.add("highlight");

newElement.innerHTML = "<b>New Element Added</b>";
newElement.id = "box-1";

let descr = document.querySelector(".description")
descr.style.color = "blue";
