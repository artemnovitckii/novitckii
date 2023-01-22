import React from "react";
import IconLink from "./IconLink";
import { Box, Chip } from "@mui/material";

function PortfolioBlock(props) {
  const {
    image,
    live,
    source,
    title,
    subtitle,
    button1Text,
    button2Text,
    tags,
  } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        style={{ borderRadius: "1.5rem" }}
        component={"img"}
        src={image}
        alt={"mockup"}
      />
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>{title}</h1>
      <p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>{subtitle}</p>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"0.5rem"}
      >
        {tags &&
          tags.map((tag, index) => (
            <Chip sx={{ marginRight: "0.5rem" }} label={tag} key={index} />
          ))}
      </Box>

      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        {button1Text && (
          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <IconLink
              link={live}
              title={button1Text ? button1Text : "Live Demo"}
              icon={"fa fa-safari"}
            />{" "}
          </Box>
        )}

        {button2Text && (
          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <IconLink link={source} title={button2Text} icon={"fa fa-code"} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
