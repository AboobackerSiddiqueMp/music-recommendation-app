let All_song = [
    {
      name: "malhari",
      path: "static/music3/1.mp4",
      img: "static/image3/2.jpg",
      singer: "NoCopyrightSounds [NCS]"
    },
    {
      name: "master",
      path: "static/music3/2.mp4",
      img: "static/image3/1.jpeg",
      singer: "NoCopyrightSounds"
    },
    {
      name: "sodakke",
      path: "static/music3/3.mp4",
      img: "static/image3/4.jpg",
      singer: "Audio Library"
    },
    {
      name: "oo antava",
      path: "static/music3/5.mp3",
      img: "static/image3/6.webp",
      singer: "imshahed"
    },
    {
      name: "pathan",
      path: "static/music3/5.m4a",
      img: "static/image3/3.jpg",
      singer: "NoCopyrightSounds"
    },
    {
     name: "sadi gali",
     path: "static/music3/4.mp4",
     img: "static/image3/5.jpg",
     singer: "Magic Free Release"
    }
 ];
 /*you can add more song & images from you computer*/
 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 
 
 /*please follow all the rules so that you do not face any problem*/