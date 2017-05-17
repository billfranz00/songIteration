// Write a function called listNames which takes in an array of songs and console.logs the name of each one.
function listNames(array) {
	array.forEach(function(val) {
		console.log(val.name)
	})
}

// listNames(songs)

// Write a function called listSongDetails which takes in an array of songs and console.logs details about each one. The details should be in the following example format: "Smooth, by Santana featuring Rob Thomas (4:00)".
function listSongDetails(array) {
	array.forEach(function(val) {
		console.log(val.name + " by " + val.artist + " (" + val.duration + ")" )
	})
}

// Write a function called summerJamCount which takes in an array of songs and returns the number of songs which hit #1 on the charts in June, July, or August.
function summerJamCount(array) {
	return array.reduce(function(acc, next) {
		if(next.month > 5 && next.month < 9) {
			return acc +=1;
		}
		else {
			return acc;
		}
	}, 0)
}

// Write a function called getDurations which takes in an array of songs and returns an array of each song's duration.
function getDurations(array) {
	return array.reduce(function(acc, next) {
		acc.push(next.duration)
		return acc;
	}, [])
}

// Write a function called getDurationInSeconds which takes in an array of songs and returns an array of each song's duration in seconds.
function getDurationInSeconds(array) {
	return array.reduce(function(acc, next) {
		var arr = next.duration.split(""),
			num = 60 * Number(arr[0]) + Number(arr[2] + arr[3]);
		acc.push(num)
		return acc;
	}, [])
}

// Write a function called getMainArtists which takes in an array of songs and returns an array of the primary artists on the recordings. If there's only one artist, that artist should be returned; if there are featured artists, they should be ignored (so only the artist to the left of "featuring" is kept.)
function getMainArtists(array) {
	return array.reduce(function(acc, next) {
		var artist = next.artist.split(" "),
			primary = "";
		for(var i = 0; i < artist.length; i++) {
			if(artist[i] === "featuring") {
				break;
			}
			primary += artist[i] + " ";
		}
		acc.push(primary);
		return acc;
	}, [])
}

// Write a function called getBigHits which takes an array of songs and returns an array of songs which were number one for 10 or more weeks.
function getBigHits(array) {
	return array.filter(function(song) { // collect all objects
		return song.weeksAtNumberOne > 9; 
	}).reduce(function(acc, next) { // collect all the names in an array
		acc.push(next.name);
		return acc;
	}, [])
}

// Write a function called getShortSongs which takes an array of songs and returns an array of songs which shorter than 3 minutes.
function getShortSongs(array) {
	return array.filter(function(val) {
		return val.duration[0] < 3;
	})
}

// Write a function called getSongsByArtist which takes in an array of artists and the name of an artist and returns an array of songs by that artist.
function getSongsByArtist(array, artist) {
	return array.filter(function(song) {
		return song.artist.indexOf(artist) !== -1;
	})
}

// Write a function called getOneHitWonders which takes in an array of songs and returns an array of songs for artists who only appear once in the original array
function getOneHitWonders(array) {
	var artists = {};
	array.forEach(function(val) {
		if(artists[val.artist]) {
			artists[val.artist] += 1;
		}
		else {
			artists[val.artist] = 1;
		}
	});
	var filteredArtists = {}
	for(var key in artists) {
		if(artists[key] === 1) {
			filteredArtists[key] = 1;
		}
	}
	return array.filter(function(val) {
		return val.artist in filteredArtists;
	})
}



// Refactor summerJamCount to use reduce!
function summerJamCount(array) {
	return array.reduce(function(acc, next) {
		if(next.month > 5 && next.month < 9) {
			return acc +=1;
		}
		else {
			return acc;
		}
	}, 0)
}

// Write a function called getTotalDurationInSeconds which takes in an array of songs and returns the total amount of time (in seconds) it would take to listen to all of the songs. (Hint: can you use anything you've written already to help solve this problem?)
function getTotalDurationInSeconds(array) {
	return getDurationInSeconds(array).reduce(function(acc, next) {
		return acc + next;
	})
}

// Write a function called getSongCountByArtist which takes in an array of songs and returns an object. The keys in the object should be artist names, and the values should be the number of songs by that artist in the orignal array.
function getSongCountByArtist(array) {
	return array.reduce(function(acc, next) {
		if(acc[next.artist]) {
			acc[next.artist] += 1;
		}
		else {
			acc[next.artist] = 1;
		}
		return acc;
	}, {})
}

// Write a function called averageWeeksAtNumberOne which takes in an array of songs and returns the average number of weeks that songs on the list were #1.
function averageWeeksAtNumberOne(array) {
	return array.reduce(function(acc, next) {
		acc += next.weeksAtNumberOne;
		return acc; 
	}, 0) / array.length;
}
































