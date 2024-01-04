const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('Hello World');
	}
	if (req.url === '/about') {
		res.end('Here is a short history');
	}

	res.end(`
        <h1>Oops</h1>
        <p>We cant see, to find the page</p>
        <a href='/'>back home</a>
    `);
});

server.listen(5000);
