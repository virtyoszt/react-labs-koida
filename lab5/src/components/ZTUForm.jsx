import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";

export default function ZTUForm(props) {
    const [username, setUserName] = useState("");
    const [email, setValidEmail] = useState("");
    const [topic, setTopic] = useState("");
    const [message, setMessage] = useState("");

    const isEmailValid = () => {
        const audit = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        return audit.test(email) || email === "";
    }
    const Email = (event) => {
        setValidEmail(event.target.value);
    }
    const Topic = (event) => {
        setTopic(event.target.value);
    }
    const Message = (event) => {
        setMessage(event.target.value);
    }

    const Submit = (event) => {
        event.preventDefault();
        console.log(username, email, topic, message);
    }
    const Change = (event) => {
        setUserName(event.target.value);
    }

    return (
        <div>
            <h1>Зворотній зв'язок</h1>
            <h3>Задай своє запитання, або повідом про порушення під час вступної кампанії</h3>
            <Box sx = {{marginLeft: 15}}>
                <form onSubmit={Submit}>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <TextField label={"Ім'я"} type={"text"} value={username} onChange={Change} sx = {{width: 400, marginTop: 2}} required/>
                        <TextField label={"E-mail"} type={"email"} error={!isEmailValid()} 
                        helperText={!isEmailValid() ? "Email введено невірно" : ""} value={email} onChange={Email}  sx = {{width: 400, marginTop: 2}} required/>
                        <TextField label={"Тема"} type={"text"} value={topic} onChange={Topic}  sx = {{width: 400, marginTop: 2}} required/>
                        <TextField label={"Повідомлення"} type={"textarea"} multiline value={message} 
                        onChange={Message}  sx = {{width: 400, marginTop: 2}}/>
                        <span>Поля відмічені * мають бути обов'язково заповненими</span>
                        <Button type={"submit"} sx = {{marginTop: 2, fontSize: 18, border: 1, width: 200, marginLeft: 10, 
                        borderRadius:2}}>Відправити</Button>
                    </Box>
                </form>
            </Box>
        </div>
    );
}