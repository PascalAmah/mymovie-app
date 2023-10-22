import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import logoImg from "../Logo.svg";
import { styled } from "@mui/system";
import SearchMoviesSuggestion from "../containers/SearchMoviesSuggestion";

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
})

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    width: 200,
    maxWidth: '100%'
});

const LayoutWrapper = styled('div')(({theme}) => ({
    margin: 20,
    width: 'auto',
    [theme.breakpoints.up("lg")]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: theme.breakpoints.values.lg
    }
}));

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <LayoutWrapper>
                <Link to="/">
                    <Img src={logoImg} alt="the movie logo" />
                </Link>
                <SearchMoviesSuggestion />
                {children}
            </LayoutWrapper>
        </ThemeProvider>
    )
}

export default Layout;