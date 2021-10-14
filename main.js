const player1 = {
    name: 'Ivan',
    hp: 85,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['saber', 'revolver'],
    attack: function () {
        console.log(player1.name + 'Fight...')
    }
}

const player2 = {
    name: 'Iryna',
    hp: 10,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['knife', 'pistol'],
    attack: function () {
        console.log(player2.name + 'Fight...')
    }
}

function createPlayer(playerType, player) {
    const $player = document.createElement('div')
    $player.className=playerType

    const $progressbar = document.createElement('div')
    $progressbar.className='progressbar'
    $player.appendChild($progressbar)

    const $character = document.createElement('div')
    $character.className='character'
    $player.appendChild($character)
    
    const $life = document.createElement('div')
    $life.className='life'
    $progressbar.appendChild($life)
    $life.style.width = player.hp +'%'

    const $name = document.createElement('div')
    $name.className='name'
    $progressbar.appendChild($name)
    $name.textContent = player.name

    const $img = document.createElement('img')
    $img.className='img'
    $character.appendChild($img)
    $img.src=player.img 

    const $areans = document.querySelector('.arenas')
    $areans.appendChild($player)
}

createPlayer('player1',player1)
createPlayer('player2',player2)