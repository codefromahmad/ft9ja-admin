import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";

import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import axios from "../axios";
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function RefTable() {
  const [page, setPage] = React.useState(0);
  const [info, setInfo] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  React.useEffect(() => {
    axios
      .get(`/referrals/`)
      .then((res) => {
        console.log(res.data);
        setInfo(res.data);
        // if (res.data === false) {
        //   setdisable(true);
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const rows = info;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TableContainer
      sx={{
        width: "70%",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid ",
                textAlign: "center",
              }}
              width={1}
              className="affTable"
            >
              Refree
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid ",
                textAlign: "center",
              }}
              width={1}
              className="affTable"
            >
              Stage
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid ",
                textAlign: "center",
              }}
              width={1}
              className="affTable"
            >
              Account Size
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid ",
                textAlign: "center",
              }}
              width={1}
              className="affTable"
            >
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <tr height="10px"></tr>
        </TableBody>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <TableRow key={index}>
              <TableCell
                sx={{
                  border: "1px solid ",
                  textAlign: "center",
                }}
                component="th"
                scope="row"
                className="affTable"
              >
                {row.person_referred.email}
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid ",
                  textAlign: "center",
                }}
                width={1}
                className="affTable"
              >
                {row.stage}
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid ",
                  textAlign: "center",
                }}
                width={1}
                className="affTable"
              >
                {row.accsize}
              </TableCell>
              <TableCell
                sx={{
                  border: "1px solid ",
                  textAlign: "center",
                }}
                width={1}
                className="affTable"
              >
                {row.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              sx={{
                borderBottom: "0px",
              }}
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
