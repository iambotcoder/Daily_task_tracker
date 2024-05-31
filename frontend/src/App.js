import React from 'react';
import axios from 'axios';
import data from "./appData"
import { WorkProvider } from './context';
import Home from './component/Home';
// console.log(data);
function App() {

    return (
        <div className="App">
            <header className="App-header">
                <WorkProvider>
                    <Home />
                </WorkProvider>

            </header>
        </div>
    );
}

export default App;
