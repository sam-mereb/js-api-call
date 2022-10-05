const app = require('../api');

const filterUserAccounts = require('../index').filterUserAccounts
const assert = require('assert').strict;

let server;

let funcArgs = [
    ["CLOSED", "03-2021", 0.0, 2],
    ["CLOSED", "07-2022", 200.0, 2],
    ["CLOSED", "04-2021", 60.0, 2],
    ["ACTIVE", "01-2022", 250.0, 12],
    ["ACTIVE", "11-2021", 1000.0, 7],
    ["ACTIVE", "05-2022", 0.0, 15],
    ["PENDING", "01-2022", 1000.0, 2],
    ["PENDING", "11-2022", 1000.0, 0],
    ["PENDING", "09-2021", 50.0, 2],
    ["PENDING", "03-2022", 123.0, 6],
    ["PENDING", "01-2021", 100.0, 3],
    ["PENDING", "12-2021", 0.0, 4],
    ["SUSPENDED", "01-2022", 0.0, 2],
    ["SUSPENDED", "01-2021", 25.0, 2],
    ["SUSPENDED", "11-2021", 125.0, 3],


]

//TODO: ADD ARGS TO THE FUNCTIONS
describe("Test Acounts Filter", function () {
    before(() => {
        server = app.listen(3000);
    })

    after(() => {
        server.close()
    })

    for (let i = 0; i < funcArgs.length; i++) {
        it("Test " + i, async function () {
            assert.equal(await filterUserAccounts(funcArgs[i][0], funcArgs[i][1], funcArgs[i][2]), funcArgs[i][3]);
        });
    }

});
