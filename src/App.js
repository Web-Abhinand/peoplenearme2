import './App.css';
import Signup from './Components/Signup';
import { Container } from 'react-bootstrap'
import { AuthProvieder } from './contexts/AuthContext';


function App() {

  return (
    <AuthProvieder>
      <div className="App">
          <Container className='d-flex align-items-center justify-content-center'
          style={{minHeight:'100vh'}}>
            <div className='w-100' style={{maxWidth:'400px'}}>
              <Signup />
            </div>
          </Container>
        </div>
    </AuthProvieder>
  );
}
export default App;
