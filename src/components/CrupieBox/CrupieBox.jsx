import React from 'react'
import styled from 'styled-components';
import Crupie from '../Crupie/Crupie'

const Div = styled.div`
  width: 350px;
  height: 350px;
  
`


export default function CrupieBox(props) {
  return (
    <Div  className=''>
        <Crupie dna={props.dna}/>

    </Div>
  )
}

 