export type TokenType = {
    type: string;
    regex: RegExp;
};

export type Token = {
    type: string;
    value: string;
    ln: number;
};

type ShiftAction = ['S', number];

type ReduceAction = ['R', number];

type AcceptAction = ['A'];

export type Action = 'S' | 'R' | 'A';

export type ActionEntry = ShiftAction | ReduceAction | AcceptAction;

export interface ActionTable {
    [state: string]: {
        [tokenType: string]: ActionEntry;
    };
}

export interface GotoTable {
    [state: string]: {
        [nonTerminal: string]: number;
    };
}

export interface Rule {
    lhs: string;
    len: number;
    result: string[];
}

export interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
}
