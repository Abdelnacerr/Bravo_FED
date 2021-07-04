import React, { useEffect, useState } from "react";
import "./Events.css";

function Events() {
	const [Data, setData] = useState([]);

	const Api =
		"https://87197325.blob.core.windows.net/fed-technical-test/events.json";

	useEffect(() => {
		fetch(Api)
			.then((res) => res.json())
			.then((Data) => setData(Data));
	}, []);

	return (
		<div className='grid'>
			{Data?.map((item) => (
				<div className='grid-item'>
					<div className='card'>
						<img
							className='card-img'
							alt='DeskBackground'
							src={item.imgUrlDesktop}
						/>
						<div className='card-content'>
							<h4 className='card-title'>{item.title}</h4>
							<p className='description'>{item.description}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Events;
