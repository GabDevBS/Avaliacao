import { rejects } from 'assert'
import express from 'express'
import fs from 'fs'
const app = express()
const port = 8000

function readfile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) return reject(err);
            resolve(data)
        })
    })
}

function writefile(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, 'utf-8', (err) => {
            if (err) return reject(err);
            resolve(null)
        })
    })
}


app.get()