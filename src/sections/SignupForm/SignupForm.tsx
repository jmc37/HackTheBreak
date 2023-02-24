import styles from "../../styles/SignupForm.module.css";
import { FormEvent, useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { UserForm } from "./UserForm";
import { useMultistepForm } from "./useMultiStepForm";
import emailjs from "@emailjs/browser";
import axios from "axios";

//Declare type for form data
type FormData = {
  name: string;
  school: string;
  program: string;
  schoolEmail: string;
  studentNumber: string;
  term: string;
  firstHack: string;
  source: string;
  github: string;
  linkedIn: string;
  goal: string;
  team: string;
  gender: string;
  strengths: string;
};

//Sets empty params for form data
const INITIAL_DATA: FormData = {
  name: "",
  school: "BCIT",
  program: "",
  schoolEmail: "",
  studentNumber: "",
  term: "",
  firstHack: "Yes",
  source: "Discord",
  github: "",
  linkedIn: "",
  goal: "",
  team: "Team",
  gender: "Male",
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

  //Check the current date
  const currentDate = new Date();
  const showForm = currentDate < new Date("2023-3-11");

  //Sends info to database
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    sendemail();
    excelsheet();
    alert("Form Submitted");
  }

  function excelsheet() {
    var settings = {
      url: "https://v1.nocodeapi.com/hackthebreak/google_sheets/cQQFnHAJpMCBNhqI?tabId=Sheet1",
      method: "post",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify([
        [
          data.name,
          data.school,
          data.program,
          data.schoolEmail,
          data.studentNumber,
          data.term,
          data.firstHack,
          data.source,
          data.github,
          data.linkedIn,
          data.goal,
          data.team,
          data.gender,
          data.strengths,
        ],
      ]),
    };

    axios(settings)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //Sends email to student
  function sendemail() {
    var templateParams = {
      name: data.name,
      school: data.school,
      program: data.program,
      schoolEmail: data.schoolEmail,
      studentNumber: data.studentNumber,
      term: data.term,
      firstHack: data.firstHack,
      source: data.source,
      github: data.github,
      linkedIn: data.linkedIn,
      goal: data.goal,
      team: data.team,
      gender: data.gender,
      strengths: data.strengths,
    };
    emailjs
      .send(
        "service_hrmcax9",
        "template_lhuq7ei",
        templateParams,
        "SGkaoZF5tnIMiPpLD"
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

  return (
    <section id="signupform" className={styles.signupSection}>
  
        <div className="container">
          <div className={styles.signupDesc}>
            <h2>Register as a hacker!</h2>
            <p>
              Join Hack the Break 2023 by registering{" "}
              <br className="lineBreak" /> as a hacker in the form below:
            </p>
          </div>
          <form className={styles.signupContainer} onSubmit={onSubmit}>
            <div className={styles.signupPageCounter}>
              {currentStepIndex + 1}/{steps.length}
            </div>
            {step}
            <div className={styles.signupBtnContainer}>
              {!isFirstStep && (
                <button className={styles.nextBtn} type="button" onClick={back}>
                  Back
                </button>
              )}
              <button type="submit" className={styles.submitBtn}>
                {isLastStep ? "Submit" : "Next"}
              </button>
            </div>
          </form>
        </div>
      
    </section>
  );
}

export default SignupForm;
