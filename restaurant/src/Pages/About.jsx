import React from "react";
import Layout from "../Components/Layout/Layout";
import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign:'center',
        p:2,
        "& h4":{
          fontWeight:'bold',
          my:2,
          fontSize:'2rem',
        },
        "& p":{
          textAlign:'justify',
        },
        "@media(max-width:600px)":{
          mt:0,
          "& h4":{
         
            fontSize:'1.5rem',
          }

        }
      }}>
        <Typography variant="h4">Welcome To My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          odio natus laborum alias illo sapiente eaque rem iure consequuntur
          ipsa voluptatibus suscipit distinctio magni debitis earum est error,
          aliquid numquam ea, provident ut corrupti! Odit unde harum sit
          repellat quae optio cumque eveniet ab explicabo tempora. Beatae vitae
          at sed fugit neque consectetur veniam ipsum quaerat consequatur
          obcaecati aliquid ea atque similique suscipit quam perferendis, ut,
          quasi maxime. Ipsam a id illum esse incidunt vitae, dolorem quibusdam
          delectus atque, sunt dignissimos, magni animi nam ad repellendus fuga
          assumenda. Optio sequi aperiam itaque ab exercitationem, natus soluta!
          Sapiente suscipit adipisci quis?
        </p>
        <br/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          odio natus laborum alias illo sapiente eaque rem iure consequuntur
          ipsa voluptatibus suscipit distinctio magni debitis earum est error,
          aliquid numquam ea, provident ut corrupti! Odit unde harum sit
          repellat quae optio cumque eveniet ab explicabo tempora. Beatae vitae
          at sed fugit neque consectetur veniam ipsum quaerat consequatur
          obcaecati aliquid ea atque similique suscipit quam perferendis, ut,
          quasi maxime. Ipsam a id illum esse incidunt vitae, dolorem quibusdam
          delectus atque, sunt dignissimos, magni animi nam ad repellendus fuga
          assumenda. Optio sequi aperiam itaque ab exercitationem, natus soluta!
          Sapiente suscipit adipisci quis?
        </p>
      </Box>
    </Layout>
  );
}
