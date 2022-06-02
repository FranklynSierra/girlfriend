const yesBtn=document.querySelector("#yes-btn");
yesBtn.addEventListener('click',function(){

    alert('ahora somos novios, te dare lo mejor de mi')
})



const noBtn=document.querySelector('#no-btn')


noBtn.addEventListener('mouseover',function(){

    const randomX=parseInt(Math.random()*100);
    const randomY=parseInt(Math.random()*100);
noBtn.style.setProperty('top',randomY+'%');
noBtn.style.setProperty('left',randomX+'%');
noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);

}
)













