function groupAdultsByAgeRange(array) {
    if (array.length === 0) {
        return {}
    }
    const sortedAdults = array.filter(adult => {
        return adult.age > 17}).reduce((result, currentPerson) => {
    if(currentPerson.age < 21) {
        result['20 and younger'].push(currentPerson)
    }
    if (currentPerson.age > 20 && currentPerson.age < 31) {
        result['21-30'].push(currentPerson)
    }
    if (currentPerson.age > 30 && currentPerson.age < 41) {
        result['31-40'].push(currentPerson)
    }
    if (currentPerson.age > 40 && currentPerson.age < 51) { 
        result['41-50'].push(currentPerson)
    }    
    if (currentPerson.age > 50) {
        result['51 and older'].push(currentPerson)
    } 
    return result
    
}, {
    '20 and younger':[],
    '21-30': [],
    '31-40': [],
    '41-50': [],
    '51 and older': [],
    })
    if (sortedAdults['20 and younger'].length === 0) {
        delete sortedAdults['20 and younger']
    }
    if (sortedAdults['21-30'].length === 0) {
        delete sortedAdults['21-30']
    }
    if (sortedAdults['31-40'].length === 0) {
        delete sortedAdults['31-40']
    }
    if (sortedAdults['41-50'].length === 0) {
        delete sortedAdults['41-50']
    }
    if (sortedAdults['51 and older'].length === 0) {
        delete sortedAdults['51 and older']
    }  
    return sortedAdults        
}

module.exports = { groupAdultsByAgeRange }