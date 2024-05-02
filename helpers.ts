import type { TokenType, ActionTable, GotoTable, Rule } from './types';

export const token_types: TokenType[] = [
    { type: 'CMT_SL', regex: /^#.*/ },
    { type: 'CMT_ML', regex: /^<#[\s\S]*?#>/ },
    { type: 'break', regex: /^break\b/ },
    { type: 'dec', regex: /^dec\b/ },
    { type: 'do', regex: /^do\b/ },
    { type: 'else', regex: /^else\b/ },
    { type: 'elseif', regex: /^elseif\b/ },
    { type: 'if', regex: /^if\b/ },
    { type: 'inc', regex: /^inc\b/ },
    { type: 'return', regex: /^return\b/ },
    { type: 'var', regex: /^var\b/ },
    { type: 'while', regex: /^while\b/ },
    { type: 'LIT-INT', regex: /^[-]?[0-9]+/ },
    { type: 'LITERAL_BOOL', regex: /^(true|false)\b/ },
    {
        type: 'LIT-CHAR',
        regex: /^'(\\n|\\r|\\t|\\\'|\\\"|\\u[0-9a-fA-F]{6}|[^\'\n\r])*'/,
    },
    { type: 'LIT-STR', regex: /^"[^\'\"\n\r]*"/ },
    { type: '(', regex: /^\(/ },
    { type: ')', regex: /^\)/ },
    { type: '[', regex: /^\[/ },
    { type: ']', regex: /^\]/ },
    { type: '{', regex: /^\{/ },
    { type: '}', regex: /^\}/ },
    { type: '||', regex: /^\|\|/ },
    { type: '&&', regex: /^&&/ },
    { type: '!', regex: /^!/ },
    { type: '+', regex: /^\+/ },
    { type: '-', regex: /^-/ },
    { type: '*', regex: /^\*/ },
    { type: '/', regex: /^\// },
    { type: '<=', regex: /^<=/ },
    { type: '>=', regex: /^>=/ },
    { type: '==', regex: /^==/ },
    { type: '=', regex: /^=/ },
    { type: '<', regex: /^</ },
    { type: '>', regex: /^>/ },
    { type: '%', regex: /^%/ },
    { type: '^', regex: /^\^/ },
    { type: ';', regex: /^;/ },
    { type: ',', regex: /^,/ },
    { type: 'ID', regex: /^[a-zA-Z][a-zA-Z0-9_]*/ },
];

export const action: ActionTable = {
    '0': { ID: ['S', 5] },
    '1': { $: ['A'] },
    '5': { '=': ['S', 6] },
    '6': { ID: ['S', 7] },
    '7': { ';': ['R', 1] },
};

export const goto: GotoTable = {
    '0': { S: 1 },
    '5': { E: 2 },
};

export const rules: Rule[] = [{ lhs: 'S', len: 3 }];

/*const tokens = [
    "var", "ID", ",", "(", ")", "{", "}", "=", "inc", "dec", "if", "elseif", "else", 
    "while", "do", "break", "return", "||", "^", "&&", "==", "!=", "<", "<=", ">",">=", 
    "+", "-", "*", "/", "%", "!", "[", "]", "LIT-BOOL", "LIT-INT", "LIT-CHAR", "LIT-STR"
];*/
