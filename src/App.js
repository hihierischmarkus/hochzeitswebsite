import {MainPage} from "./components/mainPage";
import {CssBaseline, Container, Box} from "@mui/material"

function App() {
  return (
    <>
    <main>
      <CssBaseline></CssBaseline>
      <Box width='100%' padding={0} margin={0}>
        <MainPage></MainPage>
      </Box>
    </main>
    </>
  );
}

export default App;
