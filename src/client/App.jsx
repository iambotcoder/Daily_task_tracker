import React from "react";
import ReactDom from "react-dom";
import { Heading } from "./Header";
import { Foot } from "./footer";
import { Note } from "./content";
function App()
{
    return (<div>
        <header><Heading/></header>
        <div className="note"><Note /></div>
        <footer><Foot/></footer>
    </div>);
}

export {App};