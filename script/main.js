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
function Color(color) {
      var colors = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgrey: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            grey: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
         }
      switch (true) {
         case /^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(color):
            return hexToHSL(color);
            break;
         case /^hsla?\(((\d+(?:\.\d+)?)|\d+)%?\s*,\s*((\d+(?:\.\d+)?)|\d+)%?\s*,\s*((\d+(?:\.\d+)?)|\d+)%?(?:\s*,\s*((\d+(?:\.\d+)?)|\d+)%?)?\)$/i.test(color):
            return hslToHsl(color);
            break;
         case /^rgba?\(((\d+(?:\.\d+)?)|\d+)\s*,\s*((\d+(?:\.\d+)?)|\d+)\s*,\s*((\d+(?:\.\d+)?)|\d+)(?:\s*,\s*((\d+(?:\.\d+)?)|\d+)%?)?\)$/i.test(color):
            return rgbToHsl(color);
            break;
         case Object.keys(colors).includes(color.replaceAll(' ', '').toLowerCase()):
            return colorNameToHsl(color);
            break;
         default:
            console.warn(`Mushroom: The "${color}" color wasn't found!`);
            return undefined;
      }
      function hexToHSL(hex) {
         var result;
         if (hex.length == 4) {
            hex = hex.replace(/^#(.)(.)(.)$/, '#$1$1$2$2$3$3');
            result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
         } else if (hex.length == 5) {
            hex = hex.replace(/^#(.)(.)(.)(.)$/, '#$1$1$2$2$3$3$4$4');
            result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
         } else {
            result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
         }
         var r = parseInt(result[1], 16);
         var g = parseInt(result[2], 16);
         var b = parseInt(result[3], 16);
         r /= 255, g /= 255, b /= 255;
         var max = Math.max(r, g, b);
         var min = Math.min(r, g, b);
         var h, s, l = (max + min) / 2;
         if (max == min) {
            h = s = 0;
         } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
               case r:
                  h = (g - b) / d + (g < b ? 6 : 0);
                  break;
               case g:
                  h = (b - r) / d + 2;
                  break;
               case b:
                  h = (r - g) / d + 4;
                  break;
            }
            h /= 6;
         }
         h = Math.round(h * 360);
         s = Math.round(s * 100);
         l = Math.round(l * 100);
         if (hex.length == 5 || hex.length == 9) {
            var a = Number(parseInt(hex.substring(7, 9), 16) / 255).toFixed(2);
            return { h: h, s: s, l: l, a: a }
         } else {
            return { h: h, s: s, l: l, a: 1 }
         }
      }
      function rgbToHsl(rgb) {
         if (rgb.includes('rgba')) {
            var nums = rgb.substring(5, rgb.length - 1).split(",");
         } else {
            var nums = rgb.substring(4, rgb.length - 1).split(",");
         }
         var r = parseInt(nums[0]);
         var g = parseInt(nums[1]);
         var b = parseInt(nums[2]);
         r /= 255;
         g /= 255;
         b /= 255;
         var max = Math.max(r, g, b);
         var min = Math.min(r, g, b);
         var h, s, l = (max + min) / 2;
         if (max == min) {
            h = s = 0;
         } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
               case r:
                  h = (g - b) / d + (g < b ? 6 : 0);
                  break;
               case g:
                  h = (b - r) / d + 2;
                  break;
               case b:
                  h = (r - g) / d + 4;
                  break;
            }
            h /= 6;
         }
         h = Math.round(h * 360);
         s = Math.round(s * 100);
         l = Math.round(l * 100);
         if (rgb.includes('rgba')) {
            var a = nums[3];
            if (a == undefined) {
               a = 1;
            }
            if (a > 1) { a = 1 }
            return { h: h, s: s, l: l, a: a }
         } else {
            return { h: h, s: s, l: l, a: 1 }
         }
      }
      function hslToHsl(hsl) {
         if (hsl.includes('hsla')) {
            var nums = hsl.substring(5, hsl.length - 1).split(",");
         } else {
            var nums = hsl.substring(4, hsl.length - 1).split(",");
         }
         var h = parseInt(nums[0]);
         var s = parseInt(nums[1]);
         var l = parseInt(nums[2]);
         if (hsl.includes('hsla')) {
            var a = Number(nums[3]).toFixed(4);
            if (a == undefined) {
               a = 1;
            }
            return { h: h, s: s, l: l, a: a }
         } else {
            return { h: h, s: s, l: l, a: 1 }
         }
      }
      function colorNameToHsl(colorName) {
         return hexToHSL(colors[colorName.replaceAll(' ', '').toLowerCase()])
      }
   }
function toHex(h, s, l, a = 1) {
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
      var tohex = (x) => {
         var hex = Math.round(x * 255).toString(16);
         return hex.length === 1 ? '0' + hex : hex;
      };
      if (a != 1) {
         return `#${tohex(r)}${tohex(g)}${tohex(b)}${tohex(a)}`;
      } else {
         return `#${tohex(r)}${tohex(g)}${tohex(b)}`;
      }
   }
