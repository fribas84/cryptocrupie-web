import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';



import CrupieBox from '../CrupieBox/CrupieBox';
import Crupiebutes from '../Crupiebutes/Crupiebutes';
import styled from 'styled-components';

const Jumbotron = styled.div`
      padding: 2rem 1rem;
      margin-bottom: 2rem;
      background-color: #e9ecef;
      border-radius: .3rem;
`

export default function CreateCrupie(props) {


  return (
    <Container fluid>

      <Container className="p-5" >
              <div align="center">
              <Jumbotron className="c-white"> 
              <h1 className="display-4"> Crupie Factory</h1>
              
              <p className="c-white">Create your custom Crupie!!</p>
              </Jumbotron>
              </div>
      </Container>

      <Container fluid align="center">
          <CrupieBox  dna={props.dna}/> 
          <Crupiebutes dna={props.dna}
                       handleUpdateDNA={props.handleUpdateDNA}/>
      </Container>

      <Container className="p-5" >
        <div align="center">
            <Jumbotron className="c-white"> 
              <h4> Your Crupie DNA is: </h4>
              
              <p className="c-white">{props.dna}</p>
            </Jumbotron>
         </div>
      </Container> 
  
    </Container>
  ) 
}
