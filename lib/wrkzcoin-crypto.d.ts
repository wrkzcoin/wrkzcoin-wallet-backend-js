declare module 'wrkzcoin-crypto' {
    export interface ICryptoConfig {
        [key: string]: unknown;
    }

    export interface IKeyImageResult {
        keyImage: string;
        privateEphemeral: string;
    }

    export class Crypto {
        constructor(config?: ICryptoConfig);

        public static isNative: boolean;

        public generateKeyDerivation(
            transactionPublicKey: string,
            privateViewKey: string,
        ): string | Promise<string>;

        public underivePublicKey(
            derivation: string,
            outputIndex: number,
            outputKey: string,
        ): string | Promise<string>;

        public generateKeyImagePrimitive(
            publicSpendKey: string,
            privateSpendKey: string,
            outputIndex: number,
            derivation: string,
        ): IKeyImageResult | Promise<IKeyImageResult>;
    }

    export enum CryptoType {
        UNKNOWN = 0,
        NODEADDON = 1,
        JS = 2,
        WASM = 3,
        WASMJS = 4,
        EXTERNAL = 5,
        MIXED = 6,
    }
}
