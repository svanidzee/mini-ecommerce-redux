import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "21em",
    minHeight: "15em",
    // arginLeft: "1.4em",
    [theme.breakpoints.down("md")]: {
      marginLeftt: 0,
    },
    // borderRadius: ".4rem",

    // // padding: "0.7em",
    // transition: "0.3s",
    // boxShadow: "0 4px 12px -2px rgba(#6B75A1, .16)",
    // "&:hover": {
    //   transform: "translateY(-3px)",
    //   // boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
    // },

    overflow: "hidden",
    borderRadius: "8px 8px 8px 8px",
    boxShadow: 0,
    transform: "scale(0.95)",
    transition: "boxShadow 0.5s, transform 0.5s",
    "&:hover": {
      transform: "scale(1)",
      // boxShadow: "5px 20px 30px rgba(0,0,0,0.2)",
    },

    // [theme.breakpoints.down("sm")]: {
    //   maxHeight: "19em",
    //   maxWidth: "28em",
    // },
    // [theme.breakpoints.down("xs")]: {
    //   maxHeight: "23em",
    //   maxWidth: "24em",
    // },
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    objectFit: "cover",
  },
  cardContent: {
    display: "flex",
    direction: "row",
    justifyContent: "space-between",
  },
  cardActions: {
    display: "flex",
    direction: "row",
    justifyContent: "flex-end",
    marginTop: "-2em",
  },
}));
