import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/routes/routes';

function App() {
  return (
    <div className=" text-accent">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
