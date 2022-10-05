
function randomDate(date1, date2){
    function randomValueBetween(min, max) {
      return Math.random() * (max - min) + min;
    }
    var date1 = date1 || '01-01-1970'
    var date2 = date2 || new Date().toLocaleDateString()
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()
    if( date1>date2){
        return new Date(randomValueBetween(date2,date1)).getTime()   
    } else{
        return new Date(randomValueBetween(date1, date2)).getTime()  

    }
}
let generatedData = {}

let statuses = ["CLOSED", "PENDING", "ACTIVE", "SUSPENDED", "LOCKED", "TEMPORARY", "SPECIAL", "CLOSED", "ACTIVE", "PENDING"]

statuses.forEach( el => {
    generatedData[el] = [];
});

for (let i = 0; i < 1000; i++) {
    let randStatusIdx = Math.floor(Math.random() * 10)
        generatedData[statuses[randStatusIdx]].push(
            {
                page: 0,
                total_pages: 0,
                data:[ {
                    status: statuses[randStatusIdx],
                    timestamp: randomDate(),
                    balance: parseFloat((Math.random() * 2500).toFixed(2))

                }]
            }
        )
   
}

console.log(JSON.stringify(generatedData));