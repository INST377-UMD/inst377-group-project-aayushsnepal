const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const supabaseUrl = 'https://harsffqukmafwewwrvex.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcnNmZnF1a21hZndld3dydmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1ODE0OTUsImV4cCI6MjAxODE1NzQ5NX0.ishsYCsKYycBNbRlhdH291mKH0eBly5fV3-fVSGe9O0'; // Replace with your Supabase API key
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.json());
app.use(cors());

app.use(express.static('public', { index: 'home.html' }));

app.get('/style.css', (req, res) => {
  res.sendFile('style.css', { root: __dirname, headers: { 'Content-Type': 'text/css' } });
});

app.get('/app.jsx', (req, res) => {
    res.sendFile('app.jsx', { root: __dirname, headers: { 'Content-Type': 'application/javascript' } });
});
  
app.get('/', (req, res) => {
    res.sendFile('home.html', { root: __dirname, headers: {'Content-Type': 'text/html'} });
});

app.get('/home.html', (req, res) => {
    res.sendFile('home.html', { root: __dirname, headers: {'Content-Type': 'text/html'} });
});
  
app.get('/about.html', (req, res) => {
    res.sendFile('about.html', { root: __dirname, headers: {'Content-Type': 'text/html'} });
});
  
app.get('/documentation.html', (req, res) => {
    res.sendFile('documentation.html', { root: __dirname, headers: {'Content-Type': 'text/html'} });
});
  
  

app.post('/api/addEntry', async (req, res) => {
    try {
        const { user_name, fruit, date } = req.body;
        const { data, error } = await supabase
            .from('reqx')
            .upsert([{ user_name, fruit, date }]);

        if (error) {
            throw error;
        }

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/getData', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('reqx')
            .select('*');

        if (error) {
            console.error(error);
            throw error;
        }

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 

