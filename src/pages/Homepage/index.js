import React from "react";
import { Typography, Button, Container, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "../../store/slices/messageSlice";

const MainPage = () => {
  const message = useSelector((state) => state.message.text);
  const dispatch = useDispatch();

  console.log(message, "message");
  return (
    <>
      <Box textAlign="center" my={4}>
        <Typography variant="h1">{message}</Typography>
        <Typography variant="h3">
          Discover the best products at unbeatable prices.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => dispatch(setMessage("Redux Toolkit is Awesome!"))}
        >
          Change Message
        </Button>
      </Box>
    </>
  );
};

export default MainPage;
