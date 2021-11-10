
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
        animation()
        return this.playerCards
    }

//give card to player if they press hit
    hit(deckIn)
    {
        let drawnCard = deckIn.draw()
        this.playerCards.push(drawnCard)
        console.log(this.playerCards)
        this.afterHit()
    }

    afterHit()
    {
        if(this.playerCards.length == 3)
        {
            let cardScore = this.playerCards[0].values + this.playerCards[1].values + this.playerCards[2].values
            console.log(cardScore)
            this.addAfterHit()

        }
        else if(this.playerCards.length == 4)
        {
            let cardScore = this.playerCards[0].values + this.playerCards[1].values + this.playerCards[2].values + 
            this.playerCards[3].values
            console.log(cardScore)
            this.addAfterHit2()
        }
        else if(this.playerCards.length == 5)
        {
            let cardScore = this.playerCards[0].values + this.playerCards[1].values + this.playerCards[2].values +
            this.playerCards[3].values + this.playerCards[4].values
            console.log(cardScore)
            this.addAfterHit3()
        }
        
    }

    addAfterHit()
    {
        let cardScore = this.playerCards[0].values + this.playerCards[1].values + 
        this.playerCards[2].values

        if(this.playerCards[0].symbols == "A")
        {
            if(cardScore>21)
            {
                this.playerCards[0].values = 1
                let cardScore = this.playerCards[0].values + this.playerCards[1].values
                console.log("player cards equal " + cardScore)
            }
        }
        else if(this.playerCards[1].symbols == "A")
        {
            if(cardScore>21)
            {
                this.playerCards[1].values = 1
                let cardScore = this.playerCards[0].values + this.playerCards[1].values
                console.log("player cards equal " + cardScore)
            }
        }
        else if(this.playerCards[2].symbols == "A")
        {
            if(cardScore>21)
            {
                this.playerCards[2].values = 1
                let cardScore = this.playerCards[0].values + this.playerCards[1].values + 
                this.playerCards[2].values
                console.log("player cards equal " + cardScore)
            }
        }
        else
        {
            console.log("player cards equal " + cardScore)
        }

    }

    addAfterHit2()
    {
        let cardScore = this.playerCards[0].values + this.playerCards[1].values + this.playerCards[2].values + 
        this.playerCards[3].values

        if(this.playerCards[0].symbols == "A")
        {
            if(cardScore>21)
            {
                this.playerCards[0].values = 1
                let cardScore = this.playerCards[0].values + this.playerCards[1].values
                console.log("player cards equal " + cardScore)
            }
        }
        else if(this.playerCards[1].symbols == "A")
        {
            if(cardScore>21)
            {
                this.playerCards[1].values = 1
                let cardScore = this.playerCards[0].values + this.playerCards[1].values
                console.log("player cards equal " + cardScore)
            }
        }
        else if(this.playerCards[2].symbols == "A")
        {
            if(cardScore>21)
            {
                this.playerCards[2].values = 1
                let cardScore = this.playerCards[0].values + this.playerCards[1].values + 
                this.playerCards[2].values
                console.log("player cards equal " + cardScore)
            }
        }
        else if(this.playerCards[3].symbols == "A")
        {
            if(cardScore>21)
            {
                this.playerCards[3].values = 1
                let cardScore = this.playerCards[0].values + this.playerCards[1].values + 
                this.playerCards[2].values + this.playerCards[3].values
                console.log("player cards equal " + cardScore)
            }
        }
        else
        {
            console.log("player cards equal " + cardScore)
        }

    }

    addAfterHit3()
    {
        let cardScore = this.playerCards[0].values + this.playerCards[1].values + this.playerCards[2].values +
        this.playerCards[3].values + this.playerCards[4].values

        if(this.playerCards[0].symbols == "A")
        {
            if(cardScore>21)
            {
                this.playerCards[0].values = 1
                let cardScore = this.playerCards[0].values + this.playerCards[1].values
                console.log("player cards equal " + cardScore)
            }
        }
        else if(this.playerCards[1].symbols == "A")
        {
            if(cardScore>21)
            {
                this.playerCards[1].values = 1
                let cardScore = this.playerCards[0].values + this.playerCards[1].values
                console.log("player cards equal " + cardScore)
            }
        }
        else if(this.playerCards[2].symbols == "A")
        {
            if(cardScore>21)
            {
                this.playerCards[2].values = 1
                let cardScore = this.playerCards[0].values + this.playerCards[1].values + 
                this.playerCards[2].values
                console.log("player cards equal " + cardScore)
            }
        }
                else if(this.playerCards[3].symbols == "A")
        {
            if(cardScore>21)
            {
                this.playerCards[3].values = 1
                let cardScore = this.playerCards[0].values + this.playerCards[1].values + 
                this.playerCards[2].values + this.playerCards[3].values
                console.log("player cards equal " + cardScore)
            }
        }
        else if(this.playerCards[4].symbols == "A")
        {
            if(cardScore>21)
            {
                this.playerCards[4].values = 1
                let cardScore = this.playerCards[0].values + this.playerCards[1].values + 
                this.playerCards[2].values + this.playerCards[3].values + this.playerCards[4]
                console.log("player cards equal " + cardScore)
            }
        }
        else
        {
            console.log("player cards equal " + cardScore)
        }

    }

    cardAdd()
    {
        let cardScore = this.playerCards[0].values + this.playerCards[1].values
        let cardScore2 = this.dealerCards[0].values + this.dealerCards[1].values

        if(this.playerCards[0].symbols == "A")
        {
            if(cardScore>21)
            {
                this.playerCards[0].values = 1
                let cardScore = this.playerCards[0].values + this.playerCards[1].values
                console.log("player cards equal " + cardScore)
            }
        }
        else if(this.playerCards[1].symbols == "A")
        {
            if(cardScore>21)
            {
                this.playerCards[1].values = 1
                let cardScore = this.playerCards[0].values + this.playerCards[1].values
                console.log("player cards equal " + cardScore)
            }
        }
        else
        {
            console.log("player cards equal " + cardScore)
        }


        if(this.dealerCards[0].symbols == "A")
        {
            if(cardScore2>21)
            {
                this.dealerCards[0].values = 1
                let cardScore2 = this.dealerCards[0].values + this.dealerCards[1].values
                console.log("dealer cards equal " + cardScore2)
            }
        }
        else if(this.dealerCards[1].symbols == "A")
        {
            if(cardScore2>21)
            {
                this.dealerCards[1].values = 1
                let cardScore2 = this.dealerCards[0].values + this.dealerCards[1].values
                console.log("dealer cards equal " + cardScore2)
            }
        }
        else
        {
            console.log("dealer cards equal " + cardScore2)
        }


        if(cardScore>21)
        {
            pBust()
        }

        if(cardScore2>21)
        {
            dBust()
        }
    }
}



