"use client";

import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";

export default function PlansPage() {
  const plans = [
    {
      title: "Basic Plan",
      price: "3000 / month",
      features: ["Gym Access", "Cardio Machines", "No Trainer", "Locker Room"],
    },
    {
      title: "Standard Plan",
      price: "5000 / month",
      features: ["Full Gym Access", "Trainer Support", "Group Classes", "Steam Room"],
    },
    {
      title: "Premium Plan",
      price: "8000 / month",
      features: [
        "All Access",
        "Personal Trainer",
        "Diet Plan",
        "Supplement Guide",
        "VIP Steam/Sauna",
      ],
    },
  ];

  return (
    <Box sx={{ paddingTop: "100px", paddingX: { xs: 2, md: 6 }, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      
      {/* Page Title */}
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", textAlign: "center", mb: 1 }}
      >
        Our Membership Plans
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center", mb: 6, color: "text.secondary" }}
      >
        Choose a plan that fits your fitness goals and start your transformation today!
      </Typography>

      {/* Plans Section */}
      <Grid container spacing={5} justifyContent="center">
        {plans.map((plan) => (
          <Grid item xs={12} sm={6} md={4} key={plan.title}>
            <Card
              sx={{
                paddingY: 3,
                borderRadius: 3,
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)", boxShadow: 8 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", textAlign: "center", mb: 1 }}
                >
                  {plan.title}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", color: "#d32f2f", mb: 2 }}
                >
                  {plan.price}
                </Typography>

                <Box component="ul" sx={{ paddingLeft: "20px", mb: 2, lineHeight: 2 }}>
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button variant="contained" color="primary" sx={{ px: 4 }}>
                    Join Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
