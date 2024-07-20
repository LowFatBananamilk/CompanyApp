import { connection } from '../tools/db'
import { FieldPacket } from "mysql2/promise";
import Page from './pageInterface'

export class PageService {
    static async GetByID(ID: number) {
        const [rows, _]: [Page[], FieldPacket[]] = await connection.promise().query('SELECT * FROM page WHERE ID = ?', ID);
        return rows[0];
    }
}
