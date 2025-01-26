import express from 'express';
import cors from 'cors';
import mainRoute from './routes/mainRoute';
import dotenv from 'dotenv';
import { pinoHttp } from 'pino-http';
import logger, { loggerhttp } from './middleware/logger';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();
const app = express();

app.use(cors({
    origin:[process.env.ENDPORT_FRONTEND || '', ],
    methods:['GET', 'HEAD', 'OPTIONS', 'POST'],
    credentials:true,
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(pinoHttp({logger:loggerhttp}));

async function main() {
  try {
    await prisma.$connect();
    logger.warn('Prisma connected to MongoDB');
  } catch (error) {
    logger.error('Prisma connection error:', error);    
  }
}

main();

app.use('/',mainRoute)

app.listen(PORT, () => logger.warn(`Server running on port ${PORT}`));
