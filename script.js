const tituloEl=document.getElementById('titulo');
const titulo='Tetris'
tituloEl.innerHTML=`
    Juego de ${titulo}
`;
const shapes=[
    [
        [0,0,0],
        [1,1,0],
        [0,1,1]
    ]
]
const color=[
    'black',
    'red',
]
class PieceRender{
    constructor(){
    }
}
function newGameState(){
    const gameCanvas=document.getElementById('tetris')
    const ctx=gameCanvas.getContext('2d')
}
const piece= new PieceRender()
document.addEventListener('keydown',function(e){
    switch(e.key){
        case 'a':
            console.log('izquierda')
            break;
        case 'd':
            console.log('derecha');
            break;
        case 's':
            console.log('acelerar caída')
            break;
        case 'w':
            console.log('rotar')
            break;
        case 'p':
            console.log(piece.ejemplo)
    }
})