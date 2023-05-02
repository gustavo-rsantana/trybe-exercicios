let peca = 'BisPo';
let usada = peca.toLowerCase();

switch (usada) {
    case ('cavalo'):
        console.log('O cavalo movivemta em L');
        break;
    case ('bispo'):
        console.log('O bispo anda em diagonais');
        break;
    case ('torre'):
        console,console.log('A torre anda em linhas retas');
        break;

    default:
        console.log('Peca invalida')
        break;
}