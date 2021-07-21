import './Message.css';

export const Message  = (props) => {
    return (
        <div className="Message">
            <h1 className="Message-header">Привет!!!</h1> 
            <p className="Message-text">{props.fioText}</p>
        </div>
    )
}