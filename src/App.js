import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar'
import Footer from "./components/Footer"
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
class App extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="lg">
                        <NavBar/>
                    </Container>
                    <Footer />
                </React.Fragment>
            </div>
        )
    }
}
export default App
