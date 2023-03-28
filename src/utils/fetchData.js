export {exercisesOptions, youtubeOptions, fetchData}

const exercisesOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Key,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Key,
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
}

const fetchData =async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}
