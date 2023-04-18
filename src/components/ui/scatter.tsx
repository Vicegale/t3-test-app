import { type NextPage } from "next";
import { useState, useRef, useEffect } from "react";
import autoAnimate from '@formkit/auto-animate'


const Scatter: NextPage = () => {
  //auto-animate
  const scatterParent = useRef(null);
  useEffect(() => {
    scatterParent.current && autoAnimate(scatterParent.current)
  }, [scatterParent])

  const [board, setBoard] = useState(["red", "cyan", "blue", "purple"])

  function swap(idx: number) {
    let newIdx: number;
    do {
        newIdx = (Math.floor(Math.random() * board.length));
    } while(newIdx == idx)
    let temp: string = board[newIdx]!;
    const newBoard = [...board]
    newBoard[newIdx] = newBoard[idx]!;

    newBoard[idx] = temp;
    setBoard(newBoard);
    console.log("swapped!" + temp)
  }

  return (
    <div ref={scatterParent} className="flex flex-wrap flex-grow">
        {board.map((item, idx) => {
            return <div onClick={() => swap(idx)} key={item} className={"p-4 m-2 w-48 text-center rounded-lg bg-white border-blue-600 border-4"}>{item}</div>
        })}
    </div>
  );
};

export default Scatter;
