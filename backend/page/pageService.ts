import { connection } from '../tools/db'
import { FieldPacket } from "mysql2/promise";
import Page from './pageInterface'

export class PageService {
    static async GetByID(ID: number) {
        const [rows, _]: [Page[], FieldPacket[]] = await connection.promise().query('SELECT * FROM page WHERE id = ?', ID);
        return rows[0];
    }

    static async GetByLocation(location: string) {
        const [rows, _]: [Page[], FieldPacket[]] = await connection.promise().query('SELECT * FROM page WHERE location = ?', location);
        return rows[0];
    }
}
