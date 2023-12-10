var mode = eval(localStorage.getItem('darkmode'));
var TC = document.querySelector('meta[name="theme-color"]');
if (mode == undefined) {
   mode = false;
   localStorage.setItem('darkmode', mode);
}
var M = Mushroom();
M.random();
M.setDarkmode(mode);
TC.setAttribute('content',M.themeColor.surface);
function Darkmode() {
   M.toggleMode();
   localStorage.setItem('darkmode', M.darkmode);
   TC.setAttribute('content',M.themeColor.surface);
   Palette();
   Code();
}
function Menu() {
   var menu = document.querySelector('menu');
   var menuBackdrop = document.querySelector('menu-backdrop');
   menu.classList.toggle('on');
   menuBackdrop.classList.toggle('on');
   menuBackdrop.onclick = () => {
      menu.classList.toggle('on');
      menuBackdrop.classList.toggle('on');
   }
}
var tab = document.querySelectorAll('.tab');
tab.forEach(x => {
   x.onclick = (e) => {
      var a = e.currentTarget;
      tab.forEach(y => {
         if (y.classList.contains('on')) {
            y.classList.remove('on')
         }
      })
      a.classList.add('on');
      document.querySelectorAll('page').forEach(z => {
            if (z.classList.contains('on')) {
               z.classList.remove('on')
            }
         })
      document.querySelector(`#${a.getAttribute('for')}`).classList.add('on');
      document.querySelector('#title').innerHTML = a.getAttribute('name');
      if (docs.scrollTop >= 200 && docs.classList.contains('on')) {
         if (!goToUp.classList.contains('on')) {
            goToUp.classList.add('on');
            console.log(1);
         }
      } else {
         if (goToUp.classList.contains('on')) {
            goToUp.classList.remove('on');
         }
      }
   }
})
function page(a) {
   tab.forEach(y => {
      if (y.classList.contains('on')) {
         y.classList.remove('on')
      }
   })
   document.querySelector(`tabbar>*[for="${a}"]`).classList.add('on');
   document.querySelector(`navbar>div>*[for="${a}"]`).classList.add('on');
   document.querySelectorAll('page').forEach(z => {
      if (z.classList.contains('on')) {
          z.classList.remove('on')
      }
   })
   if (docs.scrollTop >= 200 && docs.classList.contains('on')) {
      if (!goToUp.classList.contains('on')) {
         goToUp.classList.add('on');
         console.log(1);
      }
   } else {
      if (goToUp.classList.contains('on')) {
         goToUp.classList.remove('on');
      }
   }
   document.querySelector(`#${a}`).classList.add('on');
}
var H = document.querySelector('#H');
var S = document.querySelector('#S');
var L = document.querySelector('#L');
var oH = document.querySelector('#oH');
var oS = document.querySelector('#oS');
var oL = document.querySelector('#oL');
H.value = M.hue;
S.value = M.saturation;
L.value = M.lightness;
oH.innerHTML = M.hue;
oS.innerHTML = M.saturation;
oL.innerHTML = M.lightness;
function fH(x){
   M.setHue(x);
   ColorScheme();
   oH.innerHTML = M.hue;
   Palette();
   Code();
   TC.setAttribute('content',M.themeColor.surface);
}
function fS(x){
   M.setSaturation(x);
   ColorScheme();
   oS.innerHTML = M.saturation;
   Palette();
   Code();
   TC.setAttribute('content',M.themeColor.surface);
}
function fL(x){
   M.setLightness(x);
   oL.innerHTML = M.lightness;
   Palette();
   Code();
   TC.setAttribute('content',M.themeColor.surface);
}
function fR(){
   M.random();
   H.value = M.hue;
   S.value = M.saturation;
   L.value = M.lightness;
   ColorScheme();
   oH.innerHTML = M.hue;
   oS.innerHTML = M.saturation;
   oL.innerHTML = M.lightness;
   Palette();
   Code();
   TC.setAttribute('content',M.themeColor.surface);
}
function Input(x){
   M.setColor(x)
   H.value = M.hue;
   S.value = M.saturation;
   L.value = M.lightness;
   ColorScheme();
   oH.innerHTML = M.hue;
   oS.innerHTML = M.saturation;
   oL.innerHTML = M.lightness;
   Palette();
   Code();
   TC.setAttribute('content',M.themeColor['surface-variant']);
}
function ColorScheme() {
   var slice = document.querySelectorAll('#svg-g>*');
   for (var i = 0; i < slice.length; i++) {
      slice[i].setAttribute('fill', `hsl(${(i*30) + M.hue},${M.saturation}%,50%)`)
   }
}
ColorScheme();
function SetColorScheme(x) {
   var c1 = document.querySelector('#svg-color-1');
   var c2 = document.querySelector('#svg-color-2');
   var c3 = document.querySelector('#svg-color-3');
   var c4 = document.querySelector('#svg-color-4');
   switch (x) {
      case 'Analogous':
         M.setColorScheme(x);
         c1.setAttribute('transform', 'rotate(0 500 500)');
         c2.setAttribute('transform', 'rotate(30 500 500)');
         c3.setAttribute('transform', 'rotate(-30 500 500)');
         c4.setAttribute('transform', 'rotate(0 500 500)');
         break;
      case 'Complementary':
         M.setColorScheme(x);
         c1.setAttribute('transform', 'rotate(0 500 500)');
         c2.setAttribute('transform', 'rotate(0 500 500)');
         c3.setAttribute('transform', 'rotate(-180 500 500)');
         c4.setAttribute('transform', 'rotate(-180 500 500)');
         break;
      case 'Triadic':
         M.setColorScheme(x);
         c1.setAttribute('transform', 'rotate(0 500 500)');
         c2.setAttribute('transform', 'rotate(60 500 500)');
         c3.setAttribute('transform', 'rotate(180 500 500)');
         c4.setAttribute('transform', 'rotate(240 500 500)');
         break;
      case 'Compound':
         M.setColorScheme(x);
         c1.setAttribute('transform', 'rotate(0 500 500)');
         c2.setAttribute('transform', 'rotate(150 500 500)');
         c3.setAttribute('transform', 'rotate(0 500 500)');
         c4.setAttribute('transform', 'rotate(-150 500 500)');
         break;
      case 'Split-Complementary':
         M.setColorScheme(x);
         c1.setAttribute('transform', 'rotate(0 500 500)');
         c2.setAttribute('transform', 'rotate(30 500 500)');
         c3.setAttribute('transform', 'rotate(180 500 500)');
         c4.setAttribute('transform', 'rotate(210 500 500)');
         break;
      case 'Monochromatic':
         M.setColorScheme(x);
         c1.setAttribute('transform', 'rotate(0 500 500)');
         c2.setAttribute('transform', 'rotate(0 500 500)');
         c3.setAttribute('transform', 'rotate(0 500 500)');
         c4.setAttribute('transform', 'rotate(0 500 500)');
         break;
      case 'Tetradic':
         M.setColorScheme(x);
         c1.setAttribute('transform', 'rotate(0 500 500)');
         c2.setAttribute('transform', 'rotate(0 500 500)');
         c3.setAttribute('transform', 'rotate(120 500 500)');
         c4.setAttribute('transform', 'rotate(-120 500 500)');
         break;
   }
   Palette();
   Code();
}
function Palette(){
   var color = document.querySelector('#color');
   var mainColor = document.querySelector('#main-color');
   color.innerHTML = `<div>${M.color}</div>`;
   color.style.background = M.color;
   mainColor.innerHTML = '';
   for (i in M.themeColor){
      mainColor.innerHTML +=   `<div style='background:${M.themeColor[i]}'>
                                  <div>${i}</div>
                                  <div>${M.themeColor[i]}</div>
                               </div>`
   }
   var palette = document.querySelector('#palette');
   if (M.palette !== undefined) {
      palette.innerHTML = '';
      for (i in M.palette) {
         palette.innerHTML += `<div style='background:${M.palette[i]}'>
                                       <div>${i}</div>
                                       <div>${M.palette[i]}</div>
                                     </div>`
      }
      palette.className = '';
   } else {
      palette.innerHTML = `No Palette`;
      palette.className = 'mono';
   }
}
Palette();
function Code(){
   var codeJs = document.querySelector('#codeJs');
   var codeCss = document.querySelector('#codeCss');
   var code = 'let M = Mushroom();';
   code += `\nM.setColor("${M.color}");`;
   code += `\nM.setDarkmode("${M.darkmode}");`;
   code += `\nM.setPalette("${M.hasPalette}");`;
   code += `\nM.setReversePalette("${M.reversePalette}");`;
   code += `\nM.setColorScheme("${M.colorScheme}");`;
   codeJs.innerHTML = code;
   codeCss.innerHTML = M.code;
}
Code();
var goToUp = document.querySelector('.goToUp');
var docs = document.querySelector('#Docs');
docs.onscroll = ()=> {
   if (docs.scrollTop >= 200 && docs.classList.contains('on')) {
      if (!goToUp.classList.contains('on')) {
         goToUp.classList.add('on');
         console.log(1);
      }
   } else {
      if (goToUp.classList.contains('on')) {
         goToUp.classList.remove('on');
      }
   }
}
goToUp.onclick = ()=>{
   docs.scrollTop = 0;
}