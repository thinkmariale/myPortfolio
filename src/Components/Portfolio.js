
import React, { Component } from 'react';
import { Box, Grid, Text, Image } from '@chakra-ui/react';
import {
  Link
} from "react-router-dom";
class Portfolio extends Component {

  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map((project, index) => {
      let projectImage = "images/portfolio/" + project.image;

      return (
         <Grid item key={index} className="portfolio-item">
          <Link
            to={{pathname: project.url ? project.url : `/project/${index}` }} 
            target={project.url ? "_blank" : "_self" }
            _hover={{ textDecoration: 'none' }}
          >
            <Box borderRadius="md" overflow="hidden" boxShadow="md" bg={"white"}>
              <Image alt={project.title} src={projectImage} />
              <Text m={4} fontWeight="bold">{project.title}</Text>
            </Box>
          </Link>
        </Grid>
      );
    });

    return (
      <Box bg={"#F9FDFD"}  p={20} textAlign="center">
        <Text fontSize="4xl" fontWeight="bold">
          Check Out Some of My Works
        </Text>
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
          {projects}
        </Grid>
      </Box>
    );
  }
}

export default Portfolio;