module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater }

function giveItBackLater(value, callback) {
    function loadComplete() {
        callback(value) 
}
setTimeout(loadComplete, 300)   
}

function addSomePromises(message) {
    return new Promise(function (resolve, reject) {
        resolve(message)

        reject(new Error('Meer')); 
    })
}


function promiseToGiveItBackLater(value){
    giveItBackLater(value)
}
