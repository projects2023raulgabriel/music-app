import React from 'react';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  Theme,
  adaptV4Theme,
} from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

interface ThemeProviderProps {
  children: React.ReactNode
  theme: Theme
}
const ThemeDispatchContext = React.createContext<any>(null);
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const themeInitialOptions = {
    paletteType: 'light'
  }
  const [themeOptions, dispatch] = React.useReducer((state: any, action: any)=> {
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          paletteType: action.payload
        }
      default:
        throw new Error();
    }
  }, themeInitialOptions);
  const memoizedTheme = React.useMemo(()=>{
    return createTheme(adaptV4Theme({
      ...theme,
      palette: {
        mode: themeOptions.paletteType
      }
    }));
  }, [theme,themeOptions.paletteType]);
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={memoizedTheme}>
        <ThemeDispatchContext.Provider value={dispatch}>
          {children}
        </ThemeDispatchContext.Provider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}
export default ThemeProvider
export const useChangeTheme = () => {
  const dispatch = React.useContext(ThemeDispatchContext);
  const theme = useTheme();
  const changeTheme = React.useCallback(()=>
    dispatch({
      type: 'changeTheme',
      payload: theme.palette.mode === 'dark' ? 'light' : 'dark'
    }),
  [theme.palette.mode, dispatch]);
  return changeTheme;
}