function ColorPicker() {
   event.preventDefault();
   function clamp(num, min, max) {
      return num <= min ?
         min :
         num >= max ?
         max :
         num
   }
   var colorPickerBackdrop = document.querySelector('color-picker-backdrop');
   var btn = colorPickerBackdrop.querySelector('button');
   var canvas = colorPickerBackdrop.querySelector('canvas');
   var span = colorPickerBackdrop.querySelector('span');
   var hue = colorPickerBackdrop.querySelector('.hue');
   var alpha = colorPickerBackdrop.querySelector('.alpha');
   var input = event.currentTarget;
   span.style.left = '299px';
   span.style.top = '1px';
   span.style.background = 'red';
   hue.value = 360;
   alpha.value = 1;
   canvas.width = canvas.height = 300;
   var ctx = canvas.getContext('2d');
   ctx.globalCompositeOperation='destination-over';
   var lg1 = ctx.createLinearGradient(0,300,0,0);
   var lg2 = ctx.createLinearGradient(0,0,300,0);
   lg1.addColorStop(0.05,'#000');
   lg1.addColorStop(0.95,'#0000');
   lg2.addColorStop(0.05,'#fff');
   lg2.addColorStop(0.95,'#fff0');
   ctx.fillStyle = lg1;
   ctx.fillRect(0, 0, 300, 300);
   ctx.fillStyle = lg2;
   ctx.fillRect(0, 0, 300, 300);
   ctx.fillStyle = 'red';
   ctx.fillRect(0, 0, 300, 300);
   hue.oninput = ()=> {
      ctx.clearRect(0, 0, 300, 300)
      ctx.fillStyle = lg1;
      ctx.fillRect(0, 0, 300, 300);
      ctx.fillStyle = lg2;
      ctx.fillRect(0, 0, 300, 300);
      ctx.fillStyle = `hsl(${event.currentTarget.value},100%,50%)`;
      ctx.fillRect(0, 0, 300, 300);
      var x = getComputedStyle(span).left.replace('px','');
      var y = getComputedStyle(span).top.replace('px','');
      var x = clamp(x,1,299);
      var y = clamp(y,1,299);
      var d = ctx.getImageData(x, y, 1, 1).data;
      var color = `rgba(${d[0]},${d[1]},${d[2]},${alpha.value})`;
      var color2 = `rgba(${d[0]},${d[1]},${d[2]})`;
      alpha.style.color = color2;
      span.style.background = color;
   }
   alpha.oninput = ()=> {
      var x = getComputedStyle(span).left.replace('px','');
      var y = getComputedStyle(span).top.replace('px','');
      var x = clamp(x,1,299);
      var y = clamp(y,1,299);
      var d = ctx.getImageData(x, y, 1, 1).data;
      var color = `rgba(${d[0]},${d[1]},${d[2]},${alpha.value})`;
      var color2 = `rgba(${d[0]},${d[1]},${d[2]})`;
      alpha.style.color = color2;
      span.style.background = color;
   }
   span.ontouchmove = span.ontouchstart = canvas.ontouchmove = canvas.ontouchstart = ()=> {
      var rect = canvas.getBoundingClientRect();
      var x = clamp((event.touches[0].clientX - rect.left),1,299);
      var y = clamp((event.touches[0].clientY - rect.top),1,299);
      span.style.top = y + 'px';
      span.style.left = x + 'px';
      var d = ctx.getImageData(x,y,1,1).data;
      var color = `rgba(${d[0]},${d[1]},${d[2]},${alpha.value})`;
      var color2 = `rgba(${d[0]},${d[1]},${d[2]})`;
      alpha.style.color = color2;
      span.style.background = color;
   }
   Show(colorPickerBackdrop);
   btn.onclick = ()=> {
      var x = getComputedStyle(span).left.replace('px', '');
      var y = getComputedStyle(span).top.replace('px', '');
      var x = clamp(x, 1, 299);
      var y = clamp(y, 1, 299);
      var d = ctx.getImageData(x,y,1,1).data;
      var color = `rgba(${d[0]},${d[1]},${d[2]},${alpha.value})`;
      input.value = input.innerHTML = toHex(Color(color).h,Color(color).s,Color(color).l,Color(color).a);
      input.style.color = (Color(color).l > 50 || Color(color).a < 0.8) ? '#000' : '#fff';
      input.style.background = color;
      Hide(colorPickerBackdrop);
      Hide(colorPickerBackdrop);
      CustomColor();
   };
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
   var inputValue = document.createElement('button');
   var span = document.createElement('span');
   div.appendChild(inputKey);
   div.appendChild(span);
   div.appendChild(inputValue);
   row.appendChild(div);
   span.textContent = ':';
   inputKey.className = 'key';
   inputKey.placeholder = 'Key Color';
   inputValue.className = 'value';
   var existingIndexes = Array.from(document.querySelectorAll('#custom-color .key')).map(elm =>
      Number(elm.getAttribute('index'))).sort((a, b) => a - b);
   var index = 1;
   while (existingIndexes.includes(index)) {
      index++;
   }
   inputKey.setAttribute('index', index);
   inputKey.value = 'color-' + index;
   var random = RandomColor()
   input.style.color = (Color(random).l > 50 || Color(random).a < 0.8) ? '#000' : '#fff';
   inputValue.innerHTML = inputValue.value = inputValue.style.background = random;
   inputKey.type = 'text';
   inputKey.oninput = CustomColor;
   inputValue.setAttribute('onclick','ColorPicker()');
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