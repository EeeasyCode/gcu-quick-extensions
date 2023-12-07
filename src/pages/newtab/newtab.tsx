import { Center, Text } from "@chakra-ui/react";

function Newtab () {
  return (
    <Center>
      <Text
        textTransform="uppercase"
        fontSize="50px"
        fontWeight="bold"
      >
          가천대학교</Text>
    </Center>
  )
}

export default Newtab
// export default withErrorBoundary(withSuspense(Newtab, <div> Loading ... </div>), <div> Error Occur </div>);