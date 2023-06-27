
import Routes from './routes/Routes';
// import { configureFakeBackend } from './helpers';

// Themes
import './assets/scss/theme.scss';

// dark
// import './assets/scss/theme-dark.scss';

// rtl
// import './assets/scss/theme-rtl.scss';

import { Provider } from 'react-redux';
import { configureStore } from './redux/store';


// configure fake backend
// configureFakeBackend();
function App() {
  return (
    <Provider store={configureStore()}>
      <Routes></Routes>
    </Provider>
  );
}

export default App;
