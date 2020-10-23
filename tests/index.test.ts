import * as c from '../src/index';
import { HSLColor, HSVColor, RGBColor } from '../src/types';

const rgbColor: RGBColor = {
	r: 63 / 255,
	g: 81 / 255,
	b: 181 / 255,
}; // 63,81,181
const hsvColor: HSVColor = { h: 231, s: 65.2 / 100, v: 71 / 100 };
const hslColor: HSLColor = { h: 231, s: 48.4 / 100, l: 47.8 / 100 };

describe('HSL', () => {
	it('HSV to HSL', () => {
		const hsl = c.hsv2hsl(hsvColor.h, hsvColor.s, hsvColor.v);
		expect(hsl.h).toBeCloseTo(hslColor.h);
		expect(hsl.s).toBeCloseTo(hslColor.s);
		expect(hsl.l).toBeCloseTo(hslColor.l);
	});
	it('RGB to HSL', () => {
		const hsl = c.rgb2hsl(rgbColor.r, rgbColor.g, rgbColor.b);
		expect(hsl.h).toBeCloseTo(hslColor.h, 0);
		expect(hsl.s).toBeCloseTo(hslColor.s);
		expect(hsl.l).toBeCloseTo(hslColor.l);
	});
});

describe('HSV', () => {
	it('HSL to HSV', () => {
		const hsv = c.hsl2hsv(hslColor.h, hslColor.s, hslColor.l);
		expect(hsv.h).toBeCloseTo(hsvColor.h);
		expect(hsv.s).toBeCloseTo(hsvColor.s);
		expect(hsv.v).toBeCloseTo(hsvColor.v);
	});
	it('RGB to HSV', () => {
		const hsv = c.rgb2hsv(rgbColor.r, rgbColor.g, rgbColor.b);
		expect(hsv.h).toBeCloseTo(hsvColor.h, 0);
		expect(hsv.s).toBeCloseTo(hsvColor.s);
		expect(hsv.v).toBeCloseTo(hsvColor.v);
	});
});

describe('RGB', () => {
	it('HSL to RGB', () => {
		const rgb = c.hsl2rgb(hslColor.h, hslColor.s, hslColor.l);
		expect(rgb.r).toBeCloseTo(rgbColor.r);
		expect(rgb.g).toBeCloseTo(rgbColor.g);
		expect(rgb.b).toBeCloseTo(rgbColor.b);
	});
	it('HSV to RGB', () => {
		const rgb = c.hsv2rgb(hsvColor.h, hsvColor.s, hsvColor.v);
		expect(rgb.r).toBeCloseTo(rgbColor.r);
		expect(rgb.g).toBeCloseTo(rgbColor.g);
		expect(rgb.b).toBeCloseTo(rgbColor.b);
	});
});
