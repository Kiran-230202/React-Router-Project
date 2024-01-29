import React from "react";
import Layout from "../Components/Layout/Layout";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Layout>
      <Box sx={{
        my:10,
        ml:10,
        "& h4":{
          fontWeight:"bold",
          mb:2,
        }
        ,"@media(max-width:600px)":{
          ml:5,
        }
      }}>
        <Typography variant="h4">Contact My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          doloribus eaque animi, magnam doloremque, laboriosam autem tempora
          necessitatibus incidunt harum magni ipsum a nesciunt reprehenderit
          quae dicta sapiente, quo fugit!
        </p>
      </Box>
      <Box sx={{m:3,width:"600px",ml:10, "@media(max-width:600px)":{
        width:"300px",
        ml:5,
        
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{backgroundColor:'black',color:'#fff'}} align="center">
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:'red',pt:1}} />1800-00-0000 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <EmailIcon sx={{color:'skyblue',pt:1}}/> help@myrest
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <CallIcon sx={{color:'green',pt:1}}/> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </TableContainer>
      </Box>
    </Layout>
  );
}
