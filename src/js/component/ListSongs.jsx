import React from 'react'

function ListSongs(props) {
  const {songs, setSelectedSong} = props

  return (
    <div>
      {songs.map((song, index)=>{        
				return(
					<button className='w-50 d-flex flex-row bg-black text-white py-3 border-bottom border-secondary btn-hover fw-medium fs-5' onClick={()=> setSelectedSong(song)} key={song.id}><span className='pe-5 ps-2 text-secondary fw-semibold fs-5'>{index+1}</span> {song.name}</button>
				)
			})}
    </div>
  )
}

export default ListSongs