import { MongoClient } from 'mongodb';

const connectDB = async (): Promise<MongoClient> => {
  const mongoUrl = process.env.MONGODB_URL as string;
  const options: any = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const client = await MongoClient.connect(mongoUrl);
  return client;
};

export {
    connectDB
};
