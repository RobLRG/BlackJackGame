
class Card
{
    suits
    values
    constructor(suits,values)
    {
        this.suits=suits
        this.values=values
    }
    
    display()
    {

    // if(this.suit=`♥️` || `♦️`)
    // {
    //     this.classList.add("red")
    // }
    // else if(this.suit=`♠️` || `♣️`)
    // {
    //     this.classList.add("black")
    // }

    let cardElement = document.createElement("div")
    cardElement.classList.add("card")
    document.body.appendChild(cardElement)

    let topnum=document.createElement("h1")
    cardElement.appendChild(topnum)
    topnum.classList.add("topnum")
    topnum.innerHTML=this.values

    let botnum=document.createElement("h1")
    cardElement.appendChild(botnum)
    botnum.classList.add("botnum")
    botnum.innerHTML=this.values

    let suitDisplay=document.createElement("h1")
    cardElement.appendChild(suitDisplay)
    suitDisplay.classList.add("suit")
    suitDisplay.innerHTML=this.suits

    }
}


class Deck
{   
    constructor()
    {
        this.cards = []
    }

    create()
    {

        let suits=["♥️","♠️","♦️","♣️"]
        let values=["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
        
        for(let i = 0;i<suits.length;i++)
        {
            // let currentSuit = suits[i]
            for(let j = 0;j<values.length;j++)
            {

                // let currentValue = values[j]
                this.cards.push(new Card(suits[i], values[j]))
            }
        }
        
    }

    shuffle() {
        let location1, location2, tmp;
        for (let i = 0; i < 1000; i++) {
            location1 = Math.floor((Math.random() * this.cards.length));
            location2 = Math.floor((Math.random() * this.cards.length));
            tmp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
         }
     }

    hit()
    {
        this.players.playerCards = d.cards.pop()
    }

}


const d = new Deck()
d.create()
console.log(d.cards)

class Player
{
    constructor(name)
    {
        this.playerName = name
        this.playerCards = []
    }
}

class Board {
    constructor() 
    {
        this.cardsInMiddle = [];
        this.players = [];
    }
    start(dealer, player)
    {
        this.players.push(new Player(dealer));
        this.players.push(new Player(player));
        let d = new Deck();
        d.create();
        d.shuffle();    
        this.players[0].playerCards = d.cards.slice(0, 2);
        this.players[1].playerCards = d.cards.slice(3, 5);
    }
}

let gameBoard = new Board();
gameBoard.start('Dealer', 'Player');
console.log(gameBoard.players);

const c = new Card()
c.display()
