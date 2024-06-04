export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let result: number[] = [...collection_1, ...collection_2, ...collection_3];
    let m1: number[] = [];
    let a,b;

    for (let k = 0; k < result.length; k++) {
        for (let l = k + 1; l < result.length; l++) {
            if (result[k] > result[l]) {
                a = result[k];
                result[k] = result[l];
                result[l] = a;
            }
        }
    }
    return result;
}