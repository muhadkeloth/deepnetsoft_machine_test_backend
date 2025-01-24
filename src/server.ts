import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import mainRoute from './routes/mainRoute';
import dotenv from 'dotenv';
import path from 'path';
import { pinoHttp } from 'pino-http';
import logger, { loggerhttp } from './middleware/logger';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({
    origin:[process.env.ENDPORT_FRONTEND || '', ],
    methods:['GET', 'HEAD', 'OPTIONS', 'POST'],
    credentials:true,
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(pinoHttp({logger:loggerhttp}));

mongoose.connect(process.env.MONGODB_URI || '')
  .then(() => logger.warn('MongoDB connected',process.env.MONGODB_URI))
  .catch(err => logger.error('connectiong mongo error: ',err));

  app.use('/',mainRoute)

  app.listen(PORT, () => logger.warn(`Server running on port ${PORT}`));
