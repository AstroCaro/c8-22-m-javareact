import axios from 'axios';
import React, { useEffect } from 'react';


import { BrowserRouter } from 'react-router-dom'
import IndexRouter from './routes/IndexRouter';


const App = () => {

// useEffect(()=> {

//     axios.get('https://pruebanocountry-production.up.railway.app/hotels')
//     .then( res => console.log(res))
//     .catch( err => console.log(err))
//     // fetch('https://pruebanocountry-production.up.railway.app/hotels')
//     // .then( res => res.json())
//     // .then( data => console.log(data))

// }, [])


    return (
        <div>
            <BrowserRouter>
                <IndexRouter />
            </BrowserRouter>

        </div>
    );
};

export default App