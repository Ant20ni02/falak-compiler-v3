const readline = require('readline');
import { readFileSync } from 'fs';

const splitFileContent = (filePath: string) => {
    const trimmedFilePath = filePath.replace(/^['"]|['"]$/g, '');
    const fullContent = readFileSync(trimmedFilePath, 'utf-8');

    fullContent.split(/\r?\n/).forEach(line => {
        console.log(line);
    });
};

const index = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question(`Please drag and drop the file into this window and press Enter: `, (filePath: string) => {
        splitFileContent(filePath);
        rl.close();
    });

    rl.on('close', () => {
        process.exit(0);
    });
}

index();
