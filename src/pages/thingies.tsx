import { NextPage } from "next";
import Tile from "~/components/ui/griddy/tile";

const Thingies: NextPage = ()  => {
    return(
    <div className="grid grid-cols-10 gap-0">
    {Array.from(Array(1000).keys()).map((_, i) => <Tile key={i} />)}
    </div>
    )   
}

export default Thingies;
