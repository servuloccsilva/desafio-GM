import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderContainer } from "./styled";
import { useNavigate } from "react-router-dom"
import { goToInitialPage } from "../../Routes/coordinator";

const Header = () => {

  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > */}
            {/* <MenuIcon /> */}
          {/* </IconButton> */}
          <Typography 
          margin={"auto"}
          variant="h6" 
          color="inherit" 
          component="div"
          onClick={()=>goToInitialPage(navigate)}
          >
            Morada do Conforto
          </Typography>
        </Toolbar>
      </AppBar>
    </HeaderContainer>
  );
};

export default Header;
