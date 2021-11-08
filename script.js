// let suits=["♥️","♠️","♦️","♣️"]
// let values=["A","2","3","4","5","6","7","8","9","10","J","Q","K"]


function nextCard()
{

    let random = Math.floor(Math.random()* 52)
    let drawnCard = deckArray[random]
    console.log(drawnCard)
    drawnCard.display()

}







