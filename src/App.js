import { lazy, Suspense } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import withStyles from "./HOC/styles1";

const Home = lazy(() => import("./Pages/Home"));
// import Home from "./Pages/Home";
const newButton = (props) => <Button style={props.style}>Click Me!</Button>;
const newHeading = (props) => (
  <Heading style={props.style}>Hello World!</Heading>
);

const StyledButton = withStyles(newButton);
const StyledHeading = withStyles(newHeading);

function App() {
  return (
    <Box>
      <Box>
        <StyledHeading />
        <StyledButton />
      </Box>
      <Suspense fallback={<Box>Loading...</Box>}>
        <Routes>
          <Route path="/" element={<Home title="Home" />} />
        </Routes>
      </Suspense>
    </Box>
  );
}

export default App;
