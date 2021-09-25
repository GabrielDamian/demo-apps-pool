import React,{useState, useEffect} from 'react'
import {gql} from 'apollo-boost';
import { useMutation} from '@apollo/react-hooks';

const mutatiobBookQuery =gql`
    mutation Pola($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId)
        {
            name
            genre
        }
    }
`
const AddBook = (props) => {
    const [inputData, setInputData] = useState({
        name: '',
        genre: '',
        authorId: ''
    })
    
    const [addTodo, { data, loading, error }] = useMutation(mutatiobBookQuery);

    useEffect(()=>{
        if(loading) 
        {
            console.log("subbbmiting")
        }
        else if(error)
        {
            console.log("Error")
        }else if(data)
        {
            console.log("succes:", data);
        }
    },[data,loading,error])

    
    const handleInputChange = (e)=>{
        setInputData((prev)=>{
            let temp = {...prev};
            console.log("name", e.target.name);
            console.log("value", e.target.value);
            temp[e.target.name] = e.target.value;
            return temp;
        })
    }
    const handleSubmit = ()=>{
        if(inputData.name !='' && inputData.genre != '' && inputData.authorId != '')
        {
            addTodo({
                variables: {
                    ...inputData
                }
            })
            setInputData({
                name: null,
                genre: null,
                authorId: null
            })
        }
        else {
            console.log("empty fields!")
        }
    }
    return (
        <div>
            <label>
            <input type="text" name="name" value={inputData.name} placeholder="name" onChange={handleInputChange}/>        
            </label>
            <label>
                <input type="text" name="genre" value={inputData.genre} placeholder="genre" onChange={handleInputChange}/>
            </label>
            <label>
                <input type="text" name="authorId" value={inputData.authorId} placeholder="authorId" onChange={handleInputChange}/>
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddBook
