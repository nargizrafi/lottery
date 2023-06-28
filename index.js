var container = document.querySelector('.container')
var strt = document.querySelector('.start')
var stp = document.querySelector('.stop')
var restrt = document.querySelector('.restart')
var arr = []
strt.onclick=function(){
     var x = setInterval(() =>{
    var counter = Math.floor(Math.random()*(100-1)+1)
     if(arr.includes(counter)==false){
         arr.push(counter)
    var newElement = document.createElement('div')
    newElement.classList.add('circle')
    newElement.innerText=counter
    container.append(newElement)
}}, 1000);
    stp.onclick=function(){
        clearInterval(x)
    }
    }
    restrt.onclick=function(){
        arr=[]
        container.innerText = ''
        var x = setInterval(() =>{
            var counter = Math.floor(Math.random()*(100-1)+1)
             if(arr.includes(counter)==false){
                 arr.push(counter)
            var newElement = document.createElement('div')
            newElement.classList.add('circle')
            newElement.innerText=counter
            container.append(newElement)
        }}, 1000)
        stp.onclick=function(){
            clearInterval(x)
        }
    }