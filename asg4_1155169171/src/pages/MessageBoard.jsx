import { useState, useEffect } from "react";

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/messages")
      .then((res) => res.json())
      .then((json) => setMessages(json))
      .catch((ex) => console.error(ex));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    var d = new Date();
    d.setHours(d.getHours(), d.getMinutes() - d.getTimezoneOffset());
    var time = d.toISOString();

    fetch("/.netlify/functions/messages", {
      // fetch("/.netlify/functions/demo",{
      method: "POST",
      body: JSON.stringify({ email, message,time }),
    })
      .then((res) => res.json())
      .then((json) =>   setMessages(json))
      .catch((ex) => console.error(ex));
  };

  return (
    <div className="page message-board">
      <div style={{ marginBottom: "16px" }}>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="your message"
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </div>
      <div className="list">
        {messages.map((msg) => (
          // <div className="card" key={msg._id}>
          <div class = 'card' >
            <div className="card-body">
              <h5 className="card-title">{msg.email}</h5>
              <p className="card-text">{msg.text}</p>
              <p className="card-subtitle">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageBoard;

