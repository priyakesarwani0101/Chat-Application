import './MessageCard.css';

const Message = ({ user, msg, align }) => {
    if (user) {
        return (
            <div className={`messageBox ${align}`}>
                <h3>{`${user} : ${msg}`}</h3>
            </div>
        )
    }
    return (
        <div className={`messageBox ${align}`}>
            <h3>{`You : ${msg}`}</h3>
        </div>
    )
}

export default Message;