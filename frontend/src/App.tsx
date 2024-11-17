import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import bgImage from "./assets/1.jpg"
import { RouterProvider } from 'react-router-dom';
import router from "./routes/routes"

function App() {
  if (import.meta.env.VITE_NODE_ENV === 'development') {
    console.warn = () => {};  
  }
  
  return (
    <>
      
      <CssBaseline />
      
      <Container
        maxWidth={false} 
        sx={{
          height: '100vh', 
          backgroundImage: `url(${bgImage})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%', 
            maxWidth: 400, 
            bgcolor: 'white', 
            boxShadow: 3, 
            p: 3, 
            borderRadius: 2, 
          }}
        >
          <RouterProvider router={router} />
        </Box>
      </Container>
    </>
  );
}

export default App;
