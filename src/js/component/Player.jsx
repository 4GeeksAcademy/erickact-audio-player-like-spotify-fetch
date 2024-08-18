import React, { useState, useRef } from 'react'

const Player = (props) => {
  const {selectedSong, handlePrevSong, handleNextSong  } = props

  const [isplaying, setIsPlaying] = useState(true)

  const audioRef = useRef(null)
  console.log(audioRef);
  
  const handlePlayPause = () => {
    if(isplaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    }else{
      audioRef.current.play() 
      setIsPlaying(true) 
    }
  }

  return (
    <div className='w-50 bg-dark d-flex gap-5 justify-content-center align-item-center py-2'>
      <button className='rounded bg-white' onClick={handlePrevSong} disabled={!selectedSong}><i className="fa-solid fa-caret-left fs-4"></i></button>
      {
        selectedSong && (
          <audio className='d-none' ref={audioRef} src={ "https://playground.4geeks.com" + selectedSong.url} controls autoPlay></audio>
        )
      }
      <button className='rounded bg-white' onClick={handlePlayPause} disabled={!selectedSong}>{isplaying?<i className="fa-solid fa-pause fs-4"></i>:<i class="fa-solid fa-play"></i>}</button>
      <button className='rounded bg-white' onClick={handleNextSong}disabled={!selectedSong}><i className="fa-solid fa-caret-right fs-4"></i></button>
    </div>
  )
}

export default Player