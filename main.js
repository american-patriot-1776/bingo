const ASSETS = {
    audio: {
        winner:   'audio/winner.wav'
    },
    images: {
        african:  'img/african.jpg',
        bald:     'img/bald.jpg',
        bingo:    'img/bingo.webp',
        bridge:   'img/bridge.jpg',
        cinema:   'img/cinema.jpg',
        confetti: 'img/confetti.webp',
        cozy:     'img/cozy.jpg',
        cupcake:  'img/cupcake.jpg',
        dementia: 'img/dementia.jpg',
        dennys:   'img/dennys.jpg',
        doc:      'img/doc.jpg',
        forsen:   'img/forsen.jpg',
        gaming:   'img/gaming.jpg',
        green:    'img/green.jpg',
        happy:    'img/happy.webp',
        icon:     'img/icon.jpg',
        india:    'img/india.jpg',
        japan:    'img/japan.jpg',
        jar:      'img/jar.jpg',
        libtard:  'img/libtard.jpg',
        lick:     'img/lick.jpg',
        look:     'img/look.jpg',
        mark:     'img/mark.jpg',
        peaky:    'img/peaky.jpg',
        remake:   'img/remake.jpg',
        stare:    'img/stare.jpg',
        swear:    'img/swear.jpg',
        troll:    'img/troll.jpg',
        walk:     'img/walk.jpg',
        waltuh:   'img/waltuh.jpg',
        x:        'img/x.png'
    }
}

const LIST = [
    {
        text: 'AFRICAN HERITAGE',
        image: ASSETS.images.african
    },
    {
        text: 'BALD WOMAN',
        image: ASSETS.images.bald
    },
    {
        text: 'STREAMERS IN GAME ANNOUNCEMENT',
        image: ASSETS.images.bridge
    },
    {
        text: 'MOVIE TRAILER',
        image: ASSETS.images.cinema
    },
    {
        text: '3 COZY GAMES',
        image: ASSETS.images.cozy
    },
    {
        text: 'GOOFY ASS OUTFIT',
        image: ASSETS.images.cupcake
    },
    {
        text: 'CELEBRITY WITH DEMENTIA',
        image: ASSETS.images.dementia
    },
    {
        text: 'WASHED UP BAND',
        image: ASSETS.images.dennys
    },
    {
        text: 'KOJIMA ON STAGE... AGAIN',
        image: ASSETS.images.doc
    },
    {
        text: '"GAMING HAS NEVER BEEN BETTER"',
        image: ASSETS.images.gaming
    },
    {
        text: 'TECHNICAL DIFFICULTIES',
        image: ASSETS.images.green
    },
    {
        text: 'INDIAN IMMIGRANT',
        image: ASSETS.images.india
    },
    {
        text: 'FEUDAL JAPAN',
        image: ASSETS.images.japan
    },
    {
        text: 'WEEB SHIT',
        image: ASSETS.images.jar
    },
    {
        text: 'BLUE HAIRED HOMOSEXUAL',
        image: ASSETS.images.libtard
    },
    {
        text: 'SYDNEY GOODMANS THIGHS ARE SHOWN',
        image: ASSETS.images.lick
    },
    {
        text: 'SIDE BOOB',
        image: ASSETS.images.look
    },
    {
        text: 'AI DOGSHIT',
        image: ASSETS.images.mark
    },
    {
        text: 'THE MUPPETS Ớ̶̮̦͙̖̙̦͚̟̜̭̤̜̹̎̂̉͒̄̊́̕͜͜͝Ḩ̷̥̤͚̟͈̻̩̻̼̙͕̌̍̒̾͑̈́̈̀̑̋͜ ̵̼̈G̶̢̨̦̘͙̙̞̹͔̼̦̓̾̃̈́͘O̶̞̾̍̄̍̐͠D̵͚͔͕̺̬̙̗̈́̀ͅ ̸̖̼͖̭̤̳̟̘͕̙̦̯̝̌̆͗͛̿̎̊̀̽̍̽̓̓̌M̶̭͛̈́̏̊Ä̷̡͎͕͓͇̹́̈́̊̕K̴͓̯̫̗͕̋͗͗͛̃̀̈́̓É̵̪̹́̃͋̅̚͝ ̶̢̲͒̃̈͌̅͋͒͛̂̍̊̂̈́͘͝I̵̧̡̧͎̗̹̝̘̟̤̱͔̙̼̗͒̇́̋̽̚Ṭ̸̛̛̥̟͙̝̹̅͂̏̿͜͜ ̶̛̫̞̻͖̠͔̗̾̐͆̓̓́͋̈̍̊͐̓̆ͅS̴̢̡̮̖̥̟̫̆T̴̢̛̛̬̰͚̼͙͔͎̬̐̾̀͌̋͌͂̚͜͝O̷̡̢̨̗̥̗͕̫̫̱̐̀̉P̶̬͚̙̦̙̥͍͈̈̊̈́̇̊̚͜',
        image: ASSETS.images.peaky
    },
    {
        text: '3 REMASTERS/REMAKES',
        image: ASSETS.images.remake
    },
    {
        text: 'SWEAR WORD',
        image: ASSETS.images.swear
    },
    {
        text: 'SECURITY INCIDENT',
        image: ASSETS.images.troll
    },
    {
        text: 'WALK THE WRONG WAY ON STAGE',
        image: ASSETS.images.walk
    },
    {
        text: 'GAME FROM LAST GAME AWARDS SHOWS UP AGAIN WITH NO RELEASE DATE STILL',
        image: ASSETS.images.waltuh
    }
]

