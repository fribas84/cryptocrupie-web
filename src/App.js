import React, {useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//Using a template from bootswatch


import 'bootswatch/dist/minty/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';



import Header from './components/Header/Header';
import CreateCrupie from './components/CreateCrupie/CreateCrupie';


function App(props) {
  const [DNA,setDNA] = useState("351236243199307");
  
  const handleUpdateDNA = (_dna) =>{
    setDNA(_dna);
  }


  const getRandomInt = () => {
    return Math.floor(Math.random() * 360);
  }

  // const generateDNA = () =>{
  //   let _dna = "";
  //   for(var i=0; i < 6 ;i++){
  //     let num = getRandomInt();
  //     _dna = _dna.concat(String(num));
  //   }
  //   setDNA(_dna);

  //}  
  // useEffect(() =>{
   
  //   // if (DNA.length === 0){
  //   //   generateDNA();
  //   //}
  // })
  return (
    <div className="App">
      
      <Header />
      <CreateCrupie h={450} 
                    w={450}
                    dna={DNA}
                    handleUpdateDNA={handleUpdateDNA}/>

      

    </div>
  );
}

export default App;
