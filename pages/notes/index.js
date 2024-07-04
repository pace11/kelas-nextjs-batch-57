import { fetchingData } from "@/api";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
   
export default function Notes() {
 const router = useRouter();
 const [notes, setNotes] = useState();  
   
 useEffect(() => {
  fetchingData({ url: 'https://service.pace-unv.cloud/api/notes'}).then((res) => {
    setNotes(res?.data)
  })
 }, []);  
   
 return (
 <>
   <Box padding="5">
    <Flex justifyContent="end">
     <Button
      colorScheme="blue"
      onClick={() => router.push("/notes/add")}
     >
      Add Notes
     </Button>
    </Flex>
    <Flex>
     <Grid templateColumns="repeat(3, 1fr)" gap={5}>
      {notes?.map((item) => (
       <GridItem>
        <Card>
         <CardHeader>
          <Heading>{item?.title}</Heading>
         </CardHeader>
         <CardBody>
          <Text>{item?.description}</Text>
         </CardBody>
         <CardFooter justify="space-between" flexWrap="wrap">
          <Button
           onClick={() => router.push(`/notes/edit/${item?.id}`)}
           flex="1"
           variant="ghost"
          >
           Edit
          </Button>
          <Button
           flex="1"
           colorScheme="red"
          >
           Delete
          </Button>
         </CardFooter>
        </Card>
       </GridItem>
      ))}
     </Grid>
    </Flex>
   </Box>
 </>
);
}