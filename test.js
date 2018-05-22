console.log("Just a second ...");
setTimeout(function(){
    setInterval(function(){
        document.querySelector("h1").style.color = "#00dd00";
        document.querySelector("h1").style.top = "200px";
    },3000);
},1500);

setInterval(function(){
    document.querySelector("h1").style.color = "#B22222"
    document.querySelector("h1").style.top = "200px";
},3000);

  