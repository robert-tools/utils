/**
 * 🧪 testing module
 * @version 1.0.0
 * @date 2026-09-19
 * @license MIT
 * @author Robert Willemelis <github.com/willi84>
 */
import { sample } from './index';

describe('@robert.tools/utils', () => {
    it('should return a utils string', () => {
        expect(sample('hello')).toBe('sample: hello');
    });

    it('should return a utils string with empty input', () => {
        expect(sample('')).toBe('sample: ');
    });
});
