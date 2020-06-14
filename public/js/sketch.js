
let hoverOverMe;
let hoverOverMe2;
let hoverOverMe3;
let hoverOverMe4;
let hoverOverMe5;
let hoverOverMe6;
let hoverOverMe7;

let texto;
let texto2;
let texto3;
let texto4;
let texto5;
let texto6;
let texto7;

let showInfo = false;
let showInfo2 = false;
let showInfo3 = false;
let showInfo4 = false;
let showInfo5 = false;
let showInfo6 = false;
let showInfo7 = false;


function preload() {

  audio = loadSound("Rio.mp3")
  audio2 = loadSound("Sauco.mp3");
  audio3 = loadSound("Tortuga.mp3");
  audio4 = loadSound("Pareja.mp3");
  audio5 = loadSound("Olla.mp3");
  audio6 = loadSound("Bote.mp3");
  audio7 = loadSound("Carebaibarabua.mp3");
  myFont = loadFont('terminal-grotesque.ttf');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight+50);
  pieza= loadImage('foto-01.png');
 

   
  img = loadImage('costura.png');
  img2 = loadImage('costura.png');
  img3 = loadImage('costura.png');
  img4 = loadImage('costura.png');
  img5 = loadImage('costura.png');
  img6 = loadImage('costura.png');
  img7 = loadImage('costura.png');

  
  hoverOverMe = createImg('zona.png');
      hoverOverMe.size(windowWidth/6, windowWidth/6); 
  hoverOverMe2 = createImg('zona.png');
   hoverOverMe2.size(windowWidth/6, windowWidth/6);
  hoverOverMe3 = createImg('zona.png');
   hoverOverMe3.size(windowWidth/6, windowWidth/6);
  hoverOverMe4= createImg('zona.png');
   hoverOverMe4.size(windowWidth/6, windowWidth/6);
  hoverOverMe5= createImg('zona.png');
   hoverOverMe5.size(windowWidth/7, windowWidth/7);
  hoverOverMe6= createImg('zona.png');
   hoverOverMe6.size(windowWidth/7, windowWidth/8);
  hoverOverMe7= createImg('zona.png');
   hoverOverMe7.size(windowWidth/7, windowWidth/7);
  

  hoverOverMe.position(windowWidth/28, windowWidth/8);
hoverOverMe2.position(windowWidth/4.5,windowWidth/14);
  hoverOverMe3.position(windowWidth/2-windowWidth%35,windowWidth/10);
 hoverOverMe4.position(windowWidth/2+windowWidth/8,windowWidth/15);
  hoverOverMe5.position(windowWidth-windowWidth/5,windowWidth/11);
  hoverOverMe6.position(windowWidth/2+10,windowWidth/4);
  
  hoverOverMe7.position(windowWidth/2+windowWidth/13, windowWidth/2-windowWidth/7);
  

  hoverOverMe.mouseOver(() => showInfo = true);
  hoverOverMe.mouseOut(() => showInfo = false);
 
 hoverOverMe2.mouseOver(() => showInfo2 = true);
  hoverOverMe2.mouseOut(() => showInfo2 = false);

 
  
  hoverOverMe3.mouseOver(() => showInfo3 = true);
  hoverOverMe3.mouseOut(() => showInfo3 = false);
  
  
  hoverOverMe4.mouseOver(() => showInfo4 = true);
  hoverOverMe4.mouseOut(() => showInfo4 = false);
  
   
  hoverOverMe5.mouseOver(() => showInfo5 = true);
  hoverOverMe5.mouseOut(() => showInfo5 = false);
  
  hoverOverMe6.mouseOver(() => showInfo6 = true);
  hoverOverMe6.mouseOut(() => showInfo6 = false);
  
  hoverOverMe7.mouseOver(() => showInfo7 = true);
  hoverOverMe7.mouseOut(() => showInfo7 = false);
  
  //texto.size(windowWidth-50, windowWidth/2-50);
   
}


