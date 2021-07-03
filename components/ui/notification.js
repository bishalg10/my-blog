import ReactDOM from 'react-dom';

const Notification = props => {

    const {status, title, message} = props.notification;

    return ReactDOM.createPortal((
        <div className={`notification ${status}`}>
            <h6>{title}</h6>
            <p>{message}</p>
        </div>
    ), document.getElementById('notifications'));

}

export default Notification;
