import { useState } from "react";
import { Button } from "@chakra-ui/react";
const CustomButton = ({ title }) => {
  const [display, setDisplay] = useState("block");
  const handleClick = () => {
    setDisplay("none");
  };
  return (
    <Button sx={{ display: display }} onClick={handleClick}>
      {title}
    </Button>
  );
};

export default CustomButton;
