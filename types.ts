export type TokenType = {
    type: string;
    regex: RegExp;
};

export type Token = {
    type: string;
    value: string;
    ln: number;
};
