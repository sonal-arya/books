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

const Books = ({ items, categories }) => {
  console.log("!", items.length);
  const [isSelect, setIsSelect] = useState();
  const dispatch = useDispatch();
  const addChapter = (data) => {
    console.log("@#",data.chapter);
    dispatch(saveChapter({
      chapter : data.chapter,
      value:isSelect,

    }));
  };
  // console.log("@", data);
  const [index, setIndex] = useState(0);
  console.log("categories", categories);
  const prevChapter = () => {
    setIndex((categories) => {
      let newIndex = categories - 1;
      return newIndex;
    });
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
            <TableCell align="left">
              <h4>Select</h4>
            </TableCell>
            <TableCell align="left">
              <h4>Chapter</h4>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((bookItem, count) => {
            const { id, chapter, title, info } = bookItem;
           
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
                  // onClick={handleChange}
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
                {/* <Button
          disabled={isSelect}
          className="submit-btn"
          variant="contained"
          color="success"
         
        >
          Submit
        </Button> */}
              </>
            );
          })}
        </TableBody>
       
        <div className="btn-next">
          <Button variant="contained" color="success" onClick={prevChapter}>
            Prev
          </Button>
          <Button
            variant="contained"
            color="success"
            // onClick={nxtChapter}
          >
            Next
          </Button>
        </div>
      </TableContainer>
    </>
  );
};

export default Books;
