const library = {
       tracks: {
              t01: {
                     id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three"
              },
              t02: {
                     id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"
              },
              t03: {
                     id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"
              }
       },
       playlists: {
              p01: {
                     id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"]
              },
              p02: {
                     id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
              }
       },
       printPlaylists: function () {

              const playlist1 = function () {
                     return `${p01[0]}: ${p01[1]} - ${p01[2].length} tracks`;
              };
              const playlist2 = function () {
                     return `${p02[0]}: ${p02[1]} - ${p02[2].length} tracks`;
              }

              let p01 = [];
              let p02 = [];

              for (let key in library) {
                     if (key === "playlists") {
                            for (let x in library[key]) {
                                   if (x === "p01") {
                                          p01 = Object.values(library[key][x]);
                                   } else {
                                          p02 = Object.values(library[key][x]);
                                   }
                            }
                     }
              }

              console.log(`${playlist1()} \n${playlist2()}`);

       },
       printTracks: function () {

              const track1 = function () {
                     return `${t01[0]}: ${t01[1]} by ${t01[2]} (${t01[3]})`;
              };
              const track2 = function () {
                     return `${t02[0]}: ${t02[1]} by ${t02[2]} (${t02[3]})`;
              }
              const track3 = function () {
                     return `${t03[0]}: ${t03[1]} by ${t03[2]} (${t03[3]})`;
              }

              let t01 = [];
              let t02 = [];
              let t03 = [];

              for (let key in library) {
                     if (key === "tracks") {
                            for (let x in library[key]) {
                                   if (x === "t01") {
                                          t01 = Object.values(library[key][x]);
                                   } else if (x === "t02") {
                                          t02 = Object.values(library[key][x]);
                                   } else if (x === "t03") {
                                          t03 = Object.values(library[key][x]);
                                   }
                            }
                     }
              }

              console.log(`${track1()} \n${track2()} \n${track3()}`);

       },
       printPlaylist: function (playlistId) {

              let playlistX = [];
              let t01 = [];
              let t02 = [];
              let t03 = [];

              for (let key in library) {
                     if (key === "playlists") {
                            for (let x in library[key]) {
                                   if (x === playlistId) {
                                          playlistX = Object.values(library[key][x]);
                                   }
                            }
                     } else if (key === "tracks") {
                            for (let x in library[key]) {
                                   if (x === "t01") {
                                          t01 = Object.values(library[key][x]);
                                   } else if (x === "t02") {
                                          t02 = Object.values(library[key][x]);
                                   } else if (x === "t03") {
                                          t03 = Object.values(library[key][x]);
                                   }
                            }
                     }
              }
              if (playlistId === "p01") {
                     console.log(`${playlistX[0]}: ${playlistX[1]} - ${playlistX[2].length} tracks 
${t01[0]}: ${t01[1]} by ${t01[2]} (${t01[3]})
${t02[0]}: ${t02[1]} by ${t02[2]} (${t02[3]})`);
              } else if (playlistId === "p02") {
                     console.log(`${t03[0]}: ${t03[1]} by ${t03[2]} (${t03[3]})`);
              }
       },
       addTrackToPlaylist: function (trackId, playlistId) {

              let newTrack;

              for (let key in library) {
                     if (key === "playlists") {
                            // console.log(key) // playlists
                            // console.log(library[key]) // Objects inside playlists
                            for (let x in library[key]) {
                                   for (let y in library[key][x]) {
                                          // console.log(x) // p01 or p02
                                          // console.log(y) // p01,p02 keys
                                          // console.log(library[key][x][y]) // p01,p02 values
                                          if (x === playlistId && Array.isArray(library[key][x][y])) {
                                                 library[key][x][y].push(trackId);
                                                 newTrack = library[key][x][y];
                                          }
                                   }
                            }
                     }
              }
              console.log(newTrack);
       },
       addTrack: function (name, artist, album) {
              
              const generateUid = function () {
                     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
              }
              
              let newTrack;
              let trackId = generateUid()
              for (let key in library) {
                     if (key === "tracks") {
                            library.tracks.t04 = {
                                   id: trackId,
                                   name: name,
                                   artist: artist,
                                   album: album
                            }
                            newTrack = library[key];
                     }
              }
              console.log(newTrack);
       },
       addPlaylist: function (name) {

              const generateUid = function () {
                     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
              }

              let newPlaylist;
              let trackId = generateUid()
              for (let key in library) {
                     if (key === "playlists") {
                            library.playlists[name] = {
                                   id: trackId,
                                   name: "Random Playlist",
                                   tracks: ["t01", "t03"]
                            }
                            newPlaylist = library[key];
                     }
              }
              console.log(newPlaylist);
       }  
};

