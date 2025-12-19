//I use an array for 3 objects. and each objet have 3 items
//id: is the id in html
//duration: is the long wait before moving to next light.
const lights=[
    {id:'red',duration:5000,msg:'STOP'},
    {id: 'yellow',duration:2000,msg:'BE READY'},
    {id: 'green',duration:5000,msg:'GO!'}
];

var cIndex=0;
var timer=null;
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const StatutText = document.getElementById('status-text');//pour le status
function startCycleLight(){
    document.querySelectorAll('.light').forEach(light => { //on selectionne tous on applique .light en mode etteint
        light.classList.remove('active');                  //et on supprime l'activation de chaque element de Classliste
        
    });
    
    const courant = lights[cIndex]; //courant recoi le tableau lights
    const element = document.getElementById(courant.id); //element recoit les id de chauque objet
    if(element){
        element.classList.add('active');//j'ajouter l'element pour s'active.
    }
    StatutText.innerText = `status: ${courant.msg}`;//pour basculer les mesages pour chaque light
    
    cIndex = (cIndex+1)%lights.length; //%lights.length, this one helps to get id in second light cycle. also skip the stop after 1 cycle(make an infinity boucle without refreshing the page);

    timer = setTimeout(startCycleLight,courant.duration);
    //timer = setInterval(startCycleLight,courant.duration);
};



startBtn.addEventListener('click',()=>{
    startCycleLight();
    //StatutText.innerText = "START";
})

stopBtn.addEventListener('click',()=>{
    clearTimeout(timer);
    timer=null;
    document.querySelectorAll('.light').forEach(light => {
        light.classList.remove('active');
        
    });
    //StatutText.innerText = "STOP";

})
    

