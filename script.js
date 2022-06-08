//Cyoa

//let inputEl = document.getElementById("dicein");
let backEl = document.getElementById("backimg");
let backoutEl = document.getElementById("divbtn");
let divEl = document.getElementById("backin");
let btn1El = document.getElementById("btn1");
let btn2El = document.getElementById("btn2");
let btn3El = document.getElementById("btn3");
let btn4El = document.getElementById("btn4");
let bodyEl = document.getElementById("body");
let nameEl = document.getElementById("name");
let weaEl = document.getElementById("weapon");
let cheeseEl = document.getElementById("chee");



let scenevar = 1, namechara, startpathleft, waep,
 normchee = "<li>Cheese</li>", normbook = "<li>Spellbook</li>",
  normdag = "<li>Dagger x2</li>", normswor = "<li>Sword</li>";




backEl.addEventListener("click", check);
backoutEl.addEventListener("click", checkout);
divEl.addEventListener("click", checkout2);
btn1El.addEventListener("click", scene);
btn2El.addEventListener("click", scene2);
btn3El.addEventListener("click", scene3);
btn4El.addEventListener("click", scene4);
weaEl.addEventListener("click", description);
cheeseEl.addEventListener("click", description2);

btn2El.style.display = "none";
btn3El.style.display = "none";
btn4El.style.display = "none";
weaEl.style.display = "none";


function check(){
   divEl.style.display = "block";
}
function checkout(){
    divEl.style.display = "none";
    if (waep === "book"){
    weaEl.innerHTML = normbook;
} else if (waep === "sword"){
    weaEl.innerHTML = normswor;

} else if (waep === "dagger"){
    weaEl.innerHTML = normdag;

}
cheeseEl.innerHTML = normchee;
 }
 function checkout2(e){
     if (e.target === divEl){
    divEl.style.display = "none";
    if (waep === "book"){
        weaEl.innerHTML = normbook;
    } else if (waep === "sword"){
        weaEl.innerHTML = normswor;
    
    } else if (waep === "dagger"){
        weaEl.innerHTML = normdag;
    
    }
cheeseEl.innerHTML = normchee;

     }
     
 }
