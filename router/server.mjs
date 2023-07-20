import express from 'express'
import path from 'path';
const __dirname = path.resolve();

import apiv1Router from './apiv1/main.mjs'
import apiv2Router from './apiv2/main.mjs'

const router = express.Router()

router.use(express.json()); // body parser

router.use("/api/v1", apiv1Router)
router.use("/api/v2", apiv2Router)

router.use(express.static(path.join(__dirname, 'public')))

export default router