import './App.css';
import Signup from './Components/Signup';
import { Container } from 'react-bootstrap'
import { AuthProvieder } from './contexts/AuthContext';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {

  return (
          <Container 
            className='d-flex align-items-center justify-content-center'
            style={{minHeight:'100vh'}}>
            <div className='w-100' style={{maxWidth:'400px'}}>
            <AuthProvieder>
              <Signup />
            </AuthProvieder>
            </div>
          </Container>
  );
}
export default App;
