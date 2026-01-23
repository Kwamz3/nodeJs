function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function celsius_to_farenhiet(celsius) {
    return (celsius * 9)/ 5 + 32   
}

module.exports = {
    generateRandomNumber,
    celsius_to_farenhiet
}                                                                                                                                                                                                                                                              