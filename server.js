const express = require('express')
const app = express()
const port = 3000;
const path = require('path')
const bodyParser = require('body-parser')

const { getUsers, authenticateUser } = require('./database.js');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
    //res.send('Welcome to sample server');
    res.sendFile(
        path.join(__dirname, '/static/index.html')
        );
});

app.get('/login', (req, res) => {
    //res.send('Welcome to sample server');
    res.sendFile(
        path.join(__dirname, '/static/login.html')
        );
});

app.get('/allusers', async (req, res) => {
    const users = await getUsers()
    res.send(users)
});

app.post('/submit', async (req, res) => {
    console.log(req.body)
    let username = req.body.username
    let password = req.body.password

    try {
        const isAuthenticated = await authenticateUser(username, password);

        if (isAuthenticated) {
            res.redirect(`/home?username=${username}`);
        } else {
            res.redirect('/login?error=Invalid username or password');
        }
    } catch (error) {
        console.error("Error authenticating user:", error);
        res.redirect('/login?error=An error occurred while authenticating');
    }

  });


  app.get('/home', (req, res) => {
    const username = req.query.username;
    res.sendFile(path.join(__dirname, '/static/home.html'));
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})