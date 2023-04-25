import { NextPage } from "next";
import { useState } from "react";
import styles from './tile.module.css'

const Tile: NextPage = () => {
    const options = ["white", "red", "green", "blue"];

    const [colorIdx, setColorIdx] = useState(0);

    function changeColor() {
        setColorIdx((colorIdx + 1) % options.length);
    }

    function resolveClassName() {
        switch(options[colorIdx]) {
            case "white":
                return ""; // styles.white!.toString();
            case "red":
                return styles.red!.toString();
            case "green":
                return styles.green!.toString();
            case "blue":
                return styles.blue!.toString();
        }
        return "";
    }

    return(
    <div onClick={() => changeColor()} className={"h-10 w-auto " + resolveClassName()}>
    </div>)
}

export default Tile;
