
import Routes from './routes/Routes';
import { configureFakeBackend } from './helpers';

// Themes
import './assets/scss/theme.scss';

// dark
// import './assets/scss/theme-dark.scss';

// rtl
// import './assets/scss/theme-rtl.scss';


// configure fake backend
configureFakeBackend();
function App() {
  return (
    <Routes></Routes>
  );
}

export default App;
