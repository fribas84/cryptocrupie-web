import React from 'react';
import * as crupie from './crupieBody.js'



export default function Crupie(props) {
    const  bgHue = props.dna.slice(0,3);
    const bgColor = "hsl("+ bgHue + "," + bgHue+"%,50%);";
    const  bodyHue = props.dna.slice(3,6);
    const bodyColor = "hsl("+ bodyHue + ",100%,50%);";
    const  earsHue = props.dna.slice(6,9);
    const earsColor = "hsl("+ earsHue + ",100%,50%);";
    const  shoesHue = props.dna.slice(9,12);
    const shoesColor = "hsl("+ shoesHue + ",100%,20%);";
    const  tailHue = props.dna.slice(12,15);
    const tailColor = "hsl("+ tailHue + ",100%,60%);";



  return (
    <>

    <crupie.Background bgColor = {bgColor} >
            <crupie.Ears>
                <crupie.LeftEar earsColor = {earsColor}>
                    <crupie.InnerEarL tailColor={tailColor}>
                    </crupie.InnerEarL>
                </crupie.LeftEar>
                <crupie.RightEar earsColor = {earsColor}>
                    <crupie.InnerEarR tailColor={tailColor}></crupie.InnerEarR>
                </crupie.RightEar>
            </crupie.Ears>
        <crupie.Body bodyColor={bodyColor}>
            <crupie.Eyes>
                <crupie.LeftEye>
                    <crupie.Pupil>
                         <crupie.Shine></crupie.Shine>
                    </crupie.Pupil>
                </crupie.LeftEye>
                <crupie.RightEye>
                    <crupie.Pupil>
                        <crupie.Shine></crupie.Shine>
                    </crupie.Pupil>
                </crupie.RightEye>
            </crupie.Eyes>
            <crupie.Nose>
            <crupie.Shine></crupie.Shine>
            </crupie.Nose>
            <crupie.Mouth>

            </crupie.Mouth>
            <crupie.Shoes>
            <crupie.Shoe shoesColor={shoesColor}><crupie.Shine></crupie.Shine></crupie.Shoe>
            <crupie.Shoe shoesColor={shoesColor}><crupie.Shine></crupie.Shine></crupie.Shoe>
            </crupie.Shoes>
         
        
            
        </crupie.Body>
        <crupie.Tail tailColor={tailColor}>
                
                </crupie.Tail>
    
    </crupie.Background>
    </>
  )
}
