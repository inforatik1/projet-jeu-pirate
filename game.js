function toURL(bmp){const c=document.createElement('canvas');c.width=bmp.width;c.height=bmp.height;c.getContext('2d').drawImage(bmp,0,0);return c.toDataURL();}


//texture des personnages pas de sprites, technique du cours de visualisation de données mais gros du travail fait avec Claude.ai
function mkPirate(sh){
  const W=48,H=64,c=new OffscreenCanvas(W,H),g=c.getContext('2d');
  g.fillStyle='#192468';g.fillRect(10,44,12,14);g.fillRect(26,44,12,14);
  g.fillStyle='#150e06';g.fillRect(8,54,16,10);g.fillRect(24,54,16,10);
  g.fillStyle='#c8900a';g.fillRect(12,56,5,3);g.fillRect(28,56,5,3);
  g.fillStyle='#6b2e08';g.fillRect(10,42,28,5);g.fillStyle='#d4a010';g.fillRect(19,42,10,5);
  const bg=g.createLinearGradient(10,18,38,42);bg.addColorStop(0,'#1e3c9e');bg.addColorStop(1,'#142878');
  g.fillStyle=bg;g.fillRect(10,20,28,24);
  g.fillStyle='#c89010';g.fillRect(10,20,5,12);g.fillRect(33,20,5,12);
  g.fillStyle='#d4a010';[25,30,35].forEach(y=>{g.beginPath();g.arc(24,y,2,0,Math.PI*2);g.fill();});
  g.fillStyle='#d89050';g.beginPath();g.arc(24,13,12,0,Math.PI*2);g.fill();
  g.fillStyle='#4a2006';g.fillRect(15,18,18,8);g.fillStyle='#2e1204';g.fillRect(16,16,16,4);
  g.fillStyle='#0a0a0a';g.fillRect(12,9,11,7);
  g.strokeStyle='#444';g.lineWidth=1.5;g.beginPath();g.moveTo(12,8);g.lineTo(23,8);g.stroke();
  g.fillStyle='#fff';g.beginPath();g.arc(32,11,4,0,Math.PI*2);g.fill();
  g.fillStyle='#200a00';g.beginPath();g.arc(32,11,2,0,Math.PI*2);g.fill();
  g.fillStyle='#0a0a0a';
  g.beginPath();g.moveTo(2,11);g.lineTo(24,0);g.lineTo(46,11);g.lineTo(40,15);g.lineTo(8,15);g.closePath();g.fill();
  g.fillRect(5,15,38,5);g.fillStyle='#c89010';g.fillRect(5,15,38,3);
  g.fillStyle='#ccc';g.font='bold 9px serif';g.fillText('',17,13);
  g.fillStyle='#1e3c9e';g.fillRect(2,20,8,16);g.fillStyle='#d89050';g.fillRect(2,34,8,8);
  if(sh){
    g.fillStyle='#1e3c9e';g.fillRect(38,14,8,16);g.fillStyle='#d89050';g.fillRect(38,28,8,8);
    g.fillStyle='#7a4e1a';g.fillRect(43,0,5,46);g.fillStyle='#909090';g.fillRect(38,42,14,12);
  } else {g.fillStyle='#1e3c9e';g.fillRect(38,20,8,16);g.fillStyle='#d89050';g.fillRect(38,34,8,8);}
  return toURL(c.transferToImageBitmap());
}

