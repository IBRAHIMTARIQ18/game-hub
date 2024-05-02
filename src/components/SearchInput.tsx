import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
    <InputLeftElement children={<BsSearch />} />
    <Input variant='filled' size={'md'} placeholder="Search games..." borderRadius={20}></Input>
    </InputGroup>
  )
}

export default SearchInput;