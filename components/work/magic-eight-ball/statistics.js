import React, { useState, useEffect } from 'react'
import {
  Box,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Skeleton
} from "@chakra-ui/react"
import ScrollTriggered from '../../layouts/scroll-triggered'

const host = "https://magic-eight-ball-spring.herokuapp.com"
const apiMap = {
  channels: `${host}/channels/all`,
  movies: `${host}/movies/all`,
  tvShows: `${host}/tvshows/all`,
  animes: `${host}/tvshows/all?country=JP&genres=Animation`,
  animeMovies: `${host}/movies/all?country=JP&genres=Animation`,
}

export const Statistics = ({ color }) => {
  const [channels, setChannels] = useState(null)
  const [movies, setMovies] = useState(null)
  const [tvShows, setTvShows] = useState(null)
  const [animes, setAnimes] = useState(null)
  const [timestamp, setTimestamp] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const channels = fetch(
        apiMap.channels
      ).then((res) => res.json());
      const movies = fetch(
        apiMap.movies
      ).then((res) => res.json())
      const tvShows = fetch(
        apiMap.tvShows
      ).then((res) => res.json())
      const animes = fetch(
        apiMap.animes
      ).then((res) => res.json())
      const animeMovies = fetch(
        apiMap.animeMovies
      ).then((res) => res.json())
      const stats = Promise.all([channels, movies, tvShows, animes, animeMovies])
      stats.then((res) => {
        setChannels(res[0].length)
        setMovies(res[1].length)
        setTvShows(res[2].length)
        setAnimes(res[3].length + res[4].length)
      })
    }

    fetchData()
    var currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    var datetime = `As of ${currentDate.toLocaleDateString('en-US', options)}`
    setTimestamp(datetime)
  }, []);

  return (
    <ScrollTriggered>
      <Box height="100vh">
        <Heading as="h2" color={color} size='4xl'>
          Statistics
        </Heading>
        <Skeleton startColor='pink.500' endColor='orange.500' isLoaded={animes !== null}>
          <Stat
            p={2}
            border='2px'
            borderColor={color}
            borderRadius="6px"
            mt={3}
          >
            <StatLabel fontSize="xl">Channels using Magic Eight Ball</StatLabel>
            <StatNumber>{channels}</StatNumber>
            <StatHelpText fontSize="m">{timestamp}</StatHelpText>
          </Stat>
        </Skeleton>
        <Skeleton startColor='pink.500' endColor='orange.500' isLoaded={animes !== null}>
          <Stat
            p={2}
            border='2px'
            borderColor={color}
            borderRadius="6px"
            mt={3}
          >
            <StatLabel fontSize="xl">Movies in Magic Eight Ball</StatLabel>
            <StatNumber>{movies}</StatNumber>
            <StatHelpText fontSize="m">{timestamp}</StatHelpText>
          </Stat>
        </Skeleton>
        <Skeleton startColor='pink.500' endColor='orange.500' isLoaded={animes !== null}>
          <Stat
            p={2}
            border='2px'
            borderColor={color}
            borderRadius="6px"
            mt={3}
          >
            <StatLabel fontSize="xl">TV Shows in Magic Eight Ball</StatLabel>
            <StatNumber>{tvShows}</StatNumber>
            <StatHelpText fontSize="m">{timestamp}</StatHelpText>
          </Stat>
        </Skeleton>
        <Skeleton startColor='pink.500' endColor='orange.500' isLoaded={animes !== null}>
          <Stat
            p={2}
            border='2px'
            borderColor={color}
            borderRadius="6px"
            mt={3}
          >
            <StatLabel fontSize="xl">Animes in Magic Eight Ball</StatLabel>
            <StatNumber>{animes}</StatNumber>
            <StatHelpText fontSize="m">{timestamp}</StatHelpText>
          </Stat>
        </Skeleton>
      </Box>
    </ScrollTriggered>
  )
}

export default Statistics