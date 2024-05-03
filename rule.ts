import type { Rule } from './types';

export const rules: Rule[] = [
    { lhs: "PROGRAM'", len: 1 }, // PROGRAM' -> PROGRAM
    { lhs: 'PROGRAM', len: 1 }, // PROGRAM -> DEF-LIST
    { lhs: 'DEF-LIST', len: 2 }, // DEF-LIST -> DEF-LIST DEF
    { lhs: 'DEF-LIST', len: 0 }, // DEF-LIST -> ''
    { lhs: 'DEF', len: 1 }, // DEF -> VAR-DEF
    { lhs: 'DEF', len: 1 }, // DEF -> FUN-DEF
    { lhs: 'VAR-DEF', len: 3 }, // VAR-DEF -> var VAR-LIST ;
    { lhs: 'VAR-LIST', len: 1 }, // VAR-LIST -> ID-LIST
    { lhs: 'ID-LIST', len: 2 }, // ID-LIST -> ID ID-LIST-CONT
    { lhs: 'ID-LIST-CONT', len: 3 }, // ID-LIST-CONT -> , ID ID-LIST-CONT
    { lhs: 'ID-LIST-CONT', len: 0 }, // ID-LIST-CONT -> ''
    { lhs: 'FUN-DEF', len: 7 }, // FUN-DEF -> ID ( PARAM-LIST ) { VAR-DEF-LIST STMT-LIST }
    { lhs: 'PARAM-LIST', len: 1 }, // PARAM-LIST -> ID-LIST
    { lhs: 'PARAM-LIST', len: 0 }, // PARAM-LIST -> ''
    { lhs: 'VAR-DEF-LIST', len: 2 }, // VAR-DEF-LIST -> VAR-DEF-LIST VAR-DEF
    { lhs: 'VAR-DEF-LIST', len: 0 }, // VAR-DEF-LIST -> ''
    { lhs: 'STMT-LIST', len: 2 }, // STMT-LIST -> STMT-LIST STMT
    { lhs: 'STMT-LIST', len: 0 }, // STMT-LIST -> ''
    { lhs: 'STMT', len: 1 }, // STMT -> STMT-ASSIGN
    { lhs: 'STMT', len: 1 }, // STMT -> STMT-INCR
    { lhs: 'STMT', len: 1 }, // STMT -> STMT-DECR
    { lhs: 'STMT', len: 1 }, // STMT -> STMT-FUN-CALL
    { lhs: 'STMT', len: 1 }, // STMT -> STMT-IF
    { lhs: 'STMT', len: 1 }, // STMT -> STMT-WHILE
    { lhs: 'STMT', len: 1 }, // STMT -> STMT-DO-WHILE
    { lhs: 'STMT', len: 1 }, // STMT -> STMT-BREAK
    { lhs: 'STMT', len: 1 }, // STMT -> STMT-RETURN
    { lhs: 'STMT', len: 1 }, // STMT -> STMT-EMPTY
    { lhs: 'STMT-ASSIGN', len: 4 }, // STMT-ASSIGN -> ID = EXPR ;
    { lhs: 'STMT-INCR', len: 3 }, // STMT-INCR -> inc ID ;
    { lhs: 'STMT-DECR', len: 3 }, // STMT-DECR -> dec ID ;
    { lhs: 'STMT-FUN-CALL', len: 1 }, // STMT-FUN-CALL -> FUN-CALL ;
    { lhs: 'FUN-CALL', len: 3 }, // FUN-CALL -> ID ( EXPR-LIST )
    { lhs: 'EXPR-LIST', len: 2 }, // EXPR-LIST -> EXPR EXPR-LIST-CONT
    { lhs: 'EXPR-LIST', len: 0 }, // EXPR-LIST -> ''
    { lhs: 'EXPR-LIST-CONT', len: 3 }, // EXPR-LIST-CONT -> , EXPR EXPR-LIST-CONT
    { lhs: 'EXPR-LIST-CONT', len: 0 }, // EXPR-LIST-CONT -> ''
    { lhs: 'STMT-IF', len: 7 }, // STMT-IF -> if ( EXPR ) { STMT-LIST } ELSE-IF-LIST ELSE
    { lhs: 'ELSE-IF-LIST', len: 7 }, // ELSE-IF-LIST -> ELSE-IF-LIST elseif ( EXPR ) { STMT-LIST }
    { lhs: 'ELSE-IF-LIST', len: 0 }, // ELSE-IF-LIST -> ''
    { lhs: 'ELSE', len: 3 }, // ELSE -> else { STMT-LIST }
    { lhs: 'ELSE', len: 0 }, // ELSE -> ''
    { lhs: 'STMT-WHILE', len: 5 }, // STMT-WHILE -> while ( EXPR ) { STMT-LIST }
    { lhs: 'STMT-DO-WHILE', len: 7 }, // STMT-DO-WHILE -> do { STMT-LIST } while ( EXPR ) ;
    { lhs: 'STMT-BREAK', len: 2 }, // STMT-BREAK -> break ;
    { lhs: 'STMT-RETURN', len: 3 }, // STMT-RETURN -> return EXPR ;
    { lhs: 'STMT-EMPTY', len: 1 }, // STMT-EMPTY -> ;
    { lhs: 'EXPR', len: 1 }, // EXPR -> EXPR-OR
    { lhs: 'EXPR-OR', len: 3 }, // EXPR-OR -> EXPR-AND OP-OR EXPR-AND
    { lhs: 'EXPR-OR', len: 1 }, // EXPR-OR -> EXPR-AND
    { lhs: 'EXPR-AND', len: 3 }, // EXPR-AND -> EXPR-AND && EXPR-COMP
    { lhs: 'EXPR-AND', len: 1 }, // EXPR-AND -> EXPR-COMP
    { lhs: 'EXPR-COMP', len: 3 }, // EXPR-COMP -> EXPR-COMP OP-COMP EXPR-REL
    { lhs: 'EXPR-COMP', len: 1 }, // EXPR-COMP -> EXPR-REL
    { lhs: 'EXPR-REL', len: 3 }, // EXPR-REL -> EXPR-REL OP-REL EXPR-ADD
    { lhs: 'EXPR-REL', len: 1 }, // EXPR-REL -> EXPR-ADD
    { lhs: 'EXPR-ADD', len: 3 }, // EXPR-ADD -> EXPR-ADD OP-ADD EXPR-MUL
    { lhs: 'EXPR-ADD', len: 1 }, // EXPR-ADD -> EXPR-MUL
    { lhs: 'EXPR-MUL', len: 3 }, // EXPR-MUL -> EXPR-MUL OP-MUL EXPR-UNARY
    { lhs: 'EXPR-MUL', len: 1 }, // EXPR-MUL -> EXPR-UNARY
    { lhs: 'EXPR-UNARY', len: 2 }, // EXPR-UNARY -> OP-UNARY EXPR-UNARY
    { lhs: 'EXPR-UNARY', len: 1 }, // EXPR-UNARY -> EXPR-PRIMARY
    { lhs: 'EXPR-PRIMARY', len: 1 }, // EXPR-PRIMARY -> ID
    { lhs: 'EXPR-PRIMARY', len: 1 }, // EXPR-PRIMARY -> FUN-CALL
    { lhs: 'EXPR-PRIMARY', len: 1 }, // EXPR-PRIMARY -> ARRAY
    { lhs: 'EXPR-PRIMARY', len: 1 }, // EXPR-PRIMARY -> LIT
    { lhs: 'EXPR-PRIMARY', len: 3 }, // EXPR-PRIMARY -> ( EXPR )
    { lhs: 'ARRAY', len: 2 }, // ARRAY -> [ EXPR-LIST ]
    { lhs: 'LIT', len: 1 }, // LIT -> LIT-BOOL
    { lhs: 'LIT', len: 1 }, // LIT -> LIT-INT
    { lhs: 'LIT', len: 1 }, // LIT -> LIT-CHAR
    { lhs: 'LIT', len: 1 }, // LIT -> LIT-STR
];
