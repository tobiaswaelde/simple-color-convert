/**
 * Author: Tobias Wälde
 * Email: tobias.waelde@gmail.com
 * Website: https://tobiaswaelde.com
 *
 * Formulas used:
 * https://en.wikipedia.org/wiki/HSL_and_HSV#Color_conversion_formulae
 */
declare type HSLColor = {
    h: number;
    s: number;
    l: number;
};
declare type HSVColor = {
    h: number;
    s: number;
    v: number;
};
declare type RGBColor = {
    r: number;
    g: number;
    b: number;
};
/**
 * Convert HSV to HSL
 * @param {number} h Hue
 * @param {number} s Saturation in [0,1]
 * @param {number} v Brightness in [0,1]
 * @return {HSL} The calculated HSL values
 */
export declare const hsv2hsl: (h: number, s: number, v: number) => HSLColor;
/**
 * Convert HSL to HSV
 * @param {number} h Hue
 * @param {number} s Saturation in [0,1]
 * @param {number} l Lightless in [0,1]
 * @return {HSVColor} The calculated HSV color
 */
export declare const hsl2hsv: (h: number, s: number, l: number) => HSVColor;
/**
 * Convert HSL to RGB
 * @param {number} h Hue in [0,360]
 * @param {number} s Saturation in [0,1]
 * @param {number} v Value in [0,1]
 * @return {RGBColor} The calculated RGB values in [0,1]
 */
export declare const hsv2rgb: (h: number, s: number, v: number) => RGBColor;
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
export declare const rgb2hsv: (r: number, g: number, b: number) => HSVColor;
/**
 * Convert HSL to RGB
 * @param {number} h Hue in [0,360]
 * @param {number} s Saturation in [0,1]
 * @param {number} l Lightless in [0,1]
 * @return {RGBColor} The calculated RGB color in [0,1]
 */
export declare const hsl2rgb: (h: number, s: number, l: number) => RGBColor;
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
export declare const rgb2hsl: (r: number, g: number, b: number) => HSLColor;
export {};
