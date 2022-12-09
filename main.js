import React from 'react'
import * as ReactDOM from 'react-dom/client';
import Header from './components/Header';

const App = () => {
    return <div className='py-20 px-4 max-w-4xl mx-auto'>
<Header/>
<p>
    lorem  ipsum bla bla bla
</p>
    </div>
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>)