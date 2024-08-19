import React, {useEffect, useState} from "react";
import ListSongs from "./ListSongs";
import Player from "./Player";

//create your first component
const App = () => {
	const [songs, setSongs] = useState([])
	
	const [selectedSong, setSelectedSong] = useState(null)

	const getSongs =()=> {
		fetch("https://playground.4geeks.com/sound/songs")
		.then(response => response.json())
		.then(data => setSongs(data.songs))
		.catch(error => console.log(error))
	}

	const handleNextSong = () => {
		const selectedIndex = songs.findIndex((song)=>{
			return song.id === selectedSong.id
		})
		const nextSong = songs[selectedIndex + 1]
		setSelectedSong(nextSong)
	}

	const handlePrevSong = () => {
		const selectedIndex = songs.findIndex((song)=>{
			return song.id === selectedSong.id
		})
		const prevSong = songs[selectedIndex -1]
		setSelectedSong(prevSong)
	}

	useEffect(()=>{
		getSongs()
	},[])

	return (
		<div>
			<div className="w-50 bg-dark py-3"></div>
			<ListSongs songs={songs} setSelectedSong={setSelectedSong}/>
			<Player selectedSong={selectedSong} handleNextSong={handleNextSong} handlePrevSong={handlePrevSong} />
		</div>
	);
};

export default App;
