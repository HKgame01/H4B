import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Doctors from '../pages/Doctors';
import Chatroom from '../pages/Chatroom';
import Chatbot from '../components/Chatbot';

function Main() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/chatroom" element={<Chatroom />} />
      </Routes>
      <Chatbot />
    </BrowserRouter>
  );
}

export default Main;
