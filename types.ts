export type Token = {
    type: string;
    value: string;
    line: number;
}

export type TokenType = {
    type: string, 
    regex: RegExp
}