library.printPlaylists(); // Working
// library.printPlaylists(); // Working
// library.printTracks(); // Working
// library.printPlaylist("p01"); // Working
// library.addTrackToPlaylist("t04", "p02"); // Working
// library.addTrack("Help", "Beatles", "One"); // Working
// library.addPlaylist("p03"); // Working

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function () {

       const playlist1 = function () {
              return `${p01[0]}: ${p01[1]} - ${p01[2].length} tracks`;
       };
       const playlist2 = function () {
              return `${p02[0]}: ${p02[1]} - ${p02[2].length} tracks`;
       }

       let p01 = [];
       let p02 = [];

       for (let key in library) {
              if (key === "playlists") {
                     for (let x in library[key]) {
                            if (x === "p01") {
                                   p01 = Object.values(library[key][x]);
                            } else {
                                   p02 = Object.values(library[key][x]);
                            }
                     }
              }
       }

       return `${playlist1()} \n${playlist2()}`

};

// console.log(printPlaylists()) // Working

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function () {

       const track1 = function () {
              return `${t01[0]}: ${t01[1]} by ${t01[2]} (${t01[3]})`;
       };
       const track2 = function () {
              return `${t02[0]}: ${t02[1]} by ${t02[2]} (${t02[3]})`;
       }
       const track3 = function () {
              return `${t03[0]}: ${t03[1]} by ${t03[2]} (${t03[3]})`;
       }

       let t01 = [];
       let t02 = [];
       let t03 = [];

       for (let key in library) {
              if (key === "tracks") {
                     for (let x in library[key]) {
                            if (x === "t01") {
                                   t01 = Object.values(library[key][x]);
                            } else if (x === "t02") {
                                   t02 = Object.values(library[key][x]);
                            } else if (x === "t03") {
                                   t03 = Object.values(library[key][x]);
                            }
                     }
              }
       }

       return `${track1()} \n${track2()} \n${track3()}`

};

// console.log(printTracks()); // Working


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function (playlistId) {

       let playlistX = [];
       let t01 = [];
       let t02 = [];
       let t03 = [];

       for (let key in library) {
              if (key === "playlists") {
                     for (let x in library[key]) {
                            if (x === playlistId) {
                                   playlistX = Object.values(library[key][x]);
                            }
                     }
              } else if (key === "tracks") {
                     for (let x in library[key]) {
                            if (x === "t01") {
                                   t01 = Object.values(library[key][x]);
                            } else if (x === "t02") {
                                   t02 = Object.values(library[key][x]);
                            } else if (x === "t03") {
                                   t03 = Object.values(library[key][x]);
                            }
                     }
              }
       }
       if (playlistId === "p01") {
              return `${playlistX[0]}: ${playlistX[1]} - ${playlistX[2].length} tracks 
${t01[0]}: ${t01[1]} by ${t01[2]} (${t01[3]})
${t02[0]}: ${t02[1]} by ${t02[2]} (${t02[3]})`
       } else if (playlistId === "p02") {
              return `${t03[0]}: ${t03[1]} by ${t03[2]} (${t03[3]})`
       }
};

// console.log(printPlaylist("p01")) //Working


// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {

       let newTrack;

       for (let key in library) {
              if (key === "playlists") {
                     // console.log(key) // playlists
                     // console.log(library[key]) // Objects inside playlists
                     for (let x in library[key]) {
                            for (let y in library[key][x]) {
                                   // console.log(x) // p01 or p02
                                   // console.log(y) // p01,p02 keys
                                   // console.log(library[key][x][y]) // p01,p02 values
                                   if (x === playlistId && Array.isArray(library[key][x][y])) {
                                          library[key][x][y].push(trackId);
                                          newTrack = library[key][x][y];
                                   }
                            }
                     }
              }
       }
       return newTrack;
}

// console.log(addTrackToPlaylist("t04", "p02")) // Working

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// console.log(generateUid())

// adds a track to the library
const addTrack = function (name, artist, album) {

       let newTrack;
       let trackId = generateUid()
       for (let key in library) {
              if (key === "tracks") {
                     library.tracks.t04 = {
                            id: trackId,
                            name: name,
                            artist: artist,
                            album: album
                     }
                     newTrack = library[key];
              }
       }
       return newTrack;
}

// console.log(addTrack("Help", "Beatles", "One")) // Working

// adds a playlist to the library
const addPlaylist = function (name) {

       let newPlaylist;
       let trackId = generateUid()
       for (let key in library) {
              if (key === "playlists") {
                     library.playlists[name] = {
                            id: trackId,
                            name: "Random Playlist",
                            tracks: ["t01", "t03"]
                     }
                     newPlaylist = library[key];
              }
       }
       return newPlaylist;
}
 
// console.log(addPlaylist("p03")) // Working

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {

}