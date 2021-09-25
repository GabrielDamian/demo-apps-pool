import React,{useEffect} from 'react';
import axios from 'axios';
import styles from '../styles/ArticleIndex.module.css';
import Link from 'next/link';


export async function getServerSideProps()
{
    let temp_data = await axios.get('http://localhost:4000/all')
    return({
        props:{
            static:temp_data.data
        }
    })
}
const articleIndex = (props)=>{
    useEffect(()=>{
        console.log(props);
    },[])

    return(
        <div className={styles.articleIndex_container}>
            <div className={styles.articleIndex_container_content}>
                <div className={styles.articleIndex_container_title}>
                    <p>*This page is rendered using SSR. This means that it will be rendered at at each user's request  and will get the latest articles from the api.</p>
                </div>
                <div className={styles.articleIndex_container_map}>
                    {
                        props.static.map((el)=>{
                             return <ArticleComponent id={el.route} title={el.title} content={el.content} imgSrc={el.imgSrc}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const ArticleComponent = ({id,title, content,imgSrc})=>{
    return(
        <Link href={`/articles/${id}`}>
            <div className={styles.articleComp_container}>
                <div className={styles.articleComp_container_left}>
                    <div className={styles.articleComp_container_left_title}>
                        <span>{title}</span>
                    </div>
                    <div className={styles.articleComp_container_left_content}>
                        <span>{content}</span>
                    </div>
                </div>
                <div className={styles.articleComp_container_right}>
                    <img src={imgSrc} alt="img artcile"/>
                </div>
            </div>
        </Link>
        
    )
}
export default articleIndex;