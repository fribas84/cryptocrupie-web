import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';




const colorAppender = (_val) =>{
  if(_val<10){
    return '00'.concat(_val);
  }
  if(_val<100){
    return '0'.concat(_val);
  }
  return _val;
}

export default function Crupiebutes(props) {
  const [backgroundRangeValue, setBackgroundRangeValue] = useState("351");
  const [bodyRangeValue, setBodyRangeValue] = useState("236");
  const [earsRangeValue, setEarsRangeValue] = useState("243");
  const [shoeRangeValue, setShoeRangeValue] = useState("199");
  const [tailRangeValue, setTailRangeValue] = useState("307");

  const handleBackgroundRangeUpdate = (event) =>{
      const val = colorAppender(Number(event.target.value));
      setBackgroundRangeValue(val);
      const _dna =  "".concat(val, bodyRangeValue ,earsRangeValue
                   ,shoeRangeValue,tailRangeValue);
      props.handleUpdateDNA(_dna);
  }

  const handleBodyRangeUpdate = (event) =>{
    const val = colorAppender(Number(event.target.value));
    setBodyRangeValue(val);
    const _dna =  "".concat(backgroundRangeValue, val ,earsRangeValue
                 ,shoeRangeValue,tailRangeValue);
    props.handleUpdateDNA(_dna);              
  }
  const handleEarsRangeUpdate = (event) =>{
    const val = colorAppender(Number(event.target.value));
    setEarsRangeValue(val);
    const _dna =  "".concat(backgroundRangeValue, bodyRangeValue ,val
                 ,shoeRangeValue,tailRangeValue);
    props.handleUpdateDNA(_dna);                     
  }
const handleShoeRangeUpdate = (event) =>{
  const val = colorAppender(Number(event.target.value));
  setShoeRangeValue(val);
  const _dna =  "".concat(backgroundRangeValue, bodyRangeValue ,earsRangeValue
               ,val,tailRangeValue);
  props.handleUpdateDNA(_dna); 
  }
const handleTailRangeUpdate = (event) =>{
  const val = colorAppender(Number(event.target.value));
  setTailRangeValue(val);
  const _dna =  "".concat(backgroundRangeValue, bodyRangeValue ,earsRangeValue
               ,shoeRangeValue,val);
  props.handleUpdateDNA(_dna); 
  }

  return (
    <Container fluid="sm" className="p-5">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Colors</Accordion.Header>
          <Accordion.Body>
            <div  className="col-lg-7 crupiebutes m-2 light-b-shadow">

              <div className="form-group">

              <label htmlFor="backgroundRange" className="form-label">Background: {backgroundRangeValue}</label>
              <input type="range" className="form-range" id="backgroundRange" min="00" max="360"
                    defaultValue={backgroundRangeValue} onChange={handleBackgroundRangeUpdate} value={backgroundRangeValue}/>

              <label htmlFor="bodyRange" className="form-label">Body: {bodyRangeValue}</label>
              <input type="range" className="form-range" id="bodyRange" min="00" max="360"
                    defaultValue={bodyRangeValue} onChange={handleBodyRangeUpdate}  value={bodyRangeValue}/>

              <label htmlFor="earsRange" className="form-label">Ears: {earsRangeValue}</label>
              <input type="range" className="form-range" id="earsRange" min="00" max="360"
                    defaultValue={earsRangeValue} onChange={handleEarsRangeUpdate} value={earsRangeValue}/>

              <label htmlFor="shoeRange" className="form-label">Shoes: {shoeRangeValue}</label>
              <input type="range" className="form-range" id="shoeRange" min="00" max="360"
                    defaultValue={shoeRangeValue} onChange={handleShoeRangeUpdate} value={shoeRangeValue}/>

              <label htmlFor="tailRange" className="form-label">Tail and inner Ears: {tailRangeValue}</label>
              <input type="range" className="form-range" id="tailRange" min="00" max="360"
                    defaultValue={tailRangeValue} onChange={handleTailRangeUpdate} value= {tailRangeValue}/>

              </div>

            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
    

  )
}
