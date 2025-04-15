import React from 'react';

import { 
  Box,
  Text,
  SimpleGrid,
  Image,
  Flex
 } from "@chakra-ui/react"


const ProjectComponent = ({project}) => {

  return (
    <Box bg={"#ebeeee"} p="20" color="white" align="center">
      <Text color ="#00CCCC" textStyle="6xl" >{project.title}</Text>
      <Text color ="#95A3A3" textStyle="3xl" >{project.description}</Text>

      <SimpleGrid columns={project.introImages.length} gap="40px">
        {project.introImages.map((image, index) => (
          <Box key={index} shadow="md" borderRadius={"10px"}>
            <Image borderRadius={"10px"} key={index}src={`/images/portfolio/${image}`} alt={image} />
           </Box>
        ))}
      </SimpleGrid>
      <Box mt={10} p={10} bg={"#F9FDFD"} borderRadius={"10px"}>
        <Text color ="#00CCCC" textStyle="5xl" mb={5} fontWeight={"bold"}>About</Text>
        {project.text.map((text, index) => (
          <Text color ="#34495e" textStyle="2xl" key={index}>{text}</Text>
        ))}

        {project.isVideo && (
          <Flex mt={10} justifyContent="center" alignItems={"center"} >
             <iframe
                width="560"
                height="315"
                src={project.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
          </Flex>
          )}

     
      </Box>
      {project.subTitle && (
        <Box mt={10} p={10} >
          <Text color ="#00CCCC" textStyle="6xl">{project.subTitle}</Text>
            <SimpleGrid columns={project.otherImages.length} gap="40px">
              {project.otherImages.map((image, index) => (
                <Box key={index} shadow="md" borderRadius={"10px"}>
                  <Image borderRadius={"10px"} key={index}src={`/images/portfolio/${image}`} alt={image} />
                </Box>
              ))}
            </SimpleGrid>
        
        </Box>
       )}
    </Box>
  );
}


export default ProjectComponent;
