import { Router } from 'express';
import { PageService as Service } from './pageService';

export const PageController = Router();

PageController.get("/:id", async (req, res) => {
    const page = await Service.GetByID(Number(req.params.id))
    return res.json(page)
});
