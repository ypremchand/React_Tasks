import React, { useState } from "react";
import ContactModal from "./ContactModal";
import "../App.css";

const Form = () => {
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [formValid, setFormValid] = useState(false);
    const [error, setError] = useState({
        emailError: "",
        contactError: "",
        addressError: "",
    });
    const [submittedData, setSubmittedData] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const validateEmail = (email) => {
        let emailError = error.emailError;
        let valid = formValid;
        let regexEmail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regexEmail.test(email)) {
            valid = false;
            emailError = "This is invalid!";
        } else {
            valid = true;
            emailError = "";
        }

        setEmail(email);
        setFormValid(valid);
        setError({ ...error, emailError });

        return valid;
    };

    const validateContact = (contact) => {
        let contactError = error.contactError;
        let valid = formValid;
        let regexContact = /^\d{10}$/;
        if (contact.trim() === "") {
            valid = false;
            contactError = "Contact number is required.";
        } else if (!regexContact.test(contact)) {
            valid = false;
            contactError = "Contact number should be 10 digits.";
        } else {
            valid = true;
            contactError = "";
        }
        setContact(contact);
        setFormValid(valid);
        setError({ ...error, contactError });

        return valid;
    };

    const validateAddress = (address) => {
        let addressError = error.addressError;
        let valid = formValid;
        if (address.trim() === "") {
            valid = false;
            addressError = "This is required!";
        } else if (address.trim().length <= 5) {
            valid = false;
            addressError = "Write something about yourself.";
        } else {
            valid = true;
            addressError = "";
        }
        setAddress(address);
        setFormValid(valid);
        setError({ ...error, addressError });
        return valid;
    };

    const handleChange = (e) => {
        if (e.target.id === "email") {
            validateEmail(e.target.value);
        }
        if (e.target.id === "contact") {
            validateContact(e.target.value);
        }
        if (e.target.id === "address") {
            validateAddress(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            validateEmail(email) &&
            validateContact(contact) &&
            validateAddress(address)
        ) {
            setSubmittedData({ email, contact, address });
            setEmail("");
            setContact("");
            setAddress("");
            setFormValid(false);
            setError({
                emailError: "",
                contactError: "",
                addressError: "",
            });
            setShowModal(true)  ;
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="back">
            <div className="form">
            <form onSubmit={handleSubmit}>
                <label>Enter Email</label>
                <input
                    type="text"
                    placeholder="Please enter email"
                    onChange={handleChange}
                    id="email"
                    value={email}
                />
                <p style={{ color: "red" }}>{error.emailError}</p>

                <label>Enter Contact Number</label>
                <input
                    type="text"
                    placeholder="Please enter contact"
                    onChange={handleChange}
                    id="contact"
                    value={contact}
                />
                <p style={{ color: "red" }}>{error.contactError}</p>

                <label>Address</label>
                <textarea
                    rows="5"
                    cols="25"
                    placeholder="Please enter about yourself"
                    onChange={handleChange}
                    id="address"
                    value={address}
                />
                <p style={{ color: "red" }}>{error.addressError}</p>

                <button type="submit" style={{ width: "25%",marginLeft:"30%",border:"2px solid white", }}>Submit</button>
            </form>
            </div>
            {submittedData && (
                <div className="cards-container1">
                    <div className="card1">
                        <div className="card-body">
                            <h5 className="card-title">Email</h5>
                            <p className="card-text">{submittedData.email}</p>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="card-body">
                            <h5 className="card-title">Phone</h5>
                            <p className="card-text">{submittedData.contact}</p>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="card-body">
                            <h5 className="card-title">Address</h5>
                            <p className="card-text">{submittedData.address}</p>
                        </div>
                    </div>
                </div>
            )}
            <ContactModal
                show={showModal}
                handleClose={handleCloseModal}
                submittedData={submittedData}
            />
        </div>
    );
};

export default Form;
