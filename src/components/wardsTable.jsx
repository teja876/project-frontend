import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  boldStyles: {
    fontWeight: "600",
  },
  bgColor: {
    backgroundColor: "ghostwhite",
  },
});

function createData(name, wards) {
  return { name, wards };
}

const rows = [
  createData("ICU", 159),
  createData("ICU with Ventilators", 237),
  createData("Pediatrics", 262),
  createData("Maternity", 305),
  createData("Psychiatric ", 356),
  createData("Geriatric", 356),
];

export default function WardTable() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" gutterBottom color="primary">
        Ward Availablity
      </Typography>
      <TableContainer component={Paper} className={classes.bgColor}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.boldStyles}>Ward Names</TableCell>
              <TableCell align="right" className={classes.boldStyles}>
                No of Wards
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.wards}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
