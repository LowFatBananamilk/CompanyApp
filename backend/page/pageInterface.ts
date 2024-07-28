import { RowDataPacket } from 'mysql2/promise';

export default interface Page extends RowDataPacket {
    id: number;
    title: string;
    comment: string;
    location: string;
    content: string;
    created: string;
    created_by: string;
    last_modified: string;
    last_modified_by: string;
};
