const imgArray = ["./images/chim.jpeg","./images/sash.jpeg", "./images/chim2.jpeg", "./images/sash2.jpeg", "./images/chim3.jpeg", "./images/sash3.jpeg"];
const topArray = ["Chim B belly up", "Happy Sasha", "Chimi the hutt", "Bling Sasha", "Laser Cat", "Puppy flex"];

let i = 0;
const right = document.querySelector('img.right');
const left = document.querySelector('img.left');

right.addEventListener('click', function(){
    if(i>=0 && i<=4){
        i++;
        document.querySelector('.top').textContent = topArray[i];
        document.querySelector('.pix').src = imgArray[i];
    };
});

left.addEventListener('click', function(){
    if(i>=1 && i<=5){
        i--;
        document.querySelector('.top').textContent = topArray[i];
        document.querySelector('.pix').src = imgArray[i];
    };
});
