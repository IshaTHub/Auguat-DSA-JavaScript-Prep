document.querySelector('#grandparent')
.addEventListener('click', () => {
    console.log("grandparent clicked");
},false)

document.querySelector('#parent')
.addEventListener('click', (e) => {
    console.log("parent clicked");
    e.stopPropagation();
},false)

document.querySelector('#child')
.addEventListener('click', () => {
    console.log("child clicked");
},false)