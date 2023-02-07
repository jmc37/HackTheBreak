import styles from '../../styles/SignupForm.module.css';
import { FormEvent, useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { UserForm } from "./UserForm";
import { useMultistepForm } from "./useMultiStepForm";
import emailjs from "@emailjs/browser";

//Declare type for form data
type FormData = {
    firstName: string;
    lastName: string;
    school: string;
    program: string;
    schoolEmail: string;
    term: string;
    firstHack: string;
    source: string;
    github: string;
    linkedIn: string;
    goal: string;
    team: string;
    strengths: string;
  };
  
//Sets empty params for form data
const INITIAL_DATA: FormData = {
    firstName: "",
    lastName: "",
    school: "",
    program: "",
    schoolEmail: "",
    term: "",
    firstHack: "",
    source: "",
    github: "",
    linkedIn: "",
    goal: "",
    team: "Team",
    strengths: "",
};

function SignupForm() {

    const [data, setData] = useState(INITIAL_DATA);
    function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);
  //Sends info to database
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    sendemail();
    alert("Form Submitted");
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        school: data.school,
        program: data.program,
        schoolEmail: data.schoolEmail,
        term: data.term,
        firstHack: data.firstHack,
        source: data.source,
        github: data.github,
        linkedIn: data.linkedIn,
        goal: data.goal,
        team: data.team,
        strengths: data.strengths,
      }),
    })
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
      });
  }
  //Sends email to student
  function sendemail() {
    var templateParams = {
      to_name: data.firstName,
      lname: data.lastName,
      school: data.school,
      program: data.program,
      student: data.schoolEmail,
      term: data.term,
      first_hackathon: data.firstHack,
      source: data.source,
      linkedIn: data.linkedIn,
      goal: data.goal,
      team: data.team,
      strengths: data.strengths,
    };
    emailjs
      .send(
        "service_zq7fyvp",
        "template_89sjcxy",
        templateParams,
        "Yr97hAnJ13jcEI4fH"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }

    return(
        <section id="signupform" className={styles.signupSection}>
          <div className="container">
            <div className={styles.signupDesc}>
              <h2>Register as a hacker!</h2>
              <p>Join Hack the Break 2023 by registering <br className={styles.lineBreak} /> as a hacker in the form below:</p>
            </div>
            <form 
              className={styles.signupContainer}
              onSubmit={onSubmit}
            >
              <div className={styles.signupPageCounter}>
                {currentStepIndex + 1}/{steps.length}
              </div>
              {step}
              <div className={styles.signupBtnContainer}>
                {!isFirstStep && (
                  <button 
                    className={styles.nextBtn}
                    type="button" 
                    onClick={back}
                  >
                    Back
                  </button>
                )}
                <button type="submit" className={styles.submitBtn}>{isLastStep ? "Submit" : "Next"}</button>
              </div>
            </form>
          </div>
        </section>
    );
}

export default SignupForm;