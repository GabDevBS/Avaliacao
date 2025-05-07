import express from 'express'
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid';


const app = express()
const port = 8000

app.use(express.text());

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) return reject(err);
            resolve(data)
        })
    })
}

function writeFile(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, 'utf-8', (err) => {
            if (err) return reject(err);
            resolve(null)
        })
    })
}
const logsPath = "./logs.txt"

async function newLog(name) {
    const date = Date.now();
    const uuid = uuidv4();
    const log = `${uuid} - ${date} - ${name}`;
    const allLogs = await readFile(logsPath);
    await writeFile(logsPath, allLogs + "\n" + log);
    return log;
}



app.get()