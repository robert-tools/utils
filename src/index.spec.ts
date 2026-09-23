import { filterObject, getProp, sortASC } from './index';

describe('✅ getProp()', () => {
    const FN = getProp;
    const obj = { a: 1, b: false, c: null };
    it('should return the value if the key exists', () => {
        expect(FN(obj, 'a')).toBe(1);
        expect(FN(obj, 'b')).toBe(false);
        expect(FN(obj, 'c')).toBe(null);
    });

    it('should return the default value if the key does not exist', () => {
        expect(FN(obj, 'z', 3)).toBe(3);
        expect(FN(obj, 'd')).toBe(undefined);
    });
});

describe('✅ sortASC()', () => {
    const FN = sortASC;
    it('should sort an array of strings in ascending order', () => {
        const input = ['foo', 'bar', 'Etag', 'baz'];
        expect(FN(input)).toEqual(['bar', 'baz', 'Etag', 'foo']);
    });
    it('should sort an array of strings in ascending order', () => {
        const input = ['Content-Type', 'ContentLength'];
        expect(FN(input)).toEqual(['ContentLength', 'Content-Type']);
    });
    it('should sort nothing', () => {
        expect(FN([])).toEqual([]);
        expect(FN(['a', 'b'])).toEqual(['a', 'b']);
        expect(FN(['A-B', 'a_b'])).toEqual(['A-B', 'a_b']);
    });
});
describe('✅ filterObject', () => {
    const FN = filterObject;
    const obj = { a: 1, b: 2, header: {} };
    it('should include only specified keys when type is include', () => {
        expect(FN(obj, ['header'], 'include')).toEqual({ header: {} });
    });
    it('should exclude specified keys when type is exclude', () => {
        expect(FN(obj, ['header'], 'exclude')).toEqual({ a: 1, b: 2 });
    });
});
