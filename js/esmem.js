document.addEventListener('DOMContentLoaded', () => {

    var hightwidth = 100;
    const lvl1arr = [
        {
            name: 'aloo',
            img: 'images/sm-aloo.png'
        },
        {
            name: 'berry',
            img: 'images/sm-berry.png'
        },
        {
            name: 'lino2',
            img: 'images/sm-lino2.png'
        },
        {
            name: 'straw1',
            img: 'images/sm-straw1.png'
        },
        {
            name: 'aloo',
            img: 'images/sm-aloo.png'
        },
        {
            name: 'berry',
            img: 'images/sm-berry.png'
        },
        {
            name: 'lino2',
            img: 'images/sm-lino2.png'
        },
        {
            name: 'straw1',
            img: 'images/sm-straw1.png'
        }
    ]
    lvl1arr.sort(() => 0.5 - Math.random())
    const inttvv = document.getElementById('inttvv')
    const out2id = document.getElementById('out2id')
    const esmemlvl = document.getElementById('esmemlvl')
    const urscore = document.getElementById('urscore')
    let tiledelect = []
    let tiledelectId = []
    let wintile = []
    var alllightsnumber = 25;
    var numberoflights = 0;
    function addlights()
    {
        for (let i = 0; i < alllightsnumber; i++)
        {
            const imglight = document.createElement('img')
            imglight.setAttribute('id', 'imglight' + i)

            imglight.setAttribute('src', 'images/lightoff.png')
            
            imglight.setAttribute('width', 30)
            imglight.setAttribute('height', 30)
            
            out2id.appendChild(imglight)
        }
    }
    function onlights()
    {
        var localnuml=0;
        if(numberoflights>alllightsnumber)
        {
            numberoflights = alllightsnumber
        }
        
        for (let i = 0; i < alllightsnumber; i++)
        {
            if(i<=numberoflights)
            {
                document.getElementById('imglight'+i).setAttribute('src','images/lighton.png')
            }
            else{
                document.getElementById('imglight'+i).setAttribute('src','images/lightoff.png')
            }
        }
        
    }
    function lvl1create() {
        numberoflights = 5;
        var itmp = 0;
        var ltmp = 0;
        var toptmp = '';
        var lefttmp = '';
        inttvv.setAttribute('style','width: 800px; height: 250px');
        
        //add lights
        addlights()
        onlights()
        for (let i = 0; i < 8; i++) {

            const divtile = document.createElement('div')
            divtile.classList.add("tilessty")
            divtile.classList.add("click")
            divtile.setAttribute('id', 'divtile' + i)
            divtile.setAttribute('data-id', i)
            divtile.addEventListener('click', tilesflip)
            divtile.setAttribute('width', hightwidth)
            divtile.setAttribute('height', hightwidth)
            itmp = Math.floor(i/4)
            ltmp = (hightwidth*i) - (itmp*hightwidth*4)
            toptmp = 'top: ' + hightwidth*itmp + 'px';
            lefttmp = 'left: ' + ltmp + 'px';
            divtile.setAttribute('style', toptmp + '; ' + lefttmp)
            
            esmemlvl.appendChild(divtile)

            const divfront = document.createElement('div')
            const divback = document.createElement('div')
            divfront.classList.add("front")
            divback.classList.add("back")
            divfront.setAttribute('id', 'frontid' + i)
            divfront.setAttribute('data-id', i)
            divback.setAttribute('id', 'backid' + i)
            divback.setAttribute('data-id', i)



            const divmom = document.querySelector('#divtile' + i)
            divfront.setAttribute('width', hightwidth)
            divfront.setAttribute('height', hightwidth)
            divback.setAttribute('width', hightwidth)
            divback.setAttribute('height', hightwidth)
            divmom.appendChild(divfront)
            divmom.appendChild(divback)


            frontmom = document.querySelector('#frontid' + i)
            backmom = document.querySelector('#backid' + i)

            const tilefront = document.createElement('img')
            const tileback = document.createElement('img')
            tilefront.setAttribute('src', 'images/sm-blank.png')
            tileback.setAttribute('src', lvl1arr[i].img)
            tilefront.setAttribute('data-id', i)
            tileback.setAttribute('data-id', i)
            tilefront.setAttribute('width', hightwidth)
            tilefront.setAttribute('height', hightwidth)
            tileback.setAttribute('width', hightwidth)
            tileback.setAttribute('height', hightwidth)
            frontmom.appendChild(tilefront)
            backmom.appendChild(tileback)





        }
    }

    function tilesflip() {
        let idtile = this.getAttribute('data-id');
        tiledelect.push(lvl1arr[idtile].name);
        tiledelectId.push(idtile);
        if (this.classList.contains("flip")) {
            this.classList.remove("flip")
        }
        else {
            this.classList.add("flip")
        }
        if (tiledelect.length === 2) {
            setTimeout(checktiles, 500);
        }
    }
    
    //check for matches
    function checktiles() {
        
        const sel1Id = tiledelectId[0]
        const sel2Id = tiledelectId[1]
        const tiless1 = document.getElementById('divtile' + tiledelectId[0])
        const tiless2 = document.getElementById('divtile' + tiledelectId[1])
        if (sel1Id == sel2Id) {
            
            
        }
        else{
            if (tiledelect[0] === tiledelect[1]) {
                
                tiless1.removeEventListener('click', tilesflip);
                tiless2.removeEventListener('click', tilesflip);
                numberoflights++;
                wintile.push(tiledelect)
            } else {
                numberoflights--;
                if (tiless1.classList.contains("flip")) {
                    tiless1.classList.remove("flip")
                }
                else {
                    tiless1.classList.add("flip")
                }
                if (tiless2.classList.contains("flip")) {
                    tiless2.classList.remove("flip")
                }
                else {
                    tiless2.classList.add("flip")
                }
            }

        } 
        if(numberoflights<=0)
        {
            urscore.innerHTML = 'Game Over. try again'
        }
        onlights()
        tiledelect = []
        tiledelectId = []
        urscore.innerHTML = wintile.length
        if (wintile.length === lvl1arr.length / 2) {
            urscore.innerHTML = 'Nice Job, Level1 is done'
        }
    }



    lvl1create();

});