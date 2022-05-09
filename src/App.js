
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/siderbar/Sidebar';
import Homescreen from './screens/Homescreen/Homescreen';

function App() {
  return (
    <div className="App">
      
        <Header/>
        <div className="app_container">
          <Sidebar/>
          <Container fluid className="app_main">
              <Homescreen/>
          </Container>
        </div>
         
       
    </div>
  );
}

export default App;
