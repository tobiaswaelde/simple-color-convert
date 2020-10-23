"use strict";
/**
 * Author: Tobias Wälde
 * Email: tobias.waelde@gmail.com
 * Website: https://tobiaswaelde.com
 *
 * Formulas used:
 * https://en.wikipedia.org/wiki/HSL_and_HSV#Color_conversion_formulae
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgb2hsl = exports.hsl2rgb = exports.rgb2hsv = exports.hsv2rgb = exports.hsl2hsv = exports.hsv2hsl = void 0;
/**
 * Convert HSV to HSL
 * @param {number} h Hue
 * @param {number} s Saturation in [0,1]
 * @param {number} v Brightness in [0,1]
 * @return {HSL} The calculated HSL values
 */
exports.hsv2hsl = (h, s, v) => {
    const l = v - v * s / 2;
    const m = Math.min(l, 1 - l);
    const sat = m ? (v - l) / m : 0;
    return { h, s: sat, l };
};
/**
 * Convert HSL to HSV
 * @param {number} h Hue
 * @param {number} s Saturation in [0,1]
 * @param {number} l Lightless in [0,1]
 * @return {HSVColor} The calculated HSV color
 */
exports.hsl2hsv = (h, s, l) => {
    const v = s * Math.min(l, 1 - l) + l;
    const sat = v ? 2 - 2 * l / v : 0;
    return { h, s: sat, v };
};
/**
 * Convert HSL to RGB
 * @param {number} h Hue in [0,360]
 * @param {number} s Saturation in [0,1]
 * @param {number} v Value in [0,1]
 * @return {RGBColor} The calculated RGB values in [0,1]
 */
exports.hsv2rgb = (h, s, v) => {
    const f = (n) => {
        const k = (n + h / 60) % 6;
        const x = v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
        return x;
    };
    return ({ r: f(5), g: f(3), b: f(1) });
};
/**
 * Convert RGB to HSV
 * @param {number} r Red in [0,1]
 * @param {number} g Green in [0,1]
 * @param {number} b Blue in [0,1]
 * @return {HSVColor} The calculated HSV color where\
 * H in [0,360]\
 * S in [0,1]\
 * V in [0,1]
 */
exports.rgb2hsv = (r, g, b) => {
    const v = Math.max(r, g, b), n = v - Math.min(r, g, b);
    const _h = n && ((v == r) ? (g - b) / n : ((v == g) ? 2 + (b - r) / n : 4 + (r - g) / n));
    const h = 60 * (_h < 0 ? _h + 6 : _h);
    const s = v && n / v;
    return { h, s, v };
};
/**
 * Convert HSL to RGB
 * @param {number} h Hue in [0,360]
 * @param {number} s Saturation in [0,1]
 * @param {number} l Lightless in [0,1]
 * @return {RGBColor} The calculated RGB color in [0,1]
 */
exports.hsl2rgb = (h, s, l) => {
    const a = s * Math.min(l, 1 - l);
    const f = (n) => {
        const k = (n + h / 30) % 12;
        const x = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return x;
    };
    return { r: f(0), g: f(8), b: f(4) };
};
/**
 * Convert RGB to HSL
 * @param {number} r Red in [0,1]
 * @param {number} g Green in [0,1]
 * @param {number} b Blue in [0,1]
 * @return {HSLColor} The calculated HSL color where\
 * H in [0,360]\
 * S in [0,1]\
 * L in [0,1]
 */
exports.rgb2hsl = (r, g, b) => {
    const a = Math.max(r, g, b), n = a - Math.min(r, g, b), f = (1 - Math.abs(a + a - n - 1));
    const _h = n && ((a == r) ? (g - b) / n : ((a == g) ? 2 + (b - r) / n : 4 + (r - g) / n));
    const h = 60 * (_h < 0 ? _h + 6 : _h);
    const s = f ? n / f : 0;
    const l = (a + a - n) / 2;
    return { h, s, l };
};
