import {EmissionData, MySQLConfig, TrafficData} from '../types';
import mysql, {Connection} from 'mysql2/promise';

export class MySQLClient {
    constructor(config: MySQLConfig) {
        this.config = config
    }

    private readonly config: MySQLConfig;

    private async connectToDatabase(): Promise<Connection> {
        return mysql.createConnection({
            host: this.config.host,
            port: this.config.port,
            user: this.config.auth.username,
            password: this.config.auth.password,
            database: this.config.database,
            ssl: {
                rejectUnauthorized: false
            }
        });
    }

    // Emissions

    async getEmissions(areaId: string): Promise<EmissionData[]> {
        const connection = await this.connectToDatabase();
        const results = (await connection.query(
            'SELECT * FROM no2_emissions WHERE area_id=? ORDER BY timestamp DESC',
            areaId)
        )[0];
        await connection.end();

        return <EmissionData[]> results;
    }

    // Traffic

    async getTraffic(areaId: string): Promise<TrafficData[]> {
        const connection = await this.connectToDatabase();
        const results = (await connection.query(
            'SELECT * FROM traffic WHERE area_id=? ORDER BY timestamp DESC',
            areaId)
        )[0];
        await connection.end();

        return <TrafficData[]> results;
    }

    // Misc

    async getLastUpdate(): Promise<string> {
        const connection = await this.connectToDatabase();
        const result = (await connection.query('SELECT MAX(timestamp) FROM traffic'))[0];
        await connection.end();

        // @ts-ignore
        return <string> result[0]['MAX(timestamp)'];
    }

    async getTotalDataPoints(): Promise<string> {
        const connection = await this.connectToDatabase();
        const result1 = (await connection.query('SELECT COUNT(*) FROM traffic'))[0];
        const result2 = (await connection.query('SELECT COUNT(*) FROM no2_emissions'))[0];
        await connection.end();

        // @ts-ignore
        return (parseInt(result1[0]['COUNT(*)']) + parseInt(result2[0]['COUNT(*)'])).toString();
    }
}
