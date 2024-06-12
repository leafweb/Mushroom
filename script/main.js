function Mode() {
  var storage = JSON.parse(localStorage.getItem('mushroom'));
  var darkmode;
  if (storage == undefined) {
    darkmode = 'auto';
    localStorage.setItem('mushroom', JSON.stringify({
      mode: darkmode
    }));
  } else {
    darkmode = storage.mode;
  }
  document.querySelector('menu .darkmode').innerHTML = typeof darkmode == 'boolean' ? darkmode ? 'Dark' : 'Light' : 'Auto';
  return darkmode;
}
function Darkmode(x) {
  M.setDarkmode(x);
  preM.setDarkmode(x);
  localStorage.setItem('mushroom', JSON.stringify({
    mode: M.darkmode
  }));
  document.querySelector('menu .darkmode').innerHTML = typeof M.darkmode == 'boolean' ? M.darkmode ? 'Dark' : 'Light' : 'Auto';
  Freeze(10);
  Forms();
  Statusbar();
  setTimeout(() => {
    Code();
    Palette();
  }, 500);
}
function Statusbar() {
  var TC = document.querySelector('meta[name="theme-color"]');
  TC.setAttribute('content', M.themeColor['background']);
}
function Freeze(x) {
  var all = document.querySelectorAll('*,*:after,*:before');
  all.forEach(elm => {
    elm.style.setProperty('transition', '0s');
  });
  setTimeout(() => {
    all.forEach(elm => {
      elm.style.removeProperty('transition');
    });
  }, x);
}
function Mirage() {
  var body = document.body;
  var check = document.querySelector('#mirage').checked;
  if (check) {
    body.style.setProperty('animation', 'filter 0.5s infinite');
  } else {
    body.style.removeProperty('animation');
  }
  localStorage.setItem('mirage', check);
}
function LoadMirage() {
  var body = document.body;
  var storage = localStorage.getItem('mirage');
  var data;
  if (storage == undefined) {
    data = false;
    localStorage.setItem('mushroom', JSON.stringify({
      mode: data
    }));
  } else {
    data = eval(storage);
  }
  var check = document.querySelector('#mirage').checked = data;
  if (data) {
    body.style.setProperty('animation', 'filter 0.5s infinite');
  } else {
    body.style.removeProperty('animation');
  }
}
function Show(x, y = 'show') {
  if (!x.classList.contains(y)) {
    x.classList.add(y);
  }
}
function Hide(x, y = 'show') {
  if (x.classList.contains(y)) {
    x.classList.remove(y);
  }
}
function Toggle(x, y = 'show') {
  x.classList.toggle(y);
}
function Menu() {
  var menu = document.querySelector('menu');
  var backdrop = document.querySelector('backdrop');
  Toggle(menu);
  Toggle(backdrop);
  backdrop.onclick = () => {
    Toggle(menu);
    Toggle(backdrop);
  };
}
function CopyBtn() {
  var copy = document.querySelectorAll('pre .copy');
  copy.forEach(elm => {
    elm.onclick = () => {
      try {
        navigator.clipboard.writeText(elm.parentNode.querySelector('code').innerText);
        Toast('Copied');
      } catch (error) {
        console.error(error.message);
        Toast('Error', ['error']);
      }
    };
  });
}
function Toast(massage, option) {
  var toast = document.querySelector('toast');
  if (!toast) {
    toast = document.createElement('toast');
    document.body.appendChild(toast);
  }
  if (!option) {
    option = [];
  }
  if (option.includes('small')) {
    toast.style.fontSize = '14px';
  } else if (option.includes('big')) {
    toast.style.fontSize = '20px';
  } else {
    toast.style.fontSize = '16px';
  }
  if (option.includes('error')) {
    toast.style.background = 'var(--inverse-error)';
    toast.style.color = 'var(--on-inverse-error)';
    toast.style.boxShadow = '0 0 30px -5px var(--inverse-error)';
  } else if (option.includes('surface')) {
    toast.style.background = 'var(--inverse-surface)';
    toast.style.color = 'var(--on-inverse-surface)';
    toast.style.boxShadow = '0 0 30px -5px var(--inverse-surface)';
  } else {
    toast.style.background = 'var(--inverse-primary)';
    toast.style.color = 'var(--on-inverse-primary)';
    toast.style.boxShadow = '0 0 30px -5px var(--inverse-primary)';
  }
  var show = toast.animate({
    opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
  }, {
    fill: 'both',
    duration: 3000
  }).play;
  toast.innerHTML = massage;
  show.onfinish = () => toast.remove();
}
function Highlights() {
  var code = document.querySelectorAll('pre');
  code.forEach(elm => {
    w3CodeColor(elm, elm.getAttribute('lang'));
    var copy = document.createElement('div');
    copy.className = 'copy symbol';
    elm.appendChild(copy);
    copy.innerHTML = 'content_copy';
  });
}
function Page(x) {
  var targetPage = document.querySelector(`page[name="p-${x}"]`);
  var targetBtn = document.querySelectorAll(`[name="pb-${x}"]`);
  var activePage = document.querySelector(`page.show`);
  var activeBtn = document.querySelectorAll(`[name^="pb-"].on`);
  if (activePage) {
    Hide(activePage);
  }
  ;
  if (activeBtn) {
    activeBtn.forEach(x => Hide(x, "on"));
  }
  if (targetPage) {
    Show(targetPage);
  }
  ;
  if (targetBtn) {
    targetBtn.forEach(x => Show(x, "on"));
  }
  ;
  var main = document.querySelector('main');
  main.scrollTop = 0;
}
function OpenUrl(x) {
  var a = document.createElement('a');
  a.href = x;
  a.target = '_blank';
  a.click();
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
  };
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
      result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    } else if (hex.length == 5) {
      hex = hex.replace(/^#(.)(.)(.)(.)$/, '#$1$1$2$2$3$3$4$4');
      result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    } else {
      result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    }
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h,
      s,
      l = (max + min) / 2;
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
      return {
        h: h,
        s: s,
        l: l,
        a: a
      };
    } else {
      return {
        h: h,
        s: s,
        l: l,
        a: 1
      };
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
    var h,
      s,
      l = (max + min) / 2;
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
      if (a > 1) {
        a = 1;
      }
      return {
        h: h,
        s: s,
        l: l,
        a: a
      };
    } else {
      return {
        h: h,
        s: s,
        l: l,
        a: 1
      };
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
      return {
        h: h,
        s: s,
        l: l,
        a: a
      };
    } else {
      return {
        h: h,
        s: s,
        l: l,
        a: 1
      };
    }
  }
  function colorNameToHsl(colorName) {
    return hexToHSL(colors[colorName.replaceAll(' ', '').toLowerCase()]);
  }
}
function ToHex(h, s, l, a = 1) {
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
  var tohex = x => {
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
  var colorPicker = document.querySelector('color-picker');
  var colorPickerBackdrop = document.querySelector('color-picker-backdrop');
  var btnSet = colorPicker.querySelector('.set');
  var btnCancel = colorPicker.querySelector('.cancel');
  var preview = colorPicker.querySelector('.preview');
  var ranges = colorPicker.querySelectorAll('input');
  var rh = colorPicker.querySelector('.hue');
  var rs = colorPicker.querySelector('.saturation');
  var rl = colorPicker.querySelector('.lightness');
  var ra = colorPicker.querySelector('.alpha');
  var input = event.currentTarget;
  var currentColor = input.value;
  var {
    h,
    s,
    l,
    a
  } = Color(currentColor);
  rh.value = h;
  rs.value = s;
  rl.value = l;
  ra.value = a;
  rs.style.color = `hsl(${h},100%,50%)`;
  rl.style.color = `hsl(${h},${s}%,50%)`;
  ra.style.color = `hsl(${h},${s}%,${l}%)`;
  preview.style.background = currentColor;
  Show(colorPickerBackdrop);
  ranges.forEach(x => {
    x.oninput = () => {
      rs.style.color = `hsl(${rh.value},100%,50%)`;
      rl.style.color = `hsl(${rh.value},${rs.value}%,50%)`;
      ra.style.color = `hsl(${rh.value},${rs.value}%,${rl.value}%)`;
      preview.style.background = `hsl(${rh.value},${rs.value}%,${rl.value}%,${ra.value})`;
    };
  });
  btnSet.onclick = () => {
    Hide(colorPicker);
    Hide(colorPickerBackdrop);
    var color = ToHex(rh.value, rs.value, rl.value, ra.value);
    input.style.color = Color(color).l > 50 || Color(color).a < 0.8 ? '#000' : '#fff';
    input.innerHTML = input.value = input.style.background = color;
    FormCustomColor();
  };
  btnCancel.onclick = () => {
    Hide(colorPicker);
    Hide(colorPickerBackdrop);
  };
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
  var toHex = x => {
    var hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  if (a !== 1) {
    return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(a)}`;
  } else {
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
}
function FormTheme() {
  var f = event.currentTarget;
  var data = new FormData(f);
  Darkmode(eval(data.get('theme')));
}
function FormHSL() {
  Freeze(10);
  var f = event.currentTarget;
  var data = new FormData(f);
  M.setHue(data.get('hue'));
  M.setSaturation(data.get('saturation'));
  M.setLightness(data.get('lightness'));
  preM.setHue(data.get('hue'));
  preM.setSaturation(data.get('saturation'));
  preM.setLightness(data.get('lightness'));
  document.querySelector('#FormHSL .o-hue').innerHTML = data.get('hue');
  document.querySelector('#FormHSL .o-saturation').innerHTML = data.get('saturation');
  document.querySelector('#FormHSL .o-lightness').innerHTML = data.get('lightness');
  document.querySelector('#FormColorName [name="color-name"]').value = M.color;
  var rotate = document.querySelector('#svg-color-rotate');
  rotate.style.transform = `rotate(${data.get('hue')}deg)`;
  Statusbar();
}
function FormColorName() {
  Freeze(10);
  var f = event.currentTarget;
  var data = new FormData(f);
  M.setColor(data.get('color-name'));
  preM.setColor(data.get('color-name'));
  document.querySelector('#FormHSL [name="hue"]').value = document.querySelector('#FormHSL .o-hue').innerHTML = M.hue;
  document.querySelector('#FormHSL [name="saturation"]').value = document.querySelector('#FormHSL .o-saturation').innerHTML = M.saturation;
  document.querySelector('#FormHSL [name="lightness"]').value = document.querySelector('#FormHSL .o-lightness').innerHTML = M.lightness;
  Statusbar();
}
function FormColorScheme() {
  var f = event.currentTarget;
  var data = new FormData(f);
  M.setColorScheme(data.get('color-scheme'));
  preM.setColorScheme(data.get('color-scheme'));
  var c1 = document.querySelector('#svg-color-1');
  var c2 = document.querySelector('#svg-color-2');
  var c3 = document.querySelector('#svg-color-3');
  var c4 = document.querySelector('#svg-color-4');
  switch (data.get('color-scheme')) {
    case 'Analogous':
      c1.setAttribute('transform', 'rotate(0 500 500)');
      c2.setAttribute('transform', 'rotate(30 500 500)');
      c3.setAttribute('transform', 'rotate(-30 500 500)');
      c4.setAttribute('transform', 'rotate(0 500 500)');
      break;
    case 'Complementary':
      c1.setAttribute('transform', 'rotate(0 500 500)');
      c2.setAttribute('transform', 'rotate(0 500 500)');
      c3.setAttribute('transform', 'rotate(-180 500 500)');
      c4.setAttribute('transform', 'rotate(-180 500 500)');
      break;
    case 'Triadic':
      c1.setAttribute('transform', 'rotate(0 500 500)');
      c2.setAttribute('transform', 'rotate(0 500 500)');
      c3.setAttribute('transform', 'rotate(120 500 500)');
      c4.setAttribute('transform', 'rotate(-120 500 500)');
      break;
    case 'Compound':
      c1.setAttribute('transform', 'rotate(0 500 500)');
      c2.setAttribute('transform', 'rotate(150 500 500)');
      c3.setAttribute('transform', 'rotate(0 500 500)');
      c4.setAttribute('transform', 'rotate(-150 500 500)');
      break;
    case 'Split-Complementary':
      c1.setAttribute('transform', 'rotate(0 500 500)');
      c2.setAttribute('transform', 'rotate(30 500 500)');
      c3.setAttribute('transform', 'rotate(180 500 500)');
      c4.setAttribute('transform', 'rotate(210 500 500)');
      break;
    case 'Monochromatic':
      c1.setAttribute('transform', 'rotate(0 500 500)');
      c2.setAttribute('transform', 'rotate(0 500 500)');
      c3.setAttribute('transform', 'rotate(0 500 500)');
      c4.setAttribute('transform', 'rotate(0 500 500)');
      break;
    case 'Tetradic':
      c1.setAttribute('transform', 'rotate(0 500 500)');
      c2.setAttribute('transform', 'rotate(60 500 500)');
      c3.setAttribute('transform', 'rotate(180 500 500)');
      c4.setAttribute('transform', 'rotate(240 500 500)');
      break;
    case 'Square':
      c1.setAttribute('transform', 'rotate(0 500 500)');
      c2.setAttribute('transform', 'rotate(90 500 500)');
      c3.setAttribute('transform', 'rotate(-90 500 500)');
      c4.setAttribute('transform', 'rotate(180 500 500)');
      break;
  }
}
function FormRandom() {
  Freeze(10);
  M.random();
  preM.setColor(M.color);
  document.querySelector('#FormColorName [name="color-name"]').value = M.color;
  document.querySelector('#FormHSL [name="hue"]').value = document.querySelector('#FormHSL .o-hue').innerHTML = M.hue;
  document.querySelector('#FormHSL [name="saturation"]').value = document.querySelector('#FormHSL .o-saturation').innerHTML = M.saturation;
  document.querySelector('#FormHSL [name="lightness"]').value = document.querySelector('#FormHSL .o-lightness').innerHTML = M.lightness;
  var rotate = document.querySelector('#svg-color-rotate');
  rotate.style.transform = `rotate(${M.hue}deg)`;
  Statusbar();
}
function FormPalette() {
  var f = event.currentTarget;
  M.setPalette(f.querySelector('[name="hasPalette"]').checked);
  M.setReversePalette(f.querySelector('[name="reversePalette"]').checked);
}
function Forms() {
  document.querySelector('#FormHSL [name="hue"]').value = document.querySelector('#FormHSL .o-hue').innerHTML = M.hue;
  document.querySelector('#FormHSL [name="saturation"]').value = document.querySelector('#FormHSL .o-saturation').innerHTML = M.saturation;
  document.querySelector('#FormHSL [name="lightness"]').value = document.querySelector('#FormHSL .o-lightness').innerHTML = M.lightness;
  document.querySelector(`#FormTheme input[placeholder="${typeof M.darkmode == 'boolean' ? M.darkmode ? 'Dark' : 'Light' : 'Auto'}"]`).checked = true;
  document.querySelector('#FormColorName [name="color-name"]').value = M.color;
  document.querySelector(`#FormColorScheme [value="${M.colorScheme}"]`).checked = true;
  document.querySelector('#FormPalette [name="hasPalette"]').checked = M.hasPalette;
  document.querySelector('#FormPalette [name="reversePalette"]').checked = M.reversePalette;
  var rotate = document.querySelector('#svg-color-rotate');
  rotate.style.transform = `rotate(${M.hue}deg)`;
  var c1 = document.querySelector('#svg-color-1');
  var c2 = document.querySelector('#svg-color-2');
  var c3 = document.querySelector('#svg-color-3');
  var c4 = document.querySelector('#svg-color-4');
  switch (M.colorScheme) {
    case 'Analogous':
      c1.setAttribute('transform', 'rotate(0 500 500)');
      c2.setAttribute('transform', 'rotate(30 500 500)');
      c3.setAttribute('transform', 'rotate(-30 500 500)');
      c4.setAttribute('transform', 'rotate(0 500 500)');
      break;
    case 'Complementary':
      c1.setAttribute('transform', 'rotate(0 500 500)');
      c2.setAttribute('transform', 'rotate(0 500 500)');
      c3.setAttribute('transform', 'rotate(-180 500 500)');
      c4.setAttribute('transform', 'rotate(-180 500 500)');
      break;
    case 'Triadic':
      c1.setAttribute('transform', 'rotate(0 500 500)');
      c2.setAttribute('transform', 'rotate(0 500 500)');
      c3.setAttribute('transform', 'rotate(120 500 500)');
      c4.setAttribute('transform', 'rotate(-120 500 500)');
      break;
    case 'Compound':
      c1.setAttribute('transform', 'rotate(0 500 500)');
      c2.setAttribute('transform', 'rotate(150 500 500)');
      c3.setAttribute('transform', 'rotate(0 500 500)');
      c4.setAttribute('transform', 'rotate(-150 500 500)');
      break;
    case 'Split-Complementary':
      c1.setAttribute('transform', 'rotate(0 500 500)');
      c2.setAttribute('transform', 'rotate(30 500 500)');
      c3.setAttribute('transform', 'rotate(180 500 500)');
      c4.setAttribute('transform', 'rotate(210 500 500)');
      break;
    case 'Monochromatic':
      c1.setAttribute('transform', 'rotate(0 500 500)');
      c2.setAttribute('transform', 'rotate(0 500 500)');
      c3.setAttribute('transform', 'rotate(0 500 500)');
      c4.setAttribute('transform', 'rotate(0 500 500)');
      break;
    case 'Tetradic':
      c1.setAttribute('transform', 'rotate(0 500 500)');
      c2.setAttribute('transform', 'rotate(60 500 500)');
      c3.setAttribute('transform', 'rotate(180 500 500)');
      c4.setAttribute('transform', 'rotate(240 500 500)');
      break;
    case 'Square':
      c1.setAttribute('transform', 'rotate(0 500 500)');
      c2.setAttribute('transform', 'rotate(90 500 500)');
      c3.setAttribute('transform', 'rotate(-90 500 500)');
      c4.setAttribute('transform', 'rotate(180 500 500)');
      break;
  }
}
function FormCustomColor() {
  var root = document.querySelector('#FormCustomColor');
  var inputKey = root.querySelectorAll('.key');
  var inputValue = root.querySelectorAll('.value');
  var removeBtn = root.querySelectorAll('button.error');
  var keys = [];
  var values = [];
  var obj = {};
  inputKey.forEach((elm, i) => {
    keys.push(elm.value);
    obj[elm.value] = inputValue[i].value;
  });
  removeBtn.forEach((elm, i) => {
    elm.onclick = () => {
      elm.parentNode.remove();
      keys.splice(i, 1);
      values.splice(i, 1);
      FormCustomColor();
    };
  });
  Freeze(10);
  M.clearCustomColor();
  M.addCustomColor(obj);
  preM.clearCustomColor();
  preM.addCustomColor(obj);
  if (M.error) {
    Toast(M.errorNote, ['error']);
  }
}
function AddRow() {
  var row = document.querySelector('#FormCustomColor .row');
  var existingIndexes = Array.from(document.querySelectorAll('#FormCustomColor .key')).map(elm => Number(elm.getAttribute('index'))).sort((a, b) => a - b);
  var index = 1;
  while (existingIndexes.includes(index)) {
    index++;
  }
  if (index <= 10) {
    var div = document.createElement('div');
    var inputKey = document.createElement('input');
    var colorBtn = document.createElement('button');
    var removeBtn = document.createElement('button');
    div.appendChild(inputKey);
    div.appendChild(colorBtn);
    div.appendChild(removeBtn);
    row.appendChild(div);
    inputKey.className = 'key';
    inputKey.placeholder = 'Key Color';
    colorBtn.className = 'value';
    removeBtn.className = 'symbol error';
    removeBtn.innerHTML = 'delete';
    inputKey.setAttribute('index', index);
    inputKey.value = 'color-' + index;
    var random = RandomColor();
    colorBtn.style.color = Color(random).l > 50 || Color(random).a < 0.8 ? '#000' : '#fff';
    colorBtn.innerHTML = colorBtn.value = colorBtn.style.background = random;
    inputKey.type = 'text';
    colorBtn.setAttribute('onclick', 'ColorPicker()');
    FormCustomColor();
  } else {
    Toast('Limited: You cannot add new custom colors', ['error']);
  }
}
function DynamicTab(x) {
  var STATIC = document.querySelector('#forms .static');
  var DYNAMIC = document.querySelector('#forms .dynamic');
  var s = document.querySelector('[name="p-brush"] .b-static');
  var d = document.querySelector('[name="p-brush"] .b-dynamic');
  var img = DYNAMIC.querySelector('img.on');
  if (x) {
    Hide(STATIC);
    Show(DYNAMIC);
    Hide(s);
    Show(d);
    if (img) Dynamic(img);
    Freeze(10);
  } else {
    Hide(DYNAMIC);
    Show(STATIC);
    Hide(d);
    Show(s);
    M.setColor(STATIC.querySelector('#forms [name="color-name"]').value);
    preM.setColor(STATIC.querySelector('#forms [name="color-name"]').value);
    M.clearCustomColor();
    preM.clearCustomColor();
    M.setColorScheme(document.querySelector('#FormColorScheme [name="color-scheme"]:checked').value);
    preM.setColorScheme(document.querySelector('#FormColorScheme [name="color-scheme"]:checked').value);
    document.querySelector('#forms .custom-color .row').innerHTML = '';
    FormCustomColor();
    Statusbar();
    Freeze(10);
  }
}
function TabImage() {
  var r = document.querySelector('#forms .dynamic');
  var images = r.querySelectorAll('.images img');
  images.forEach(img => {
    img.onclick = () => {
      images.forEach(x => Hide(x, 'on'));
      Show(event.currentTarget, 'on');
      Dynamic(event.currentTarget);
    };
  });
}
function Dynamic(img) {
  Freeze(10);
  M.setDynamicColor(img);
  preM.setDynamicColor(img);
  Statusbar();
}
function FormDynamic() {
  Freeze(10);
  var reader = new FileReader();
  var images = document.querySelector('#forms .images');
  reader.readAsDataURL(event.currentTarget.files[0]);
  reader.onload = () => {
    var data = reader.result;
    var img = new Image();
    img.src = data;
    img.onload = () => {
      Dynamic(img);
    };
  };
  Statusbar();
}
TabImage();
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
    inpuCustomColor.innerHTML = '<div style="background: var(--surface-container)">-</div>';
  }
  mainPalette.innerHTML = '';
  for (i in M.themeColor) {
    mainPalette.innerHTML += `<div><div class="color" style="background: var(--${i})"></div><div class="label">${i}</div></div>`;
  }
  otherPalette.innerHTML = '';
  if (M.palette) {
    for (i in M.palette) {
      otherPalette.innerHTML += `<div><div class="color" style="background: var(--${i})"></div><div class="label">${i}</div></div>`;
    }
  } else {
    otherPalette.innerHTML = '<h3 class="c">No palette!<h3>';
  }
}
function Code() {
  var codeJs = document.querySelector('#codeJs');
  var codeCss = document.querySelector('#codeCss');
  var primarySettings = {
    color: 'blue violet',
    addTo: ':root',
    prefix: '',
    darkmode: 'auto',
    hasPalette: false,
    reversePalette: false,
    colorScheme: 'Analogous',
    customColor: {}
  };
  var secondarySettings = {
    color: M.color,
    addTo: M.addTo,
    prefix: M.prefix,
    darkmode: M.darkmode,
    hasPalette: M.hasPalette,
    reversePalette: M.reversePalette,
    colorScheme: M.colorScheme,
    customColor: M.customColor
  };
  var difference = Object.keys(primarySettings).reduce((diff, key) => {
    if (primarySettings[key] !== secondarySettings[key]) {
      diff[key] = secondarySettings[key];
    }
    return diff;
  }, {});
  var code = '';
  if (Object.keys(difference).length > 1) {
    code = 'var primarySettings = {';
    for (i in difference) {
      if (typeof difference[i] == 'string') {
        code += `\n   ${i}: "${difference[i]}",`;
      } else if (typeof difference[i] == 'object') {
        if (JSON.stringify(difference[i]) == '{}') {
          code += '';
        } else {
          code += `\n   ${i}: ${JSON.stringify(difference[i])},`;
        }
      } else {
        code += `\n   ${i}: ${difference[i]},`;
      }
    }
    code += '\n};\n\n';
    code += 'var M = Mushroom(primarySettings);';
  } else {
    code += 'var M = Mushroom();';
  }
  codeJs.innerHTML = '<code>' + code + '</code>';
  codeCss.innerHTML = '<code>' + M.code + '</code>';
  w3CodeColor(codeJs, 'js');
  w3CodeColor(codeCss, 'css');
  codeJs.innerHTML += '<div class="copy symbol">content_copy</div>';
  codeCss.innerHTML += '<div class="copy symbol">content_copy</div>';
  CopyBtn();
}
let M = Mushroom();
let preM = Mushroom({
  addTo: 'pre,color-picker',
  hasPalette: true,
  reversePalette: true,
});
M.setDarkmode(Mode());
preM.setDarkmode(Mode());
Forms();
Highlights();
CopyBtn();
Statusbar();
LoadMirage();
Freeze(10);
var PCS = window.matchMedia("(prefers-color-scheme: dark)");
PCS.onchange = e => {
  Freeze(10);
};