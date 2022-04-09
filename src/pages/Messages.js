import React, {useEffect, useState} from "react";
import SubmitButton from "./SubmitButton";

export default function Messages() {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");
    const [data, setData] = useState(null);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const API = "http://localhost:3000/messages";

    const [opacity, setOpacity] = useState(0);

    const handleCheck = () => {
        if (opacity === 0) {
            setOpacity(1);
        } else if (opacity === 1) {
            setOpacity(0);
        }
    }


    useEffect(() => {
        fetch(API)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                setData(data);
                console.log(data);
            })
            .catch((err) => {
                console.log("error");
                throw new Error(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    if (loading) {
        return "Loading..."
    }

    const save = () => {
        const newMessage = {
            "name": name,
            "email": email,
            "message": message
        }
        const add = () => {
            setData((prev) => [...prev, newMessage]);
        }
        console.log(newMessage);
        fetch(API, {
            method: "POST",
            body: JSON.stringify(newMessage),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error("Oops...");
            })
            .then(data => {
                console.log("dodano wiadomość");
                add(data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <div className="contactForm">
            <div className="boxForm">
                <div className="questions">
                    <p>
                        If you have any questions, please complete the form below
                    </p>
                </div>
                <div className="questionsBox">
                    <div className="allQuestions">
                        <input type={"text"} placeholder={"Type your name…"} className={"firstInput"} value={name}
                               onChange={(e) => setName(e.target.value)}/>
                        <input type={"email"} placeholder={"Type your e-mail…"} className={"firstInput"} value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                        <input type={"text"} placeholder={"Type your message…"} className={"thirdInput"} value={message}
                               onChange={(e) => setMessage(e.target.value)}/>
                        <div className="send">
                            <div className="consent">
                                <p className="consentText">
                                    <button onClick={handleCheck}>
                                        <i style={{
                                            opacity: opacity,
                                        }} className="fa-solid fa-check"/>
                                    </button>
                                    I hereby give consent for my personal data included in my
                                    application to be processed for the purposes of the recruitment
                                    process under the European Parliament’s and Council of the
                                    European Union Regulation on the Protection of Natural Persons as
                                    of 27 April 2016, with regard to the processing of personal data
                                    and on the free movement of such data, and repealing Directive
                                    95/46/EC (Data Protection Directive)
                                </p>
                            </div>
                            <form onSubmit={() => {
                                save();
                            }}>
                                <SubmitButton opacity={opacity}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}