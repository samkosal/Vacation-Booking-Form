// Import the express module
import express from 'express';

// Create an instance of an Express application
const app = express();

// Enable static file serving
app.use(express.static('public'));

// Define the port number where our server will listen
const PORT = 3004;

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get('/', (req, res) => {

    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Define an "submit-order" route
app.post('/submit-form', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

// Start the server and make it listen on the port 
// specified above
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});