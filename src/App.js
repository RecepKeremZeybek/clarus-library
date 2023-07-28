import AppRouter from './router/AppRouter';
import {ThemeProvider} from "styled-components"
import { lightTheme,darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/Global.styles';
import { useThemeContext } from './context/ThemeContext';
import Footer from './components/footer/Footer';

function App() {
  const {myTheme}= useThemeContext()
  const themes = myTheme ==="lihgt" ? lightTheme : darkTheme
  return (
    <>
    <ThemeProvider theme={themes}>
      <GlobalStyles/>
      <Footer/>
      <AppRouter/>
    </ThemeProvider>
    </>
  );
}

export default App;
