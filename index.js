import express from "express"
import axios from "axios"

const app=express();
const portNumber=3000;

app.listen(portNumber,()=>
{
    console.log("Server is Running!");
})
app.use(express.static("public"));
app.get("/",async (req,res)=>
{
    const RandomChapter=Math.floor(Math.random()*18)+1;
    const RandomVerse = Math.floor(Math.random()*10)+1
    try
    {
        const response= await axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${RandomChapter}/verses/${RandomVerse}/`,
        {headers:{'X-RapidAPI-Key': '8a39039cdamsh8a24150c808bd9dp13a5cajsn4687b8a58abd',
        'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'}});
        res.render("index.ejs",{Chapter:response.data.chapter_number,Verse:response.data.verse_number,ShlokText:response.data.text,Translations:response.data.translations})
    }
    catch(error)
    {
        console.log(error);   
    }   
})