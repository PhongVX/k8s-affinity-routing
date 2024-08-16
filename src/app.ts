import express, { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import { getContainerIP } from './utils/command/ip';

export class App {
    private app: core.Express;
    private port: number;

    constructor(port: number = 8080) {
        this.app = express();
        this.port = port;

        this.app.use(express.json());

        this.app.get('/health-check', async(_: Request, res: Response) => {
            res.send(`${await getContainerIP()} OK`);
        });

        this.app.get(/^\/(w)\/([^/]+)$/, async(req, res) => {
            const w = req.params[0]; // Captures the 'w' part
            const id = req.params[1]; // Captures the part after 'w/'
            console.log(w, id);
            // Handle the request logic here
            res.send(`${await getContainerIP()} OK`);
        });
    }

    start = () => {
        this.app.listen(this.port, () => {
            console.log(`Server is running at http://localhost:${this.port}`);
        });
    }
}