function mkMarin(){
  const W=48,H=64,c=new OffscreenCanvas(W,H),g=c.getContext('2d');
  g.fillStyle='#dcdfe8';g.fillRect(10,44,12,16);g.fillRect(26,44,12,16);
  g.fillStyle='#0e0e0e';g.fillRect(8,56,16,8);g.fillRect(24,56,16,8);
  g.fillStyle='#d4a010';g.fillRect(12,57,6,4);g.fillRect(28,57,6,4);
  g.fillStyle='#1e3a9e';g.fillRect(10,40,28,8);
  const vg=g.createLinearGradient(10,18,38,18);vg.addColorStop(0,'#f4efdf');vg.addColorStop(1,'#e5dcca');
  g.fillStyle=vg;g.fillRect(10,18,28,24);
  g.fillStyle='#1a3a9e';g.fillRect(10,18,6,16);g.fillRect(32,18,6,16);g.fillRect(2,34,8,5);g.fillRect(38,34,8,5);
  g.fillStyle='#c89010';g.fillRect(10,18,2,16);g.fillRect(36,18,2,16);g.fillRect(2,34,8,2);g.fillRect(38,34,8,2);
  g.fillStyle='#d4a010';[24,29,34].forEach(y=>{g.beginPath();g.arc(24,y,2.5,0,Math.PI*2);g.fill();});
  g.fillStyle='#d4a010';g.fillRect(2,18,10,5);g.fillRect(36,18,10,5);
  g.fillStyle='#ffd040';g.fillRect(3,18,8,2);g.fillRect(37,18,8,2);
  g.fillStyle='#e8e8e8';g.fillRect(10,38,28,5);g.fillStyle='#c8a000';g.fillRect(21,39,6,3);
  g.fillStyle='#f0c090';g.beginPath();g.arc(24,12,12,0,Math.PI*2);g.fill();
  g.fillStyle='#eeebe0';g.beginPath();g.arc(24,7,13,Math.PI,0);g.fill();g.fillRect(11,4,26,9);
  g.beginPath();g.arc(11,14,5,0,Math.PI*2);g.fill();g.beginPath();g.arc(37,14,5,0,Math.PI*2);g.fill();
  g.fillStyle='#1a1a1a';g.beginPath();g.arc(19,12,2.5,0,Math.PI*2);g.fill();g.beginPath();g.arc(29,12,2.5,0,Math.PI*2);g.fill();
  g.fillStyle='#b05040';g.fillRect(20,18,8,2);
  g.fillStyle='#0e0e0e';g.beginPath();g.moveTo(2,8);g.lineTo(46,8);g.lineTo(42,3);g.lineTo(6,3);g.closePath();g.fill();g.fillRect(2,8,44,4);
  g.fillStyle='#c89010';g.fillRect(2,8,44,1.5);
  g.fillStyle='#1133cc';g.beginPath();g.arc(40,5,4,0,Math.PI*2);g.fill();
  g.fillStyle='#fff';g.beginPath();g.arc(40,5,2.5,0,Math.PI*2);g.fill();
  g.fillStyle='#cc1020';g.beginPath();g.arc(40,5,1.4,0,Math.PI*2);g.fill();
  g.fillStyle='#4a2e12';g.fillRect(38,0,5,44);g.fillStyle='#808080';g.fillRect(40,0,3,32);g.fillStyle='#c89010';g.fillRect(39,20,6,3);
  g.fillStyle='#f4efdf';g.fillRect(2,18,8,20);g.fillRect(38,18,8,20);
  g.fillStyle='#1a3a9e';g.fillRect(2,34,8,5);g.fillRect(38,34,8,5);
  g.fillStyle='#f0c090';g.fillRect(2,38,8,6);g.fillRect(38,38,8,6);
  return toURL(c.transferToImageBitmap());
}

/** PNJ marin : formes Kaplay natives (rect, circle, text) — plus de loadSprite bitmap */
function spawnNpcMarin(k, C, left, top) {
  const z = 6;
  k.add([k.circle(11), k.pos(left + 24, top + 13), k.color(k.rgb(240, 192, 144)), k.z(z)]);
  k.add([k.rect(44, 10), k.pos(left + 2, top + 2), k.color(C.black), k.z(z + 1)]);
  k.add([k.rect(28, 24), k.pos(left + 10, top + 22), k.color(C.navy), k.z(z)]);
  k.add([k.rect(8, 16), k.pos(left + 2, top + 22), k.color(k.rgb(244, 239, 223)), k.z(z)]);
  k.add([k.rect(8, 16), k.pos(left + 38, top + 22), k.color(k.rgb(244, 239, 223)), k.z(z)]);
  k.add([k.rect(12, 14), k.pos(left + 10, top + 48), k.color(k.rgb(220, 223, 232)), k.z(z)]);
  k.add([k.rect(12, 14), k.pos(left + 26, top + 48), k.color(k.rgb(220, 223, 232)), k.z(z)]);
  k.add([k.rect(4, 34), k.pos(left + 40, top + 6), k.color(k.rgb(74, 46, 18)), k.z(z - 1)]);
  k.add([k.circle(4), k.pos(left + 42, top + 5), k.color(C.navy), k.z(z + 1)]);
  k.add([k.text("!", { size: 12 }), k.anchor("center"), k.pos(left + 34, top + 8), k.color(C.red), k.z(z + 2)]);
}

/** PNJ pirate : composition Kaplay (rect, circle) */
function spawnNpcPirate(k, C, left, top) {
  const z = 6;
  k.add([k.circle(10), k.pos(left + 24, top + 14), k.color(k.rgb(192, 128, 64)), k.z(z)]);
  k.add([k.rect(26, 8), k.pos(left + 11, top + 4), k.color(k.rgb(176, 16, 16)), k.z(z + 1)]);
  k.add([k.rect(28, 24), k.pos(left + 10, top + 22), k.color(k.rgb(138, 30, 16)), k.z(z)]);
  k.add([k.rect(8, 18), k.pos(left + 2, top + 22), k.color(k.rgb(138, 30, 16)), k.z(z)]);
  k.add([k.rect(8, 18), k.pos(left + 38, top + 22), k.color(k.rgb(138, 30, 16)), k.z(z)]);
  k.add([k.rect(12, 14), k.pos(left + 10, top + 48), k.color(k.rgb(90, 26, 8)), k.z(z)]);
  k.add([k.rect(12, 14), k.pos(left + 26, top + 48), k.color(k.rgb(90, 26, 8)), k.z(z)]);
  k.add([k.rect(4, 30), k.pos(left + 36, top + 20), k.color(k.rgb(96, 96, 96)), k.z(z - 1)]);
}