function description(){
    console.log(waep);
    if (waep === "book"){
        weaEl.innerHTML = normbook + "-It looks old it's stained and many of the pages are either crinkled or bent.<br>"+
        "Spells:<br>Firebolt<br>Sleep<br>Invisibiltiy<br>Sheild";
        
    }
    if (waep === "dagger"){
        weaEl.innerHTML = normdag + "-They look old and battered the edge of one is clearly blunter than the other.";
        
    }
    if (waep === "sword"){
        weaEl.innerHTML = normswor + "-This Sword has a major scratch down the center, The pommel looks to be stuck on with a weak adhisive and has a red cloth wrapping the handle.";
        
    }
}
function description2(){
    cheeseEl.innerHTML = normchee + "- A Wheel of Cheese. Why Do you have this?";
}
function scene (){
    if (btn1El.innerHTML === "Inn"){
        
        bodyEl.innerHTML = 'You walk into the "BoarHeart" Inn<br> and see the innkeeper, a barmaid'+
        ' and a shrouded person in the corner.<br>'+
        "Any of which you could talk to or you could just leave.";
        btn4El.style.display = "inline-block";
        
        btn1El.innerHTML = "Innkeeper";
        btn2El.innerHTML = "Barmaid";
        btn3El.innerHTML = "Shrouded Figure";
        btn4El.innerHTML = "Leave";
        

    }   
    if (scenevar === 3  && !startpathleft || scenevar === 4 && !startpathleft){
        
        bodyEl.innerHTML = "You run away as fast as you can from the beast continuing where the path would presumably go.<br>"+
        "You reach a door in a rock wall, you can't stop it could be behind you!<br>" +
        "So you slam into the door you feel something in the door and you break but it opens.<br> "+
        "You slam the door shut behind you and colapse on your side of the door.";
        
        
        btn1El.innerHTML = "Inn";
        btn2El.innerHTML = "Store";
        btn3El.innerHTML = "Blacksmith";
        scenevar++;

    }   

if (scenevar === 3  && startpathleft){
        
            bodyEl.innerHTML = "You hold your ground and taunt your enemies they rush you and you deal with them non lethaly.<br> Tucking your sword into your backpack.<br> " +
            "<h3>Added Sword to Inventory</h3>"+
            "Your foes turn out to be a pack of ravinous wolves they'll need to find a meal elsewhere.<br>" +
            'You make it to town the sign out front reads "Goral" what a strange name for a town.<br>' + 
            "There is a roar of thunder in the distance good thing you made it to town!<br>"+
            "What building do you go to first?";
            weaEl.style.display = "inline-block";
            
            weaEl.innerHTML = normswor;
            waep = "sword";
            btn1El.innerHTML = "Inn";
            btn2El.innerHTML = "Store";
            btn3El.innerHTML = "Blacksmith";
            scenevar++;
    
        }   

    if (scenevar === 2){
        
        bodyEl.innerHTML = "You run down the left path trying to make it to the nearest town.<br> "+
        "You suddenly hear the snapping of branches on the ground,<br> you stop and realize that you are surrounded "+
        "<br>you don't know whats surrounding you but it cant be good!";
        btn1El.innerHTML = "Pull out Sword and Fight";
        btn2El.innerHTML = "Hide into the Shadows";
        btn3El.style.display = "inline-block";
        btn3El.innerHTML = "Use the Power of Magic To drive away your Foes";
        startpathleft = true;

        scenevar++;
        
    }
    if (scenevar === 1){
        namechara = nameEl.value;
        bodyEl.innerHTML = namechara + "... You look down to see a disparing " +
         "amount of gold in what is presumably your money pouch.<br> You wince at " +
         "the sight of 4 measly silver coins it'll buy you a night at an inn " +
         "if you can make it to one.<br> You look ahead and see a crossroad.<br> The " +
         "sun is starting to set you should move fast!<br>" ;
        btn1El.innerHTML = "Left";
        btn2El.style.display = "inline-block";
         scenevar++;
}
         
    
    
}
function scene2 (){
    if (btn2El.innerHTML === "Store"){
        
        bodyEl.innerHTML = 'You walk into the Gorial general store it looks like it sells a variety<br>'+
        'of items.';
        btn4El.style.display = "none";
        
        btn1El.innerHTML = "Talk to the owner";
        btn2El.innerHTML = "Brouse Wares";
        btn3El.innerHTML = "Leave";
        //btn4El.innerHTML = "Leave";
        

    }   
    
    if (scenevar === 3  && startpathleft){
        
        bodyEl.innerHTML = "You effortlessly meld into the shadows and creep up to your enimes and knock them out<br> with the hilt of your daggers. <br> Tucking your daggers into your backpack.<br> " +
        "<h3>Added Daggers to Inventory</h3>"+
        "Your foes turn out to be a pack of ravinous wolves they'll need to find a meal elsewhere.<br>" +
        'You make it to town the sign out front reads "Goral" what a strange name for a town.<br>' + 
        "There is a roar of thunder in the distance good thing you made it to town!<br>"+
        "What building do you go to first?";
        weaEl.style.display = "inline-block";
        btn4El.style.display = "inline-block";
        
        weaEl.innerHTML = normdag;
        waep = "dagger";
        btn1El.innerHTML = "Inn";
        btn2El.innerHTML = "Store";
        btn3El.innerHTML = "Blacksmith";
        btn4El.innerHTML = "Random House";
        scenevar++;

    } 
    if (scenevar === 3  && !startpathleft){
        
        bodyEl.innerHTML = "You stand in place with new resolve to fight the creature,<br> but staring at this creature you observe it's eyes,<br> they're like a sea of gold with flakes of cyan melded in broken by a deep oval abyss.<br> "+
        "You recognise this as a creature you've seen in books before the extremely rare " +
        '<br>"Alpha Rontus"<br> An extremly dangerous and rare creature.<br>'+
        " You realize theres nothing you can do,<br> your hope for survial fades away as you close your eyes and wait to be eaten."+
        "<br>You wait ten seconds, a minute, five minutes until rain starts coming down and you open your eyes.<br>"+
        "The Alpha Rontus is still there and is shaking from the rain,<br> you look at the Rontus and realize it's a baby!";
        
        
        btn1El.innerHTML = "Run While You Can!";
        btn2El.innerHTML = "Help It";
        
        scenevar++;

    }     if (scenevar === 2){
        
        bodyEl.innerHTML = "The right path gets narrower until it stops.<br> When you reach the end of the path the sun has set,<br> Theres no turning back.<br> You hear thunder in the distance a storm is coming.<br> You turn around to try to see how far away it is when you see two gleaming eyes in the dark. ";
        btn1El.innerHTML = "Run";
        btn2El.innerHTML = "Fight";
        scenevar++;
        startpathleft = false;
    }
}
function scene3 (){

    if (btn3El.innerHTML === "Leave"){
        
        bodyEl.innerHTML = 'You are in the middle of the town "Gorial" where do you want to go?';
        btn4El.style.display = "none";
        
        btn1El.innerHTML = "Inn";
        btn2El.innerHTML = "Store";
        btn3El.innerHTML = "Blacksmith";
        

    } 

    if (scenevar === 3 && startpathleft){
        
        bodyEl.innerHTML = "You effortlessly use your spellbook to ward off your foes with a quick sleep spell<br> tucking your spellbook into your backpack.<br> " +
        "<h3>Added Spellbook to Inventory</h3>"+
        "Your foes turn out to be a pack of ravinous wolves they'll need to find a meal elsewhere.<br>" +
        'You make it to town the sign out front reads "Goral" what a strange name for a town.<br>' + 
        "There is a roar of thunder in the distance good thing you made it to town!<br>"+
        "What building do you go to first?";
        weaEl.style.display = "inline-block";
        
        weaEl.innerHTML = normbook;
        waep = "book";
        btn1El.innerHTML = "Inn";
        btn2El.innerHTML = "Store";
        btn3El.innerHTML = "Blacksmith";
        scenevar++;

    }   
}
function scene4 (){
    if (btn4El.innerHTML === "Leave"){
        
        bodyEl.innerHTML = 'You are in the middle of the town "Gorial" where do you want to go?';
        btn4El.style.display = "none";
        
        btn1El.innerHTML = "Inn";
        btn2El.innerHTML = "Store";
        btn3El.innerHTML = "Blacksmith";
        

    }   
}