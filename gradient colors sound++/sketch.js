

var soundOne, amplitude, cnv;

function preload(){
  soundOne = loadSound('Ohh.m4a');
  soundTwo = loadSound('high.m4a');
  soundThree = loadSound('oonaninani.m4a');
  soundFour = loadSound('rain glitter.m4a');
  soundFive = loadSound('past life.m4a');
  soundSix = loadSound('all my life.m4a');
  soundSeven = loadSound('lil mermaids.m4a');
  soundEight = loadSound('kumbaya.m4a');  
  soundNine = loadSound('new beginnings.m4a');
  soundTen = loadSound('beauceau family.m4a');
  soundEleven = loadSound('dowehavetime.m4a');
  soundTwelve = loadSound('lastnight2.m4a');

}
function setup() {
  createCanvas(600,600);
  cnv = createCanvas(600,600);
  amplitude = new p5.Amplitude();

  // start / stop the sound when canvas is clicked
  /*cnv.mouseClicked(function() {
    if (sound.isPlaying() ){
      sound.stop();
    } else {
      sound.play();
    }
  });
  */
}



function draw() {
  background(250,55);
  fill(250,size+20,size);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 255);
  
  gradientRect(200,50,200,150,14,125,105,touchY*0.5+25,150,touchX*0.7+160,20);
  
  
  //create the gradient rects
  fill(size,size,size);
  //gradientRect(50,50,500,300,4,425,105,touchY*0.5+25,150,touchX*0.7+160,20);
 
  
  gradientRect(size,50,size+400,size+300,4,425, 105,size+100,150,touchX,220);
 
 	//gradientRect(50,300,500,200,70,425,105,mouseY*0.5+25,150,mouseX*0.7+160,20);
  fill(255);
  rect(0,100,600,45);
  
  rect(0,180,600,45);
  
  gradientRect(size,250,400,50,14,130,165+size,240,190,220,size+120.4+9);
  gradientRect(size,420,490,50,14,130,180+touchY*0.4,164,120,249,touchX*0.5+160);
  
  gradientRect(100,550,400,400,200,130,180+touchY+20,154,200,189,touchY+50);
  gradientRect(size,550,size,400,200,130,180+touchY+20,154,200,189,touchY+50);
  
  

  
  fill(255,100);
  rect(100,375,100,100);
  rect(300,375,100,100);
  rect(200,275,100,100);
  rect(400,275,100,100);
  rect(200,475,100,100);
  rect(400,475,100,100);
  
  ellipse(width/3, height*.7, size, size);
  ellipse(width/2, height*.8, size, size);
  ellipse(width/1.5, height*.7, size, size);
  ellipse(width/2, height-270, size, size);
  ellipse(width/2, height-70, size, size);
  ellipse(width/4, height-30, size, size);
  ellipse(width/4, height+30, size, size);
  
  
  
}



function touchStarted() {
  if ( touchX > 100 && touchX < 200 && 
      touchY > 275 && touchY < 375 ) { // .isPlaying() returns a boolean
    soundOne.play();
  } else if (touchX > 200 && touchX < 300 && 
      touchY > 275 && touchY < 375 ) { // .isPlaying() returns a boolean
    soundTwo.play();
  } else if (touchX > 300 && touchX < 400 && 
      touchY > 275 && touchY < 375 ) { // .isPlaying() returns a boolean
    soundThree.play();
  } else if (touchX > 400 && touchX < 500 && 
      touchY > 275 && touchY < 375 ) { // .isPlaying() returns a boolean
    soundFour.play();
  } else if ( touchX > 100 && touchX < 200 && 
      touchY > 375 && touchY < 475 ) { // .isPlaying() returns a boolean
    soundFive.play();
  }  else if (touchX > 200 && touchX < 300 && 
      touchY > 375 && touchY < 475 ) { // .isPlaying() returns a boolean
    soundSix.play();
  } else if (touchX > 300 && touchX < 400 && 
      touchY > 375 && touchY < 475 ) { // .isPlaying() returns a boolean
    soundSeven.play();
  } else if (touchX > 400 && touchX < 500 && 
      touchY > 375 && touchY < 475 ) { // .isPlaying() returns a boolean
    soundEight.play();
  } else if (touchX > 100 && touchX < 200 && 
      touchY > 475 && touchY < 575 ) { // .isPlaying() returns a boolean
    soundNine.play();
  } else if (touchX > 200 && touchX < 300 && 
      touchY > 475 && touchY < 575 ) { // .isPlaying() returns a boolean
    soundTen.play();
  } else if (touchX > 300 && touchX < 400 && 
      touchY > 475 && touchY < 575 ) { // .isPlaying() returns a boolean
    soundEleven.play();
  } else if (touchX > 400 && touchX < 500 && 
      touchY > 475 && touchY < 575 ) { // .isPlaying() returns a boolean
    soundTwelve.play();
  }
}


function gradientRect(rectx,recty,rectw,recth,rects,r1,r2,g1,g2,b1,b2){
  
  for ( var D = rectx ; D < rectx + rectw ; D += rects ){
    for ( var E = recty ; E < recty + recth ; E += rects ) {
    
      var r = map(D,rectx,rectx + rectw,r1,r2);
      var g = map(E,rectx,rectx + rectw,g1,g2);
      var b = map(E,recty,recty + recth,b1,b2);
      
//       var meltx = map(mouseX,0,width,50,160);
//       var melty = map(mouseY,0,height,30,200);
      
      var meltx =0;
      var melty =0;
      
        fill(r+melty,g+meltx,b-melty);
        noStroke();
        rect(D,E/2,rects,rects);
    }
  
  
  }





  
  
  
 
  // noLoop();
}