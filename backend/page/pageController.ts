import { Router } from 'express';
import { PageService as Service } from './pageService';
import Page from './pageInterface';

export const PageController = Router();

PageController.post('/', async (req, res) => {
    // TODO: Make this return something.
    return res.json(await Service.Create(req.body));
})

PageController.get('/', async (req, res) => {
    let page: Page | null = null;
    if (req.query.id)
        page = await Service.GetByID(Number(req.query.id));
    else if (req.query.location)
        page = await Service.GetByLocation(String(req.query.location));

    if (page == null)
        return res.sendStatus(404);
    return res.json(page);
});

PageController.patch('/', async (req, res) => {
    let page: Page | null = null;
    if (req.query.id)
        page = await Service.UpdateByID(Number(req.query.id), req.body);
    else if (req.query.location)
        page = await Service.UpdateByLocation(String(req.query.location), req.body);

    // TODO: Make this return something.
    // if (page == null)
    //     return res.sendStatus(404);
    return res.json(page);
});

PageController.delete('/', async (req, res) => {
    let page: Page | null = null;
    if (req.query.id)
        page = await Service.DeleteByID(Number(req.query.id));
    else if (req.query.location)
        page = await Service.DeleteByLocation(String(req.query.location));

    // TODO: Make this return something.
    // if (page == null)
    //     return res.sendStatus(404);
    return res.json(page);
});
