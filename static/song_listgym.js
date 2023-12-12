let All_song = [
    {
      name: "Make Me Move",
      path: "static/music2/1.mp3",
      img: "static/images2/1.jpg",
      singer: "NoCopyrightSounds [NCS]"
    },
    {
      name: "satisfya",
      path: "static/music2/2.mp3",
      img: "static/images2/h2.jpg",
      singer: "joarge bernde"
    },
    {
      name: "hell of fame",
      path: "static/music2/3.m4a",
      img: "static/images2/h3.jpg",
      singer: "xxx"
    },
    {
      name: "start",
      path: "static/music2/4.ogg",
      img: "static/images2/4.jpg",
      singer: "razz"
    },
    {
      name: "enemy",
      path: "static/music2/5.m4a",
      img: "static/images2/3.jpg",
      singer: "beetle"
    },
    {
     name: "fearless",
     path: "static/music2/6.m4a",
     img: "static/images2/2.jpg",
     singer: "raspi"
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