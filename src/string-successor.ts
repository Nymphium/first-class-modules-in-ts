export declare const _t: string;
type T = typeof _t;

export const zero: T = '';
// represened as length of string
export const succ = (x: T): T => `${x} `;
export const toNumber = (x: T): number => x.length;
