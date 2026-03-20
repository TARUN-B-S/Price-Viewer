import {useState} from "react";
import Frame from "./Frame";
import './css/Window.css'

export default function Window(){
	const [frames,setFrames] =useState([]);
	const addFrame=()=>{
		const newFrame={id:Date.now()}
		setFrames(prev=>[...prev,newFrame]);
		console.log("1");
	};

	return(
		<div className="window">
		<button className="add-btn" onClick={addFrame}> Add Frame </button>
		<div className="frames">
		{
			frames.map(frame=>(
				<Frame
				key={frame.id}
				frame={frame}
				/>)
			)
		}
		< / div>
		</div>
	);
}
