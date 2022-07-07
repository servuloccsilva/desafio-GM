import React from "react"
import { MainContainerCard } from "./styled"
import { useNavigate } from "react-router-dom"

const CardPosts = (props) => {
    const navigate = useNavigate()

    console.log(props)
    return(
        <MainContainerCard>
            <div>
                {props.mensagem}
            </div>
        </MainContainerCard>
    )
}

export default CardPosts