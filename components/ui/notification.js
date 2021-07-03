const Notification = props => {

    const {status, title, message} = props.notification;

    return <div className={`notification ${status}`}>
        <h6>{title}</h6>
        <p>{message}</p>
    </div>

}

export default Notification;
