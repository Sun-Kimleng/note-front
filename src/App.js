import './Assets/main.css';
import {Routes, Route} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Components/navbar';
import Home from './Components/home';
import View from './Components/view';
import CreateNote from './Components/CreateNote';
import {useState, useEffect} from 'react';
import NoteDetail from './Components/noteDetail';
import NotFound from './Components/notFound';
import EditNote from './Components/EditNote';


  const App = () => {

    


    return ( 
      <div className="app">
   

      <Navbar /><br /><br /><br /><br />
        <Routes>
            {/* put browserRouter beside <app> in index.js */}
            <Route path="/" element={<Home />} />
            <Route path="/view" element={<View />}/>
            <Route path="/add" element={<CreateNote />} />
            <Route path="/view/:id" element={<NoteDetail />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/update/:id" element={<EditNote />} />
        </Routes>
    </div>
   );
  }
   
  export default App;
