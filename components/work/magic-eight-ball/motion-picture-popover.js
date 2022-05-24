import React, { useState } from 'react';

import {
  Box,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Tag,
  Image
} from '@chakra-ui/react'

const MotionPicturePopover = ({
  commandLoading,
  selectedCommand,
  runCommand,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)
  const open = () => setIsOpen(true)
  const buttonClick = async () => {
    await runCommand()
    open()
  }

  return (
    <Popover
      placement='bottom'
      closeOnBlur={true}
      isOpen={isOpen && !commandLoading && content !== null}
      onClose={close}
    >
      <PopoverTrigger>
        <Button
          colorScheme='cyan'
          mt={4}
          width='100%'
          variant='outline'
          isLoading={commandLoading}
          disabled={!selectedCommand}
          onClick={buttonClick}
        >
          Run
        </Button>
      </PopoverTrigger>
      {content && (
        <PopoverContent color='white' bg='gray.800' borderColor='blue.800' mt={-10}>
          <PopoverHeader pt={4} fontWeight='bold' border='0'>
            {content.title}
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            {content.rating &&
              <Tag size='sm' variant='subtle' colorScheme='pink'>
                ⭐️ {content.rating}
              </Tag>
            }
            {content.year &&
              <Tag ml={1} size='sm' variant='subtle' colorScheme='pink'>
                {content.year}
              </Tag>
            }
            {content.runtime &&
              <Tag ml={1} size='sm' variant='subtle' colorScheme='pink'>
                {content.runtime} minutes
              </Tag>
            }
            {content.plot &&
              <Text>{content.plot}</Text>
            }
            {content.poster &&
              <Box>
                <Image src={content.poster} alt='Motion Picture Image' />
              </Box>
            }
          </PopoverBody>
        </PopoverContent>
      )}
    </Popover>
  )
}

export default MotionPicturePopover