const FREE_SPACE = {
    text: 'JEWISH PROPAGANDA (FREE SPACE)',
    image: ASSETS.images.forsen
}

let GAME_BOARD





async function init () {
    await loadAssets()

    let list = seededList()

    if (!list) {
        list = shuffleList()
    }

    GAME_BOARD = formatList(list)

    drawBoard()

    toggleDisplay('board')
}





async function loadAssets () {
    const promises = []

    for (const value of Object.values(ASSETS.images)) {
        const promise = getImage(value)

        promises.push(promise)
    }

    for (const value of Object.values(ASSETS.audio)) {
        const promise = getAudio(value)

        promises.push(promise)
    }

    await Promise.all(promises)
}





function getImage (url) {
    return new Promise((resolve) => {
        const image = new Image()

        image.onload = () => resolve()

        image.src = url
    })
}





function getAudio (url) {
    return new Promise((resolve) => {
        const audio = new Audio()

        audio.oncanplaythrough  = () => resolve()

        audio.src = url

        audio.load()
    })
}





function seededList () {
    const params = new URLSearchParams(location.search)

    const seed = params.get('seed')

    if (!seed) {
        return
    }

    let decoded

    try {
        decoded = JSON.parse(atob(seed))
    } catch (error) {
        return
    }

    const name = document.getElementById('name')

    name.innerText = `${ decoded.name } `

    const list = []

    for (const index of decoded.indices) {
        const option = LIST[index]

        list.push({ ...option })
    }

    appendFreeSpace(list)

    return list
}





function shuffleList () {
    const list = deepCopy(LIST)

    let currentIndex = list.length

    while (currentIndex) {
        let randomIndex = Math.floor(Math.random() * currentIndex)

        currentIndex--

        [list[currentIndex], list[randomIndex]] = [list[randomIndex], list[currentIndex]]
    }

    appendFreeSpace(list)

    return list
}





function appendFreeSpace (list) {
    list.splice(12, 0, { ...FREE_SPACE })
}





function deepCopy (value) {
    return JSON.parse(JSON.stringify(value))
}





function formatList (list) {
    let rows = []

    let row = []

    let count = 0

    for (const item of list) {
        count++

        row.push(item)

        if (count === 5) {
            rows.push(row)

            row = []

            count = 0
        }
    }

    return rows
}





function drawBoard () {
    const board = document.getElementById('board')

    for (const [rowIndex, list] of GAME_BOARD.entries()) {
        const lastRow = rowIndex === GAME_BOARD.length -1

        const row = document.createElement('div')

        row.className = 'row'

        for (const [cellIndex, item] of list.entries()) {
            const lastCell = cellIndex === list.length - 1

            const cell = document.createElement('div')

            cell.dataset.x = cellIndex
            cell.dataset.y = rowIndex

            if (rowIndex === cellIndex) {
                cell.dataset.topDown = 'true'
            }

            if (rowIndex + cellIndex === 4) {
                cell.dataset.downTop = 'true'
            }

            cell.style.cssText = `
                background-image: url(${ item.image });
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
            `

            const classes = ['cell', 'border-top', 'border-left']

            if (lastRow) {
                classes.push('border-bottom')
            }

            if (lastCell) {
                classes.push('border-right')
            }

            cell.classList.add(...classes)

            const span = document.createElement('span')

            span.className = 'cell-text'
            span.innerText = item.text

            cell.appendChild(span)

            row.appendChild(cell)
        }

        board.appendChild(row)
    }
}





