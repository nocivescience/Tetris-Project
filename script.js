const tituloEl=document.getElementById('titulo');
const titulo='Tetris'
tituloEl.innerHTML=`
    Juego de ${titulo}
`;
const Rows=20;
const Cols=10;
const scaleGame=32;
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
        this.ctx=ctx;
        this.x=3;
        this.y=5;
    }
    pieceRender(){
        this.shape.forEach((row,i)=>{
            row.forEach((cell,j)=>{
                if(cell!==0){
                    this.ctx.fillStyle='red';
                    this.ctx.fillRect(this.x+j,this.y+i,1,1)
                }
            })
        })
    }
}
class GameModel{
    constructor(ctx){
        this.ctx=ctx;
        this.fallingPiece=null;
        this.grid=this.makeStartingGrid()
    }
    makeStartingGrid(){
        let grid=[];
        for(let i=0;i<Rows;i++){
            grid.push([])
            for(let j=0;j<Cols;j++){
                grid[grid.length-1].push(0)
            }
        }
        return grid
    }
    collision(x,y){
        return true
    }
    renderGameState(){
        if(this.fallingPiece!==null){
            this.fallingPiece.pieceRender()
        }
    }
    moveDown(){
        if(this.fallingPiece===null){
            this.renderGameState()
        }else if(this.collision(this.fallingPiece.x,this.fallingPiece.y+1)){
            const shape=this.fallingPiece.shape
            console.log(shape)
        }
        this.fallingPiece.y+=1;
    }
}
const tetris=document.getElementById('tetris');
const ctx=tetris.getContext('2d')
ctx.scale(scaleGame,scaleGame);
const model=new GameModel(ctx);
function newGameState(){
    if(model.fallingPiece===null){
        const piece=new PieceRender(shapes[0],ctx)
        model.fallingPiece=piece
    }
    model.fallingPiece.pieceRender()
    model.moveDown();
}
setInterval(()=>{
    ctx.clearRect(0,0,tetris.clientWidth, tetris.height)
    newGameState()
},1000)
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