import React,{useState,useEffect} from 'react'
import {gql} from 'apollo-boost';
import { graphql } from 'graphql';
import { useQuery } from '@apollo/react-hooks';

const getBookQuery = gql`
    query{
        books{
            name
            genre
            author {
              name
            }
          }
    }
`
const SubComponent = (props) => {
    const { error, loading, data } = useQuery(getBookQuery);
    const [state, setState] = useState(null);
    useEffect(()=>{
        if(loading)
        {
            setState('Loding')
        }
        else if (error)
        {
            setState('Error')
        }
        else if (data) {
            console.log(data)
            let temp_arr = data.books.map((el)=>{
                return(
                    <>
                    <p>Name:{el.name}</p>
                    <p>Genre:{el.genre}</p>
                    <p>Author:{el.author.name}</p>
                    <br/>
                    </>
                )
            })
           setState(temp_arr)
          }
    },[error, loading, data])

    return (
        <div>
            <p>Sub component</p>
            {state}
        </div>
    )
}

export default SubComponent;
