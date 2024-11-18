import { Pagination } from "@mui/material"
import { StyledPagination } from "./styles"

export const PaginationComponent = ({ count, page, handlePagination }) => {
  return (<Pagination color="primary" count={count} siblingCount={1} onChange={handlePagination} page={parseInt(page)}/>)
}