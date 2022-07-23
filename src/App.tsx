import { MainRoutes } from './routes/MainRoutes';
import { Title } from './components/Title/Title';

function App() {

  return (
    <div>
      <Title titulo='Galeria de Albuns'/>
      
      <MainRoutes />
      
    </div>
  );
}

export default App;
