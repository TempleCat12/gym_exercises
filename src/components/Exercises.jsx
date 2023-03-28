import React, { useState } from "react";
import { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";

import { fetchData, exercisesOptions } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [exercisesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1)
  // const [currentExercises, setCurrentExercises] = useState([])
  useEffect(() => {
    const fetchExercisesData = async () => {
      const resp = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises` +
          (bodyPart === "all" ? "" : `/bodyPart/${bodyPart}`),
          exercisesOptions
      );
      setExercises(resp);
    };
    fetchExercisesData();

  }, [bodyPart]);

  // pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = !exercises ? exercises?.slice(indexOfFirstExercise, indexOfLastExercise) : [];

  const handlePageChange = (event, page) => {
    setCurrentPage(page)
    window.scrollTo({top: 1300, left: 200, behavior: 'smooth'})
  }

  if(!currentExercises.length) return <Loader />

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" }, mt: "50px", p: "20px" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Show Results
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
      >
        {currentExercises.map((item) => (
          <ExerciseCard key={item.id} exercise={item} />
        ))}
      </Stack>
      <Stack mt='40px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
