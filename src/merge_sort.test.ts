import { merge } from './merge_sort';

describe('merge', () => {
    it('should merge and sort three sorted arrays', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [6, 4, 2];
        const collection_3 = [7, 8, 9];
        
        const result = merge(collection_1, collection_2, collection_3);
        console.log(result);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});