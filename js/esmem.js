document.addEventListener('DOMContentLoaded', () => {

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
    //lvl1arr.sort(() => 0.5 - Math.random())
    const esmemlvl = document.querySelector('.esmemlvl')
    const urscore = document.getElementById('urscore')
    let tiledelect = []
    let tiledelectId = []
    let wintile = []

    function lvl1create() {
        for (let i = 0; i < 8; i++) {

            const divtile = document.createElement('div')
            divtile.classList.add("tilessty")
            divtile.classList.add("click")
            divtile.setAttribute('id', 'divtile' + i)
            divtile.setAttribute('data-id', i)
            divtile.addEventListener('click', tilesflip)
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
                wintile.push(tiledelect)
            } else {
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
        
        tiledelect = []
        tiledelectId = []
        urscore.innerHTML = wintile.length
        if (wintile.length === lvl1arr.length / 2) {
            urscore.innerHTML = 'Nice Job, Level1 is done'
        }
    }



    lvl1create();

});