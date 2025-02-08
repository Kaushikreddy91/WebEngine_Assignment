import express from 'express';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'json2csv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;
const CSV_FILE_PATH = path.resolve(__dirname, 'output.csv');

app.get('/generate-csv', async(req,res)=>{
    try{
        const [usersResponse, postsResponse, commentsResponse] = await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/comments')
        ]);

        const users = usersResponse.data.map(user => ({id:user.id, name:user.name}));
        const posts = postsResponse.data.map(post => ({ id:post.id, title:post.title}));
        const comments = commentsResponse.data.map(comment => ({id:comment.id, body:comment.body})); 

        const mergedData = users.map(user=>({
            id: user.id,
            name: user.name,
            title: posts.find(post => post.id === user.id)?.title || 'N/A',
            body: comments.find(comment => comment.id === user.id)?.body || 'N/A'
        }));

        const csv = parse(mergedData,{ fields: ['name', 'title', 'body'] });

        fs.writeFileSync(CSV_FILE_PATH, csv);

        res.json({message: 'CSV file generated successfully', filePath: CSV_FILE_PATH})
    }
    catch(error){
        console.error('Error generating CSV: ',error);
        res.status(500).json({error:'Failed to generate CSV', details: error.message});
    }
});

app.listen(PORT,()=>{
   console.log(`Server running on port:${PORT}`);
})