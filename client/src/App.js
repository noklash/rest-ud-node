
import './App.css';
import { Container } from 'react-bootstrap'
import ReadUsers from './components/ReadUsers';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>  {
  return (
    <>
      <Container>
        <ReadUsers/>
      </Container>
    </>
  );
}

export default App
