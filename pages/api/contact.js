import { MongoClient } from 'mongodb';
import chalk from 'chalk';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    // Store in DB
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(process.env.MONGODB_URI);
      console.log(chalk.bold.bgGreen('Connected to DB'));
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to DB' });
      console.error(chalk.bold.bgRed(`Error: ${error}`));
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
      console.log(chalk.bold.bgGreen('Message successfully stored!'));
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to DB' });
      console.error(chalk.bold.bgRed(`Error: ${error}`));
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Message successfully stored!', message: newMessage });
  }
};
export default handler;
