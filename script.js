import readline from 'readline';
import chalk from 'chalk';

const lista = [];
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});
console.log ('Digite seu atributo CSS: \n Ou Digite' + chalk.red(' sair ') + 'para encerrar');
rl.on ('line', (line) => {
    if(line.toLowerCase() == 'sair'){   
        rl.close();
        console.log(lista.map(elemento => elemento.toLowerCase()).sort());
    }else {lista.push(line)}
    
    
});
console.log(lista.sort());
