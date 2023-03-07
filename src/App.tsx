import { ToastContainer } from 'react-toastify/dist/components';
import Router from './routes';
import { GlobalStyles } from './styles/global';

const App = () => (
  <>
    <GlobalStyles />
    <Router />
    {/* <ToastContainer
      position='top-center'
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
    /> */}
  </>
);

export default App;
