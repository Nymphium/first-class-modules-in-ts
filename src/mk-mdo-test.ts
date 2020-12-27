export type Sig<T> = {
    _t: T;
    zero: T;
    succ: (_: T) => T;
    toNumber: (_: T) => number;
};

type MkSig<M> = M extends { _t: infer T } ? Sig<T> : never;
export const val = <M, N extends MkSig<M>>(x: M): N => x as any;

export type Test = {
    run: () => void;
};

export const Make = <T = unknown>(m: Sig<T>): Test => ({
    run: () => {
        const { toNumber, succ, zero } = m;
        console.assert(toNumber(succ(succ(succ(zero)))) === 3);
    },
});
