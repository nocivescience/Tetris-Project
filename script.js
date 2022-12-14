const tituloEl=document.getElementById('titulo');
const titulo='Tetris'
const Cols=20;
const Rows=30;
const scaleGame=32;
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
    constructor(shape,ctx){
        this.shape=shape;
        this.ctx=ctx
        this.x=5;
        this.y=7;
    }
    rendering(){
        this.shape.forEach((row,i)=>{
            row.forEach((cell,j)=>{
                if(cell!==0){
                    ctx.fillStyle='red';
                    ctx.fillRect(this.x+j,this.y+i,1,1)
                }
            })
        })
    }
}
class GameModel{
    constructor(ctx){
        this.ctx=ctx;
        this.fallingPiece=null;
        this.grid=this.MakeStartingGrid();
    }
    MakeStartingGrid(){
        let grid=[]
        for(let i=0;i<Rows;i++){
            grid.push([]);
            for(let j=0;j<Cols;j++){
                grid[grid.length-1].push(0)
            }
        }
        return grid;
    }
}
const canvas=document.getElementById('tetris');
const ctx=canvas.getContext('2d');
ctx.scale(scaleGame,scaleGame)
const model=new GameModel(ctx)
function newGameState(){
    if(model.fallingPiece===null){
        const piece=new PieceRender(shapes[0],ctx)
        model.fallingPiece=piece
        model.fallingPiece.rendering();
    }
}
newGameState()
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
    }
})