
var ele = document.querySelector('.Dog')                    //selected the div with class .Dog

fetch('https://dog.ceo/api/breed/hound/images')             //fetching all the data of dogs from api
.then((data) => data.json()) 
.then((data1) => data1.message)
.then((data2) => {
    for(var i=0;i<data2.length;i++){
        ele.innerHTML+=`<img class='dog-image' src=${data2[i]}>`         //adding image of each dog to .Dog div
    }
}).catch(function(error) {
    console.log(error);
});