import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react"

export const Statistics = ({ color }) => {
  const [channels, setChannels] = useState(0)
  const [timestamp, setTimestamp] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://magic-eight-ball-spring.herokuapp.com/channels/all"
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json()
      setChannels(data.length)
    }

    fetchData()
    var currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    var datetime = `As of ${currentDate.toLocaleDateString('en-US', options)}`
    setTimestamp(datetime)
  }, []);

  return (
    <Box>
      <Heading as="h2" color={color} size='xl' mt={10}>
        Statistics
      </Heading>
      <Stat
        p={2}
        border='2px'
        borderColor={color}
        borderRadius="6px"
        mt={3}
      >
        <StatLabel fontSize="2xl">Channels using Magic Eight Ball</StatLabel>
        <StatNumber>{channels}</StatNumber>
        <StatHelpText fontSize="m">{timestamp}</StatHelpText>
      </Stat>
    </Box>
  )
}

export default Statistics