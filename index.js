// Code your solutions in this file
function writeCards(namesArray, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < namesArray.length; i++) {
        thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
}
function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}
