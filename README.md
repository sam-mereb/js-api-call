# Filter Accounts

A bank wants to do some data analysis on some users' accounts. It has provided you with an API endpoint that will be called to get the user accounts. It accepts a *STATUS* filter and a *page* filter.
The bank wants to know how many accounts exist for a given status in a specific month with a balance strictly greater than a threshold set by the bank.

You already hava a function ready to return the number of accounts after filtering them.

It accepts the
    - `status` - a string which can be of various statuses like 'CLOSED', 'PENDING', 'ACTIVE' etc.
    - `dateStr` - The month in focus with the 'mm-YYYY' format
    - `minBalance` - The balance that is strictly greater than this to consider filtering

It should return the number of accounts that match the filter.

The API Endpoint looks like: <http://localhost:3000/accounts?status=CLOSED&page=1>

The API Endpoint will return a JSON String that looks like:

```json

    {
        "page": 1,
        "total_pages": 3,
        "data": [
            {
                "timestamp": 1615226762742,
                "status": "CLOSED",
                "balance": 123.45
            },
             {
                "timestamp": 16152267673121,
                "status": "CLOSED",
                "balance": 234.45
            },
            .
            .
            .
        ]
    }
```

You can run it as many time as you want
//TODO: Add more instructions
// should have time limit and bench marks

After adding your code to execute it just run `npm run test`

The tests should complete in no more than 5 seconds.
