import React from 'react'
import { makeStyles } from "@mui/styles";



export const Test = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>
        This website is testing purpose uploaded
      </h1>
      <button className={classes.button}>Google signin</button>
    </div>
  )
}
const useStyles = makeStyles(
  {
    button:{
      backgroundColor:'red',
      width:'100%'
    }
  }
)