function draw() {
  background('#9466FF');
   image (pieza,0,0,windowWidth, windowWidth/2.4);
 
 

  if (showInfo) {
    
          
    text('- We also considered using a gift sent to us by those from England, which was after the sketch of the Atrato was drawn, yes? \n -And tell the other women what that gift is, what type of thread it is  \n -They are threads that they use and that are made from sheep’s wool (voice interrupts: from sheep’s wool) (Voices interrupt: from plantain tree) from plantain tree.\n -But there was one made of sheep’s wool -But this one, this is it \n -And this one’s from the plantain tree -The shell -Which here they call, how is it called  - The cepa (plantain)', windowWidth/2, windowWidth/2.3);
 fill(255);  
    textAlign(CENTER);
  textSize(windowWidth/80);
textFont(myFont);
textStyle('color', '#ffffff');   
   
     
 
 image(img,windowWidth/28, windowWidth/8);
    img.resize(windowWidth/7, windowWidth/7);
      
  
    
    if (!audio.isPlaying())
      audio.play();     audio2.stop();
    audio3.stop();
    audio4.stop();
    audio5.stop();
    audio6.stop();
    audio7.stop();

  } else {
    audio.stop();
  }

  
  
  if (showInfo2) {
    
      text('-Do you remember why elderberry? \n -Because it is one of the medicinal plants at the time of, of… well it’s one of the medicinal plants that we use here. \n -And do you remember that day, what you said about that plant?\n -Because it’s bitter, it’s bitter in the flavor \n -It is bitter but… So… that’s why it, it… \n -But at the same time, it was medicinal  -But at the same time, it was medicinal, so that’s why it went into the bitter flavor', windowWidth/2, windowWidth/2.3);
 fill(255);  
    textAlign(CENTER);
  textSize(windowWidth/80);
textFont(myFont);
textStyle('color', '#ffffff'); 
    
    image(img2, windowWidth/4.5,windowWidth/14);
    img2.resize(windowWidth/7, windowWidth/7);
    
    
     
 
    if (!audio2.isPlaying())
      audio2.play(); audio.stop();
    audio3.stop();
    audio4.stop();
    audio5.stop();
    audio6.stop();
    audio7.stop();
  } else {
    audio2.stop();

  }

  
  
  if (showInfo3) {
    
     text('- Here is the turtle uh, well… she is a little slow and she keeps… and that is what reconciliation is like, slowly but it is arriving, it arrives. ', windowWidth/2, windowWidth/2.3);
 fill(255);  
    textAlign(CENTER);
  textSize(windowWidth/80);
textFont(myFont);
textStyle('color', '#ffffff'); 
    
    
    image(img3,windowWidth/2-windowWidth%35,windowWidth/10);
    img3.resize(windowWidth/7,windowWidth/7);
    
     
     

    
    if (!audio3.isPlaying())
      audio3.play(); audio2.stop();
    audio.stop();
    audio4.stop();
    audio5.stop();
    audio6.stop();
    audio7.stop();
  } else {
    audio3.stop();
  }

   if (showInfo4) {
     text('-Well the couple are the people here, the people of the community, it was good to draw them as a part of the… \n - But was there any idea of reconciliation there? \n - Yes of course, Unity. \n- Exactly, they are reconciled there, it makes the message visible, that amongst family, well, there are differences, but at the same \n time it’s about overcoming those differences in order to move forward. ', windowWidth/2, windowWidth/2.3);
 fill(255);  
    textAlign(CENTER);
  textSize(windowWidth/80);
textFont(myFont);
textStyle('color', '#ffffff'); 
    
     
    image(img4,windowWidth/2+windowWidth/8,windowWidth/15);
    img4.resize(windowWidth/7,windowWidth/7);

    if (!audio4.isPlaying())
      audio4.play(); audio2.stop();
    audio3.stop();
    audio.stop();
    audio5.stop();
    audio6.stop();
    audio7.stop();
  } else {
    audio4.stop();
  }
  
   if (showInfo5) {
     text('- Is that a Guayacan? Or what tree is it? \n- Yes we wanted to draw it -Like the resistance, the strength of what we have resisted and which also invites us to, well, to, to  reconcile, and the pot that is next to it,  \nthere, reflected what the smell of the, of the reconciliation was, those who worked the smell, well, they wanted to show that it was a pot  with all of its condiments,\n cilantro and everything, and that it smelled good  and that they wanted to represent, that this, this is how the smell of  reconciliation smells. \n -When it is reached -But what la negra was just saying is that it is something reached little by little, that it’s very -difficult \n -Little by little, the turtle', windowWidth/2, windowWidth/2.3);
 fill(255);  
    textAlign(CENTER);
  textSize(windowWidth/80);
textFont(myFont);
textStyle('color', '#ffffff'); 
    
     
    image(img5, windowWidth-windowWidth/5,windowWidth/11);
    img5.resize(windowWidth/7,windowWidth/7);
  

    if (!audio5.isPlaying())
      audio5.play(); audio2.stop();
    audio3.stop();
    audio4.stop();
    audio.stop();
    audio6.stop();
    audio7.stop();
  } else {
    audio5.stop();
  }
  
   if (showInfo6) {
     
      text('-That little boat is also from here, the means we use to transport ourselves, so it is also very important that it be, well, reflecting of the reconciliation. \n -Every day’s bread, the fish, they’re constantly coming to us… to the ravine with your boat to look for your fish \n -It’s “bocachico” what fish is that -They seem like “bocachicos”  \n -No, those are the ones from the reconciliation, some new fish (laughter) they don’t have a name.  ', windowWidth/2, windowWidth/2.3);
 fill(255);  
    textAlign(CENTER);
  textSize(windowWidth/80);
textFont(myFont);
textStyle('color', '#ffffff'); 
    image(img6,windowWidth/2+10,windowWidth/5);
    img6.resize(windowWidth/7,windowWidth/7);

    if (!audio6.isPlaying())
      audio6.play(); audio2.stop();
    audio3.stop();
    audio4.stop();
    audio5.stop();
    audio.stop();
    audio7.stop();
  } else {
    audio6.stop();
  }
 
     if (showInfo7) {
        text('That what we wanted to bring was, well, everything to do with nature, all of that which surrounds us, as well as the ethnic groups, there are the afro and there are the \n indigenous people who are capturing an indigenous frase there that means union. \n -Carebaibarabua which means union, banquet, community work. ', windowWidth/2, windowWidth/2.3);
 fill(255);  
    textAlign(CENTER);
  textSize(windowWidth/80);
textFont(myFont);
textStyle('color', '#ffffff'); 
    image(img7, windowWidth/2+windowWidth/11, windowWidth/2-windowWidth/5);
    img7.resize(windowWidth/6,windowWidth/8);


    if (!audio7.isPlaying())
      audio7.play(); audio2.stop();
    audio3.stop();
    audio4.stop();
    audio5.stop();
    audio6.stop();
    audio.stop();
  } else {
    audio7.stop();
  }
  
   

}


