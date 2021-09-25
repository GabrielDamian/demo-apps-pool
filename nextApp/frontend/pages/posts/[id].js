import React,{useEffect, useState} from 'react'
import Head from 'next/head';

export async function getStaticPaths  ()
{
    const list = [];
    for(let i=0;i<5;i++)
    {
        let temp_obj = {
            params:{
                id: `post-${i}`
            }
        }
        list.push(temp_obj)
    }
    return {
        paths: list,
        fallback: false
    }
}

export async function getStaticProps({params})
{
    const this_page_id = params.id;
    let api_data = `article-data-${this_page_id}`
    return{
        props:{
            api_data
        }
    }
}

const Post = (props) => {
    useEffect(()=>{
        props.api_data
    })
    return (
        <div>
            <Head>
                <title>{`Post nr: ${props.api_data}`}</title>
            </Head>
            <p>ceva: {props.api_data}</p>
        </div>
    )
}

export default Post
