function Mushroom(addTo) {
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
   function ThemeColor(color, customColor, darkmode, colorScheme) {
      var [H, S, L] = [Color(color).h, Color(color).s, Color(color).l];
      var mode = darkmode ? 'dark' : 'light';
      var result = {};
      var data = {
         name: {
            accent: [],
            custom: [],
            error: ['error'],
            glass: ['glass', 'glass-container', 'glass-variant'],
            surface: ['surface', 'surface-container-low', 'surface-container', 'surface-container-high', 'surface-variant'],
            background: ['background'],
            outline: ['outline', 'outline-variant'],
         },
         hue: {
            accent: [H],
            custom: [],
            error: 0,
            glass: H,
            surface: H,
            background: H,
            outline: H
         },
         saturation: {
            accent: S,
            custom: [],
            error: 100,
            glass: [S / 3, S/3, S],
            surface: [S/3, S/3, S/3, S/3, S/2],
            background: S / 3,
            outline: [S/3, S/2]
         },
         lightness: {
            light: {
               accent: [[40, 100], [70 + (L/10), 20 - (L/10)]],
               custom: [[40, 100], [80, 20]],
               error: [[40, 100], [80, 20]],
               glass: [70, 100, 60 + (L/10)],
               surface: [
                  [85+(L/10),40-(L/10)],
                  [82+(L/10),36-(L/10)],
                  [79+(L/10),32-(L/10)],
                  [76+(L/10),28-(L/10)],
                  [70+(L/10),20-(L/10)]
               ],
               background: [90+(L/10),10-(L/10)],
               outline: [60, 70]
            },
            dark: {
               accent: [[70, 10], [35 - (L/10), 80 + (L/10)]],
               custom: [[70, 10], [20, 80]],
               error: [[70, 10], [20, 80]],
               glass: [20, 0, 40 - (L/10)],
               surface: [
                  [15-(L/10),60+(L/10)],
                  [18-(L/10),64+(L/10)],
                  [21-(L/10),68+(L/10)],
                  [24-(L/10),72+(L/10)],
                  [35-(L/10),80+(L/10)]
               ],
               background: [10-(L/10),85+(L/10)],
               outline: [40, 30]
            }
         },
         alpha: {
            accent: 1,
            custom: [],
            error: 1,
            glass: [0.4, 0.4, 0.4],
            surface: 1,
            background: 1,
            outline: 1
         }
      };
      switch (colorScheme) {
         case 'Analogous':
            data.name.accent = ['primary', 'secondary', 'tertiary'];
            data.hue.accent = [H, H - 30, H + 30];
            break;
         case 'Complementary':
            data.name.accent = ['primary', 'secondary'];
            data.hue.accent = [H, H - 180];
            break;
         case 'Triadic':
            data.name.accent = ['primary', 'secondary', 'tertiary', 'fourthiary'];
            data.hue.accent = [H, H - 60, H - 180, H - 240];
            break;
         case 'Compound':
            data.name.accent = ['primary', 'secondary', 'tertiary'];
            data.hue.accent = [H, H - 150, H + 150];
            break;
         case 'Split-Complementary':
            data.name.accent = ['primary', 'secondary', 'tertiary', 'fourthiary'];
            data.hue.accent = [H, H + 30, H + 180, H + 210];
            break;
         case 'Monochromatic':
            data.name.accent = ['primary'];
            data.hue.accent = [H];
            break;
         case 'Tetradic':
            data.name.accent = ['primary', 'secondary', 'tertiary'];
            data.hue.accent = [H, H + 120, H - 120];
            break;
      }
      for (i in customColor) {
         data.name.custom.push(i);
         data.hue.custom.push(Color(customColor[i]).h)
         data.saturation.custom.push(Color(customColor[i]).s)
         data.alpha.custom.push(Color(customColor[i]).a)
         
      }
      var a = ['', '-container'];
      var b = ['', 'on-'];
      for (i in data.name.accent) {
         for (j in a) {
            for (k in b) {
               result[b[k] + data.name.accent[i] + a[j]] = toHex(data.hue.accent[i], data.saturation.accent, data.lightness[mode].accent[j][k], data.alpha.accent);
            }
         }
      }
      for (i in data.name.error) {
         for (j in a) {
            for (k in b) {
               result[b[k] + data.name.error[i] + a[j]] = toHex(data.hue.error, data.saturation.error, data.lightness[mode].error[j][k], data.alpha.error);
            }
         }
      }
      for (i in data.name.custom) {
         for (j in a) {
            for (k in b) {
               result[b[k] + data.name.custom[i] + a[j]] = toHex(data.hue.custom[i], data.saturation.custom[i], data.lightness[mode].custom[j][k], data.alpha.custom[i]);
            }
         }
      }
      for (i in data.name.surface) {
         for (j in b) {
            result[b[j] + data.name.surface[i]] = toHex(data.hue.surface, data.saturation.surface[i], data.lightness[mode].surface[i][j], data.alpha.surface);
         }
      }
      for (i in data.name.background) {
         for (j in b) {
            result[b[j] + data.name.background[i]] = toHex(data.hue.background, data.saturation.background, data.lightness[mode].background[j], data.alpha.background);
         }
      }
      for (i in data.name.glass) {
         result[data.name.glass[i]] = toHex(data.hue.glass, data.saturation.glass[i], data.lightness[mode].glass[i], data.alpha.glass[i]);
      }
      for (i in data.name.outline) {
         result[data.name.outline[i]] = toHex(data.hue.outline, data.saturation.outline[i], data.lightness[mode].outline[i], data.alpha.outline);
      }
      return result
   }
   function Palette(color, customColor, darkmode, colorScheme, parts, reversePalette) {
      var [H, S, L] = [Color(color).h, Color(color).s, Color(color).l];
      var result = {};
      var data = {
         name: {
            accent: ['primary', 'secondary', 'tertiary'],
            custom: [],
            neutral: ['neutral', 'neutral-variant'],
         },
         hue: {
            accent: [],
            custom: [],
            neutral: H,
         },
         saturation: {
            accent: S,
            custom: [],
            neutral: [S / 4, S / 2],
         },
         alpha: {
            accent: 1,
            custom: [],
            neutral: 1,
         }
      }
      switch (colorScheme) {
         case 'Analogous':
            data.name.accent = ['primary', 'secondary', 'tertiary'];
            data.hue.accent = [H, H - 30, H + 30];
            break;
         case 'Complementary':
            data.name.accent = ['primary', 'secondary'];
            data.hue.accent = [H, H - 180];
            break;
         case 'Triadic':
            data.name.accent = ['primary', 'secondary', 'tertiary', 'fourthiary'];
            data.hue.accent = [H, H - 60, H - 180, H - 240];
            break;
         case 'Compound':
            data.name.accent = ['primary', 'secondary', 'tertiary'];
            data.hue.accent = [H, H - 150, H + 150];
            break;
         case 'Split-Complementary':
            data.name.accent = ['primary', 'secondary', 'tertiary', 'fourthiary'];
            data.hue.accent = [H, H + 30, H + 180, H + 210];
            break;
         case 'Monochromatic':
            data.name.accent = ['primary'];
            data.hue.accent = [H];
            break;
         case 'Tetradic':
            data.name.accent = ['primary', 'secondary', 'tertiary'];
            data.hue.accent = [H, H + 120, H - 120];
            break;
      }
      for (i in customColor) {
         data.name.custom.push(i);
         data.hue.custom.push(Color(customColor[i]).h)
         data.saturation.custom.push(Color(customColor[i]).s)
         data.alpha.custom.push(Color(customColor[i]).a)
      }
      if (!reversePalette || !darkmode) {
         for (i in data.name.accent) {
            for (j in parts) {
               result[data.name.accent[i] + '-' + parts[j]] = toHex(data.hue.accent[i], data.saturation.accent, parts[j], data.alpha.accent)
            }
         }
         for (i in data.name.custom) {
            for (j in parts) {
               result[data.name.custom[i] + '-' + parts[j]] = toHex(data.hue.custom[i], data.saturation.custom[i], parts[j], data.alpha.custom[i])
            }
         }
         for (i in data.name.neutral) {
            for (j in parts) {
               result[data.name.neutral[i] + '-' + parts[j]] = toHex(data.hue.neutral, data.saturation.neutral[i], parts[j], data.alpha.neutral)
            }
         }
      } else {
         if (darkmode) {
            for (i in data.name.accent) {
               for (j in parts) {
                  result[data.name.accent[i] + '-' + parts[j]] = toHex(data.hue.accent[i], data.saturation.accent, parts[parts.length - 1] - parts[j], data.alpha.accent[i])
               }
            }
            for (i in data.name.custom) {
               for (j in parts) {
                  result[data.name.custom[i] + '-' + parts[j]] = toHex(data.hue.custom[i], data.saturation.custom[i], parts[parts.length - 1] - parts[j], data.alpha.custom[i])
               }
            }
            for (i in data.name.neutral) {
               for (j in parts) {
                  result[data.name.neutral[i] + '-' + parts[j]] = toHex(data.hue.neutral, data.saturation.neutral[i], parts[parts.length - 1] - parts[j], data.alpha.neutral)
               }
            }
         }
      }
      return result
   }
   function Code(OBJ) {
      var keys = Object.keys(OBJ);
      var values = Object.values(OBJ);
      var CODE = `${(M.addTo !== null)?M.addTo:':root'}{\n`;
      for (i in keys) {
         CODE += `   --${keys[i]}: ${values[i]};\n`
      }
      CODE += '}';
      return CODE;
   };
   function Sprout() {
      var arr = ['#', '.', ':', '<', '>', '[', ']', '(', ')', '"', "'", '=', '$', '*', '-', '~'];
      var str = M.addTo;
      str = str.replace(/\s/g, '');
      var ID = str;
      for (i in arr) {
         ID = ID.replaceAll(arr[i], i);
      }
      var CSS = document.querySelector(`#MUSHROOM-STYLE-${ID}`);
      if (CSS == null) {
         CSS = document.createElement('style');
         CSS.id = `MUSHROOM-STYLE-${ID}`;
         var head = document.querySelector('head');
         head.appendChild(CSS);
      }
      var code = `/**** Mushroom v${M.version} ****/`;
      for (x in arguments) {
         code += '\n' + arguments[x];
      }
      if (M.addTo !== null) {
         CSS.innerHTML = code;
      }
      return code;
   };
   var M = {
      version: '3',
      color: 'blue',
      darkmode: false,
      hasPalette: false,
      reversePalette: false,
      parts: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      colorScheme: 'Analogous',
      customColor: {},
      code: '',
      themeColor: {},
      palette: {},
      hue: () => { return Color(M.color).h },
      saturation: () => { return Color(M.color).s },
      lightness: () => { return Color(M.color).l },
      addTo: ':root',
      setColor: (x) => {
         if(Color(x) !== undefined){
            M.color = x;
            Grow();
         }
      },
      setDarkmode: (x) => {
         M.darkmode = x;
         Grow();
      },
      toggleMode: () => {
         var mode = M.darkmode;
         var newMode = (!mode) ? true : false;
         M.darkmode = newMode;
         Grow();
      },
      setParts: (x) => {
         M.parts = x;
         Grow();
      },
      setPalette: (x) => {
         M.hasPalette = x;
         Grow();
      },
      setReversePalette: (x) => {
         M.reversePalette = x;
         Grow();
      },
      setHue: (x) => {
         M.color = `hsl(${x},${Color(M.color).s}%,${Color(M.color).l}%)`;
         M.hue = x;
         Grow();
      },
      setSaturation: (x) => {
         M.color = `hsl(${Color(M.color).h},${x}%,${Color(M.color).l}%)`;
         M.saturation = x;
         Grow();
      },
      setLightness: (x) => {
         M.color = `hsl(${Color(M.color).h},${Color(M.color).s}%,${x}%)`;
         M.lightness = x;
         Grow();
      },
      random: (x) => {
         var h = Math.round(Math.random() * 360);
         var s = Math.round(Math.random() * 100);
         var l = Math.round(Math.random() * 100);
         M.setColor(toHex(h,s,l));
      },
      addCustomColor: (obj) => {
         var keys = Object.keys(obj);
         var values = Object.values(obj);
         for (i in keys) {
            M.customColor[keys[i]] = values[i];
         }
         Grow();
      },
      setColorScheme: (x) => {
         M.colorScheme = x;
         Grow();
      },
      clearCustomColor: () => {
         M.customColor = {};
         Grow();
      },
   }
   if (addTo) {
      M.addTo = addTo
   }
   function Grow() {
      var themeColor = ThemeColor(M.color, M.customColor, M.darkmode, M.colorScheme);
      if (M.hasPalette) {
         var palette = Palette(M.color, M.customColor, M.darkmode, M.colorScheme, M.parts, M.reversePalette);
         var code = Sprout(Code(themeColor), Code(palette));
      } else {
         var code = Sprout(Code(themeColor));
      }
      M.hue = Color(M.color).h;
      M.saturation = Color(M.color).s;
      M.lightness = Color(M.color).l;
      M.themeColor = themeColor;
      M.palette = palette;
      M.code = code;
      return M;
   }
   Grow();
   return M
}