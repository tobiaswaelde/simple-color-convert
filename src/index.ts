/**
 * Author: Tobias Wälde
 * Email: tobias.waelde@gmail.com
 * Website: https://tobiaswaelde.com
 *
 * Formulas used:
 * https://en.wikipedia.org/wiki/HSL_and_HSV#Color_conversion_formulae
 */

import { HSLColor, HSVColor, RGBColor } from "./types";

/**
 * Convert HSV to HSL
 * @param {number} h Hue
 * @param {number} s Saturation in [0,1]
 * @param {number} v Brightness in [0,1]
 * @return {HSL} The calculated HSL values
 */
export const hsv2hsl = (h: number, s: number, v: number): HSLColor => {
  const l = v - v * s / 2;
  const m = Math.min(l, 1 - l);
  const sat = m ? (v - l) / m : 0;
  return { h, s: sat, l };
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
export const rgb2hsl = (r: number, g: number, b: number): HSLColor => {
  const a = Math.max(r, g, b), n = a - Math.min(r, g, b), f = (1 - Math.abs(a + a - n - 1));
  const _h = n && ((a === r) ? (g - b) / n : ((a === g) ? 2 + (b - r) / n : 4 + (r - g) / n));
  const h = 60 * (_h < 0 ? _h + 6 : _h);
  const s = f ? n / f : 0;
  const l = (a + a - n) / 2;
  return { h, s, l };
};


/**
 * Convert HSL to HSV
 * @param {number} h Hue
 * @param {number} s Saturation in [0,1]
 * @param {number} l Lightless in [0,1]
 * @return {HSVColor} The calculated HSV color
 */
export const hsl2hsv = (h: number, s: number, l: number): HSVColor => {
  const v = s * Math.min(l, 1 - l) + l;
  const sat = v ? 2 - 2 * l / v : 0;
  return { h, s: sat, v };
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
export const rgb2hsv = (r: number, g: number, b: number): HSVColor => {
  const v = Math.max(r, g, b), n = v - Math.min(r, g, b);
  const _h = n && ((v === r) ? (g - b) / n : ((v === g) ? 2 + (b - r) / n : 4 + (r - g) / n));
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
export const hsl2rgb = (h: number, s: number, l: number): RGBColor => {
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const x = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return x;
  };
  return { r: f(0), g: f(8), b: f(4) };
};

/**
 * Convert HSL to RGB
 * @param {number} h Hue in [0,360]
 * @param {number} s Saturation in [0,1]
 * @param {number} v Value in [0,1]
 * @return {RGBColor} The calculated RGB values in [0,1]
 */
export const hsv2rgb = (h: number, s: number, v: number): RGBColor => {
  const f = (n: number) => {
    const k = (n + h / 60) % 6;
    const x = v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
    return x;
  };
  return ({ r: f(5), g: f(3), b: f(1) });
};
