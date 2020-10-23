# Simple Color Convert

## Functions
- `hsv2hsl`
- `hsl2hsv`
- `hsv2rgb`
- `rgb2hsv`
- `hsl2rgb`
- `rgb2hsl`

## Usage
```typescript
import { hsv2rgb, rgb2hsv } from 'simple-color-convert';

const rgb = hsv2rgb(300, 0.9, 0.5);
const hsv = rgb2hsv(255, 0, 0);
```