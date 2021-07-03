import {MongoClient} from 'mongodb';

const handler = async (request, response) => {
    if (request.method === 'POST') {
        const {email, name, message} = request.body;

        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            response.status(422).json({message: 'Invalid input.'});
            return;
        }

        const newMessage = {email, name, message};

        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.1ho9c.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

        let client;
        try {
            client = await MongoClient.connect(connectionString);
        } catch (error) {
            response.status(500).json({message: 'Could not connect to database'});
        }

        const db = client.db();
        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            response.status(500).json({message: 'Could not connect to database'});
            return;
        }
        client.close();
        response.status(201).json({message: 'Successfully stored message!', newMessage});
    }
}

export default handler;
