import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header";
import { goToFeed } from "../../Routes/coordinator";

const InitialPage = () => {
    const navigate = useNavigate()
    
    return (
        <div>
            <Header/>
            <Button onClick={()=>goToFeed(navigate)}>
                Entrar no Morada do Conforto
            </Button>
        </div>
    )
}
export default InitialPage