import React from 'react'
import { MenuList } from '../Data/Data'
import Layout from '../Components/Layout/Layout'
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

export default function Menu() {
  return (
    <Layout>
      <Box sx={{display:'flex', flexWrap:"wrap",justifyContent:'center'}}>
        {
          MenuList.map(menu=>(
            

            <Card sx={{maxWidth:"390px" ,margin:3}} key={menu.name}>
              <CardActionArea>
                <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name }/>
                <CardContent>
                  <Typography variant='h5' gutterBottom component={'div'} >
                    {menu.name}
                  </Typography>
                  <Typography variant='body2' >
                    {menu.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))

        }
      </Box>
    </Layout>
  )
}
