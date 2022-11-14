import {
  Button,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveChapter } from "../features/chapterSlice";
const Books = ({ items,index }) => {
  const [isSelect, setIsSelect] = useState();
  const dispatch = useDispatch();
  const addChapter = (data) => {
    dispatch(saveChapter(
    data
    ));
  };
  const count = [];
  for (let i = 1; i < items.length; i++) {
    count.push(i);
  }
  return (
    <>
      <TableContainer component={Paper} className="section-center">
        <Table sx={{ minWidth: 650 }} aria-label="simple table"></Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <h4>Serial no.</h4>
            </TableCell>
            <TableCell align="right">
              <h4>Select</h4>
            </TableCell>
            <TableCell align="right">
              <h4>Chapter</h4>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((bookItem, count) => {
            const { id, chapter, title, info,subject } = bookItem;
            return (
              <>
                <TableRow
                id = "choice"
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <h4>{count + 1}</h4>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <RadioGroup
                      row
                      required
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      className="flex column"
                      onClick={() => {
                        addChapter(bookItem);
                      }}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                        onClick={(e) => setIsSelect(false)}
                                       />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                        onClick={(e) => setIsSelect(false)}
                      />
                    </RadioGroup>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <h4>{chapter}</h4>
                  </TableCell>
                </TableRow>
              </>
            );
          })}
        </TableBody>
            <Button
          disabled={isSelect}
          className="submit-btn"
          variant="contained"
          key={index}
          color="success"
        >
          Submit
        </Button>
      </TableContainer>
    </>
  );
};

export default Books;