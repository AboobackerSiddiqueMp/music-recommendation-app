let All_song = [
    {
      name: "thenmozi",
      path: "static/music4/1.mp4",
      img: "static/images4/1.jpg",
      singer: "NoCopyrightSounds [NCS]"
    },
    {
      name: "ekvillin",
      path: "static/music4/2.mp4",
      img: "static/images4/6.jpg",
      singer: "NoCopyrightSounds"
    },
    {
      name: "changes",
      path: "static/music4/3.ogg",
      img: "static/images4/7.webp",
      singer: "xxxtention"
    },
    {
      name: "mockingbird",
      path: "static/music4/4.m4a",
      img: "static/images4/3.jpg",
      singer: "eminem"
    },
    {
      name: "Hope",
      path: "static/music4/5.ogg",
      img: "static/images4/8.jpg",
      singer: "xxxtention"
    },
    {
     name: "Heartless",
     path: "static/music4/6.ogg",
     img: "static/images4/5.jpg",
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