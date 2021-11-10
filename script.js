
function animation(crdInfo)
{
        // if(this.suit=`♥️` || `♦️`)
    // {
    //     this.classList.add("red")
    // }
    // else if(this.suit=`♠️` || `♣️`)
    // {
    //     this.classList.add("black")
    // }

    for(let i = 0;i<p[crdInfo].length;i++)
    {
        let cardInfo = p[crdInfo][i].symbols
        let cardInfoS = p[crdInfo][i].suits
        
        let cardElement = document.createElement("div")
        cardElement.classList.add("card")
        document.body.appendChild(cardElement)
    
        let topnum=document.createElement("h1")
        cardElement.appendChild(topnum)
        topnum.classList.add("topnum")
        topnum.innerHTML=cardInfo
    
        let botnum=document.createElement("h1")
        cardElement.appendChild(botnum)
        botnum.classList.add("botnum")
        botnum.innerHTML=cardInfo
    
        let suitDisplay=document.createElement("h1")
        cardElement.appendChild(suitDisplay)
        suitDisplay.classList.add("suit")
        suitDisplay.innerHTML=cardInfoS
    }

    // console.log(p.playerCards.values)
}


function hitAnim(crdInfo)
{
    let cardInfo = p[crdInfo].symbols
    let cardInfoS = p[crdInfo].suits
    
    let cardElement = document.createElement("div")
    cardElement.classList.add("card")
    document.body.appendChild(cardElement)

    let topnum=document.createElement("h1")
    cardElement.appendChild(topnum)
    topnum.classList.add("topnum")
    topnum.innerHTML=cardInfo

    let botnum=document.createElement("h1")
    cardElement.appendChild(botnum)
    botnum.classList.add("botnum")
    botnum.innerHTML=cardInfo

    let suitDisplay=document.createElement("h1")
    cardElement.appendChild(suitDisplay)
    suitDisplay.classList.add("suit")
    suitDisplay.innerHTML=cardInfoS
}