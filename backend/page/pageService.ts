import { connection } from '../tools/db';
import { FieldPacket } from 'mysql2/promise';
import Page from './pageInterface';
import { error } from 'console';

export class PageService {
    static async Create(page: Page) {
        const [rows, _]: [Page[], FieldPacket[]] = await connection.promise().query(
            'INSERT INTO page (title, comment, location, content, created_by) VALUES (?, ?, ?, ?, ?)',
            [ page.title, page.comment, page.location, page.content, page.created_by ]
        );
        return rows[0];
    }

    static async GetByID(ID: number) {
        const [rows, _]: [Page[], FieldPacket[]] = await connection.promise().query(
            'SELECT * FROM page WHERE id = ?', ID
        );
        return rows[0];
    }

    static async GetByLocation(location: string) {
        const [rows, _]: [Page[], FieldPacket[]] = await connection.promise().query(
            'SELECT * FROM page WHERE location = ?', location
        );
        return rows[0];
    }

    static async UpdateByID(ID: number, page: Page) {
        const [rows, _]: [Page[], FieldPacket[]] = await connection.promise().query(
            `UPDATE page SET ${PageService.GenerateSETclause(page)} WHERE id = ?`, ID
        );
        return rows[0];
    }

    static async UpdateByLocation(location: string, page: Page) {
        const [rows, _]: [Page[], FieldPacket[]] = await connection.promise().query(
            `UPDATE page SET ${PageService.GenerateSETclause(page)} WHERE location = ?`, location
        );
        return rows[0];
    }

    static GenerateSETclause(page: Page) {
        const sets = [];
        if (page.title)
            sets.push(`title = '${page.title}'`);
        if (page.comment)
            sets.push(`comment = '${page.comment}'`);
        if (page.location)
            sets.push(`location = '${page.location}'`);
        if (page.content)
            sets.push(`content = '${page.content}'`);
        if (page.last_modified_by)
            sets.push(`last_modified_by = '${page.last_modified_by}'`);

        if (sets.length === 0)
            throw error();

        return sets.join(", ")
    }
}
