import './App.css';
import { Box } from "@chakra-ui/react"
function App () {
  return (
    <div className="App">
      <h1>Hello</h1>

      <Box color='gray.50' />

      <Box color='#f00' />

      <Box bg='tomato' w='100px' h='100px' />

      <Box backgroundColor='tomato' />
    </div>
  );
}

export default App;
