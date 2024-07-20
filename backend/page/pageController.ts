import { Router } from 'express';
import { PageService as Service } from './pageService';
import Page from './pageInterface'

export const PageController = Router();

PageController.get('/', async (req, res) => {
    let page: Page | null = null
    if (req.query.id)
        page = await Service.GetByID(Number(req.query.id));
    else if (req.query.location)
        page = await Service.GetByLocation(String(req.query.location));

    if (page == null)
        return res.sendStatus(404);
    return res.json(page);

});
