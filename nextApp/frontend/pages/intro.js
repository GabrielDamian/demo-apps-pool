import Head from 'next/head';
import axios from 'axios';
import React from 'react';

export async function getStaticProps()
{
    let data = 'ceva';
    return {
        props:{
            static: data
        }
    }
}

const intro = (props)=>{
    

    return(
        <p>Intro page:{props.static}</p>
    )
}
export default intro;