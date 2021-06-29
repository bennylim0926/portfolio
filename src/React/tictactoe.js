import React, {useState} from 'react';
import '../Css/tictactoe.css';

  function Square(props){
    const className = 'square' + (props.highlight ? ' highlight': '');
    return (
      <button 
      className={className} 
      onClick={props.onClick1}>
       {props.value}
      </button>
    );    
  }
  
  //extends is the inheritance
  //Class Board inherit from React.Component class
  class Board extends React.Component {
    renderSquare(i) {
      const winLine = this.props.winLine;
      return( 
          <Square   
            key={i}        
            value={this.props.squares[i]}
            onClick1={()=>this.props.onClick2(i)}
            highlight ={winLine && winLine.includes(i)}
          />
      );
    }    
    render() {
      const boardSize = 3;
      let column = [];
      for (let i = 0; i < boardSize; ++i) {
        let row = [];
        for (let j = 0; j < boardSize; ++j) {
          row.push(this.renderSquare(i * boardSize + j));
        }
        column.push(<div key={i} class="board-row">{row}</div>)
      }
      return (
        <div>
          {column}
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props){
      super(props); //used to access and call functions on an object's parent || refers to parent class
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext:true,
        isAscending: true,
      }
    }
    handleClick(i){
      const history = this.state.history.slice(0,this.state.stepNumber+1); //take the whole history.
      const current = history[history.length-1]; // take the current from the history
      const squares = current.squares.slice(); // declare a copy of the current square array
      if(calculateWinner(squares).winner || squares[i]){ // check the above whether have player win or the box was selected
        return;
      }
      squares[i] = this.state.xIsNext? 'X' : 'O'; //from the copied array, modified the value of the selected box.
      this.setState({
        history: history.concat([{ //merge the modified array into the whole history.
          squares: squares, //merge this new squares state and value into the history array
          latestMoveSquare: i,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });      
    }
    jumpTo(currentMove){
      this.setState({
        stepNumber: currentMove,
        xIsNext: (currentMove % 2) === 0,
      })
    }

    handleSortOrder(){
      this.setState({
        isAscending : !this.state.isAscending,
      })
    }

    render() {
      const isAscending = this.state.isAscending;
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winInfo = calculateWinner(current.squares);
      const winner = winInfo.winner;

      let moves = history.map((currentMove,index) =>{
      const latestMoveSquare = currentMove.latestMoveSquare;
      const col =  latestMoveSquare % 3;
      const row =  Math.floor(latestMoveSquare / 3);
      const desc = index ?
          `Go to move #${index} (${col}, ${row})`:
          'Go to game start';
          //console.log(index);<br />
          return (
            <li key={index}>
              <button 
              className={index === this.state.stepNumber ? 'move-list-item-selected' : ''}
              onClick={()=> this.jumpTo(index)}>
                {desc}
              </button>
            </li>
          );
      });
      if(!isAscending){
        moves.reverse();
      }
      let status;
      if(winner) {
        status = 'Winner: ' + winner;
      } else {
        if(winInfo.isDraw){
          status = 'Draw';
        }else{
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClick2={(i) => this.handleClick(i)}
              winLine={winInfo.line}
            />
          </div>          
          <div className="game-info">
            <div>{ status }</div>
            <button onClick={()=>this.handleSortOrder()}>
              {isAscending ? 'descending' : 'ascending'}
            </button>
            <ol>{moves}</ol>
          </div>
          <div>
            <Counter />
            {/* exampleCode */}
            {/* <Practice/> */}
            {/* <PracticeFunction /> */}
            {/* <AnotherGame /> */}
          </div>          
        </div>
                
      );
    }
  }
  // ========================================
  
//   ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
//   );
  
function Counter (){
  const [count,setCount] = useState(0);
  return(
    <div>
      <h1>Counter</h1>
      <p>You clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>
        add!
      </button>
      <button onClick={()=>{setCount(count-1)}}>
        minus!
      </button>
    </div>
  )
}

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          winner: squares[a],
          line: lines[i],
          isDraw: false,          
        };
      }
    }
    let isDraw =true;
    for (let i = 0; i < Square.length; i++) {      
      if(squares[i] === null){
        isDraw=false;
        break;
      }
    }
    return {
      winner: null,
      line: null,
      isDraw: isDraw,
    };
  }


  export default Game;
//Improvements:
//1. Display the location for each move in the format (col, row) in the move history list.
//2. Bold the currently selected item in the move list.
//3. Rewrite Board to use two loops to make the squares instead of hardcoding them.
//4. Add a toggle button that lets you sort the moves in either ascending or descending order.
//5. When someone wins, highlight the three squares that caused the win.
//6. When no one wins, display a message about the result being a draw.
  

//Note:To access function from other class eg.Class2 access Class1's function, Class1 have to pass its function to Class2 instead of direct acess from Class2