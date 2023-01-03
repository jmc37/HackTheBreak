import { FormEvent, useState, useRef } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { UserForm } from "./UserForm";
import { useMultistepForm } from "./useMultiStepForm";
import emailjs from "@emailjs/browser";

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

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  school: "BCIT",
  program: "",
  schoolEmail: "",
  term: "",
  firstHack: "Yes",
  source: "Discord",
  github: "",
  linkedIn: "",
  goal: "",
  team: "Team",
  strengths: "",
};

function App() {
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
  function sendemail() {
    var templateParams = {
      to_name: data.firstName,
      student: data.schoolEmail,
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
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Submit" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
