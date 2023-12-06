// Mushroom V2
function Mushroom(AddTo = ':root') {
   var colorTransform = {
      'colorNames': {
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
      },
      'hslToRgb': (hsl) => {
         if (hsl.includes('hsla')) {
            var nums = hsl.substring(5, hsl.length - 1).split(",");
         } else {
            var nums = hsl.substring(4, hsl.length - 1).split(",");
         }
         var h = parseInt(nums[0]);
         var s = parseInt(nums[1]);
         var l = parseInt(nums[2]);
         h /= 360;
         s /= 100;
         l /= 100;
         let r, g, b;
         if (s === 0) {
            r = g = b = l;
         } else {
            const hue2rgb = (p, q, t) => {
               if (t < 0) t += 1;
               if (t > 1) t -= 1;
               if (t < 1 / 6) return p + (q - p) * 6 * t;
               if (t < 1 / 2) return q;
               if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
               return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
         }
         if (hsl.includes('hsla')) {
            var a = nums[3];
            if (a == undefined) {
               a = 1;
            }
            if (a > 1) { a = 1 }
            return `rgba(${Math.round(r*255)},${Math.round(g*255)},${Math.round(b*255)},${a})`
         } else {
            return `rgb(${Math.round(r*255)},${Math.round(g*255)},${Math.round(b*255)})`
         }
      },
      'hslToHex': (hsl) => {
         if (hsl.includes('hsla')) {
            var nums = hsl.substring(5, hsl.length - 1).split(",");
         } else {
            var nums = hsl.substring(4, hsl.length - 1).split(",");
         }
         var h = parseInt(nums[0]);
         var s = parseInt(nums[1]);
         var l = parseInt(nums[2]);
         h /= 360;
         s /= 100;
         l /= 100;
         let r, g, b;
         if (s === 0) {
            r = g = b = l;
         } else {
            const hue2rgb = (p, q, t) => {
               if (t < 0) t += 1;
               if (t > 1) t -= 1;
               if (t < 1 / 6) return p + (q - p) * 6 * t;
               if (t < 1 / 2) return q;
               if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
               return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
         }
         var toHex = (x) => {
            const hex = Math.round(x * 255).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
         };
         if (hsl.includes('hsla')) {
            var a = Number(nums[3]).toFixed(4);
            if (a == NaN) {
               a = 1;
            }
            if (a > 1) { a = 1 }
            return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(a)}`;
         } else {
            return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
         }
      },
      'hslToName': (hsl) => {
         if (hsl.includes('hsla')) {
            var nums = hsl.substring(5, hsl.length - 1).split(",");
         } else {
            var nums = hsl.substring(4, hsl.length - 1).split(",");
         }
         var h = parseInt(nums[0]);
         var s = parseInt(nums[1]);
         var l = parseInt(nums[2]);
         h /= 360;
         s /= 100;
         l /= 100;
         let r, g, b;
         if (s === 0) {
            r = g = b = l;
         } else {
            const hue2rgb = (p, q, t) => {
               if (t < 0) t += 1;
               if (t > 1) t -= 1;
               if (t < 1 / 6) return p + (q - p) * 6 * t;
               if (t < 1 / 2) return q;
               if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
               return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
         }
         var toHex = (x) => {
            const hex = Math.round(x * 255).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
         };
         var hex;
         if (hsl.includes('hsla')) {
            var a = nums[3];
            if (a == undefined) {
               a = 1;
            }
            if (a > 1) { a = 1 }
            hex = `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(a)}`;
         } else {
            hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
         }
         var value = Object.values(colorTransform.colorNames);
         var key = Object.keys(colorTransform.colorNames);
         return key[value.indexOf(hex)];
      },
      'rgbToHex': (rgb) => {
         if (rgb.includes('rgba')) {
            var nums = rgb.substring(5, rgb.length - 1).split(",");
         } else {
            var nums = rgb.substring(4, rgb.length - 1).split(",");
         }
         var r = parseInt(nums[0]);
         var g = parseInt(nums[1]);
         var b = parseInt(nums[2]);
         var toHex = (x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
         };
         if (rgb.includes('rgba')) {
            var a = nums[3];
            if (a == undefined) {
               a = 1;
            }
            if (a > 1) { a = 1 }
            return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(a*255)}`;
         } else {
            return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
         }
      },
      'rgbToHsl': (rgb) => {
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
            return `hsla(${h},${s}%,${l}%,${a})`;
         } else {
            return `hsl(${h},${s}%,${l}%)`;
         }
      },
      'rgbToName': (rgb) => {
         if (rgb.includes('rgba')) {
            var nums = rgb.substring(5, rgb.length - 1).split(",");
         } else {
            var nums = rgb.substring(4, rgb.length - 1).split(",");
         }
         var r = parseInt(nums[0]);
         var g = parseInt(nums[1]);
         var b = parseInt(nums[2]);
         var toHex = (x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
         };
         var hex;
         if (rgb.includes('rgba')) {
            var a = nums[3];
            if (a == undefined) {
               a = 1;
            }
            if (a > 1) { a = 1 }
            hex = `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(a*255)}`;
         } else {
            hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
         }
         var value = Object.values(colorTransform.colorNames);
         var key = Object.keys(colorTransform.colorNames);
         return key[value.indexOf(hex)];
      },
      'hexToRgb': (hex) => {
         if (hex.length == 4) {
            hex = hex.replace(/^#(.)(.)(.)$/, '#$1$1$2$2$3$3');
         }
         if (hex.length == 5) {
            hex = hex.replace(/^#(.)(.)(.)(.)$/, '#$1$1$2$2$3$3$4$4');
         }
         var r = parseInt(hex.substring(1, 3), 16) / 255;
         var g = parseInt(hex.substring(3, 5), 16) / 255;
         var b = parseInt(hex.substring(5, 7), 16) / 255;
         if (hex.length == 5 || hex.length == 9) {
            var a = parseInt(hex.substring(7, 9), 16) / 255;
            return `rgba(${Math.round(r*255)},${Math.round(g*255)},${Math.round(b*255)},${a})`;
         } else {
            return `rgb(${Math.round(r*255)},${Math.round(g*255)},${Math.round(g*255)})`;
         }
      },
      'hexToHsl': (hex) => {
         if (hex.length == 4) {
            hex = hex.replace(/^#(.)(.)(.)$/, '#$1$1$2$2$3$3');
         }
         if (hex.length == 5) {
            hex = hex.replace(/^#(.)(.)(.)(.)$/, '#$1$1$2$2$3$3$4$4');
         }
         var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
         var r = parseInt(result[1], 16);
         var g = parseInt(result[2], 16);
         var b = parseInt(result[3], 16);
         r /= 255, g /= 255, b /= 255;
         var max = Math.max(r, g, b),
            min = Math.min(r, g, b);
         var h, s, l = (max + min) / 2;
         if (max == min) {
            h = s = 0; // achromatic
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
            var a = Number(parseInt(hex.substring(7, 9), 16) / 255).toFixed(4);
            return `hsla(${h},${s}%,${l}%,${a})`;
         } else {
            return `hsl(${h},${s}%,${l}%)`;
         }
      },
      'hexToName': (hex) => {
         if (hex.length == 4) {
            hex = hex.replace(/^#(.)(.)(.)$/, '#$1$1$2$2$3$3');
         }
         if (hex.length == 5) {
            hex = hex.replace(/^#(.)(.)(.)(.)$/, '#$1$1$2$2$3$3$4$4');
         }
         var value = Object.values(colorTransform.colorNames);
         var key = Object.keys(colorTransform.colorNames);
         return key[value.indexOf(hex)];
      },
      'nameToHsl': (name) => {
         var css = colorTransform.colorNames;
         var hex = css[name.toLowerCase()];
         var r = parseInt(hex.substring(1, 3), 16);
         var g = parseInt(hex.substring(3, 5), 16);
         var b = parseInt(hex.substring(5, 7), 16);
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
         return `hsl(${h},${s}%,${l}%)`;
      },
      'nameToRgb': (name) => {
         var css = colorTransform.colorNames;
         var hex = css[name.toLowerCase()];
         var r = parseInt(hex.substring(1, 3), 16);
         var g = parseInt(hex.substring(3, 5), 16);
         var b = parseInt(hex.substring(5, 7), 16);
         return `rgb(${r},${g},${b})`;
      },
      'nameToHex': (name) => {
         var css = colorTransform.colorNames;
         var hex = css[name.toLowerCase()];
         return hex;
      },
      'toRgb': (color) => {
         if (color.includes('#')) {
            return colorTransform.hexToRgb(color);
         }
         if (color.includes('hsl') || color.includes('hsla')) {
            return colorTransform.hslToRgb(color);
         }
         if (!/\d/.test(color) && !color.includes('#')) {
            return colorTransform.nameToRgb(color);
         }
         if (color.includes('rgb') || color.includes('rgba')) {
            return color;
         }
      },
      'toHex': (color) => {
         if (color.includes('#')) {

            return color;
         }
         if (color.includes('hsl') || color.includes('hsla')) {
            return colorTransform.hslToHex(color);
         }
         if (!/\d/.test(color) && !color.includes('#')) {
            return colorTransform.nameToHex(color);
         }
         if (color.includes('rgb') || color.includes('rgba')) {
            return colorTransform.rgbToHex(color);
         }
      },
      'toHsl': (color) => {
         if (color.includes('#')) {
            return colorTransform.hexToHsl(color);
         }
         if (color.includes('hsl') || color.includes('hsla')) {
            return color;
         }
         if (!/\d/.test(color) && !color.includes('#')) {
            return colorTransform.nameToHsl(color);
         }
         if (color.includes('rgb') || color.includes('rgba')) {
            return colorTransform.rgbToHsl(color);
         }
      },
      'getHsl': (color) => {
         var hsl = colorTransform.toHsl(color);
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
            return { 'h': h, 's': s, 'l': l, 'a': a };
         } else {
            return { 'h': h, 's': s, 'l': l, 'a': 1 };
         }
      },
      'getRgb': (color) => {
         var rgb = colorTransform.toRgb(color);
         if (rgb.includes('rgba')) {
            var nums = rgb.substring(5, rgb.length - 1).split(",");
         } else {
            var nums = rgb.substring(4, rgb.length - 1).split(",");
         }
         var r = parseInt(nums[0]);
         var g = parseInt(nums[1]);
         var b = parseInt(nums[2]);
         if (rgb.includes('rgba')) {
            var a = Number(nums[3]).toFixed(4);
            return { 'r': r, 'g': g, 'b': b, 'a': a };
         } else {
            return { 'r': r, 'g': g, 'b': b, 'a': 1 };
         }
      }
   };
   function ThemeColor(H, S, L, darkmode, level, colorScheme, add) {
      var data = [
         ['primary', 'secondary', 'tertiary'],
         ['error'],
         ['surface', 'surface-variant', 'glass', 'glass-variant', 'background'],
         ['outline'],
         ['', 'on-'],
         ['', '-container'],
         [H, H - 30, H + 30],
         [0],
         [H],
         [H],
         [S],
         [100],
         [Math.round(S / 3), Math.round(S / 2), S, Math.round(S / 2), Math.round(S / 3)],
         [Math.round(S / 3)],
         [1],
         [1],
         [1, 1, 0.4, 0.4, 1],
         [1],
      ];
      switch (colorScheme) {
         case 'Analogous':
            data[0] = ['primary', 'secondary', 'tertiary'];
            data[6] = [H, H - 30, H + 30];
            break;
         case 'Complementary':
            data[0] = ['primary', 'secondary'];
            data[6] = [H, H - 180];
            break;
         case 'Triadic':
            data[0] = ['primary', 'secondary', 'tertiary', 'fourthiary'];
            data[6] = [H, H - 60, H - 180, H - 240];
            break;
         case 'Compound':
            data[0] = ['primary', 'secondary', 'tertiary'];
            data[6] = [H, H - 150, H + 150];
            break;
         case 'Split-Complementary':
            data[0] = ['primary', 'secondary', 'tertiary', 'fourthiary'];
            data[6] = [H, H + 30, H + 180, H + 210];
            break;
         case 'Monochromatic':
            data[0] = ['primary'];
            data[6] = [H];
            break;
         case 'Tetradic':
            data[0] = ['primary', 'secondary', 'tertiary'];
            data[6] = [H, H + 120, H - 120];
            break;
      }
      for (i in add) {
         data[0].push(i);
         data[6].push(colorTransform.getHsl(add[i]).h);
         data[10].push(colorTransform.getHsl(add[i]).s);
         data[14].push(colorTransform.getHsl(add[i]).a);
      };
      var KEY = [];
      var hue = [];
      var saturation = [];
      var opacity = []
      var lightness = [];
      // normal
      for (i in data[0]) {
         for (j in data[5]) {
            for (k in data[4]) {
               KEY.push(data[4][k] + data[0][i] + data[5][j]);
               hue.push(data[6][i]);
               saturation.push(data[10][0]);
               opacity.push(data[14][0]);
            }
         }
         if (!darkmode) {
            lightness.push(40, 100, 75, 20);
         } else {
            lightness.push(70, 10, 20, 80);
         }
      }
      for (i in data[1]) {
         for (j in data[5]) {
            for (k in data[4]) {
               KEY.push(data[4][k] + data[1][i] + data[5][j]);
               hue.push(data[7][0]);
               saturation.push(data[11][0]);
               opacity.push(data[15][0]);
            }
         }
         if (!darkmode) {
            lightness.push(40, 100, 85, 10);
         } else {
            lightness.push(70, 10, 20, 90);
         }
      }
      for (i in data[2]) {
         for (j in data[4]) {
            KEY.push(data[4][j] + data[2][i]);
            hue.push(data[8][0]);
            saturation.push(data[12][i]);
            opacity.push(data[16][i]);
         }
      }
      if (!darkmode) {
         lightness.push(85 + Math.round(L / 10), 25 - Math.round(L / 10), 80 + Math.round(L / 10), 10 - Math.round(L / 10), 100, 0, 80 + Math.round(L / 10), 30 - Math.round(L / 10), 90 + Math.round(L / 10), 10 - Math.round(L / 10));
      } else {
         lightness.push(15 - Math.round(L / 10), 75 + Math.round(L / 10), 25 - Math.round(L / 10), 85 + Math.round(L / 10), 0, 100, 20 - Math.round(L / 10), 80 + Math.round(L / 10), 10 - Math.round(L / 10), 80 + Math.round(L / 10));
      }
      for (i in data[3]) {
         KEY.push(data[3][i]);
         hue.push(data[9][0]);
         saturation.push(data[13][i]);
         opacity.push(data[17][0]);
         if (!darkmode) {
            lightness.push(60);
         } else {
            lightness.push(40);
         }
      }
      // pro 
      if (level !== 'pro') {
         for (i in data[0]) {
            for (j in data[2]) {
               for (k in data[4]) {
                  KEY.push(data[4][k] + data[0][i] + '-' + data[2][j]);
                  hue.push(data[6][i]);
                  saturation.push(data[12][j]);
                  opacity.push(data[16][j]);
               }
            }
            if (!darkmode) {
               lightness.push(85 + Math.round(L / 10), 25 - Math.round(L / 10), 75 + Math.round(L / 10), 10 - Math.round(L / 10), 100, 0, 85, 100, 90 + Math.round(L / 10), 10 - Math.round(L / 10));
            } else {
               lightness.push(15 - Math.round(L / 10), 75 + Math.round(L / 10), 25 - Math.round(L / 10), 85 + Math.round(L / 10), 70, 30, 10, 90, 10 - Math.round(L / 10), 80 + Math.round(L / 10));
            }
         }
         for (i in data[1]) {
            for (j in data[2]) {
               for (k in data[4]) {
                  KEY.push(data[4][k] + data[1][i] + '-' + data[2][j]);
                  hue.push(data[7][0]);
                  saturation.push(data[12][j]);
                  opacity.push(data[16][j]);
               }
            }
            if (!darkmode) {
               lightness.push(85 + Math.round(L / 10), 25 - Math.round(L / 10), 75 + Math.round(L / 10), 10 - Math.round(L / 10), 100, 0, 85, 100, 90 + Math.round(L / 10), 10 - Math.round(L / 10));
            } else {
               lightness.push(15 - Math.round(L / 10), 75 + Math.round(L / 10), 25 - Math.round(L / 10), 85 + Math.round(L / 10), 70, 30, 10, 90, 10 - Math.round(L / 10), 80 + Math.round(L / 10));
            }
         }
         for (i in data[0]) {
            for (j in data[3]) {
               KEY.push(data[0][i] + '-' + data[3][j]);
               hue.push(data[6][i]);
               saturation.push(data[12][j]);
               opacity.push(data[16][j]);
            }
            if (!darkmode) {
               lightness.push(60);
            } else {
               lightness.push(40);
            }
         }
         for (i in data[1]) {
            for (j in data[3]) {
               KEY.push(data[1][i] + '-' + data[3][j]);
               hue.push(data[7][0]);
               saturation.push(data[12][j]);
               opacity.push(data[16][j]);
            }
            if (!darkmode) {
               lightness.push(60);
            } else {
               lightness.push(40);
            }
         }
      }
      var obj = {};
      for (i in KEY) {
         var color = colorTransform.toHex(`hsla(${hue[i]},${saturation[i]}%,${lightness[i]}%,${opacity[i]})`);
         obj[KEY[i]] = color;
      }
      return obj;
   }
   function Palette(H, S, L, parts, darkmode, reversePalette, add) {
      var KEY = ['primary', 'secondary', 'tertiary', 'error', 'surface', 'surface-variant', 'glass', 'glass-variant'];
      var HUE = [H, H - 40, H + 40, 0, H, H, H, H]
      var SATURATION = [S, S, S, 100, S, 0, Math.round(S / 3), Math.round(S / 2)];
      var OPACITY = [1, 1, 1, 1, 1, 1, 0.4, 0.4];
      var keys = Object.keys(add);
      var values = Object.values(add);
      for (i in keys) {
         var h, s, a;
         h = colorTransform.getHsl(values[i]).h;
         s = colorTransform.getHsl(values[i]).s;
         a = colorTransform.getHsl(values[i]).a;
         KEY.push(keys[i]);
         HUE.push(h);
         SATURATION.push(s);
         OPACITY.push(a);
      }
      var OBJ = {};
      if (reversePalette) {
         if (!darkmode) {
            for (i in KEY) {
               for (j in parts) {
                  OBJ[`${KEY[i]}-${parts[j]}`] = colorTransform.toHex(`hsla(${HUE[i]},${SATURATION[i]}%,${parts[j]}%,${OPACITY[i]})`);
               }
            }
         } else {
            var n = Number(parts[parts.length - 1]);
            for (i in KEY) {
               for (j in parts) {
                  OBJ[`${KEY[i]}-${Math.abs(Number(parts[j])-n)}`] = colorTransform.toHex(`hsla(${HUE[i]},${SATURATION[i]}%,${parts[j]}%,${OPACITY[i]})`);
               }
            }
         }
      } else {
         for (i in KEY) {
            for (j in parts) {
               OBJ[`${KEY[i]}-${parts[j]}`] = colorTransform.toHex(`hsla(${HUE[i]},${SATURATION[i]}%,${parts[j]}%,${OPACITY[i]})`);
            }
         }
      }
      return OBJ;
   }
   function Sprout() {
      var arr = ['#', '.', ':', '<', '>', '[', ']', '(', ')', '"', "'", '=', '$', '*', '-', '~'];
      var str = M.addTo;
      str = str.replace(/\s/g, '');
      var ID = str;
      for (var i = 0; i < arr.length; i++) {
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
   var M = {
      'setColor': (x) => {
         M.color = x;
         Start();
      },
      'setDarkmode': (x) => {
         M.darkmode = x;
         Start();
      },
      'toggleMode': () => {
         var mode = M.darkmode;
         var newMode = (!mode) ? true : false;
         M.setDarkmode(newMode);
         M.darkmode = newMode;
         Start();
      },
      'setParts': (x) => {
         M.parts = x;
         Start();
      },
      'setReversePalette': (x) => {
         M.reversePalette = x;
         Start();
      },
      'setHue': (x) => {
         M.color = `hsl(${x},${colorTransform.getHsl(M.color).s}%,${colorTransform.getHsl(M.color).l}%)`;
         M.hue = x;
         Start();
      },
      'setLightness': (x) => {
         M.color = `hsl(${colorTransform.getHsl(M.color).h},${colorTransform.getHsl(M.color).s}%,${x}%)`;
         M.lightness = x;
         Start();
      },
      'setSaturation': (x) => {
         M.color = `hsl(${colorTransform.getHsl(M.color).h},${x}%,${colorTransform.getHsl(M.color).l}%)`;
         M.saturation = x;
         Start();
      },
      'random': (x) => {
         var h = Math.round(Math.random() * 360);
         var s = Math.round(Math.random() * 100);
         var l = Math.round(Math.random() * 100);
         M.setColor(`hsl(${h},${s}%,${l}%)`);
      },
      'addColor': (obj) => {
         var keys = Object.keys(obj);
         var values = Object.values(obj);
         for (i in keys) {
            M.customColor[keys[i]] = values[i];
         }
         Start();
      },
      'setColorScheme': (x) => {
         M.colorScheme = x;
         Start();
      },
      'clearCustomColor': () => {
         M.document = [];
         Start();
      },
      'setLevel': (x) => {
         M.level = x;
         Start();
      },
      'color': 'blue',
      'darkmode': false,
      'parts': [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
      'reversePalette': false,
      'colorScheme': 'Analogous',
      'customColor': {},
      'themeColor': null,
      'palette': null,
      'setPalette': (x) => {
         M.palette = undefined;
         M.hasPalette = x;
         Start();
      },
      'hasPalette': true,
      'hue': null,
      'saturation': null,
      'lightness': null,
      'code': null,
      'level': 'normal',
      'addTo': AddTo,
      'version': '2',
   };
   function Start() {
      var [H, S, L] = [colorTransform.getHsl(M.color).h, colorTransform.getHsl(M.color).s, colorTransform.getHsl(M.color).l];
      var themeColor = ThemeColor(H, S, L, M.darkmode, M.level, M.colorScheme, M.customColor);
      if (M.hasPalette) {
         var palette = Palette(H, S, L, M.parts, M.darkmode, M.reversePalette, M.customColor);
         var code = Sprout(Code(themeColor), Code(palette));
      } else {
         var code = Sprout(Code(themeColor));
      }
      M.hue = H;
      M.saturation = S;
      M.lightness = L;
      M.themeColor = themeColor;
      M.palette = palette;
      M.code = code;
      return M;
   };
   Start();
   return M;
}