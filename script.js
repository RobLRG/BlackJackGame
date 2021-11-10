
function animation()
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
    topnum.innerHTML=p.playerCards.cards

    let botnum=document.createElement("h1")
    cardElement.appendChild(botnum)
    botnum.classList.add("botnum")
    botnum.innerHTML=p.playerCards.cards

    let suitDisplay=document.createElement("h1")
    cardElement.appendChild(suitDisplay)
    suitDisplay.classList.add("suit")
    suitDisplay.innerHTML=p.playerCards.cards

    // console.log(p.playerCards.values)
}

