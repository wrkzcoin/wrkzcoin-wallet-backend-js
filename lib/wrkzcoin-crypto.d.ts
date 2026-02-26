declare module 'wrkzcoin-crypto' {
    export interface ICryptoConfig {
        [key: string]: unknown;
    }

    export class Crypto {
        constructor(config?: ICryptoConfig);
        [key: string]: unknown;
    }

    export enum CryptoType {
        UNKNOWN = 0,
    }
}
