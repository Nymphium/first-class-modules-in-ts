export declare const _t: number;
type T = typeof _t;

export const zero: T = 0;
export const succ = (x: T): T => x + 1;
export const toNumber = (x: T): number => x;
