import { Grid } from "@mui/material"


export const PageLayout = ({children}) => {
  return (
    <div className="mainContainer">
      <div className="sideMenuContainer">
        {children[0]}
      </div>


      <div className="contentContainer">
        
        {children[1]}
      </div>
    </div>
  )
}