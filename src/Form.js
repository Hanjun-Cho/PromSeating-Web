import "./Form.css"
import {useState} from "react";
import ReactCodeInput from "react-verification-code-input-2";
import axios from "axios";
import {toast} from "react-toastify";

const Form = ({tableSelected, formStage, handleStageSelected}) => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [wxid, setWxid] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();
        let hasErrors = false;
        if (email.length === 0) {
            toast.error('Email is required')
            hasErrors = true;
        }
        if (firstName.length === 0 || lastName.length === 0) {
            hasErrors = true;
            toast.error('Name is required')
        }
        if (wxid.length < 6 || wxid.length > 20) {
            hasErrors = true;
            toast.error('Wechat ID is required')
        }
        if (hasErrors) return;

        axios.post('/request-token/' + email).then((response) => {
            console.log(response);
            handleStageSelected(1);
        }).catch((response) => {
            toast.error(response.response.data.detail);
        });
    }

    function checkVerificationCode(code) {
        let formattedCode = code.substring(0, 3) + " " + code.substring(3, 6);
        axios.post('/validate-token/' + formattedCode).then((response) => {
            reserveTable();
        }).catch((response) => {
            toast.error(response.response.data.detail);
        });
    }

    function reserveTable() {
        axios.post('/reserve-table/' + tableSelected, {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "wxid": wxid
        }).then((response) => {
            console.log('success')
            handleStageSelected(2);
        }).catch((response) => {
            toast.error(response.response.data.detail);
        });
    }

    if (formStage === 0) {
        return (
            <div className="form-wrapper" style={{height: 250}}>
                <div className="form">
                    <h2>Reserve a table</h2>
                    <form id="reservation-form">
                        <div id="email">
                            <input required type="email" placeholder="Email for verification" value={email}
                                   onChange={(e) => {
                                       setEmail(e.target.value);
                                   }}/>
                        </div>
                        <div id="first-name">
                            <input required type="text" placeholder="First name" value={firstName}
                                   onChange={(e) => {
                                       setFirstName(e.target.value);
                                   }}/>
                        </div>
                        <div id="last-name">
                            <input required type="text" placeholder="Last (family) name" value={lastName}
                                   onChange={(e) => {
                                       setLastName(e.target.value);
                                   }}/>
                        </div>
                        <div id="wxid">
                            <input required type="text" placeholder="Wechat ID to get in touch" value={wxid} onChange={(e) => {
                                setWxid(e.target.value);
                            }}/>
                        </div>
                        <div id="form-submit">
                            <button className="submit-button" onClick={(e) => {
                                handleFormSubmit(e);
                            }}>Reserve table
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    } else if (formStage === 1) {
        return (
            <div className="form-wrapper" style={{height: 250}}>
                <div className="form">
                    <h2>Email Verification</h2>
                    <form id="verification-form">
                        <div>
                            <label>Enter verification code:</label>
                            <ReactCodeInput autoFocus={true} fieldWidth="calc(100% / 6)" 
                            className="verification-code-input" fieldHeight="56.25px"
                                            onComplete={(val) => {
                                                checkVerificationCode(val);
                                            }}/>
                        </div>
                    </form>
                    <p id="verification-note">A 6 digit verification code has been sent to {email}. Didn't receive it?
                        Check
                        your <b>spam folder</b>.</p>

                </div>
            </div>
        );
    } else {
        return (
            <div className="form-wrapper" style={{height: 250}}>
                <div className="form">
                    <h2>Success!</h2>
                    <p id="success-message">You have successfully reserved a seat for DAIS Prom 2023. Details about your reservation will be
                        sent shortly to your email.</p>
                    <p id="success-bottom-message">We hope you have a great time at this year's Prom:
                        <span> Masquerade!</span></p>
                </div>
            </div>
        );
    }

}

export default Form;