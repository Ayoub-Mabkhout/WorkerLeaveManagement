import { Box, Toolbar, Grid, Paper, Container } from "@mui/material";
import Copyright from "../components/Copyright/Copyright";
import ProfileOverviewCard from "../components/ProfileOverviewCard/ProfileOverviewCard";
import LeavesChart from "../components/LeavesChart/LeavesChart";

function Dashboard({ context }) {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Profile Overview */}
          <Grid item xs={12} md={8} lg={8}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 300,
                padding: 1.5
              }}
            >
              <ProfileOverviewCard user={context.user} />
            </Paper>
          </Grid>
          {/* Leave Days Balance */}
          <Grid item xs={12} md={4} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 300
              }}
            >
              {/* <LeavesChart leaves={{ daysTaken: 18, daysRemaining: 5 }} /> */}
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper
              sx={{ p: 2, display: "flex", flexDirection: "column" }}
            ></Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}

export default Dashboard;
