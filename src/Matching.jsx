import React from 'react';


const Matching = (props) => {
    // let x = '😄';
    // let y = '😄';
    // let z = '😿';

    // let x = props.x
    // let y = props.y
    // let z = props.z

    let {x,y,z} = props;

        return(
            <>
                <div className='slot_inner'>

                <h1> {x} {y} {z} </h1>
                <h1> This is matching </h1>
                <hr/>

                </div>

            
            </>
        );
    
    }


export default Matching;