import axios from "axios";
import React, { useEffect, useState } from "react";
import {BASE_URL} from "../../Constants/base_url"
import CardPosts from "../../Components/CardPosts/cardPosts"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import useForm from "../../Hooks/useForm"
import Header from "../../Components/Header/Header";
import { FormAndPosts, MainContainerFeed } from "./styled";

const Feed = () => {

    const [getPost, setGetPost] = useState([])
    const [createNewPost, setCreateNewPost] = useState([])
    const [form, onChange, clear] = useForm({id: "", mensagem: "" });

    useEffect(() => {
        getPosts()
    }, [])

    const onSubmitForm = (event) => {
        event.preventDefault();
        createPost()
      };


    const getPosts = () => {

        axios.get(`${BASE_URL}`)
        .then((res) => {
            // console.log(res.data.mensagem)
            setGetPost(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const createPost = () => {
        
        axios.post(`${BASE_URL}`, form)
        .then((res)=>{
            setCreateNewPost(res)
            clear()
            getPosts()
        })
        .catch((err)=>{
            // alert(res)
        })
    }

 

    const mapeandoPosts = getPost.map((post)=>{
        return (
            <CardPosts
            id = {post.id}
            mensagem = {post.mensagem}
            />
        )
    })



    return (
        <div>
            <Header/>
            <MainContainerFeed>
                <FormAndPosts>
                <form onSubmit={onSubmitForm}>
                <TextField 
                    id="outlined-basic" 
                    label="Deixe sua reflexão" 
                    variant="outlined" 
                    name="mensagem" 
                    value={form.mensagem} 
                    onChange={onChange} 
                    placeholder="Deixe sua reflexão"
                    required
                    type={"text"}
                />
                <button>Enviar</button>
            </form>
            <div>
                <p>{mapeandoPosts.length>0?mapeandoPosts:<p>Loading ...</p>}</p>
            </div>
                </FormAndPosts>
            </MainContainerFeed>
        </div>
    )
}
export default Feed