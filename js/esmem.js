document.addEventListener('DOMContentLoaded', () => {

    var currentlvl = 1;
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
    const lvl2arr = [
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
        },
        {
            name: 'cofee',
            img: 'images/sm-cofee.png'
        },
        {
            name: 'cofee',
            img: 'images/sm-cofee.png'
        },
        {
            name: 'hamb',
            img: 'images/sm-hamb.png'
        },
        {
            name: 'hamb',
            img: 'images/sm-hamb.png'
        },
        {
            name: 'iccr',
            img: 'images/sm-iccr.png'
        },
        {
            name: 'iccr',
            img: 'images/sm-iccr.png'
        },
        {
            name: 'kahoo',
            img: 'images/sm-kahoo.png'
        },
        {
            name: 'kahoo',
            img: 'images/sm-kahoo.png'
        },
        {
            name: 'limo',
            img: 'images/sm-limo.png'
        },
        {
            name: 'limo',
            img: 'images/sm-limo.png'
        },
        {
            name: 'mango',
            img: 'images/sm-mango.png'
        },
        {
            name: 'mango',
            img: 'images/sm-mango.png'
        }
    ]
    const lvl3arr = [
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
        },
        {
            name: 'cofee',
            img: 'images/sm-cofee.png'
        },
        {
            name: 'cofee',
            img: 'images/sm-cofee.png'
        },
        {
            name: 'hamb',
            img: 'images/sm-hamb.png'
        },
        {
            name: 'hamb',
            img: 'images/sm-hamb.png'
        },
        {
            name: 'iccr',
            img: 'images/sm-iccr.png'
        },
        {
            name: 'iccr',
            img: 'images/sm-iccr.png'
        },
        {
            name: 'kahoo',
            img: 'images/sm-kahoo.png'
        },
        {
            name: 'kahoo',
            img: 'images/sm-kahoo.png'
        },
        {
            name: 'limo',
            img: 'images/sm-limo.png'
        },
        {
            name: 'limo',
            img: 'images/sm-limo.png'
        },
        {
            name: 'mango',
            img: 'images/sm-mango.png'
        },
        {
            name: 'mango',
            img: 'images/sm-mango.png'
        },
        {
            name: 'orange',
            img: 'images/sm-orange.png'
        },
        {
            name: 'orange',
            img: 'images/sm-orange.png'
        },
        {
            name: 'pear',
            img: 'images/sm-pear.png'
        },
        {
            name: 'pear',
            img: 'images/sm-pear.png'
        },
        {
            name: 'pizza',
            img: 'images/sm-pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/sm-pizza.png'
        },
        {
            name: 'pomeg',
            img: 'images/sm-pomeg.png'
        },
        {
            name: 'pomeg',
            img: 'images/sm-pomeg.png'
        },
        {
            name: 'cake',
            img: 'images/sm-cake.png'
        },
        {
            name: 'cake',
            img: 'images/sm-cake.png'
        },
        {
            name: 'eggp',
            img: 'images/sm-eggp.png'
        },
        {
            name: 'eggp',
            img: 'images/sm-eggp.png'
        },
        {
            name: 'java',
            img: 'images/sm-java.png'
        },
        {
            name: 'java',
            img: 'images/sm-java.png'
        },
        {
            name: 'tomat',
            img: 'images/sm-tomat.png'
        },
        {
            name: 'tomat',
            img: 'images/sm-tomat.png'
        },
        {
            name: 'grap',
            img: 'images/sm-grap.png'
        },
        {
            name: 'grap',
            img: 'images/sm-grap.png'
        },
        {
            name: 'angoo',
            img: 'images/sm-angoo.png'
        },
        {
            name: 'angoo',
            img: 'images/sm-angoo.png'
        }

    ]
    lvl1arr.sort(() => 0.5 - Math.random())
    const inttvv = document.getElementById('inttvv')
    const out2id = document.getElementById('out2id')
    const esmemlvl = document.getElementById('esmemlvl')
    const urscore = document.getElementById('urscore')
    let tiledelect = []
    let tiledelectId = []
    let wintile = 0;
    var alllightsnumber = 40;
    var numberoflights = 0;
    function addlights()
    {
        for (let i = 0; i < alllightsnumber; i++)
        {
            const imglight = document.createElement('img')
            imglight.setAttribute('id', 'imglight' + i)

            imglight.setAttribute('src', 'images/lightoff.png')
            
            imglight.setAttribute('width', 20)
            imglight.setAttribute('height', 20)
            
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
            if(i<numberoflights)
            {
                document.getElementById('imglight'+i).setAttribute('src','images/lighton.png')
            }
            else{
                document.getElementById('imglight'+i).setAttribute('src','images/lightoff.png')
            }
        }
        
    }
    function lvl1create() {
        numberoflights = 20;
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
    function lvl2create() {
        
        var itmp = 0;
        var ltmp = 0;
        var toptmp = '';
        var lefttmp = '';
        inttvv.setAttribute('style','width: 800px; height: 450px');
        
        
        
        onlights()
        for (let i = 0; i < 20; i++) {

            const divtile = document.createElement('div')
            divtile.classList.add("tilessty")
            divtile.classList.add("click")
            divtile.setAttribute('id', 'divtile' + i)
            divtile.setAttribute('data-id', i)
            divtile.addEventListener('click', tilesflip)
            divtile.setAttribute('width', hightwidth)
            divtile.setAttribute('height', hightwidth)
            itmp = Math.floor(i/5)
            ltmp = (hightwidth*i) - (itmp*hightwidth*5)
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
            tileback.setAttribute('src', lvl2arr[i].img)
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
    function lvl3create() {
        
        var itmp = 0;
        var ltmp = 0;
        var toptmp = '';
        var lefttmp = '';
        inttvv.setAttribute('style','width: 800px; height: 550px');
        
        
        
        onlights()
        for (let i = 0; i < 40; i++) {

            const divtile = document.createElement('div')
            divtile.classList.add("tilessty")
            divtile.classList.add("click")
            divtile.setAttribute('id', 'divtile' + i)
            divtile.setAttribute('data-id', i)
            divtile.addEventListener('click', tilesflip)
            divtile.setAttribute('width', hightwidth)
            divtile.setAttribute('height', hightwidth)
            itmp = Math.floor(i/8)
            ltmp = (hightwidth*i) - (itmp*hightwidth*8)
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
            tileback.setAttribute('src', lvl3arr[i].img)
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
        if(currentlvl==1)
        {
            tiledelect.push(lvl1arr[idtile].name);
        }else if(currentlvl==2)
        {
            tiledelect.push(lvl2arr[idtile].name);
        }else if(currentlvl==3)
        {
            tiledelect.push(lvl3arr[idtile].name);
        }else
        {

        }
        
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
                wintile++;
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
        
        onlights()
        tiledelect = []
        tiledelectId = []
        urscore.innerHTML = "Score:" + wintile + " Life: " +  numberoflights;
        if(currentlvl==1)
        {
            if (wintile == 4) {
                urscore.innerHTML = 'Nice Job, Level1 is done'
                gotolvl2();
            }
        }else if(currentlvl==2)
        {
            if (wintile == 14) {
                urscore.innerHTML = 'Nice Job, Level2 is done'
                gotolvl3();
            }
        }else if(currentlvl==3)
        {
            if (wintile == 34) {
                urscore.innerHTML = 'Nice Job, Level3 is done'
                
            }
        }
        
        if(numberoflights<=0)
        {
            resetgame();
            
        }
    }

    function resetgame()
    {
        
        urscore.innerHTML = 'Game Over. try again';
        wintile = 0;
        while (esmemlvl.firstChild) {
            esmemlvl.removeChild(esmemlvl.lastChild);
          }
          while (out2id.firstChild) {
            out2id.removeChild(out2id.lastChild);
          }

          currentlvl = 1;
          setTimeout(alert("Game over. Game will be reset for another try"), 500);
        lvl1arr.sort(() => 0.5 - Math.random())
        lvl1create();
    }
    function gotolvl2()
    {
        currentlvl = 2;
        
        urscore.innerHTML = "Score:" + wintile + " Life: " +  numberoflights
        
        while (esmemlvl.firstChild) {
            esmemlvl.removeChild(esmemlvl.lastChild);
          }
          
        setTimeout(alert("Nice try, Level 2 is starting now. get ready"), 500);
        
        lvl2arr.sort(() => 0.5 - Math.random())
        lvl2create();

    }
    function gotolvl3()
    {
        currentlvl = 3;
        
        urscore.innerHTML = "Score:" + wintile + " Life: " +  numberoflights
        
        while (esmemlvl.firstChild) {
            esmemlvl.removeChild(esmemlvl.lastChild);
          }
          

          setTimeout(alert("Nice try, Level 3 is starting now. get ready"), 500);
        lvl3arr.sort(() => 0.5 - Math.random())
        lvl3create();

    }

    lvl1create();

});