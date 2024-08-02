import React, { Component } from 'react';
import './SignUpForm.css';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      dob: '',
      contact: '',
      email: '',
      password: '',
      submitted: false,
      errors: {
        nameError:"",
        ageError:"",
        dobError:"",
        contactError:"",
        emailError:"",
        passwordError:""
      }
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  validateForm = () => {
    const { name, age, dob, contact, email, password } = this.state;
    let errors = {};
    let formIsValid = true;

    if (name.trim().length == "") {
      formIsValid = false;
      errors["name"] = "This is reuired.";
    }
    else if(name.trim().length <=3) {
      formIsValid=false;
      errors["name"]="This is invalid"
    }
    else{
      formIsValid=true;
      errors["name"]=""
    }

    if (age.trim() == "") {
      formIsValid = false;
      errors["age"] = "This is required..";
    } else if (age.trim().length >= 3) {
      formIsValid = false;
      errors["age"] = "This is invalid.";
    }

    if (!dob) {
      formIsValid = false;
      errors["dob"] = "Please enter your date of birth.";
    }

    let regexContact=/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    if (!regexContact.test(contact)) {
      formIsValid = false;
      errors["contact"] = "This is invalid..";
    }
    else{
      formIsValid = true;
      errors["contact"] = " ";
    }
    
           let  regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regexEmail.test(email)) {
      formIsValid = false;
      errors["email"] = "This is invalid...";
    } else {
      formIsValid = true;
      errors["email"] = " ";
    }

    if (!password) {
      formIsValid = false;
      errors["password"] = "Please enter your password.";
    } else if (password.length < 6) {
      formIsValid = false;
      errors["password"] = "Password must be at least 6 characters long.";
    }

    this.setState({ errors });
    return formIsValid;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm()) {
      this.setState({ submitted: true });
    }
  }

  render() {
    const { name, age, dob, contact, email, password, submitted, errors } = this.state;
    
    return (
        <div className='main'>
             <div className="form-container">
        {submitted ? (
          <div className="success-message">Form is submitted</div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <h2>Sign Up</h2>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" value={name} onChange={this.handleChange} />
              <div className="error">{errors.name}</div>
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input type="text" name="age" value={age} onChange={this.handleChange} />
              <div className="error">{errors.age}</div>
            </div>
            <div className="form-group">
              <label>Date of Birth:</label>
              <input type="date" name="dob" value={dob} onChange={this.handleChange} />
              <div className="error">{errors.dob}</div>
            </div>
            <div className="form-group">
              <label>Contact:</label>
              <input type="text" name="contact" value={contact} onChange={this.handleChange} />
              <div className="error">{errors.contact}</div>
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" value={email} onChange={this.handleChange} />
              <div className="error">{errors.email}</div>
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" name="password" value={password} onChange={this.handleChange} />
              <div className="error">{errors.password}</div>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        )}
      </div>

        </div>
     
    );
  }
}

export default SignUpForm;


// import React, { useState } from "react"

// const Form = (props) => {
//     const [firstName, setFirstName] = useState('')
//     const [age, setAge] = useState('')
//     const [email, setEmail] = useState('')
//     const [formValid, setFormValid] = useState(false)
//     const [errorMsg, setErrorMsg] = useState({
//         nameError: "",
//         ageError: "",
//         emailError: ""
//     })

//     const validateName = (name) => {
//         let nameError = errorMsg.nameError;
//         let valid = formValid;
//         if (name.trim().length == "") {
//             valid = false;
//             nameError = "This is required"
//         }
//         else if (name.trim().length <= 2) {
//             valid = false;
//             nameError = "This is invalid!"
//         }
//         else {
//             valid = true;
//             nameError = ""
//         }
//         setFirstName(name);
//         setFormValid(valid)
//         setErrorMsg({ ...errorMsg, nameError })
//         return formValid;

//     }
//     const validateAge = (age) => {
//         let ageError = errorMsg.ageError;
//         let valid = formValid;
//         if (age.trim() == "") {
//             valid = false;
//             ageError = "This is required"
//         }
//         else if (age.trim().length >= 3) {
//             valid = false;
//             ageError = "This is invalid!"
//         }
//         else {
//             valid = true;
//             ageError = ""
//         }
//         setAge(age);
//         setFormValid(valid)
//         setErrorMsg({ ...errorMsg, ageError })
//         return formValid;
        

//     }

//     const handleSubmit=()=>{
//         if(validateName(firstName)&& validateAge(age)&&validateEmail(email)){
//             alert("form is submitted");
//             let user={firstName,age,email}
//             props.addUser(user)
//             setFirstName("")
//             setAge("")
//             setEmail("")
//         }
//     }
//     const validateEmail = (email) => {
//         let emailError = errorMsg.emailError;
//         let valid = formValid;
//        let  regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if (!regexEmail.test(email)) {
//             valid=false
//             emailError="This is invalid!"

//         }
//         else{
//             valid=true;
//             emailError=""
//         }
//         setEmail(email)
//         setFormValid(valid)
//         setErrorMsg({...errorMsg,emailError})
//         return formValid;

//     }

//     const handleChange = (e) => {
//         console.log(e.target.value);
//         console.log(e.target.id);

//         if (e.target.id === "firstName") {
//             validateName(e.target.value)

//         }
//         if (e.target.id === "age") {
//             validateAge(e.target.value)

//         }
//         if (e.target.id === "email") {
//             validateEmail(e.target.value)

//         }
//     }



//     return (
//         <form>
//             <label>Enter Name: </label>
//             <input type="text" name="firstName" placeholder="Please enter your name" onChange={handleChange} id="firstName" />
//             <p>{errorMsg.nameError}</p>
//             <label>Enter Age: </label>
//             <input type="text" name="age" placeholder=" Please enter your age" onChange={handleChange} id="age" />
//             <p>{errorMsg.ageError}</p>
//             <label>Enter Email: </label>
//             <input type="text" name="email" placeholder="please enter your email" onChange={handleChange} id="email" />
//             <p>{errorMsg.emailError}</p>
//             <button type="button" onClick={handleSubmit}>Submit</button>
//         </form>
//     )
// }

// export default Form;