class Game
{

    pBust()
    {
        //player loses, money bet is lost
    }

    dBust()
    {
        //dealer loses, money bet is doubled and given to the player
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

        let b = new Bet(1000,0)

        let buttonHolder = document.createElement("div")
        buttonHolder.classList.add("BTNHLDR")
        document.body.appendChild(buttonHolder)

        let btn100=document.createElement("btn")
        buttonHolder.appendChild(btn100)
        btn100.classList.add("butt1")
        btn100.innerHTML="100+"
        btn100.onclick = function clicked()
        {
            b.betAmount = b.betAmount + 100
            console.log(b.betAmount)
            document.getElementById("betonscreen").innerHTML = b.betAmount
        }


        let btn500=document.createElement("btn")
        buttonHolder.appendChild(btn500)
        btn500.classList.add("butt2")
        btn500.innerHTML="500+"
        btn500.onclick = function clicked()
        {
            b.betAmount = b.betAmount + 500
            console.log(b.betAmount)
            document.getElementById("betonscreen").innerHTML = b.betAmount
        }

        let btn1000=document.createElement("btn")
        buttonHolder.appendChild(btn1000)
        btn1000.classList.add("butt3")
        btn1000.innerHTML="1000+"
        btn1000.onclick = function clicked()
        {
            b.betAmount = b.betAmount + 1000
            console.log(b.betAmount)
            document.getElementById("betonscreen").innerHTML = b.betAmount
        }

        let rst=document.createElement("btn")
        buttonHolder.appendChild(rst)
        rst.classList.add("butt4")
        rst.innerHTML="Reset"
        rst.onclick = function clicked()
        {
            b.betAmount = b.betAmount - b.betAmount
            console.log(b.betAmount)
            document.getElementById("betonscreen").innerHTML = b.betAmount
        }

        let allIn=document.createElement("btn")
        buttonHolder.appendChild(allIn)
        allIn.classList.add("butt5")
        allIn.innerHTML="All In"
        allIn.onclick = function clicked()
        {
            b.betAmount = b.money
            console.log(b.betAmount)
            document.getElementById("betonscreen").innerHTML = b.betAmount
        }

        //holds onscreen number

        let moneyHolder = document.createElement("div")
        moneyHolder.classList.add("money")
        document.body.appendChild(moneyHolder)

        let moneyOnScreen=document.createElement("h1")
        moneyHolder.appendChild(moneyOnScreen)
        moneyOnScreen.classList.add("money2")
        moneyOnScreen.innerHTML=b.money

        let betOnScreen=document.createElement("h1")
        betOnScreen.id="betonscreen"
        buttonHolder.appendChild(betOnScreen)
        betOnScreen.classList.add("bet2")
        betOnScreen.innerHTML=b.betAmount


        if(b.betAmount>b.money)
        {
            //stop it from working somehow bro IDK
        }

    }
}



const p = new Player("player")
const dl = new Player("Dealer")

const b = new Bet()

b.setUp()

