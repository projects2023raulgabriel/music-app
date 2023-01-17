import { RoutesList } from "./routes";
import {
  createTheme,
  adaptV4Theme,
  StyledEngineProvider,
} from "@mui/material/styles";
import ThemeProvider from "./context/darkMode/index";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const theme = createTheme(
    adaptV4Theme({
      palette: {
        mode: "dark",
      },
    })
  );

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <RoutesList />
        <CssBaseline />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
