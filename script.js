const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const imgbg = $('.mainimg')
const coverimg = $('.full')
const imgcd = $('.imgcd')
const namemusic = $('.namemusic h1')
const singer = $('.singer p')
const audio = $('#audio')
const btnplay = $('.btnplay')
const pause = $('.btnplay i')
const time = $(".time")
const next = $('.btnnext')
const prev = $('.btnprev')
const btnrandom = $('.btnrandom')
const btncomeb = $(".btncomeb")
const list= $('.list')
const btnlight = $('.btnmodelight')
const mainbg = $('.mainbg')
const btnmenu = $('.btnmenu')
const btnanimation= $('.btnanimation')
const animation = $('.animation')
const favoriteListS = $('.favoriteListS')
const btnfavoriteListS = $ ('.btnfavoriteListS')






const app = {
    currentindex: 10,
    isplaying: false,
    israndom: false,
    iscomeback: false,
    islight:false,
    ismenu:false,
    isanimation:false,
    isfavoriteListS:false,
    
    


    songs : [

        {
            name: 'Making My Way',
            singer: 'Son Tung M-TP',
            img: './Accsent/img/img1.webp',
            coverimg: './Accsent/img/coverimg1.png',
            mp3: './Accsent/sound/song1.mp3',
            islike:false
    
    
        },
        {
            name: 'Hay Trao Cho Anh',
            singer: 'Son Tung M-TP',
            img: './Accsent/img/img2.jpg',
            coverimg: './Accsent/img/coverimg2.jpg',
            mp3: './Accsent/sound/song2.mp3',
            islike:false
    
    
        },
        {
            name: 'Chay Ngay Di',
            singer: 'Son Tung M-TP',
            img: './Accsent/img/img3.png',
            coverimg: './Accsent/img/coverimg3.jpg',
            mp3: './Accsent/sound/song3.mp3',islike:false
    
    
        },
        {
            name: 'Muon Roi Ma Sao Con',
            singer: 'Son Tung M-TP',
            img: './Accsent/img/img4.jpg',
            coverimg: './Accsent/img/coverimg4.jpg',
            mp3: './Accsent/sound/song4.mp3',islike:false
    
    
        },
        {
            name: 'Noi Nay Co Anh',
            singer: 'Son Tung M-TP',
            img: './Accsent/img/img5.jpg',
            coverimg: './Accsent/img/coverimg5.jpg',
            mp3: './Accsent/sound/song5.mp3',islike:false
    
    
        },
        {
            name: 'Buong Doi Tay Nhau Ra',
            singer: 'Son Tung M-TP',
            img: './Accsent/img/img6.jpg',
            coverimg: './Accsent/img/coverimg6.jpg',
            mp3: './Accsent/sound/song6.mp3',islike:false
    
    
        },
        {
            name: 'Chung Ta Khong Thuoc Ve Nhau',
            singer: 'Son Tung M-TP',
            img: './Accsent/img/img7.jpg',
            coverimg: './Accsent/img/coverimg7.jpg',
            mp3: './Accsent/sound/song7.mp3',islike:false
    
    
        },
        {
            name: 'Lac Troi',
            singer: 'Son Tung M-TP',
            img: './Accsent/img/img8.jpg',
            coverimg: './Accsent/img/coverimg8.jpg',
            mp3: './Accsent/sound/song8.mp3',islike:false
    
    
        },
        {
            name: 'Nang Am Ngang Qua',
            singer: 'Son Tung M-TP',
            img: './Accsent/img/img9.jpg',
            coverimg: './Accsent/img/coverimg9.jpg',
            mp3: './Accsent/sound/song9.mp3',islike:false
    
    
        },
        {
            name: 'Con Mua Xa Dan',
            singer: 'Son Tung M-TP',
            img: './Accsent/img/img9.jpg',
            coverimg: './Accsent/img/coverimg9.jpg',
            mp3: './Accsent/sound/song10.mp3',islike:false
    
    
        },
        {
            name: 'InTro',
            singer: 'Son Tung M-TP',
            img: './Accsent/img/img11.jpg',
            coverimg: './Accsent/img/coverimg9.jpg',
            mp3: './Accsent/sound/song11.mp3',islike:false
    
    
        },
        
    ],
    favoriteList : [],
    // render ra list song
    render : function(){
       
        const htmls = this.songs.map((song , index) =>{
            return`
           
                        <div class="listmusic ${index === this.currentindex ? 'songactive' : ''}  " data-index="${index}">
                            <div class="imglist">
                                <img src="${song.img}" alt="">
                            </div>
                            <div class="inforlist">
                                <p class="namemusiclist">${song.name}</p>
                                <p class="authorlist">${song.singer}</p>
                            </div>
                            <div class="like ">
                                    <button class="btnlike  "> <i class="fa-regular fa-heart  "></i></button>
                                </div>
                        </div>
            `
        })
        list.innerHTML = htmls.join('')
        app.addLikeEventListeners()

        
    


    
        
    },
    //ham cap nhat trang thai yeu thich
    toggleFavorite : function(index) {
        const song = this.songs[index]
        song.islike = !song.islike
    
        if (song.islike) {
            // Thêm bài hát vào danh sách yêu thích
            this.favoriteList.push(song);
            console.log('Đã thêm ', song)
        } else {
            // Xóa bài hát khỏi danh sách yêu thích
            const removeIndex = this.favoriteList.findIndex((favSong) => favSong === song)
            if (removeIndex !== -1) {
                this.favoriteList.splice(removeIndex, 1)
                console.log('Đã xóa ', song)
            }
        }
    
        this.renderfavoritelist()
        
         // Cập nhật nội dung HTML danh sách yêu thích
    },
    addLikeEventListeners :function() {
        const btnLikes = document.querySelectorAll('.btnlike')
          
      
        btnLikes.forEach((btnLike, index) => {
          btnLike.addEventListener('click', () => {
            btnLike.classList.toggle('active')
            app.toggleFavorite(index)
          })
        })
      }
    ,
    renderfavoritelist : function() {
        const favoriteListHTMLs = this.favoriteList.map((song, index ) => {
            return `
            <div class="listmusic ">
            <div class="imglist">
                <img src="${song.img}" alt="">
            </div>
            <div class="inforlist">
                <p class="namemusiclist">${song.name}</p>
                <p class="authorlist">${song.singer}</p>
            </div>
            
        </div>
            `
        })
        favoriteListS.innerHTML = favoriteListHTMLs.join('')
    },
    
    
    defineProperties: function() {
        Object.defineProperty(this, 'currentsong',{
            get:function() {
                return this.songs[this.currentindex]
            }
        })
    },
    
    
    handleEvents: function() {
        //cd quay 
        const cdthump = imgcd.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(360deg)' }
          ], {
            duration: 20000,
            iterations: Infinity
          })
          cdthump.pause()



        //xu ly khi an nut play
        btnplay.onclick = function() {
            if(app.isplaying ){
                audio.pause()
            } else{
                audio.play()
            }
    
        }
        //xu ly khi dang play
        audio.onplay = function() {
            app.isplaying = true
            pause.classList.add('fa-circle-pause')
            cdthump.play()
            
        }
        //xu ly khi dang pause
        
        audio.onpause = function() {
            app.isplaying = false
            pause.classList.remove('fa-circle-pause')
            cdthump.pause()
            
        }
        //xu ly khi an next

        next.onclick = function(){
            app.nextsong()
            audio.play()
            app.render()
            app.scrollviewsong()
            app.addLikeEventListeners()
            
        }
        // xu ly khi an prev
        prev.onclick = function(){
            app.prevsong()
            audio.play()
            app.render()
            app.scrollviewsong()
            
        }


        //time chay

        audio.ontimeupdate = function updateProgress() {
            if(audio.duration) {
                const progresstime = (audio.currentTime / audio.duration) * 100
                time.value = progresstime
                
            }

        }

        //thanh time va tua
        time.oninput = function(e) {
            audio.currentTime= audio.duration / 100 * e.target.value
        }

        btnrandom.onclick = function(e) {
            app.israndom=!app.israndom

            btnrandom.classList.toggle('active',app.israndom)
        }

        btncomeb.onclick = function(e) {
            app.iscomeback=!app.iscomeback

            btncomeb.classList.toggle('active',app.iscomeback)
        }

        btnlight.onclick = function(e) {
            app.islight=!app.islight
            btnlight.classList.toggle('activelight',app.islight)
            imgbg.classList.toggle('hide')
            mainbg.classList.toggle('hideboder')
            
        }
        btnmenu.onclick = function(e) {
            app.ismenu=!app.ismenu
            btnmenu.classList.toggle('activemenu',app.ismenu)
            list.classList.toggle('listzoom')
            btnfavoriteListS.classList.toggle('hide')

        }
        btnanimation.onclick = function(e) {
            app.isanimation=!app.isanimation
            btnanimation.classList.toggle('activelight',app.isanimation)
            animation.classList.toggle('hien')
            
            
        }

        btnfavoriteListS.onclick = function(e) {
            app.isfavoriteListS=!app.isfavoriteListS
            btnfavoriteListS.classList.toggle('activemenu',app.isfavoriteListS)
            favoriteListS.classList.toggle('listzoom')
            btnmenu.classList.toggle('hide')

        }
        // 
        

        //khi het bai 
        audio.onended = function() {
           if(app.iscomeback){
                audio.play()
           } else{
               next.click()
           }
        }

        //click chuyen bai 
        list.onclick = function(e) {
           const songnode = e.target.closest('.listmusic:not(.songactive)');

             
          
            if(songnode || e.target.closest('.like')) {

                //xu ly khi click vao song

                if(songnode){
                    app.currentindex=Number(songnode.dataset.index)
                    app.loadcurrentsong()
                    app.render()
                    audio.play()
                }

                // xu ly khi click vao option
                // if(e.target.closest('.like')){
                //     app.toggleFavorite()

                // }
            }
            
                
                

            
            


        }


        
          

    },
    
    scrollviewsong:function() {
        setTimeout(() => {
            $('.list .songactive').scrollIntoView()
            
        }, 50);
    },



    //sua doi cac thong tin hop voi bai hat hien tai
    loadcurrentsong: function() {




        namemusic.textContent = this.currentsong.name
        singer.textContent = this.currentsong.singer
        imgbg.style.backgroundImage = `URL('${this.currentsong.coverimg}')`
        coverimg.style.backgroundImage = `URL('${this.currentsong.img}')`
        imgcd.style.backgroundImage = `URL('${this.currentsong.img}')`
        audio.src = this.currentsong.mp3
        
        
        console.log(namemusic,imgbg,coverimg,audio)

    },
    // next bai hat
    nextsong: function(){
        this.currentindex++
        if(this.currentindex >= this.songs.length){
            this.currentindex = 0
        }
        this.loadcurrentsong()
    },

    //prev bai hat
    prevsong: function(){
        this.currentindex--
        if(this.currentindex <0 ){
            this.currentindex = this.songs.length-1
        }
        this.loadcurrentsong()
    },






    start: function(){
        //định nghĩa các thuộc tính cho object
        this.defineProperties()
         
        //xu ly dinh nghia cac su kien
        this.handleEvents()



        //load bai hat hien tai
        this.loadcurrentsong()

        
        
        //render playlist
        this.render()
        


       
    },


}


app.start()




