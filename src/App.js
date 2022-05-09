
import { Container } from 'react-bootstrap';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Homescreen from './screens/Homescreen/Homescreen';

function App() {
  return (
    <div className="App">
      
        <Header/>
        <div className="app_container border border-info">
          <Sidebar/>
          <Container fluid className="app_main">
              <Homescreen/>
          </Container>
        </div>
         
       
    </div>
  );
}

export default App;
