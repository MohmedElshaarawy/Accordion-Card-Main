let down = document.querySelectorAll('.QUY img');
let ask2 = document.querySelectorAll(".QUY P");
let ask = document.querySelectorAll('.QUY span');
let up  = document.querySelectorAll(".QUY i");


down.forEach((arrow , index)=>{
    arrow.addEventListener('click',()=>{
        arrow.classList.toggle('toggleArrow')
    ask2.forEach(down=>{
        ask2[index].classList.toggle('toggle')
        ask.forEach(ask=>{
            ask2[index].classList.toggle('toggleAsk')
            

        })
    })
    })
})