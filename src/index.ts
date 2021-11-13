import {MySQLClient} from './lib/MySQLClient';
import databaseConfig from './config/database.json';
import express from 'express';
import path from 'path';

function main() {
    const mySQLClient = new MySQLClient(databaseConfig);
    const app = express();
    const port = 8080;

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    function isAreaValid(params: Record<string, unknown>): boolean {
        try {
            // @ts-ignore
            return parseInt(params.areaId) in [1, 2, 3, 4, 5, 6];
        } catch (_) {
            return false
        }
    }

    app.get('/v1/health', (_, res) => {
        res.sendStatus(200);
    });

    app.get('/v1/emissions/:areaId', async (req, res) => {
        if (isAreaValid(req.params)) {
            try {
                res.status(200).send(await mySQLClient.getEmissions(req.params.areaId));
            } catch (e) {
                console.error(e);
                res.sendStatus(500);
            }
        } else {
            res.sendStatus(400);
        }
    });

    app.get('/v1/traffic/:areaId', async (req, res) => {
        if (isAreaValid(req.params)) {
            try {
                res.status(200).send(await mySQLClient.getTraffic(req.params.areaId));
            } catch (e) {
                console.error(e);
                res.sendStatus(500);
            }
        } else {
            res.sendStatus(400);
        }
    });

    app.get('/v1/last-update', async (_, res) => {
            try {
                res.status(200).send(await mySQLClient.getLastUpdate());
            } catch (e) {
                console.error(e);
                res.sendStatus(500);
            }
    });

    app.listen(port);
}

main();