//Textures 
function mkSand(){
  const W=64,H=64,c=new OffscreenCanvas(W,H),g=c.getContext('2d');
  const gr=g.createLinearGradient(0,0,0,H);gr.addColorStop(0,'#cfa85a');gr.addColorStop(.5,'#b8923e');gr.addColorStop(1,'#a07c28');
  g.fillStyle=gr;g.fillRect(0,0,W,H);
  g.fillStyle='#a07028';for(let i=0;i<90;i++){const x=Math.random()*W,y=Math.random()*H,r=Math.random()*1.8+.3;g.beginPath();g.arc(x,y,r,0,Math.PI*2);g.fill();}
  g.fillStyle='#dcc070';for(let i=0;i<45;i++){const x=Math.random()*W,y=Math.random()*H,r=Math.random()*1.2+.2;g.beginPath();g.arc(x,y,r,0,Math.PI*2);g.fill();}
  return toURL(c.transferToImageBitmap());
}
function mkJungle(){
  const W=64,H=64,c=new OffscreenCanvas(W,H),g=c.getContext('2d');
  const gr=g.createLinearGradient(0,0,0,H);gr.addColorStop(0,'#1a4a10');gr.addColorStop(.5,'#143a0c');gr.addColorStop(1,'#0e2808');
  g.fillStyle=gr;g.fillRect(0,0,W,H);
  g.fillStyle='#246018';for(let i=0;i<40;i++){const x=Math.random()*W,y=Math.random()*H,r=Math.random()*3+1;g.beginPath();g.arc(x,y,r,0,Math.PI*2);g.fill();}
  g.fillStyle='#0a2006';for(let i=0;i<20;i++){g.beginPath();g.moveTo(Math.random()*W,Math.random()*H);g.lineTo(Math.random()*W,Math.random()*H);g.lineWidth=1;g.strokeStyle='#0a2006';g.stroke();}
  return toURL(c.transferToImageBitmap());
}
function mkCave(){
  const W=64,H=64,c=new OffscreenCanvas(W,H),g=c.getContext('2d');
  const gr=g.createLinearGradient(0,0,0,H);gr.addColorStop(0,'#2a2218');gr.addColorStop(1,'#181008');
  g.fillStyle=gr;g.fillRect(0,0,W,H);
  g.fillStyle='rgba(0,0,0,.3)';for(let i=0;i<15;i++){g.beginPath();g.arc(Math.random()*W,Math.random()*H,Math.random()*8+2,0,Math.PI*2);g.fill();}
  g.fillStyle='rgba(255,200,80,.06)';for(let i=0;i<10;i++){g.beginPath();g.arc(Math.random()*W,Math.random()*H,Math.random()*4+1,0,Math.PI*2);g.fill();}
  return toURL(c.transferToImageBitmap());
}
function mkStone(){
  const W=32,H=20,c=new OffscreenCanvas(W,H),g=c.getContext('2d');
  const gr=g.createLinearGradient(0,0,0,H);gr.addColorStop(0,'#b0a890');gr.addColorStop(1,'#908070');
  g.fillStyle=gr;g.fillRect(0,0,W,H);g.strokeStyle='#706050';g.lineWidth=1;g.strokeRect(.5,.5,W-1,H-1);
  g.strokeStyle='rgba(0,0,0,.2)';g.beginPath();g.moveTo(0,H/2);g.lineTo(W,H/2);g.stroke();
  g.fillStyle='rgba(255,255,255,.08)';g.fillRect(2,2,6,4);
  return toURL(c.transferToImageBitmap());
}
function mkWood(){
  const W=32,H=12,c=new OffscreenCanvas(W,H),g=c.getContext('2d');
  const gr=g.createLinearGradient(0,0,W,0);gr.addColorStop(0,'#6a3e14');gr.addColorStop(.5,'#7e5020');gr.addColorStop(1,'#5a3010');
  g.fillStyle=gr;g.fillRect(0,0,W,H);g.strokeStyle='#4a2808';g.lineWidth=1;
  g.beginPath();g.moveTo(0,H/2);g.lineTo(W,H/2);g.stroke();g.strokeRect(.5,.5,W-1,H-1);
  return toURL(c.transferToImageBitmap());
}
function mkTrunk(){
  const W=22,H=32,c=new OffscreenCanvas(W,H),g=c.getContext('2d');
  const gr=g.createLinearGradient(0,0,W,0);gr.addColorStop(0,'#5a3008');gr.addColorStop(.4,'#7a4e1c');gr.addColorStop(1,'#4a2606');
  g.fillStyle=gr;g.fillRect(0,0,W,H);g.strokeStyle='#3a1e04';g.lineWidth=1.2;
  for(let y=0;y<H;y+=9){g.beginPath();g.moveTo(0,y);g.bezierCurveTo(8,y+2,14,y-2,W,y);g.stroke();}
  return toURL(c.transferToImageBitmap());
}
function mkLeaf(){
  const W=70,H=16,c=new OffscreenCanvas(W,H),g=c.getContext('2d');
  const gr=g.createLinearGradient(0,0,0,H);gr.addColorStop(0,'#24a028');gr.addColorStop(1,'#145a18');
  g.fillStyle=gr;g.fillRect(0,0,W,H);g.strokeStyle='#0e4a12';g.lineWidth=.8;
  for(let x=0;x<W;x+=7){g.beginPath();g.moveTo(x,0);g.lineTo(x+3,H);g.stroke();}
  return toURL(c.transferToImageBitmap());
}
function mkSky(){
  const W=960,H=380,c=new OffscreenCanvas(W,H),g=c.getContext('2d');
  const gr=g.createLinearGradient(0,0,0,H);gr.addColorStop(0,'#1448a0');gr.addColorStop(.55,'#3880d0');gr.addColorStop(1,'#78b8f0');
  g.fillStyle=gr;g.fillRect(0,0,W,H);
  const sg=g.createRadialGradient(W*.65,H*.85,10,W*.65,H*.85,320);sg.addColorStop(0,'rgba(255,210,90,.38)');sg.addColorStop(1,'rgba(255,210,90,0)');
  g.fillStyle=sg;g.fillRect(0,0,W,H);
  return toURL(c.transferToImageBitmap());
}