function onBoardClick (event) {
    const { target } = event

    updateSelectState(target.dataset)

    target.dataset.selected ? deselectCell(target) : selectCell(target)
}





function updateSelectState (dataset) {
    const x = Number(dataset.x)
    const y = Number(dataset.y)

    const cell = GAME_BOARD[y][x]

    cell.selected = !cell.selected
}





function selectCell (target) {
    target.dataset.selected = 'true'

    const div = document.createElement('div')

    div.className = 'overlay'
    div.dataset.overlay = 'true'

    target.appendChild(div)

    const img = document.createElement('img')

    img.src = ASSETS.images.x
    img.className = 'overlay-x'
    img.dataset.overlay = 'true'
    
    target.appendChild(img)

    checkForWin(target.dataset)
}





function deselectCell (target) {
    const overlayElements = target.querySelectorAll('[data-overlay]')

    for (const overlayElement of overlayElements) {
        overlayElement.remove()
    }

    delete target.dataset.selected
}





function checkForWin (dataset) {
    let passed

    const checks = [checkForHorizontal, checkForVertical, checkForTopDownDiagnal, checkForDownTopDiagnal]

    for (const check of checks) {
        passed = check(dataset)

        if (passed) {
            break
        }
    }

    if (!passed) {
        return
    }

    const bingoList = document.getElementById('bingo-list')

    bingoList.innerHTML = ''

    for (const entry of passed) {
        const h1 = document.createElement('h1')

        h1.innerText = entry

        bingoList.appendChild(h1)
    }

    document.body.classList.add('confetti')

    toggleDisplay('bingo')

    const audio = new Audio('audio/winner.wav')

    audio.play()
}





function checkForHorizontal (dataset) {
    const y = Number(dataset.y)

    const list = []

    for (let i = 0; i < 5; i++) {
        const cell = GAME_BOARD[y][i]

        list.push(cell.text)

        if (!cell.selected) {
            return
        }
    }

    return list
}





function checkForVertical (dataset) {
    const x = Number(dataset.x)
    
    const list = []

    for (let i = 0; i < 5; i++) {
        const cell = GAME_BOARD[i][x]

        list.push(cell.text)

        if (!cell.selected) {
            return
        }
    }

    return list
}





function checkForTopDownDiagnal (dataset) {
    if (!dataset.topDown) {
        return false
    }

    const list = []

    for (let i = 0; i < 5; i++) {
        const cell = GAME_BOARD[i][i]

        list.push(cell.text)

        if (!cell.selected) {
            return
        }
    }

    return list
}





function checkForDownTopDiagnal (dataset) {
    if (!dataset.downTop) {
        return false
    }

    const list = []

    for (let x = 0, y = 4; x < 5; x++, y--) {
        const cell = GAME_BOARD[y][x]

        list.push(cell.text)

        if (!cell.selected) {
            return
        }
    }

    return list
}





function toggleDisplay (key) {
    const displayElements = document.querySelectorAll('[data-display]')

    for (const displayElement of displayElements) {
        const match = displayElement.dataset.display === key

        if (match) {
            displayElement.classList.remove('hidden')

            continue
        }

        displayElement.classList.add('hidden')
    }
}





function backToBoard () {
    document.body.classList.remove('confetti')
    
    toggleDisplay('board')
}





function generateLink (name) {
    const seen = new Set()

    const indices = []

    while (seen.size !== LIST.length) {
        const index = Math.floor(Math.random() * LIST.length)

        if (seen.has(index)) {
            continue
        }

        seen.add(index)

        indices.push(index)
    }

    const data = {
        name,
        indices
    }

    const encoded = btoa(JSON.stringify(data))

    const href = location.href.split('?')[0]

    const url = `${ href }?seed=${ encoded }`

    console.log(url)
}





if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}
