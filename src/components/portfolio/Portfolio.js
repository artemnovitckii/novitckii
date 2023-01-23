import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio() {
  let detectedDarkMode = eval(localStorage.getItem("darkMode"));

  return (
    <Box>
      <Grid container display={"flex"} justifyContent={"center"}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
              subtitle={project?.subtitle}
              button1Text={project?.button1Text}
              button2Text={project?.button2Text}
              tags={project?.tags}
              darkMode={detectedDarkMode}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
