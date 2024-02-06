const clock = document.getElementById('clock');
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleString();
}, 1000);

// setInterval(function(){
//     let date = new Date();
//     clock.innerHTML = date.toLocaleString();
// }, 1000);