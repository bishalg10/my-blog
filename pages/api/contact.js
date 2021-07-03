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

        let client;
        try {
            client = await MongoClient.connect('mongodb+srv://kumarbishnu:wwGcqrvF2FciDMG@myblog.1ho9c.mongodb.net/my-site?retryWrites=true&w=majority');
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
