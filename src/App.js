import AppRouter from './router/AppRouter';
import {ThemeProvider} from "styled-components"
import { lightTheme,darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/Global.styles';

function App() {
  return (
    <>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles/>
      <AppRouter/>
    </ThemeProvider>
    </>
  );
}

export default App;
