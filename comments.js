// Create web server
// Create a web server that listens to a port and returns a response to the client. The response should be a list of comments that are stored in an array. Each comment should have an id, a username, and a comment. The server should return the list of comments as a JSON object.

// Example:

// [
//     {
//         id: 1,
//         username: "alice",
//         comment: "I love this post!"
//     },
//     {
//         id: 2,
//         username: "bob",
//         comment: "This is the best post ever!"
//     }
// ]
// The server should return the list of comments as a JSON object.

// The server should listen to port 3000.

const http = require('http');

const comments = [
    {
        id: 1,
        username: "alice",
        comment: "I love this post!"
    },
    {
        id: 2,
        username: "bob",
        comment: "This is the best post ever!"
    }
]

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comments));
});

server.listen(3000, '