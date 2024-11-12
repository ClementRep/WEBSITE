import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/sessions', async (req, res) => {
    try {
        const response = await fetch(`https://api.eu-gb.assistant.watson.cloud.ibm.com/instances/30c51d7d-ef05-4ebc-a0ee-fed990d339a2/sessions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer fcL09QEMesXnHxwM6g5Po3NT_2CVpeTBVLcHtk1gPnUT`
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from Watson API' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});
