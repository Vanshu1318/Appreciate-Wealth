import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import ChatBotHome from './Component/ChatBotHome';
import ChatBot1 from './Component/ChatBot1';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/Home' element={<Home/>} />
        <Route path='/ChatBotHome' element={<ChatBotHome/>} />
        <Route path='/FruitChat' element={<ChatBot1/>} />
      </Routes>
    </div>
  );
}

export default App;
