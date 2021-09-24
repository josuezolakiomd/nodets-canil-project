import { Router } from 'express';
import * as homeController from '../controllers/homeController';
import * as searchController from '../controllers/searchController';

const router = Router();

router.get('/', homeController.home);
router.get('/dogs', homeController.dogs);
router.get('/cats', homeController.cats);
router.get('/fishes', homeController.fishes);

router.get('/search', searchController.search);

export { router };
