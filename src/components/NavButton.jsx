// NavButton.js
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const NavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active"
})(({ active }) => ({
  fontSize: "1.1rem",
  borderRadius: "8px",
  padding: "8px 15px",
  border: "1px solid #a5d6a7",
  backgroundColor: active ? "#a5d6a7" : "transparent",
  color: active ? "white" : "success",
  textTransform: "none",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "#a5d6a7",
    color: "white",
    borderColor: "#a5d6a7",
  },
  "&:focus": {
    outline: "none",
    borderColor: "#a5d6a7",
  },
}));

export default NavButton;
