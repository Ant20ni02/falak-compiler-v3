import type { ActionTable } from './types';

export const action: ActionTable = {
    '0': { var: ['R', 3], ID: ['R', 3], $: ['R', 3] },
    '1': { $: ['A'] },
    '2': { var: ['S', 6], ID: ['S', 7], $: ['R', 1] },
    '3': { var: ['R', 2], ID: ['R', 2], $: ['R', 2] },
    '4': { var: ['R', 4], ID: ['R', 4], $: ['R', 4] },
    '5': { var: ['R', 5], ID: ['R', 5], $: ['R', 5] },
    '6': { ID: ['S', 10] },
    '7': { '(': ['S', 11] },
    '8': { ';': ['S', 12] },
    '9': { ';': ['R', 7] },
    '10': { ';': ['R', 10], ',': ['S', 14], ')': ['R', 10] },
    '11': { ID: ['S', 10], ')': ['R', 13] },
    '12': {
        var: ['R', 6],
        ',': ['R', 6],
        ID: ['R', 6],
        '}': ['R', 6],
        inc: ['R', 6],
        dec: ['R', 6],
        if: ['R', 6],
        while: ['R', 6],
        do: ['R', 6],
        break: ['R', 6],
        return: ['R', 6],
        $: ['R', 6],
    },
    '13': { ';': ['R', 8], ')': ['R', 8] },
    '14': { ID: ['S', 17] },
    '15': { ')': ['S', 18] },
    '16': { ')': ['R', 12] },
    '17': { ';': ['R', 10], ',': ['S', 14], ')': ['R', 10] },
    '18': { '{': ['S', 20] },
    '19': { ';': ['R', 9], ')': ['R', 9] },
    '20': {
        var: ['R', 15],
        ';': ['R', 15],
        ID: ['R', 15],
        '}': ['R', 15],
        inc: ['R', 15],
        dec: ['R', 15],
        if: ['R', 15],
        while: ['R', 15],
        do: ['R', 15],
        break: ['R', 15],
        return: ['R', 15],
        $: ['R', 15],
    },
    '21': {
        var: ['S', 6],
        ';': ['R', 17],
        ID: ['R', 17],
        '}': ['R', 17],
        inc: ['R', 17],
        dec: ['R', 17],
        if: ['R', 17],
        while: ['R', 17],
        do: ['R', 17],
        break: ['R', 17],
        return: ['R', 17],
    },
    '22': {
        ';': ['S', 45],
        ID: ['S', 36],
        '}': ['S', 24],
        inc: ['S', 37],
        dec: ['S', 38],
        if: ['S', 40],
        while: ['S', 41],
        do: ['S', 42],
        break: ['S', 43],
        return: ['S', 44],
    },
    '23': {
        var: ['R', 14],
        ';': ['R', 14],
        ID: ['R', 14],
        '}': ['R', 14],
        inc: ['R', 14],
        dec: ['R', 14],
        if: ['R', 14],
        while: ['R', 14],
        do: ['R', 14],
        break: ['R', 14],
        return: ['R', 14],
        $: ['R', 14],
    },
    '24': { var: ['R', 11], ID: ['R', 11], $: ['R', 11] },
    '25': {
        ';': ['R', 16],
        ID: ['R', 16],
        '}': ['R', 16],
        inc: ['R', 16],
        dec: ['R', 16],
        if: ['R', 16],
        while: ['R', 16],
        do: ['R', 16],
        break: ['R', 16],
        return: ['R', 16],
    },
    '26': {
        ';': ['R', 18],
        ID: ['R', 18],
        '}': ['R', 18],
        inc: ['R', 18],
        dec: ['R', 18],
        if: ['R', 18],
        while: ['R', 18],
        do: ['R', 18],
        break: ['R', 18],
        return: ['R', 18],
    },
    '27': {
        ';': ['R', 19],
        ID: ['R', 19],
        '}': ['R', 19],
        inc: ['R', 19],
        dec: ['R', 19],
        if: ['R', 19],
        while: ['R', 19],
        do: ['R', 19],
        break: ['R', 19],
        return: ['R', 19],
    },
    '28': {
        ';': ['R', 20],
        ID: ['R', 20],
        '}': ['R', 20],
        inc: ['R', 20],
        dec: ['R', 20],
        if: ['R', 20],
        while: ['R', 20],
        do: ['R', 20],
        break: ['R', 20],
        return: ['R', 20],
    },
    '29': {
        ';': ['R', 21],
        ID: ['R', 21],
        '}': ['R', 21],
        inc: ['R', 21],
        dec: ['R', 21],
        if: ['R', 21],
        while: ['R', 21],
        do: ['R', 21],
        break: ['R', 21],
        return: ['R', 21],
    },
    '30': {
        ';': ['R', 22],
        ID: ['R', 22],
        '}': ['R', 22],
        inc: ['R', 22],
        dec: ['R', 22],
        if: ['R', 22],
        while: ['R', 22],
        do: ['R', 22],
        break: ['R', 22],
        return: ['R', 22],
    },
    '31': {
        ';': ['R', 23],
        ID: ['R', 23],
        '}': ['R', 23],
        inc: ['R', 23],
        dec: ['R', 23],
        if: ['R', 23],
        while: ['R', 23],
        do: ['R', 23],
        break: ['R', 23],
        return: ['R', 23],
    },
    '32': {
        ';': ['R', 24],
        ID: ['R', 24],
        '}': ['R', 24],
        inc: ['R', 24],
        dec: ['R', 24],
        if: ['R', 24],
        while: ['R', 24],
        do: ['R', 24],
        break: ['R', 24],
        return: ['R', 24],
    },
    '33': {
        ';': ['R', 25],
        ID: ['R', 25],
        '}': ['R', 25],
        inc: ['R', 25],
        dec: ['R', 25],
        if: ['R', 25],
        while: ['R', 25],
        do: ['R', 25],
        break: ['R', 25],
        return: ['R', 25],
    },
    '34': {
        ';': ['R', 26],
        ID: ['R', 26],
        '}': ['R', 26],
        inc: ['R', 26],
        dec: ['R', 26],
        if: ['R', 26],
        while: ['R', 26],
        do: ['R', 26],
        break: ['R', 26],
        return: ['R', 26],
    },
    '35': {
        ';': ['R', 27],
        ID: ['R', 27],
        '}': ['R', 27],
        inc: ['R', 27],
        dec: ['R', 27],
        if: ['R', 27],
        while: ['R', 27],
        do: ['R', 27],
        break: ['R', 27],
        return: ['R', 27],
    },
    '36': { '(': ['S', 47], '=': ['S', 46] },
    '37': { ID: ['S', 48] },
    '38': { ID: ['S', 49] },
    '39': { ';': ['S', 50] },
    '40': { '(': ['S', 51] },
    '41': { '(': ['S', 52] },
    '42': { '{': ['S', 53] },
    '43': { ';': ['S', 54] },
    '44': {
        ID: ['S', 68],
        '(': ['S', 72],
        '+': ['S', 65],
        '-': ['S', 66],
        '!': ['S', 67],
        '[': ['S', 73],
        'LIT-BOOL': ['S', 74],
        'LIT-INT': ['S', 75],
        'LIT-CHAR': ['S', 76],
        'LIT-STR': ['S', 77],
    },
    '45': {
        ';': ['R', 46],
        ID: ['R', 46],
        '}': ['R', 46],
        inc: ['R', 46],
        dec: ['R', 46],
        if: ['R', 46],
        while: ['R', 46],
        do: ['R', 46],
        break: ['R', 46],
        return: ['R', 46],
    },
    '46': {
        ID: ['S', 68],
        '(': ['S', 72],
        '+': ['S', 65],
        '-': ['S', 66],
        '!': ['S', 67],
        '[': ['S', 73],
        'LIT-BOOL': ['S', 74],
        'LIT-INT': ['S', 75],
        'LIT-CHAR': ['S', 76],
        'LIT-STR': ['S', 77],
    },
    '47': {
        ID: ['S', 68],
        '(': ['S', 72],
        ')': ['R', 34],
        '+': ['S', 65],
        '-': ['S', 66],
        '!': ['S', 67],
        '[': ['S', 73],
        ']': ['R', 34],
        'LIT-BOOL': ['S', 74],
        'LIT-INT': ['S', 75],
        'LIT-CHAR': ['S', 76],
        'LIT-STR': ['S', 77],
    },
    '48': { ';': ['S', 81] },
    '49': { ';': ['S', 82] },
    '50': {
        ';': ['R', 31],
        ID: ['R', 31],
        '}': ['R', 31],
        inc: ['R', 31],
        dec: ['R', 31],
        if: ['R', 31],
        while: ['R', 31],
        do: ['R', 31],
        break: ['R', 31],
        return: ['R', 31],
    },
    '51': {
        ID: ['S', 68],
        '(': ['S', 72],
        '+': ['S', 65],
        '-': ['S', 66],
        '!': ['S', 67],
        '[': ['S', 73],
        'LIT-BOOL': ['S', 74],
        'LIT-INT': ['S', 75],
        'LIT-CHAR': ['S', 76],
        'LIT-STR': ['S', 77],
    },
    '52': {
        ID: ['S', 68],
        '(': ['S', 72],
        '+': ['S', 65],
        '-': ['S', 66],
        '!': ['S', 67],
        '[': ['S', 73],
        'LIT-BOOL': ['S', 74],
        'LIT-INT': ['S', 75],
        'LIT-CHAR': ['S', 76],
        'LIT-STR': ['S', 77],
    },
    '53': {
        ';': ['R', 17],
        ID: ['R', 17],
        '}': ['R', 17],
        inc: ['R', 17],
        dec: ['R', 17],
        if: ['R', 17],
        while: ['R', 17],
        do: ['R', 17],
        break: ['R', 17],
        return: ['R', 17],
    },
    '54': {
        ';': ['R', 44],
        ID: ['R', 44],
        '}': ['R', 44],
        inc: ['R', 44],
        dec: ['R', 44],
        if: ['R', 44],
        while: ['R', 44],
        do: ['R', 44],
        break: ['R', 44],
        return: ['R', 44],
    },
    '55': { ';': ['S', 86] },
    '56': { ';': ['R', 47], ',': ['R', 47], ')': ['R', 47], ']': ['R', 47] },
    '57': {
        ';': ['R', 51],
        ',': ['R', 51],
        ')': ['R', 51],
        '||': ['S', 89],
        '^': ['S', 90],
        '&&': ['S', 88],
        ']': ['R', 51],
    },
    '58': {
        ';': ['R', 53],
        ',': ['R', 53],
        ')': ['R', 53],
        '||': ['R', 53],
        '^': ['R', 53],
        '&&': ['R', 53],
        '==': ['S', 92],
        '!=': ['S', 93],
        ']': ['R', 53],
    },
    '59': {
        ';': ['R', 55],
        ',': ['R', 55],
        ')': ['R', 55],
        '||': ['R', 55],
        '^': ['R', 55],
        '&&': ['R', 55],
        '==': ['R', 55],
        '!=': ['R', 55],
        '<': ['S', 95],
        '<=': ['S', 96],
        '>': ['S', 97],
        '>=': ['S', 98],
        ']': ['R', 55],
    },
    '60': {
        ';': ['R', 59],
        ',': ['R', 59],
        ')': ['R', 59],
        '||': ['R', 59],
        '^': ['R', 59],
        '&&': ['R', 59],
        '==': ['R', 59],
        '!=': ['R', 59],
        '<': ['R', 59],
        '<=': ['R', 59],
        '>': ['R', 59],
        '>=': ['R', 59],
        '+': ['S', 100],
        '-': ['S', 101],
        ']': ['R', 59],
    },
    '61': {
        ';': ['R', 65],
        ',': ['R', 65],
        ')': ['R', 65],
        '||': ['R', 65],
        '^': ['R', 65],
        '&&': ['R', 65],
        '==': ['R', 65],
        '!=': ['R', 65],
        '<': ['R', 65],
        '<=': ['R', 65],
        '>': ['R', 65],
        '>=': ['R', 65],
        '+': ['R', 65],
        '-': ['R', 65],
        '*': ['S', 103],
        '/': ['S', 104],
        '%': ['S', 105],
        ']': ['R', 65],
    },
    '62': {
        ';': ['R', 69],
        ',': ['R', 69],
        ')': ['R', 69],
        '||': ['R', 69],
        '^': ['R', 69],
        '&&': ['R', 69],
        '==': ['R', 69],
        '!=': ['R', 69],
        '<': ['R', 69],
        '<=': ['R', 69],
        '>': ['R', 69],
        '>=': ['R', 69],
        '+': ['R', 69],
        '-': ['R', 69],
        '*': ['R', 69],
        '/': ['R', 69],
        '%': ['R', 69],
        ']': ['R', 69],
    },
    '63': {
        ID: ['S', 68],
        '(': ['S', 72],
        '+': ['S', 65],
        '-': ['S', 66],
        '!': ['S', 67],
        '[': ['S', 73],
        'LIT-BOOL': ['S', 74],
        'LIT-INT': ['S', 75],
        'LIT-CHAR': ['S', 76],
        'LIT-STR': ['S', 77],
    },
    '64': {
        ';': ['R', 74],
        ',': ['R', 74],
        ')': ['R', 74],
        '||': ['R', 74],
        '^': ['R', 74],
        '&&': ['R', 74],
        '==': ['R', 74],
        '!=': ['R', 74],
        '<': ['R', 74],
        '<=': ['R', 74],
        '>': ['R', 74],
        '>=': ['R', 74],
        '+': ['R', 74],
        '-': ['R', 74],
        '*': ['R', 74],
        '/': ['R', 74],
        '%': ['R', 74],
        ']': ['R', 74],
    },
    '65': {
        ID: ['R', 75],
        '(': ['R', 75],
        '+': ['R', 75],
        '-': ['R', 75],
        '!': ['R', 75],
        '[': ['R', 75],
        'LIT-BOOL': ['R', 75],
        'LIT-INT': ['R', 75],
        'LIT-CHAR': ['R', 75],
        'LIT-STR': ['R', 75],
    },
    '66': {
        ID: ['R', 76],
        '(': ['R', 76],
        '+': ['R', 76],
        '-': ['R', 76],
        '!': ['R', 76],
        '[': ['R', 76],
        'LIT-BOOL': ['R', 76],
        'LIT-INT': ['R', 76],
        'LIT-CHAR': ['R', 76],
        'LIT-STR': ['R', 76],
    },
    '67': {
        ID: ['R', 77],
        '(': ['R', 77],
        '+': ['R', 77],
        '-': ['R', 77],
        '!': ['R', 77],
        '[': ['R', 77],
        'LIT-BOOL': ['R', 77],
        'LIT-INT': ['R', 77],
        'LIT-CHAR': ['R', 77],
        'LIT-STR': ['R', 77],
    },
    '68': {
        ';': ['R', 78],
        ',': ['R', 78],
        '(': ['S', 47],
        ')': ['R', 78],
        '||': ['R', 78],
        '^': ['R', 78],
        '&&': ['R', 78],
        '==': ['R', 78],
        '!=': ['R', 78],
        '<': ['R', 78],
        '<=': ['R', 78],
        '>': ['R', 78],
        '>=': ['R', 78],
        '+': ['R', 78],
        '-': ['R', 78],
        '*': ['R', 78],
        '/': ['R', 78],
        '%': ['R', 78],
        ']': ['R', 78],
    },
    '69': {
        ';': ['R', 79],
        ',': ['R', 79],
        ')': ['R', 79],
        '||': ['R', 79],
        '^': ['R', 79],
        '&&': ['R', 79],
        '==': ['R', 79],
        '!=': ['R', 79],
        '<': ['R', 79],
        '<=': ['R', 79],
        '>': ['R', 79],
        '>=': ['R', 79],
        '+': ['R', 79],
        '-': ['R', 79],
        '*': ['R', 79],
        '/': ['R', 79],
        '%': ['R', 79],
        ']': ['R', 79],
    },
    '70': {
        ';': ['R', 80],
        ',': ['R', 80],
        ')': ['R', 80],
        '||': ['R', 80],
        '^': ['R', 80],
        '&&': ['R', 80],
        '==': ['R', 80],
        '!=': ['R', 80],
        '<': ['R', 80],
        '<=': ['R', 80],
        '>': ['R', 80],
        '>=': ['R', 80],
        '+': ['R', 80],
        '-': ['R', 80],
        '*': ['R', 80],
        '/': ['R', 80],
        '%': ['R', 80],
        ']': ['R', 80],
    },
    '71': {
        ';': ['R', 81],
        ',': ['R', 81],
        ')': ['R', 81],
        '||': ['R', 81],
        '^': ['R', 81],
        '&&': ['R', 81],
        '==': ['R', 81],
        '!=': ['R', 81],
        '<': ['R', 81],
        '<=': ['R', 81],
        '>': ['R', 81],
        '>=': ['R', 81],
        '+': ['R', 81],
        '-': ['R', 81],
        '*': ['R', 81],
        '/': ['R', 81],
        '%': ['R', 81],
        ']': ['R', 81],
    },
    '72': {
        ID: ['S', 68],
        '(': ['S', 72],
        '+': ['S', 65],
        '-': ['S', 66],
        '!': ['S', 67],
        '[': ['S', 73],
        'LIT-BOOL': ['S', 74],
        'LIT-INT': ['S', 75],
        'LIT-CHAR': ['S', 76],
        'LIT-STR': ['S', 77],
    },
    '73': {
        ID: ['S', 68],
        '(': ['S', 72],
        ')': ['R', 34],
        '+': ['S', 65],
        '-': ['S', 66],
        '!': ['S', 67],
        '[': ['S', 73],
        ']': ['R', 34],
        'LIT-BOOL': ['S', 74],
        'LIT-INT': ['S', 75],
        'LIT-CHAR': ['S', 76],
        'LIT-STR': ['S', 77],
    },
    '74': {
        ';': ['R', 84],
        ',': ['R', 84],
        ')': ['R', 84],
        '||': ['R', 84],
        '^': ['R', 84],
        '&&': ['R', 84],
        '==': ['R', 84],
        '!=': ['R', 84],
        '<': ['R', 84],
        '<=': ['R', 84],
        '>': ['R', 84],
        '>=': ['R', 84],
        '+': ['R', 84],
        '-': ['R', 84],
        '*': ['R', 84],
        '/': ['R', 84],
        '%': ['R', 84],
        ']': ['R', 84],
    },
    '75': {
        ';': ['R', 85],
        ',': ['R', 85],
        ')': ['R', 85],
        '||': ['R', 85],
        '^': ['R', 85],
        '&&': ['R', 85],
        '==': ['R', 85],
        '!=': ['R', 85],
        '<': ['R', 85],
        '<=': ['R', 85],
        '>': ['R', 85],
        '>=': ['R', 85],
        '+': ['R', 85],
        '-': ['R', 85],
        '*': ['R', 85],
        '/': ['R', 85],
        '%': ['R', 85],
        ']': ['R', 85],
    },
    '76': {
        ';': ['R', 86],
        ',': ['R', 86],
        ')': ['R', 86],
        '||': ['R', 86],
        '^': ['R', 86],
        '&&': ['R', 86],
        '==': ['R', 86],
        '!=': ['R', 86],
        '<': ['R', 86],
        '<=': ['R', 86],
        '>': ['R', 86],
        '>=': ['R', 86],
        '+': ['R', 86],
        '-': ['R', 86],
        '*': ['R', 86],
        '/': ['R', 86],
        '%': ['R', 86],
        ']': ['R', 86],
    },
    '77': {
        ';': ['R', 87],
        ',': ['R', 87],
        ')': ['R', 87],
        '||': ['R', 87],
        '^': ['R', 87],
        '&&': ['R', 87],
        '==': ['R', 87],
        '!=': ['R', 87],
        '<': ['R', 87],
        '<=': ['R', 87],
        '>': ['R', 87],
        '>=': ['R', 87],
        '+': ['R', 87],
        '-': ['R', 87],
        '*': ['R', 87],
        '/': ['R', 87],
        '%': ['R', 87],
        ']': ['R', 87],
    },
    '78': { ';': ['S', 109] },
    '79': { ')': ['S', 110] },
    '80': { ',': ['S', 112], ')': ['R', 36], ']': ['R', 36] },
    '81': {
        ';': ['R', 29],
        ID: ['R', 29],
        '}': ['R', 29],
        inc: ['R', 29],
        dec: ['R', 29],
        if: ['R', 29],
        while: ['R', 29],
        do: ['R', 29],
        break: ['R', 29],
        return: ['R', 29],
    },
    '82': {
        ';': ['R', 30],
        ID: ['R', 30],
        '}': ['R', 30],
        inc: ['R', 30],
        dec: ['R', 30],
        if: ['R', 30],
        while: ['R', 30],
        do: ['R', 30],
        break: ['R', 30],
        return: ['R', 30],
    },
    '83': { ')': ['S', 113] },
    '84': { ')': ['S', 114] },
    '85': {
        ';': ['S', 45],
        ID: ['S', 36],
        '}': ['S', 115],
        inc: ['S', 37],
        dec: ['S', 38],
        if: ['S', 40],
        while: ['S', 41],
        do: ['S', 42],
        break: ['S', 43],
        return: ['S', 44],
    },
    '86': {
        ';': ['R', 45],
        ID: ['R', 45],
        '}': ['R', 45],
        inc: ['R', 45],
        dec: ['R', 45],
        if: ['R', 45],
        while: ['R', 45],
        do: ['R', 45],
        break: ['R', 45],
        return: ['R', 45],
    },
    '87': {
        ID: ['S', 68],
        '(': ['S', 72],
        '+': ['S', 65],
        '-': ['S', 66],
        '!': ['S', 67],
        '[': ['S', 73],
        'LIT-BOOL': ['S', 74],
        'LIT-INT': ['S', 75],
        'LIT-CHAR': ['S', 76],
        'LIT-STR': ['S', 77],
    },
    '88': {
        ID: ['S', 68],
        '(': ['S', 72],
        '+': ['S', 65],
        '-': ['S', 66],
        '!': ['S', 67],
        '[': ['S', 73],
        'LIT-BOOL': ['S', 74],
        'LIT-INT': ['S', 75],
        'LIT-CHAR': ['S', 76],
        'LIT-STR': ['S', 77],
    },
    '89': {
        ID: ['R', 49],
        '(': ['R', 49],
        '+': ['R', 49],
        '-': ['R', 49],
        '!': ['R', 49],
        '[': ['R', 49],
        'LIT-BOOL': ['R', 49],
        'LIT-INT': ['R', 49],
        'LIT-CHAR': ['R', 49],
        'LIT-STR': ['R', 49],
    },
    '90': {
        ID: ['R', 50],
        '(': ['R', 50],
        '+': ['R', 50],
        '-': ['R', 50],
        '!': ['R', 50],
        '[': ['R', 50],
        'LIT-BOOL': ['R', 50],
        'LIT-INT': ['R', 50],
        'LIT-CHAR': ['R', 50],
        'LIT-STR': ['R', 50],
    },
    '91': {
        ID: ['S', 68],
        '(': ['S', 72],
        '+': ['S', 65],
        '-': ['S', 66],
        '!': ['S', 67],
        '[': ['S', 73],
        'LIT-BOOL': ['S', 74],
        'LIT-INT': ['S', 75],
        'LIT-CHAR': ['S', 76],
        'LIT-STR': ['S', 77],
    },
    '92': {
        ID: ['R', 56],
        '(': ['R', 56],
        '+': ['R', 56],
        '-': ['R', 56],
        '!': ['R', 56],
        '[': ['R', 56],
        'LIT-BOOL': ['R', 56],
        'LIT-INT': ['R', 56],
        'LIT-CHAR': ['R', 56],
        'LIT-STR': ['R', 56],
    },
    '93': {
        ID: ['R', 57],
        '(': ['R', 57],
        '+': ['R', 57],
        '-': ['R', 57],
        '!': ['R', 57],
        '[': ['R', 57],
        'LIT-BOOL': ['R', 57],
        'LIT-INT': ['R', 57],
        'LIT-CHAR': ['R', 57],
        'LIT-STR': ['R', 57],
    },
    '94': {
        ID: ['S', 68],
        '(': ['S', 72],
        '+': ['S', 65],
        '-': ['S', 66],
        '!': ['S', 67],
        '[': ['S', 73],
        'LIT-BOOL': ['S', 74],
        'LIT-INT': ['S', 75],
        'LIT-CHAR': ['S', 76],
        'LIT-STR': ['S', 77],
    },
    '95': {
        ID: ['R', 60],
        '(': ['R', 60],
        '+': ['R', 60],
        '-': ['R', 60],
        '!': ['R', 60],
        '[': ['R', 60],
        'LIT-BOOL': ['R', 60],
        'LIT-INT': ['R', 60],
        'LIT-CHAR': ['R', 60],
        'LIT-STR': ['R', 60],
    },
    '96': {
        ID: ['R', 61],
        '(': ['R', 61],
        '+': ['R', 61],
        '-': ['R', 61],
        '!': ['R', 61],
        '[': ['R', 61],
        'LIT-BOOL': ['R', 61],
        'LIT-INT': ['R', 61],
        'LIT-CHAR': ['R', 61],
        'LIT-STR': ['R', 61],
    },
    '97': {
        ID: ['R', 62],
        '(': ['R', 62],
        '+': ['R', 62],
        '-': ['R', 62],
        '!': ['R', 62],
        '[': ['R', 62],
        'LIT-BOOL': ['R', 62],
        'LIT-INT': ['R', 62],
        'LIT-CHAR': ['R', 62],
        'LIT-STR': ['R', 62],
    },
    '98': {
        ID: ['R', 63],
        '(': ['R', 63],
        '+': ['R', 63],
        '-': ['R', 63],
        '!': ['R', 63],
        '[': ['R', 63],
        'LIT-BOOL': ['R', 63],
        'LIT-INT': ['R', 63],
        'LIT-CHAR': ['R', 63],
        'LIT-STR': ['R', 63],
    },
    '99': {
        ID: ['S', 68],
        '(': ['S', 72],
        '+': ['S', 65],
        '-': ['S', 66],
        '!': ['S', 67],
        '[': ['S', 73],
        'LIT-BOOL': ['S', 74],
        'LIT-INT': ['S', 75],
        'LIT-CHAR': ['S', 76],
        'LIT-STR': ['S', 77],
    },
    '100': {
        ID: ['R', 66],
        '(': ['R', 66],
        '+': ['R', 66],
        '-': ['R', 66],
        '!': ['R', 66],
        '[': ['R', 66],
        'LIT-BOOL': ['R', 66],
        'LIT-INT': ['R', 66],
        'LIT-CHAR': ['R', 66],
        'LIT-STR': ['R', 66],
    },
    '101': {
        ID: ['R', 67],
        '(': ['R', 67],
        '+': ['R', 67],
        '-': ['R', 67],
        '!': ['R', 67],
        '[': ['R', 67],
        'LIT-BOOL': ['R', 67],
        'LIT-INT': ['R', 67],
        'LIT-CHAR': ['R', 67],
        'LIT-STR': ['R', 67],
    },
    '102': {
        ID: ['S', 68],
        '(': ['S', 72],
        '+': ['S', 65],
        '-': ['S', 66],
        '!': ['S', 67],
        '[': ['S', 73],
        'LIT-BOOL': ['S', 74],
        'LIT-INT': ['S', 75],
        'LIT-CHAR': ['S', 76],
        'LIT-STR': ['S', 77],
    },
    '103': {
        ID: ['R', 70],
        '(': ['R', 70],
        '+': ['R', 70],
        '-': ['R', 70],
        '!': ['R', 70],
        '[': ['R', 70],
        'LIT-BOOL': ['R', 70],
        'LIT-INT': ['R', 70],
        'LIT-CHAR': ['R', 70],
        'LIT-STR': ['R', 70],
    },
    '104': {
        ID: ['R', 71],
        '(': ['R', 71],
        '+': ['R', 71],
        '-': ['R', 71],
        '!': ['R', 71],
        '[': ['R', 71],
        'LIT-BOOL': ['R', 71],
        'LIT-INT': ['R', 71],
        'LIT-CHAR': ['R', 71],
        'LIT-STR': ['R', 71],
    },
    '105': {
        ID: ['R', 72],
        '(': ['R', 72],
        '+': ['R', 72],
        '-': ['R', 72],
        '!': ['R', 72],
        '[': ['R', 72],
        'LIT-BOOL': ['R', 72],
        'LIT-INT': ['R', 72],
        'LIT-CHAR': ['R', 72],
        'LIT-STR': ['R', 72],
    },
    '106': {
        ';': ['R', 73],
        ',': ['R', 73],
        ')': ['R', 73],
        '||': ['R', 73],
        '^': ['R', 73],
        '&&': ['R', 73],
        '==': ['R', 73],
        '!=': ['R', 73],
        '<': ['R', 73],
        '<=': ['R', 73],
        '>': ['R', 73],
        '>=': ['R', 73],
        '+': ['R', 73],
        '-': ['R', 73],
        '*': ['R', 73],
        '/': ['R', 73],
        '%': ['R', 73],
        ']': ['R', 73],
    },
    '107': { ')': ['S', 122] },
    '108': { ']': ['S', 123] },
    '109': {
        ';': ['R', 28],
        ID: ['R', 28],
        '}': ['R', 28],
        inc: ['R', 28],
        dec: ['R', 28],
        if: ['R', 28],
        while: ['R', 28],
        do: ['R', 28],
        break: ['R', 28],
        return: ['R', 28],
    },
    '110': {
        ';': ['R', 32],
        ',': ['R', 32],
        ')': ['R', 32],
        '||': ['R', 32],
        '^': ['R', 32],
        '&&': ['R', 32],
        '==': ['R', 32],
        '!=': ['R', 32],
        '<': ['R', 32],
        '<=': ['R', 32],
        '>': ['R', 32],
        '>=': ['R', 32],
        '+': ['R', 32],
        '-': ['R', 32],
        '*': ['R', 32],
        '/': ['R', 32],
        '%': ['R', 32],
        ']': ['R', 32],
    },
    '111': { ')': ['R', 33], ']': ['R', 33] },
    '112': {
        ID: ['S', 68],
        '(': ['S', 72],
        '+': ['S', 65],
        '-': ['S', 66],
        '!': ['S', 67],
        '[': ['S', 73],
        'LIT-BOOL': ['S', 74],
        'LIT-INT': ['S', 75],
        'LIT-CHAR': ['S', 76],
        'LIT-STR': ['S', 77],
    },
    '113': { '{': ['S', 125] },
    '114': { '{': ['S', 126] },
    '115': { while: ['S', 127] },
    '116': {
        ';': ['R', 48],
        ',': ['R', 48],
        ')': ['R', 48],
        '&&': ['S', 88],
        ']': ['R', 48],
    },
    '117': {
        ';': ['R', 52],
        ',': ['R', 52],
        ')': ['R', 52],
        '||': ['R', 52],
        '^': ['R', 52],
        '&&': ['R', 52],
        '==': ['S', 92],
        '!=': ['S', 93],
        ']': ['R', 52],
    },
    '118': {
        ';': ['R', 54],
        ',': ['R', 54],
        ')': ['R', 54],
        '||': ['R', 54],
        '^': ['R', 54],
        '&&': ['R', 54],
        '==': ['R', 54],
        '!=': ['R', 54],
        '<': ['S', 95],
        '<=': ['S', 96],
        '>': ['S', 97],
        '>=': ['S', 98],
        ']': ['R', 54],
    },
    '119': {
        ';': ['R', 58],
        ',': ['R', 58],
        ')': ['R', 58],
        '||': ['R', 58],
        '^': ['R', 58],
        '&&': ['R', 58],
        '==': ['R', 58],
        '!=': ['R', 58],
        '<': ['R', 58],
        '<=': ['R', 58],
        '>': ['R', 58],
        '>=': ['R', 58],
        '+': ['S', 100],
        '-': ['S', 101],
        ']': ['R', 58],
    },
    '120': {
        ';': ['R', 64],
        ',': ['R', 64],
        ')': ['R', 64],
        '||': ['R', 64],
        '^': ['R', 64],
        '&&': ['R', 64],
        '==': ['R', 64],
        '!=': ['R', 64],
        '<': ['R', 64],
        '<=': ['R', 64],
        '>': ['R', 64],
        '>=': ['R', 64],
        '+': ['R', 64],
        '-': ['R', 64],
        '*': ['S', 103],
        '/': ['S', 104],
        '%': ['S', 105],
        ']': ['R', 64],
    },
    '121': {
        ';': ['R', 68],
        ',': ['R', 68],
        ')': ['R', 68],
        '||': ['R', 68],
        '^': ['R', 68],
        '&&': ['R', 68],
        '==': ['R', 68],
        '!=': ['R', 68],
        '<': ['R', 68],
        '<=': ['R', 68],
        '>': ['R', 68],
        '>=': ['R', 68],
        '+': ['R', 68],
        '-': ['R', 68],
        '*': ['R', 68],
        '/': ['R', 68],
        '%': ['R', 68],
        ']': ['R', 68],
    },
    '122': {
        ';': ['R', 82],
        ',': ['R', 82],
        ')': ['R', 82],
        '||': ['R', 82],
        '^': ['R', 82],
        '&&': ['R', 82],
        '==': ['R', 82],
        '!=': ['R', 82],
        '<': ['R', 82],
        '<=': ['R', 82],
        '>': ['R', 82],
        '>=': ['R', 82],
        '+': ['R', 82],
        '-': ['R', 82],
        '*': ['R', 82],
        '/': ['R', 82],
        '%': ['R', 82],
        ']': ['R', 82],
    },
    '123': {
        ';': ['R', 83],
        ',': ['R', 83],
        ')': ['R', 83],
        '||': ['R', 83],
        '^': ['R', 83],
        '&&': ['R', 83],
        '==': ['R', 83],
        '!=': ['R', 83],
        '<': ['R', 83],
        '<=': ['R', 83],
        '>': ['R', 83],
        '>=': ['R', 83],
        '+': ['R', 83],
        '-': ['R', 83],
        '*': ['R', 83],
        '/': ['R', 83],
        '%': ['R', 83],
        ']': ['R', 83],
    },
    '124': { ',': ['S', 112], ')': ['R', 36], ']': ['R', 36] },
    '125': {
        ';': ['R', 17],
        ID: ['R', 17],
        '}': ['R', 17],
        inc: ['R', 17],
        dec: ['R', 17],
        if: ['R', 17],
        while: ['R', 17],
        do: ['R', 17],
        break: ['R', 17],
        return: ['R', 17],
    },
    '126': {
        ';': ['R', 17],
        ID: ['R', 17],
        '}': ['R', 17],
        inc: ['R', 17],
        dec: ['R', 17],
        if: ['R', 17],
        while: ['R', 17],
        do: ['R', 17],
        break: ['R', 17],
        return: ['R', 17],
    },
    '127': { '(': ['S', 131] },
    '128': { ')': ['R', 35], ']': ['R', 35] },
    '129': {
        ';': ['S', 45],
        ID: ['S', 36],
        '}': ['S', 132],
        inc: ['S', 37],
        dec: ['S', 38],
        if: ['S', 40],
        while: ['S', 41],
        do: ['S', 42],
        break: ['S', 43],
        return: ['S', 44],
    },
    '130': {
        ';': ['S', 45],
        ID: ['S', 36],
        '}': ['S', 132],
        inc: ['S', 37],
        dec: ['S', 38],
        if: ['S', 40],
        while: ['S', 41],
        do: ['S', 42],
        break: ['S', 43],
        return: ['S', 44],
    },
    '131': {
        ID: ['S', 68],
        '(': ['S', 72],
        '+': ['S', 65],
        '-': ['S', 66],
        '!': ['S', 67],
        '[': ['S', 73],
        'LIT-BOOL': ['S', 74],
        'LIT-INT': ['S', 75],
        'LIT-CHAR': ['S', 76],
        'LIT-STR': ['S', 77],
    },
    '132': {
        ';': ['R', 39],
        ID: ['R', 39],
        '}': ['R', 39],
        inc: ['R', 39],
        dec: ['R', 39],
        if: ['R', 39],
        elseif: ['R', 39],
        else: ['R', 39],
        while: ['R', 39],
        do: ['R', 39],
        break: ['R', 39],
        return: ['R', 39],
    },
    '133': {
        ';': ['R', 42],
        ID: ['R', 42],
        '}': ['R', 42],
        inc: ['R', 42],
        dec: ['R', 42],
        if: ['R', 42],
        while: ['R', 42],
        do: ['R', 42],
        break: ['R', 42],
        return: ['R', 42],
    },
    '134': { ')': ['S', 136] },
    '135': {
        ';': ['R', 41],
        ID: ['R', 41],
        '}': ['R', 41],
        inc: ['R', 41],
        dec: ['R', 41],
        if: ['R', 41],
        elseif: ['S', 138],
        else: ['S', 139],
        while: ['R', 41],
        do: ['R', 41],
        break: ['R', 41],
        return: ['R', 41],
    },
    '136': { ';': ['S', 140] },
    '137': {
        ';': ['R', 37],
        ID: ['R', 37],
        '}': ['R', 37],
        inc: ['R', 37],
        dec: ['R', 37],
        if: ['R', 37],
        while: ['R', 37],
        do: ['R', 37],
        break: ['R', 37],
        return: ['R', 37],
    },
    '138': { '(': ['S', 141] },
    '139': { '{': ['S', 142] },
    '140': {
        ';': ['R', 43],
        ID: ['R', 43],
        '}': ['R', 43],
        inc: ['R', 43],
        dec: ['R', 43],
        if: ['R', 43],
        while: ['R', 43],
        do: ['R', 43],
        break: ['R', 43],
        return: ['R', 43],
    },
    '141': {
        ID: ['S', 68],
        '(': ['S', 72],
        '+': ['S', 65],
        '-': ['S', 66],
        '!': ['S', 67],
        '[': ['S', 73],
        'LIT-BOOL': ['S', 74],
        'LIT-INT': ['S', 75],
        'LIT-CHAR': ['S', 76],
        'LIT-STR': ['S', 77],
    },
    '142': {
        ';': ['R', 17],
        ID: ['R', 17],
        '}': ['R', 17],
        inc: ['R', 17],
        dec: ['R', 17],
        if: ['R', 17],
        while: ['R', 17],
        do: ['R', 17],
        break: ['R', 17],
        return: ['R', 17],
    },
    '143': { ')': ['S', 145] },
    '144': {
        ';': ['S', 45],
        ID: ['S', 36],
        '}': ['S', 146],
        inc: ['S', 37],
        dec: ['S', 38],
        if: ['S', 40],
        while: ['S', 41],
        do: ['S', 42],
        break: ['S', 43],
        return: ['S', 44],
    },
    '145': { '{': ['S', 147] },
    '146': {
        ';': ['R', 40],
        ID: ['R', 40],
        '}': ['R', 40],
        inc: ['R', 40],
        dec: ['R', 40],
        if: ['R', 40],
        while: ['R', 40],
        do: ['R', 40],
        break: ['R', 40],
        return: ['R', 40],
    },
    '147': {
        ';': ['R', 17],
        ID: ['R', 17],
        '}': ['R', 17],
        inc: ['R', 17],
        dec: ['R', 17],
        if: ['R', 17],
        while: ['R', 17],
        do: ['R', 17],
        break: ['R', 17],
        return: ['R', 17],
    },
    '148': {
        ';': ['S', 45],
        ID: ['S', 36],
        '}': ['S', 149],
        inc: ['S', 37],
        dec: ['S', 38],
        if: ['S', 40],
        while: ['S', 41],
        do: ['S', 42],
        break: ['S', 43],
        return: ['S', 44],
    },
    '149': {
        ';': ['R', 38],
        ID: ['R', 38],
        '}': ['R', 38],
        inc: ['R', 38],
        dec: ['R', 38],
        if: ['R', 38],
        elseif: ['R', 38],
        else: ['R', 38],
        while: ['R', 38],
        do: ['R', 38],
        break: ['R', 38],
        return: ['R', 38],
    },
};
