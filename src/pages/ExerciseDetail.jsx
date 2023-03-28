import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import {
  fetchData,
  exercisesOptions,
  youtubeOptions,
} from "../utils/fetchData";
import Loader from "../components/Loader";
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(() => {
    const fetchExerciseDataById = async () => {
      const exerciseURL = "https://exercisedb.p.rapidapi.com/exercises";
      const exerciseDetailData = await fetchData(
        `${exerciseURL}/exercise/${id}`,
        exercisesOptions
      );
      setExerciseDetail(exerciseDetailData);

      const youtubeURL = `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name} exercise`;
      const exerciseVideosData = await fetchData(youtubeURL, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseURL}/target/${exerciseDetailData.target}`,
        exercisesOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exerciseURL}/equipment/${exerciseDetailData.equipment}`
      );
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExerciseDataById();
  }, [id]);

  if(!exerciseDetail) return <Loader />
  return (
    <Box sx={{mt: { lg: '96px', xs: '60px'}}}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos name={exerciseDetail.name} exerciseVideos={exerciseVideos} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
};

export default ExerciseDetail;
