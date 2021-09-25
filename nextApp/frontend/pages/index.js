import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Index.module.css';
import Image from 'next/image';
import React from 'react';
import axios from 'axios';

export async function getStaticProps()
{
    let data = 'ceva';
    return {
        props:{
            static: data
        }
    }
}

const index = (props)=>{
  let ceva = async ()=>{
    console.log("Aic")
    let temp_data = await axios.get('http://localhost:4000/paths');
    console.log(temp_data.data);
}
React.useEffect(()=>{
    console.log("ceva")
    ceva(); 
},[])

    return(
      <div className={styles.index_container}>
          <div className={styles.index_content}>
            <div className={styles.index_content_left}>
              <div className={styles.index_content_left_title}>
                <span>Page generated using SSG</span>
              </div>
              <div className={styles.index_content_left_content}>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</span>
              </div>
            </div>
            <div className={styles.index_content_right}>

              <div className={styles.index_content_right_dark}>
                <img src="/images/bg-intro.jpg"/>
                <div className={styles.index_content_right_dark_layer}/>
              </div>

            </div>
            
          </div>
      </div>
    )
}
export default index;