import { AppBarr, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";

export const Navbar = () => {
  return (
    <AppBarr position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5">Bank of React</Typography>
        </Toolbar>
      </Container>
    </AppBarr>
  );
};
