console.log("Hello world!");

const date = document.querySelector('#date')

date.addEventListener('click', function(){
    let date1 = new Date();
    date.innerHTML = date1.toLocaleString()

});
