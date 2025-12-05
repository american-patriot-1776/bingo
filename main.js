let LIST = [
    {
        text: 'FEUDAL JAPAN',
        image: 'japan.jpg'
    },
    {
        text: 'BALD WOMAN',
        image: 'bald.jpg'
    },
    {
        text: 'CELEBRITY WITH DEMENTIA',
        image: 'dementia.jpg'
    },
    {
        text: 'BLUE HAIRED HOMOSEXUAL',
        image: 'libtard.jpg'
    },
    {
        text: 'INDIAN IMMIGRANT',
        image: 'india.jpg'
    },
    {
        text: '3 COZY GAMES',
        image: 'cozy.jpg'
    },
    {
        text: 'TECHNICAL DIFFICULTIES',
        image: 'green.jpg'
    },
    {
        text: 'GOOFY ASS OUTFIT',
        image: 'cupcake.jpg'
    },
    {
        text: 'AI DOGSHIT',
        image: 'mark.jpg'
    },
    {
        text: '3 REMASTERS/REMAKES',
        image: 'remake.jpg'
    },
    {
        text: 'SECURITY INCIDENT',
        image: 'troll.jpg'
    },
    {
        text: 'SIDE BOOB',
        image: 'look.jpg'
    },
    {
        text: 'WEEB SHIT',
        image: 'jar.jpg'
    },
    {
        text: 'WALK THE WRONG WAY ON STAGE',
        image: 'walk.jpg'
    },
    {
        text: 'WASHED UP BAND',
        image: 'dennys.jpg'
    },
    {
        text: 'THE MUPPETS Ớ̶̮̦͙̖̙̦͚̟̜̭̤̜̹̎̂̉͒̄̊́̕͜͜͝Ḩ̷̥̤͚̟͈̻̩̻̼̙͕̌̍̒̾͑̈́̈̀̑̋͜ ̵̼̈G̶̢̨̦̘͙̙̞̹͔̼̦̓̾̃̈́͘O̶̞̾̍̄̍̐͠D̵͚͔͕̺̬̙̗̈́̀ͅ ̸̖̼͖̭̤̳̟̘͕̙̦̯̝̌̆͗͛̿̎̊̀̽̍̽̓̓̌M̶̭͛̈́̏̊Ä̷̡͎͕͓͇̹́̈́̊̕K̴͓̯̫̗͕̋͗͗͛̃̀̈́̓É̵̪̹́̃͋̅̚͝ ̶̢̲͒̃̈͌̅͋͒͛̂̍̊̂̈́͘͝I̵̧̡̧͎̗̹̝̘̟̤̱͔̙̼̗͒̇́̋̽̚Ṭ̸̛̛̥̟͙̝̹̅͂̏̿͜͜ ̶̛̫̞̻͖̠͔̗̾̐͆̓̓́͋̈̍̊͐̓̆ͅS̴̢̡̮̖̥̟̫̆T̴̢̛̛̬̰͚̼͙͔͎̬̐̾̀͌̋͌͂̚͜͝O̷̡̢̨̗̥̗͕̫̫̱̐̀̉P̶̬͚̙̦̙̥͍͈̈̊̈́̇̊̚͜',
        image: 'peaky.jpg'
    },
    {
        text: 'GAME FROM LAST GAME AWARDS SHOWS UP AGAIN WITH NO RELEASE DATE STILL',
        image: 'waltuh.jpg'
    },
    {
        text: 'SYDNEY GOODMANS THIGHS ARE SHOWN',
        image: 'lick.jpg'
    },
    {
        text: 'STREAMERS IN GAME ANNOUNCEMENT',
        image: 'bridge.jpg'
    },
    {
        text: 'AFRICAN HERITAGE',
        image: 'african.jpg'
    },
    {
        text: 'KOJIMA ON STAGE... AGAIN',
        image: 'doc.jpg'
    },
    {
        text: 'MOVIE TRAILER',
        image: 'cinema.jpg'
    },
    {
        text: 'SWEAR WORD',
        image: 'swear.jpg'
    },
    {
        text: '"GAMING HAS NEVER BEEN BETTER"',
        image: 'gaming.jpg'
    }
]

const FREE_OPTION = {
    text: 'JEWISH PROPAGANDA (FREE SPACE)',
    image: 'forsen.jpg'
}





function init () {
    shuffleList()

    formatList()

    drawBoard()
}





function shuffleList () {
    let currentIndex = LIST.length

    while (currentIndex) {
        let randomIndex = Math.floor(Math.random() * currentIndex)

        currentIndex--

        [LIST[currentIndex], LIST[randomIndex] ] = [ LIST[randomIndex], LIST[currentIndex]]
    }

    LIST.splice(12, 0, FREE_OPTION)
}





function formatList () {
    let rows = []

    let row = []

    let count = 0

    for (const item of LIST) {
        count++

        row.push(item)

        if (count === 5) {
            rows.push(row)

            row = []

            count = 0
        }
    }

    LIST = rows
}





function drawBoard () {
    const board = document.getElementById('board')

    for (const [rowIndex, list] of LIST.entries()) {
        const lastRow = rowIndex === LIST.length -1

        const row = document.createElement('div')

        row.className = 'row'

        for (const [cellIndex, item] of list.entries()) {
            const lastCell = cellIndex === list.length - 1

            const cell = document.createElement('div')

            cell.dataset.x = cellIndex
            cell.dataset.y = rowIndex

            const url = `img/${ item.image }`

            cell.style.cssText = `
                background-image: url(${ url });
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

    const cell = LIST[ y ][ x ]

    cell.selected = !cell.selected
}





function selectCell (target) {
    target.dataset.selected = 'true'

    const div = document.createElement('div')

    div.className = 'overlay'
    div.dataset.overlay = 'true'

    target.appendChild(div)

    const img = document.createElement('img')

    img.src = 'img/x.png'
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
    const x = Number(dataset.x)
    const y = Number(dataset.y)

    let passed

    const checks = [ checkForHorizontal, checkForVertical, checkForTopDownDiagnal, checkForDownTopDiagnal ]

    for (const check of checks) {
        passed = check(x, y)

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

    toggleDisplay('bingo')

    const audio = new Audio('audio/winner.wav')
    audio.play()
}





function checkForHorizontal (x, y) {
    const list = []

    for (let i = 0; i < 5; i++) {
        const cell = LIST[ y ][ i ]

        list.push(cell.text)

        if (!cell.selected) {
            return
        }
    }

    return list
}





function checkForVertical (x, y) {
    const list = []

    for (let i = 0; i < 5; i++) {
        const cell = LIST[ i ][ x ]

        list.push(cell.text)

        if (!cell.selected) {
            return
        }
    }

    return list
}





function checkForTopDownDiagnal () {
    const list = []

    for (let i = 0; i < 5; i++) {
        const cell = LIST[ i ][ i ]

        list.push(cell.text)

        if (!cell.selected) {
            return
        }
    }

    return list
}





function checkForDownTopDiagnal () {
    const list = []

    for (let x = 0, y = 4; x < 5; x++, y--) {
        const cell = LIST[ y ][ x ]

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





if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}
