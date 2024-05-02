import type { Token, TokenType } from './types';

export class Lexer {
    types : Array<TokenType>;
    code : string;
    pos : Array<number>;
    slice : string;

    constructor(code : string, types : Array<TokenType>) {
        this.types = types;
        this.code = code;
        this.pos = [0, 0]
        this.slice = code;
    }

    advance(n : number) {
        this.pos[1] += n;
        this.slice = this.code.slice(this.pos[1]);
        while ([' ', '\t', ' '].includes(this.slice[0])){ //verify ln increment is working
            if(this.slice[0] === '\n') this.pos[0] += 1;
            this.advance(1);
        }
    }

    createTokens() {
        const tokens = [];

        while (this.slice) {
            var token : Token | null = null;

            for ( var type of this.types) {
                const e = type.regex.exec(this.slice);
                if (e === null) continue;
                if (!(e.index === 0)) continue;

                token = {
                    type: type.type,
                    value: this.slice,
                    line: this.pos[0],
                }
                break;
            }

            if (token === null) {
                return ['ERROR']
            }
            tokens.push(token);
            this.advance(token.value.length)
        }

        return tokens;
    }
}