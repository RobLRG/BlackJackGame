
class Card
{
    suits
    symbols
    values
    constructor(suits,symbols,values)
    {
        this.suits=suits
        this.symbols=symbols
        this.values=values
    }

    //turns name symbols to number values
    toNum()
    {
        
        // if(d.cards.symbols == "A")
        // {
        //     d.symbols == 11
        // }
        // else if(symbols == "J" || "Q" || "K")
        // {
        //     symbols == 10
        // }
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
        let symbols=["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
        let values=[11,2,3,4,5,6,7,8,9,10,10,10,10]
        
        for(let i = 0;i<suits.length;i++)
        {
            for(let j = 0;j<symbols.length;j++)
            {
                this.cards.push(new Card(suits[i], symbols[j], values[j]))
            }
        }
        
    }

    shuffle() 
    {
        for (let i = 0; i < 1000; i++) 
        {
            let l = Math.floor((Math.random() * this.cards.length));
            let k = Math.floor((Math.random() * this.cards.length));
            let t = this.cards[l];
            this.cards[l] = this.cards[k];
            this.cards[k] = t;
        }
    }

    draw()
    {
        let drawnCard = this.cards.pop()
        return drawnCard
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
        this.dealerCards = []
        this.playerStatus = "" //betting, hitting, sticking
    }

//gives player 2 cards to start
    startingHand(deckIn)
    {   
        d.shuffle()
        for(let i = 0;i<2;i++)
        {        
            let drawnCard = deckIn.draw()
            this.playerCards.push(drawnCard)
        }
        console.log(this.playerCards)
        
        for(let i = 0;i<2;i++)
        {        
            let drawnCard = deckIn.draw()
            this.dealerCards.push(drawnCard)
        }
        console.log(this.dealerCards)

        this.cardAdd()
        animation("playerCards")
        animation("dealerCards")
        b.finish()
        return this.playerCards
    }

//give card to player if they press hit
    hit(deckIn)
    {
        let drawnCard = deckIn.draw()
        this.playerCards.push(drawnCard)
        console.log(this.playerCards)
        let playerScore = this.getHandScore("playerCards")
        let dealerScore = this.getHandScore("dealerCards")

        if(playerScore>21)
        {
            g.pBust()
        }
        else if (playerScore>dealerScore)
        {
            g.pWin()
        }

        if(dealerScore>21)
        {
            g.dBust()
        }
        // else if (dealerScore>playerScore)
        // {
        //     g.dWin()
        // }
        hitAnim("playerCards")
    }

    getHandScore(deck)
    {
        let handScore = this[deck].reduce(function (total,card){
            return total + card.values
        },0)

        if(this[deck].find(c => c.symbols == "A") && handScore>21)
        {
            handScore = handScore - 10
        }
        console.log(handScore)
        return handScore
    }


    cardAdd()
    {
        let cardScore = this.playerCards.reduce(function (total,card){
            return total + card.values
        },0)
        let cardScore2 = this.dealerCards.reduce(function (total,card){
            return total + card.values
        },0)
        console.log(cardScore)
        console.log(cardScore2)

    }
}

class Game
{

    pBust()
    {
        //player loses, money that was bet is lost
        alert("you lose")
    }

    dBust()
    {
        //dealer loses, money that was bet is doubled and given to the player
        alert("Dealer Bust")
    }

    pWin()
    {
        let winnings = q.betAmount + q.betAmount
        q.betAmount = 0
        document.getElementById("betonscreen").innerHTML = q.betAmount
        q.money = q.money + winnings
        document.getElementById("moneyonscreen").innerHTML = q.money
        console.log("you won: " +  winnings)
        alert("you Win")
    }

    dWin()
    {
        alert("dealer Wins")
    }
}



class Bet
{
    money
    betAmount
    constructor(money,betAmount)
    {
        this.money = money
        this.betAmount = betAmount
    }

    setUp()
    {

        let buttonHolder = document.createElement("div")
        buttonHolder.classList.add("BTNHLDR")
        document.body.appendChild(buttonHolder)

        let btn100=document.createElement("btn")
        buttonHolder.appendChild(btn100)
        btn100.classList.add("butt1")
        btn100.innerHTML="100+"
        btn100.onclick = function clicked()
        {
            q.betAmount = q.betAmount + 100
            console.log(q.betAmount)
            document.getElementById("betonscreen").innerHTML = q.betAmount
        }


        let btn500=document.createElement("btn")
        buttonHolder.appendChild(btn500)
        btn500.classList.add("butt2")
        btn500.innerHTML="500+"
        btn500.onclick = function clicked()
        {
            q.betAmount = q.betAmount + 500
            console.log(q.betAmount)
            document.getElementById("betonscreen").innerHTML = q.betAmount
        }

        let btn1000=document.createElement("btn")
        buttonHolder.appendChild(btn1000)
        btn1000.classList.add("butt3")
        btn1000.innerHTML="1000+"
        btn1000.onclick = function clicked()
        {
            q.betAmount = q.betAmount + 1000
            console.log(q.betAmount)
            document.getElementById("betonscreen").innerHTML = q.betAmount
        }

        let rst=document.createElement("btn")
        buttonHolder.appendChild(rst)
        rst.classList.add("butt4")
        rst.innerHTML="Reset"
        rst.onclick = function clicked()
        {
            q.betAmount = q.betAmount - q.betAmount
            console.log(q.betAmount)
            document.getElementById("betonscreen").innerHTML = q.betAmount
        }

        let allIn=document.createElement("btn")
        buttonHolder.appendChild(allIn)
        allIn.classList.add("butt5")
        allIn.innerHTML="All In"
        allIn.onclick = function clicked()
        {
            q.betAmount = q.money
            console.log(q.betAmount)
            document.getElementById("betonscreen").innerHTML = q.betAmount
        }

        //holds onscreen number

        let moneyHolder = document.createElement("div")
        moneyHolder.classList.add("money")
        document.body.appendChild(moneyHolder)

        let moneyOnScreen=document.createElement("h1")
        moneyOnScreen.id="moneyonscreen"
        moneyHolder.appendChild(moneyOnScreen)
        moneyOnScreen.classList.add("money2")
        moneyOnScreen.innerHTML=q.money

        let betOnScreen=document.createElement("h1")
        betOnScreen.id="betonscreen"
        buttonHolder.appendChild(betOnScreen)
        betOnScreen.classList.add("bet2")
        betOnScreen.innerHTML=q.betAmount


        if(q.betAmount>q.money)
        {
            //stop it from working somehow bro IDK
        }

    }

    finish()
    {
        q.money = q.money - q.betAmount
        document.getElementById("moneyonscreen").innerHTML = q.money
        // p.playerStatus = "hitting"
        console.log("current bet: " + q.betAmount)
        //console.log(playerStatus)
    }
}



let q = new Bet(1000,0)
const g = new Game()
const p = new Player("player")
const dl = new Player("Dealer")

const b = new Bet()

b.setUp()

