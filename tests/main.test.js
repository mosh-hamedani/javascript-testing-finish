"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const main_1 = require("../src/main");
(0, vitest_1.describe)('calculateDiscount', () => {
    (0, vitest_1.it)('should return discounted price if given valid code', () => {
        (0, vitest_1.expect)((0, main_1.calculateDiscount)(10, 'SAVE10')).toBe(9);
        (0, vitest_1.expect)((0, main_1.calculateDiscount)(10, 'SAVE20')).toBe(8);
    });
    (0, vitest_1.it)('should handle negative price', () => {
        (0, vitest_1.expect)((0, main_1.calculateDiscount)(-10, 'SAVE10')).toMatch(/invalid/i);
    });
    (0, vitest_1.it)('should handle invalid discount code', () => {
        (0, vitest_1.expect)((0, main_1.calculateDiscount)(10, 'INVALID')).toBe(10);
    });
});
