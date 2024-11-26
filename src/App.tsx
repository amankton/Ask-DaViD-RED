import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <HomePage />
      </Router>
    </ThemeProvider>
  );
}

export default App;