const visu={
  pirate:mkPirate(false), pirateSh:mkPirate(true), marin:mkMarin(),
  sand:mkSand(), jungle:mkJungle(), cave:mkCave(),
  stone:mkStone(), wood:mkWood(), trunk:mkTrunk(), leaf:mkLeaf(), sky:mkSky()
};


// Lancement du jeu 
document.getElementById('btn-start').addEventListener('click', async () => {
  document.getElementById('title-screen').classList.add('fade-out');
  document.getElementById('game-wrap').style.display = 'block';
  setTimeout(()=>{ document.getElementById('title-screen').style.display='none'; }, 900);

  // Import Kaplay et démarrer
  const { default: kaplay } = await import("https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs");
  startGame(kaplay);
});

function startGame(kaplay) {

const k = kaplay({
  canvas:document.getElementById("canvas"),
  width:960,height:520,
  background:[18,50,130],
  global:false,
  debug:false,
});

Object.entries(visu).forEach(([n,u])=>k.loadSprite(n,u));

//état transformations
const S={
  mode:"pirate",
  hasShovel:false, shovelEq:false,
  hasMsg:false,
  hasRum:false,    rumUses:0, maxRum:5,
  hasKey:false,
  chestDug:false,
  fortDecrypted:false,
  fortUnlocked:false,
  caveUnlocked:false,
  won:false,
};

// palette couleurts
const C={
  gold:k.rgb(218,178,26),yellow:k.rgb(255,222,38),
  brown:k.rgb(98,52,12),brDk:k.rgb(55,25,5),
  sand:k.rgb(200,170,90),sandDk:k.rgb(148,118,48),
  stone:k.rgb(160,148,128),stoneDk:k.rgb(100,88,72),
  wood:k.rgb(110,68,22),woodDk:k.rgb(72,40,10),
  jungle:k.rgb(18,80,14),jungleDk:k.rgb(10,50,8),
  cave:k.rgb(40,28,18),
  navy:k.rgb(22,52,158),red:k.rgb(180,28,14),
  white:k.rgb(255,255,255),black:k.rgb(10,10,10),
  purL:k.rgb(175,78,238),
};

//scène déroulement à la mario

const GY=370, WW=3700;
const T64=64, T32=32;

k.scene("game",()=>{

  k.setGravity(1800);

  // fond
  k.add([k.sprite("sky"),k.pos(0,0),k.z(-10),k.fixed()]);
  k.add([k.rect(WW+200,140),k.pos(-100,GY+60),k.color(k.rgb(10,45,110)),k.z(-7)]);

  function cloud(cx,cy,sc=1){
    [[0,0,24],[30,6,18],[55,0,21],[80,8,14]].forEach(([dx,dy,r])=>
      k.add([k.circle(r*sc),k.pos(cx+dx*sc,cy+dy*sc),k.color(k.rgb(238,245,255)),k.opacity(.82),k.z(-8),k.fixed()]));
  }
  [70,250,490,720,950,1180,1520,1900,2200,2600,2950,3300].forEach((x,i)=>cloud(x,28+i%3*16,.88+i%2*.18));

  // Sols 
  function Sols(sprite,x1,x2,y,rows=1,yt=T64){
    const cols=Math.ceil((x2-x1)/yt)+1;
    for(let r=0;r<rows;r++)
      for(let i=0;i<cols;i++)
        k.add([k.sprite(sprite),k.pos(x1+i*yt,y+r*yt),k.z(1)]);
  }
  function murs(sprite,x,y,w,h,tw,th){
    const cols=Math.ceil(w/tw),rows=Math.ceil(h/th);
    for(let r=0;r<rows;r++)for(let cc=0;cc<cols;cc++)
      k.add([k.sprite(sprite),k.pos(x+cc*tw,y+r*th),k.z(3)]);
    k.add([k.rect(w,h),k.pos(x,y),k.anchor("topleft"),k.color(k.rgb(1,1,1)),k.opacity(0),k.area(),k.body({isStatic:true}),"wall",k.z(3)]);
  }
  //murs sans hitbox
  function fauxmurs(sprite,x,y,w,h,tw,th){
    const cols=Math.ceil(w/tw),rows=Math.ceil(h/th);
    for(let r=0;r<rows;r++)for(let cc=0;cc<cols;cc++)
      k.add([k.sprite(sprite),k.pos(x+cc*tw,y+r*th),k.z(3)]);
  }
  function platform(sprite,x,y,w,tw,th){
    const cols=Math.ceil(w/tw);
    for(let i=0;i<cols;i++)k.add([k.sprite(sprite),k.pos(x+i*tw,y),k.z(3)]);
    k.add([
      k.rect(w, th),
      k.pos(x, y),
      k.anchor("topleft"),
      k.area(),
      k.body({ isStatic: true }),
      k.opacity(0),
      k.z(2),
      "plat",
    ]);
  }

  //  Palmier 
  function palm(px,py=GY){
    for(let i=0;i<7;i++)k.add([k.sprite("trunk"),k.pos(px+i*1.4,py-32*(i+1)),k.z(4)]);
    const tx=px+7*1.4+11,ty=py-32*8;
    [[-62,-5,-38],[-48,-18,-60],[-32,-30,-78],[-9,-36,-92],[16,-30,92],[38,-18,62],[56,-5,38]].forEach(([ox,oy,ang])=>
      k.add([k.sprite("leaf"),k.pos(tx+ox,ty+oy),k.rotate(ang),k.z(5)]));
  }

  
  // plage 1 
  k.add([
    k.rect(WW, 80),
    k.pos(0, GY),
    k.anchor("topleft"),
    k.area(),
    k.body({ isStatic: true }),
    k.opacity(0),
    k.z(2),
    "ground",
  ]);

  Sols("sand",0,620,GY,2);


  // Palmiers déco
  palm(80); palm(350);

  // Message crypté (sable, clique)
  const msgX=180, msgY=GY-8;
  let msgPickedUp=false;
  const msgObj=k.add([k.rect(36,28),k.pos(msgX,msgY-28),k.color(k.rgb(210,185,120)),k.z(4)]);
  k.add([k.text("Parchemin",{size:9}),k.pos(msgX+4,msgY-30),k.z(5)]);
  k.add([k.text("Message",{size:8}),k.pos(msgX-4,msgY-42),k.color(C.gold),k.z(5)]);

  // Pelle (sur la plage)
  const SX=420,SY=GY-8;
  let shovelPickedUp=false;
  const sH=k.add([k.rect(7,42),k.pos(SX,SY-42),k.color(k.rgb(128,118,108)),k.rotate(-18),k.z(4)]);
  const sB=k.add([k.rect(16,13),k.pos(SX-5,SY-50),k.color(C.brDk),k.rotate(-18),k.z(4)]);
  k.add([k.text("Pelle",{size:9}),k.pos(SX-12,SY-64),k.color(C.gold),k.z(6)]);

  // Bouteille de rhum
  const RX=510,RY=GY;
  const rumBuriedSpot=k.add([k.rect(44,6),k.pos(RX-10,RY-4),k.color(C.yellow),k.opacity(.5),k.z(4)]);
  let rumBuriedT=0;rumBuriedSpot.onUpdate(()=>{rumBuriedT+=k.dt();rumBuriedSpot.opacity=.28+Math.sin(rumBuriedT*3)*.28;});
  k.add([k.text("Creuser ici",{size:8}),k.pos(RX-16,RY-22),k.color(C.gold),k.z(5),"mess"]);

  
  //jungle 
  
  Sols("jungle",600,1120,GY,2,T64);

  // Végétation
  [640,720,820,920,1020].forEach(x=>palm(x));
  
  [660,760,860,960].forEach(x=>k.add([k.circle(18),k.pos(x,GY-18),k.color(k.rgb(20,100,18)),k.z(4)]));

  
  // fort de france 
  
  const FORT_X=1100, FORT_W=700, FORT_H=240;

  // Sol fort 
 Sols("stone",FORT_X+30,FORT_X+FORT_W,GY,2,T32);
  Sols("sand",FORT_X-60,FORT_X+30,GY,2,T64);

  // Mur gauche avec porte
  fauxmurs("stone",FORT_X,GY-FORT_H,30,FORT_H,T32,20);
  // Mur du fond 
  fauxmurs("stone",FORT_X+30,GY-FORT_H,FORT_W-30,30,T32,20);
  // Mur droit déco seulement
  fauxmurs("stone",FORT_X+FORT_W,GY-FORT_H,40,FORT_H,T32,20);
 
  // Plateformes intérieures
  platform("stone",FORT_X+80,GY-90,140,T32,20);
  platform("stone",FORT_X+280,GY-175,120,T32,20);
  platform("stone",FORT_X+440,GY-250,100,T32,20);

  // Drapeau français
  const FLX=FORT_X+560,FLY=GY-FORT_H-72;
  k.add([k.rect(6,72),k.pos(FLX,FLY),k.color(C.woodDk),k.z(5)]);
  k.add([k.rect(15,28),k.pos(FLX+6,FLY),k.color(C.navy),k.z(5)]);
  k.add([k.rect(15,28),k.pos(FLX+20,FLY),k.color(C.white),k.z(5)]);
  k.add([k.rect(15,28),k.pos(FLX+34,FLY),k.color(C.red),k.z(5)]);

  // Gardes (formes Kaplay)
  spawnNpcMarin(k, C, FORT_X + 46, GY - 64);
  spawnNpcMarin(k, C, FORT_X - 60, GY - 64);


  // Table de décryptage 
  const TABLE_X=FORT_X+250,TABLE_Y=GY-22;
  k.add([k.rect(80,22),k.pos(TABLE_X,TABLE_Y),k.color(k.rgb(90,55,18)),k.area(),k.z(4),"decryptTable"]);
  k.add([k.rect(80,6),k.pos(TABLE_X,TABLE_Y),k.color(k.rgb(130,90,30)),k.z(5)]);
  k.add([k.text("Table\nDécryptage",{size:7}),k.pos(TABLE_X+4,TABLE_Y+6),k.color(C.gold),k.z(5)]);

  // Clef 
  const KX=FORT_X+490,KY=GY-278;
  let keyPickedUp=false;
  const keyH=k.add([k.rect(28,9),k.pos(KX,KY+5),k.color(C.gold),k.z(6)]);
  const keyR=k.add([k.circle(10),k.pos(KX-5,KY+5),k.color(C.gold),k.z(6)]);
  const keyO=k.add([k.circle(6),k.pos(KX-5,KY+5),k.color(k.rgb(220,190,255)),k.z(7)]);
  k.add([k.text("Clef du tresor",{size:8}),k.pos(KX-28,KY-20),k.color(C.gold),k.z(7)]);
  let kt=0;keyH.onUpdate(()=>{kt+=k.dt();const o=Math.sin(kt*2.2)*5;keyH.pos.y=KY+5+o;keyR.pos.y=KY+5+o;keyO.pos.y=KY+5+o;});
  
  //grotte pirate

  const CAVE_X=1800, CAVE_W=600, CAVE_H=300;
  Sols("cave",CAVE_X,CAVE_X+CAVE_W,GY,2,T64);

  
  fauxmurs("cave",CAVE_X,GY-CAVE_H,30,CAVE_H,T64,T64);   
  murs("cave",CAVE_X+30,GY-CAVE_H,CAVE_W-30,40,T64,T64);  
  fauxmurs("cave",CAVE_X+CAVE_W,GY-CAVE_H,40,CAVE_H,T64,T64); 

  // Stalagmites 
  [1900,1980,2060,2140,2220,2320].forEach(x=>{
    const h=20+Math.floor(Math.random()*30);
    k.add([
        k.rect(14, h),
        k.pos(x, GY - h),
        k.color(k.rgb(50,38,24)),
        k.area(),
        k.body({ isStatic: true }),
        k.z(4),]);
  });
  // Stalactites
  [1860,1940,2020,2100,2180,2280,2360].forEach(x=>{
    const h=15+Math.floor(Math.random()*25);
    k.add([k.rect(12,h),k.pos(x,GY-CAVE_H+40),k.color(k.rgb(45,34,22)),k.z(4)]);
  });
  
//pnj
  spawnNpcPirate(k, C, CAVE_X + 40, GY - 64);
  spawnNpcPirate(k, C, CAVE_X - 56, GY - 64);

  
  // faux coffre du trésor 
  const CCX=CAVE_X+380, CCY=GY;
  k.add([k.rect(54,32),k.pos(CCX-2,CCY+4),k.color(C.brown),k.z(3)]);
  k.add([k.rect(54,26),k.pos(CCX-2,CCY-22),k.color(C.brDk),k.z(4)]);
  k.add([k.rect(54,15),k.pos(CCX-2,CCY-37),k.color(C.brown),k.z(5)]);
  k.add([k.rect(54,5),k.pos(CCX-2,CCY-24),k.color(C.gold),k.z(6)])
  k.add([k.circle(7),k.pos(CCX+24,CCY-18),k.color(C.gold),k.z(7)]);
  k.add([k.rect(74,68),k.pos(CCX-12,CCY-44),k.area(),k.opacity(0),k.z(7),"coffre vide"]);

  
  
  // Joueur 

  const PW = 40, PH = 64;
  const SPD = 185;

  const player = k.add([
    k.sprite("pirate"),
    k.pos(60, GY - 98),
    k.anchor("topleft"),
    k.area(),
    k.body({ jumpForce: 580 }), //pour atteindre la plateforme
    k.z(9),
    "player",
  ]);

  k.onKeyPress("w", () => {
    if (S.won) return;
    if (player.isGrounded()) player.jump();
  });

  k.onUpdate(() => {
    if (S.won) return;
    let vx = 0;
    if (k.isKeyDown("arrowleft") || k.isKeyDown("a")) vx -= SPD;
    if (k.isKeyDown("arrowright") || k.isKeyDown("d")) vx += SPD;
    player.vel.x = vx;
    if (vx !== 0) player.flipX = vx < 0;

    const px = player.pos.x;
    const py = player.pos.y;

    if (px < 0) {
      player.pos.x = 0;
      player.vel.x = 0;
    }
    if (px > WW - PW) {
      player.pos.x = WW - PW;
      player.vel.x = 0;
    }
    if (py < -100) {
      player.pos.y = -100;
      player.vel.y = 0;
    }

    const atFortWall = px + PW > FORT_X && px < FORT_X + 36;
    if (atFortWall) {
      if (S.mode === "pirate") {
        player.pos.x = FORT_X - PW;
        player.vel.x = 0;
        document.getElementById("arrested-screen").classList.add("show");
      } else if (S.mode === "marin" && !S.fortUnlocked) {
        player.pos.x = FORT_X - PW;
        player.vel.x = 0;
        aide("Parlez au garde (E) pour obtenir l'autorisation d'entrer.");
      }
    }

    const atCaveEntry = px + PW > CAVE_X && px < CAVE_X + 46;
    if (atCaveEntry) {
      if (S.mode === "marin") {
        player.pos.x = CAVE_X - PW;
        player.vel.x = 0;
        aide("La grotte est reservee aux pirates ! Buvez le rhum (F) pour vous transformer.");
      } else if (S.mode === "pirate" && !S.caveUnlocked) {
        player.pos.x = CAVE_X - PW;
        player.vel.x = 0;
        aide("Parlez au garde pirate (E) pour entrer dans la grotte.");
      }
    }
  });

  k.onUpdate(() => {
    const tx = Math.max(480, Math.min(WW - 480, player.pos.x + 24));
    k.camPos(k.lerp(k.camPos(), k.vec2(tx, 260), 0.08));
  });

  // proximité pelle et interraction
  let nShovel=false,nMsg=false,nKey=false,nTable=false,nGuard=false,nCaveGuard=false;

  function rectOverlap(ax,ay,aw,ah, bx,by,bw,bh){
    return ax<bx+bw && ax+aw>bx && ay<by+bh && ay+ah>by;
  }

  
  k.onUpdate(()=>{
    const px=player.pos.x, py=player.pos.y;
    nGuard     = Math.abs(px-(FORT_X-60))  < 130 && py > GY-160;
    nCaveGuard = Math.abs(px-(CAVE_X-56))  < 130 && py > GY-160;
    nShovel    = shovelPickedUp?false: rectOverlap(px,py,PW,PH, SX-5,SY-55,25,55);
    nMsg       = msgPickedUp?false:   rectOverlap(px,py,PW,PH, msgX-5,msgY-35,50,40);
    nKey       = keyPickedUp?false:   rectOverlap(px,py,PW,PH, KX-10,KY-10,50,30);
    nTable     = rectOverlap(px,py,PW,PH, TABLE_X,TABLE_Y,85,30);
  });

  
  //  touche E pr ramasser / interagir
  
  k.onKeyPress("e",()=>{
    // Garde du fort (en marin uniquement)
    if(nGuard && S.mode==="marin" && !S.fortUnlocked){
      S.fortUnlocked=true;
      aide("Garde : Bonsoir, soldat. Vous pouvez entrer. Le passage est ouvert.");
      return;
    }
    if(nGuard && S.mode==="pirate"){
      aide("Le garde vous regarde avec mefiance. Transformez-vous en soldat marin d'abord (F).");
      return;
    }
    // Garde de la grotte (en pirate )
    if(nCaveGuard && S.mode==="pirate" && !S.caveUnlocked){
      S.caveUnlocked=true;
      aide("Garde pirate : Ah, un des notres ! Entrez, camarade. (Passage ouvert)");
      return;
    }
    if(nCaveGuard && S.mode==="marin"){
      aide("Le pirate vous bloque. Il ne laisse pas passer les soldats royaux.");
      return;
    }
    // Message crypté
    if(nMsg && !S.hasMsg){
      S.hasMsg=true; msgPickedUp=true;
      msgObj.destroy();
      updUI();
      aide("Message de La Buse recupere ! Consultez-le dans l'inventaire en cliquant dessus.");
      return;
    }
    // Pelle
    if(nShovel && !S.hasShovel){
      S.hasShovel=true;S.shovelEq=true; shovelPickedUp=true;
      sH.destroy();sB.destroy();
      player.use(k.sprite("pirateSh"));
      updUI();aide("Pelle recuperee ! Approchez-vous de la tache brillante sur la plage et appuyez sur F pour creuser.");
      return;
    }
    // Clef (en marin)
    if(nKey && !S.hasKey && S.mode==="marin"){
      S.hasKey=true; keyPickedUp=true;
      keyH.destroy();keyR.destroy();keyO.destroy();
      updUI();aide("Clef recuperee ! Revenez a la grotte de pirates (transformez-vous avec F)");
      return;
    }
    // Table de décryptage
    if(nTable && S.mode==="marin"){
      document.getElementById("modal-decrypt").classList.add("show");
      S.fortDecrypted=true;
      return;
    }
    
  });

  // Q pour creuser avec la pelle
  k.onKeyPress("q",()=>{
    if(!S.hasRum && S.hasShovel && S.shovelEq){
      const px=player.pos.x;
      if(Math.abs(px - RX) < 80){
        S.hasRum=true;S.rumUses=5;
        rumBuriedSpot.destroy();
        k.get("mess").forEach(o=>o.destroy());
        for(let i=0;i<12;i++){
          const dp=k.add([k.circle(3+Math.random()*3),k.pos(RX+Math.random()*44,RY),k.color(C.sandDk),k.z(9)]);
          const vx2=(Math.random()-.5)*80,vy2=-70-Math.random()*50;let lt=0;
          dp.onUpdate(()=>{lt+=k.dt();dp.pos.x+=vx2*k.dt();dp.pos.y+=vy2*k.dt();dp.opacity=Math.max(0,1-lt*2);if(lt>.9)dp.destroy();});
        }
        updUI();aide("Bouteille de rhum deterree ! Appuyez sur F pour la boire et changer de forme (5 utilisations).");
        return;
      }
    }
    if(!S.hasShovel) aide("Il vous faut une pelle pour creuser.");
    else if(!S.shovelEq) aide("Equipez la pelle d'abord (E).");
    else aide("Rien a creuser ici, cherchez la tache brillante sur la plage.");
  });

  //  F pr boire le rhum de transformation
  k.onKeyPress("f",()=>{
    if(S.hasRum && S.rumUses>0){
      S.rumUses--;
      if(S.mode==="pirate"){
        S.mode="marin";player.use(k.sprite("marin"));
        aide("Vous etes soldat marin ! Parlez au garde du Fort Royal (E), puis entrez. Rhum restant : "+S.rumUses+"/"+S.maxRum);
      } else {
        S.mode="pirate";player.use(k.sprite(S.shovelEq&&S.hasShovel?"pirateSh":"pirate"));
        aide("Vous etes pirate ! Entrez dans la Grotte plus a droite. Rhum restant : "+S.rumUses+"/"+S.maxRum);
      }
      if(S.rumUses===0){aide("Le rhum est epuise ! Plus de transformations possibles.");S.hasRum=false;}
      updUI();
      return;
    }
    if(S.hasRum && S.rumUses===0){aide("La bouteille est vide ! Plus de transformations possibles.");}
    if(!S.hasRum){aide("Vous n'avez pas de rhum. Creusez la tache brillante sur la plage avec la pelle (Q).");}
  });

   
  //clic sur le message crypté
  
  document.getElementById("ii-msg").addEventListener("click",()=>{
    if(S.hasMsg) document.getElementById("modal-crypto").classList.add("show");
  });

   

  function updUI(){
    const m=document.getElementById("mode-lbl");
    m.textContent=S.mode==="pirate"?"Pirate":"Soldat Marin";
    m.style.color=S.mode==="pirate"?"#ffe066":"#88ccff";

    document.getElementById("ii-pelle").className="ii"+(S.hasShovel?(S.shovelEq?" active":" owned"):"");
    document.getElementById("ii-msg").className="ii clickable"+(S.hasMsg?" owned":"");
    document.getElementById("ii-rhum").className="ii"+(S.hasRum?" active":"");
    document.getElementById("rhum-décompte").textContent=S.hasRum?`(${S.rumUses}/${S.maxRum})`:"";
    document.getElementById("ii-clef").className="ii"+(S.hasKey?" owned":"");
    document.getElementById("ii-trésor").className="ii"+(S.won?" active":"");
  }
  let hTO=null;
  function aide(msg){
    document.getElementById("aide").textContent=msg;
    if(hTO)clearTimeout(hTO);
    hTO=setTimeout(()=>{document.getElementById("aide").textContent="";},6500);
  }

  aide("Bienvenue a Port Louis ! Ramassez le message (E), puis la pelle (E), puis creusez (Q près de la tache brillante).");
  updUI();
});

k.go("game");
} // fin du jeu 
