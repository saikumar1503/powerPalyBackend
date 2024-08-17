const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Use routes
app.use("/api", authRoutes);
app.use("/api", assignmentRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
