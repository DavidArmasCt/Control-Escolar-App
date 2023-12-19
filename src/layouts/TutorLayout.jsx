import { Grid } from "@mui/material"

export const TutorLayout = ({children}) => {
  return (
    <Grid container
      sx={{display: 'grid', bgcolor:'primary.main', height: '100vh'}}
    >
      <Grid item xs={12} sx={{ height: '75vh', width: '75%', margin: 'auto', bgcolor:'white' }}>
        {/* Contenido del recuadro */}
        {children}
      </Grid>
    
    </Grid>
  )
}