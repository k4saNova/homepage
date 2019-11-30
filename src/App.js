import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Contents from './components/Contents.jsx';
import Footer from './components/Footer.jsx';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
    const [page, setPage] = useState("home");
    return (
        <div className="App">
          <Header page={page}
                  changePage={(val) => setPage(val)}/>
          <Contents page={page}/>
          <Footer />
        </div>
    );
};

export default App;
