import React from 'react';
import './App.css';
import TitlebarGridList from "./components/img";
import Header from './components/header';
import Container from '@material-ui/core/Container';
import Text from './components/text';

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
      <Header></Header>

<Text></Text>
 <TitlebarGridList></TitlebarGridList>

 </Container>
    </div>
  );
}

export default App;
