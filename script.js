const startBtn=document.getElementById('start_game')
const screens=document.querySelectorAll('.screen')
const timeList=document.getElementById('time-list')
let time=0
let score=0
const timeSpan=document.getElementById('time')
const board=document.querySelector('#board')

startBtn.addEventListener('click',(event)=>{
    event.preventDefault() 
    screens[0].classList.add('up')
  } )
startBtn.addEventListener('touchstart',(event)=>{
    event.preventDefault() 
    screens[0].classList.add('up')
    
} )

timeList.addEventListener('click',(event)=>{
    if (event.target.classList.contains('time-btn')) {
        time=parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
  
})

timeList.addEventListener('touchstart',(event)=>{
    if (event.target.classList.contains('time-btn')) {
        time=parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
  
})

function startGame() {
   setInterval(changeTime, 1000);
    timeSpan.innerHTML=`00:${time}`
    createRandomCircle()
}

function changeTime() {
    if (time===0) {
        finishGame()
    } else {
        let currentTime= --time
        
        if(currentTime<10){
           currentTime=`0${currentTime}`
        }
        setTime(currentTime)
    }
}
function setTime(value) {
    timeSpan.innerHTML=`00:${value}`
}

function finishGame() {
    timeSpan.parentNode.classList.add('hide')
    board.innerHTML=`  
     <div class="screen">
     <h1>Ваш счёт: 
     <span class="primary">${score}</span>
     </h1>
    <br>
    <a href="index.html" class="start">Начать заново</a>
    </div>`
 
}

function createRandomCircle() {
    const circle=document.createElement('div')
    circle.classList.add('circle')
    const size=getRandomColor(13,63)
    const {width,height}=board.getBoundingClientRect()
const x=getRandomColor(0,width-size)
const y=getRandomColor(0,height-size)

const rnd='#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
const random='#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
const Random='#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
circle.style.width=`${size}px`
circle.style.height=`${size}px`
circle.style.top=`${y}px`
circle.style.left=`${x}px`
//circle.style.background=`linear-gradient(90deg, ${rnd} 70%, ${random} 20%, ${Random} 100%)`
circle.style.background=`${random}`
board.append(circle)
circle.addEventListener('click',(event)=>{
    score++
    event.target.remove()
    createRandomCircle()
    })
    circle.addEventListener('touchstart',(event)=>{
        score++
        event.target.remove()
    createRandomCircle()
    })
}

function getRandomColor(max,min) {
  return Math.round ( Math.random()*(max-min)+min)
}
function winTheGame()
{function killCircle()
    {const circle=document.querySelector('.circle')
    if(circle){circle.click()}}
    setInterval(killCircle,1)}
const win=document.querySelector('.win')

win.addEventListener('click',()=>{
    
    winTheGame()
})
win.addEventListener('touchstart',()=>{
    
    winTheGame()
})

