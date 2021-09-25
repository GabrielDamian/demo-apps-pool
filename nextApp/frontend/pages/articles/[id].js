import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from '../../styles/Articles.module.css';

export async function getStaticPaths(){
    let temp_data = await axios.get('http://localhost:4000/paths').then((el)=>{
        return el.data;
    })
    let temp_list = [];

    temp_data.forEach((el)=>{
        let here_temp_param ={
            params: {
                id: el
            }
        }
        temp_list.push(here_temp_param)
    })
    return{
        paths: temp_list,
        fallback: false
    }
}
export async function getStaticProps({params})
{
    let id_here_from_api = params.id;
    id_here_from_api = id_here_from_api + "ASDASDAS";
    let temp_api_custom_data = await axios.post('http://localhost:4000/article',{
        id: params.id
    })

    return {
        props:{
            data: temp_api_custom_data.data
        }
    }
}
const Article = (props)=>{
    useEffect(()=>{
        console.log(props);
    },[])
    return(
        <div className={styles.articles_container}>
            <div className={styles.articles_container_content}>
                <div className={styles.articles_container_title_1}>
                    *This page is rendered using SSR to get the last version of the article on each request.
                </div>
                <div className={styles.articles_container_title_2}>
                    {props.data.title}
                </div>
                <div className={styles.content_main}>
                    <div className={styles.content_main_left}>
                        {props.data.content}
                    </div>
                    <div className={styles.content_main_right}>
                        <img src={props.data.imgSrc}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Article;