import React from 'react';


import { BrowserRouter } from 'react-router-dom'
import IndexRouter from './routes/IndexRouter';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <IndexRouter />
            </BrowserRouter>

        </div>
    );
};

export default App