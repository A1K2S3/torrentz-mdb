import { useEffect, useState } from "react";
import Axios from "../Services/Axios"

export default (url) => {
	const [torrents, setTorrents] = useState([]);
	const [loadingText, setLoadingText] = useState("");
	const [time, setTime] = useState();

	useEffect(() => {
		const t0 = performance.now();
		setLoadingText("Fetching torrentz...");

		Axios.get(url)
			.then(({ data }) => {
				const t1 = performance.now();
				setTorrents(data);
				setTime(t1 - t0);
				setLoadingText("");
			})
			.catch(err =>
				console.error(err) ||
				alert("An Error Occured!")
			);
	}, [url])
	return { torrents, loadingText, time };
}