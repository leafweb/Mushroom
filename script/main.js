function Mode() {
   let mode = eval(localStorage.getItem('mushroom-darkmode'));
   if (mode == undefined) {
      mode = false;
      localStorage.setItem('mushroom-darkmode', mode);
   }
   document.querySelector('header>.darkmode').innerHTML = mode ? 'light_mode' : 'dark_mode';
   return mode;
}
function Darkmode() {
   Freeze();
   M.toggleMode();
   preM.toggleMode();
   localStorage.setItem('mushroom-darkmode', M.darkmode);
   document.querySelector('header>.darkmode').innerHTML = M.darkmode ? 'light_mode' : 'dark_mode';
   setTimeout(Code, 200);
   Statusbar();
}
function Statusbar() {
   var TC = document.querySelector('meta[name="theme-color"]');
   TC.setAttribute('content', M.themeColor['surface-container']);
}
function Show(x, y = 'show') { if (!x.classList.contains(y)) { x.classList.add(y) } };
function Hide(x, y = 'show') { if (x.classList.contains(y)) { x.classList.remove(y) } };
function Toggle(x, y = 'show') { x.classList.toggle(y) };
function Menu() {
   var menu = document.querySelector('menu');
   var menuBackdrop = document.querySelector('menu-backdrop');
   Toggle(menu);
   Toggle(menuBackdrop);
}
function RandomColor() {
   var h = Math.round(Math.random() * 360);
   var s = Math.round(Math.random() * 100);
   var l = Math.round(Math.random() * 100);
   var a = 1;
   h /= 360;
   s /= 100;
   l /= 100;
   let r, g, b;
   if (s === 0) {
      r = g = b = l;
   } else {
      var hue2rgb = (p, q, t) => {
         if (t < 0) t += 1;
         if (t > 1) t -= 1;
         if (t < 1 / 6) return p + (q - p) * 6 * t;
         if (t < 1 / 2) return q;
         if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
         return p;
      };
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
   }
   var toHex = (x) => {
      var hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
   };
   if (a !== 1) {
      return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(a)}`;
   } else {
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
   }
}
function Page(x) {
   var targetPage = document.querySelector(`page[name="p-${x}"]`);
   var targetBtn = document.querySelector(`[name="pb-${x}"]`);
   var activeBtn = document.querySelector(`[name^="pb-"].on`);
   var activePage = document.querySelector(`page.show`);
   if (activePage) { Hide(activePage) };
   if (activeBtn) { Hide(activeBtn, "on") };
   if (targetPage) { Show(targetPage) };
   if (targetBtn) { Show(targetBtn, "on") };
   TabOn();
}
function TabOn() {
   var tab = document.querySelector('tabbar>tab.on');
   var tabon = document.querySelector('tabbar>div.tabon');
   var wave = document.querySelector('tabbar>div.wave');
   var num = tab.offsetLeft + Number(getComputedStyle(tab).width.replace('px', '')) / 2 + 'px';
   tabon.style.left = wave.style.left = num;
}
function CopyBtn() {
   var copy = document.querySelectorAll('pre .copy');
   copy.forEach(elm => {
      elm.onclick = () => {
         try {
            navigator.clipboard.writeText(elm.parentNode.querySelector('code').innerText);
            Toast('Copied')
         } catch (error) {
            console.error(error.message);
            Toast('Error')
         }
      }
   });
}
function Highlights() {
   var code = document.querySelectorAll('pre');
   code.forEach(elm => {
      w3CodeColor(elm, elm.getAttribute('lang'));
      var copy = document.createElement('div');
      copy.className = 'copy symbol';
      elm.appendChild(copy);
      copy.innerHTML = 'content_copy'
   });
}
function Palette() {
   var inpuColor = document.querySelector('#input-color');
   var inpuCustomColor = document.querySelector('#input-custom-color');
   var mainPalette = document.querySelector('#main-palette');
   var otherPalette = document.querySelector('#other-palette');
   inpuColor.innerHTML = M.color;
   inpuCustomColor.innerHTML = '';
   if (Object.keys(M.customColor) != '') {
      for (i in M.customColor) {
         inpuCustomColor.innerHTML += `<div style="background: var(--${i});color: var(--on-${i})">${M.customColor[i]}</div>`;
      }
   } else {
      inpuCustomColor.innerHTML = '<div style="background: var(--surface)">-</div>';
   }
   mainPalette.innerHTML = '';
   for (i in M.themeColor) {
      mainPalette.innerHTML += `<div><div class="color ripple" style="background: var(--${i})"></div><div class="label">${i}</div></div>`;
      Ripple();
   }
   otherPalette.innerHTML = '';
   if (M.palette) {
      for (i in M.palette) {
         otherPalette.innerHTML += `<div class="ripple"><div class="color" style="background: var(--${i})"></div><div class="label">${i}</div></div>`;
         Ripple();
      }
   } else {
      otherPalette.innerHTML = '<h3 class="c">No palette!<h3>';
   }
}
function Freeze() {
   var all = document.querySelectorAll('*,*:after,*:before');
   all.forEach(elm => {
      elm.style.setProperty('transition', '0s');
   });
   setTimeout(() => {
      all.forEach(elm => {
         elm.style.removeProperty('transition');
      });
   }, 100);
}
function H(x) {
   Freeze();
   M.setHue(x);
   HSL();
   InsertInput();
}
function S(x) {
   Freeze();
   M.setSaturation(x);
   HSL();
   InsertInput();
}
function L(x) {
   Freeze();
   M.setLightness(x);
   HSL();
   InsertInput();
}
function HSL() {
   var inputH = document.querySelector('#input-h');
   var inputS = document.querySelector('#input-s');
   var inputL = document.querySelector('#input-l');
   var outputH = document.querySelector('#output-h');
   var outputS = document.querySelector('#output-s');
   var outputL = document.querySelector('#output-l');
   inputH.value = outputH.innerHTML = M.hue;
   inputS.value = outputS.innerHTML = M.saturation;
   inputL.value = outputL.innerHTML = M.lightness;
   ColorScheme();
   Statusbar();
}
function Input(x) {
   Freeze();
   M.setColor(x);
   preM.setColor(x);
   HSL();
}
function Random() {
   Freeze();
   M.random();
   HSL();
   InsertInput();
}
function InsertInput() {
   document.querySelector('#input').value = M.color;
   preM.setColor(M.color);
}
function Code() {
   var codeJs = document.querySelector('#codeJs');
   var codeCss = document.querySelector('#codeCss');
   var code = 'let M = Mushroom();';
   code += `\nM.setColor("${M.color}");`;
   code += `\nM.setDarkmode(${M.darkmode});`;
   code += `\nM.setPalette(${M.hasPalette});`;
   code += `\nM.setReversePalette(${M.reversePalette});`;
   code += `\nM.setColorScheme("${M.colorScheme}");`;
   code += `\nM.addCustomColor(${JSON.stringify(M.customColor)});`;
   codeJs.innerHTML = '<code>' + code + '</code>';
   codeCss.innerHTML = '<code>' + M.code + '</code>';
   w3CodeColor(codeJs, 'js');
   w3CodeColor(codeCss, 'css');
   codeJs.innerHTML += '<div class="copy symbol">content_copy</div>';
   codeCss.innerHTML += '<div class="copy symbol">content_copy</div>';
   CopyBtn();
}
function ColorScheme() {
   var slice = document.querySelectorAll('#svg-g>*');
   for (var i = 0; i < slice.length; i++) {
      slice[i].setAttribute('fill', `hsl(${(i*30) + M.hue},${M.saturation}%,50%)`)
   }
}
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
}
function CustomColor() {
   var root = document.querySelector('#custom-color');
   var inputKey = root.querySelectorAll('.key');
   var inputValue = root.querySelectorAll('.value');
   var btn = root.querySelector('button');
   var keys = [];
   var values = [];
   var obj = {};
   inputKey.forEach((elm, index) => {
      if (elm.value != '') {
         keys.push(elm.value);
         obj[elm.value] = inputValue[index].value;
      }
   });
   inputValue.forEach(elm => {
      if (elm.value != '') {
         values.push(elm.value);
      }
   });
   if (inputKey.length > 1) {
      for (var i = 0; i < inputKey.length; i++) {
         if (inputKey[i].value === '' && inputValue[i].value === '') {
            inputKey[i].parentNode.remove();
            keys.splice(i, 1);
            values.splice(i, 1);
            break;
         }
      }
   }
   M.clearCustomColor();
   M.addCustomColor(obj);
}
function AddRow() {
   var row = document.querySelector('#custom-color .row');
   var div = document.createElement('div');
   var inputKey = document.createElement('input');
   var inputValue = document.createElement('input');
   var span = document.createElement('span');
   div.appendChild(inputKey);
   div.appendChild(span);
   div.appendChild(inputValue);
   row.appendChild(div);
   span.textContent = ':';
   inputKey.className = 'key';
   inputKey.placeholder = 'Key Color';
   inputValue.className = 'value';
   inputValue.placeholder = 'Color';
   var existingIndexes = Array.from(document.querySelectorAll('#custom-color .key')).map(elm =>
      Number(elm.getAttribute('index'))).sort((a, b) => a - b);
   var index = 1;
   while (existingIndexes.includes(index)) {
      index++;
   }
   inputKey.setAttribute('index', index);
   inputKey.value = 'color-' + index;
   inputValue.value = RandomColor();
   inputKey.type = inputValue.type = 'text';
   inputKey.oninput = inputValue.oninput = CustomColor;
   CustomColor();
}
function Toast(massage) {
   var toast = document.querySelector('toast');
   if (!toast) {
      toast = document.createElement('toast');
      document.body.appendChild(toast);
   }
   var show = toast.animate({
      opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
   }, {
      fill: 'both',
      duration: 3000,
   }).play;
   toast.innerHTML = massage;
   show.onfinish = () => toast.remove();
}

let M = Mushroom();
let preM = Mushroom('pre');
M.setDarkmode(Mode());
preM.setDarkmode(Mode());
preM.setPalette(true);

Highlights();
CopyBtn();
Random();
ColorScheme();
CustomColor();
Statusbar();

less.pageLoadFinished.then(() => {
   console.clear();
   console.log('%cMushrom.v3', 'background: var(--primary);color: var(--on-primary);padding: 2px 5px;border-radius:5px;')
});