import {useEffect, useState} from "react";
import Notification from "../ui/notification";

const sendContactData = async contactDetails => {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {'Content-Type': 'application/json'}
    });

    const data = response.json();
    if (!response.ok) {throw new Error(data.message || 'Something went wrong!')}
}

const ContactForm = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        let timer;
        if (status === 'success' || status === 'error') {
            timer = setTimeout(() => {setStatus(null), setError(null)},3000);
        }
        return () => clearTimeout(timer)
    }, [status]);

    const sendMessage = async event => {
        event.preventDefault();
        setStatus('pending');
        try {
            await sendContactData({name, email, message});
            setStatus('success');
            setName('');
            setEmail('');
            setMessage('');
        }  catch (error) {
            setError(error.message);
            setStatus('error');
        }
    }

    let notification;
    if (status === 'pending') {notification = {status, title: 'Sending message...', message: 'Your message is on its way.'}}
    if (status === 'success') {notification = {status, title: 'Success', message: 'Message sent successfully.'}}
    if (status === 'error') {notification = {status, title: 'Error', message: error}}

    return <section>
        <article className="contact-form">
            <h2>How can I help you?</h2>
            <form onSubmit={sendMessage}>
                <div className="grid">
                    <div className="form-control">
                        <label htmlFor="email" className="h5">Your E-mail</label>
                        <input type="email" id="email" required value={email} onChange={event => setEmail(event.target.value)} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="name" className="h5">Your Name</label>
                        <input type="text" id="name" required value={name} onChange={event => setName(event.target.value)} />
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="message" className="h5">Your Message</label>
                    <textarea id="message" rows="8" required value={message} onChange={event => setMessage(event.target.value)} />
                </div>
                <div>
                    <button className="button" type="submit">Send Message</button>
                </div>
            </form>
        </article>
        {notification && <Notification notification={notification} />}
    </section>

}

export default ContactForm;
