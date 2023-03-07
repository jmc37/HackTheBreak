import React from "react";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "../styles/FAQ.module.css";
import abstractFAQ from "../assets/faq_graphic.jpg";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  boxShadow: `0px 0.25rem 0.25rem rgba(0, 0, 0, 0.15)`,
  backgroundColor: `#EEEEEE`,
  maxWidth: `600px`,
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowDropDownIcon sx={{ fontSize: "2rem", fill: "#000" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: `#FFA53B`,
  fontSize: `24px`,
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section id="faq">
      <div className="container">
        <h2>FAQ</h2>
        <div className={styles.faqContainer}>
          <img
            className={styles.faqGraphic}
            src={abstractFAQ}
            alt="FAQ Section Graphic"
          />
          <div className={styles.faqBox}>
            <Accordion
              className={styles.accordion}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.faqText}>
                  Who is eligible to participate?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.faqText}>
                  This event is open to Post-Secondary students in BC Canada
                  with a limited number of spots available. Participants must be
                  currently enrolled in a post-secondary school and provide
                  email/student number to confirm enrollment.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles.accordion}
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.faqText}>
                  What if we don't have a team?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.faqText}>
                  That's no problem! After signing up a discord link will be
                  sent to your email with dedicated channels for finding a team.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles.accordion}
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.faqText}>
                  What is a hackathon?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.faqText}>
                  A hackathon is a collaborative event where individuals,
                  particularly programmers, designers, and other tech
                  enthusiasts, come together to create new and innovative
                  software or hardware projects within a short period of time.
                  The main objective of a hackathon is to encourage participants
                  to develop prototypes, products, or solutions that address
                  real-world problems through innovation, with the added
                  incentive of potentially winning prizes. During "Hack the
                  Break," participants will have access to mentors who can
                  provide guidance and support as they work in teams of up to
                  five members to develop their final projects. The competition
                  culminates in the presentation of the completed projects to a
                  panel of judges made up of BCIT instructors and industry
                  professionals, who will evaluate the projects and determine
                  the winning teams.{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles.accordion}
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.faqText}>
                  What if I have no experience?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.faqText}>
                  No worries! Hack the Break is open to people of all skill
                  levels and backgrounds. Over 40% of last years "Hack the
                  Break" participants were first time hackers!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles.accordion}
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.faqText}>
                  Are we allowed to stay overnight?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.faqText}>
                  Hack the Break will be hosted online so no venue will be
                  provided. Thus, there will be no venue to stay overnight at.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles.accordion}
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.faqText}>
                  What is the application deadline?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.faqText}>
                  Hacker applications will open Feb 23rd 2023, and will close
                  March 7th 2023. We recomend signing up as soon as possible as
                  there are limited spots.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles.accordion}
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.faqText}>
                  Can I submit past projects?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.faqText}>
                  No, all projects must be created from scratch. Any projects
                  found to be worked on previously will be disqualified. If you
                  have any questions regarding the rules please email:
                  hackthebreakvancouver@gmail.com
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles.accordion}
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.faqText}>
                  How do I confirm my team?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.faqText}>
                  Teams will submit their projects on the Devpost link sent to
                  their email following their registration. Please make sure
                  either your school email or github id is properly linked to
                  the team when submitting.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles.accordion}
              expanded={expanded === "panel9"}
              onChange={handleChange("panel9")}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.faqText}>
                  How big can my team be?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.faqText}>
                  Teams can consist of 1 member up to 5. We strongly suggest
                  people team up to even out the workload between participants.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles.accordion}
              expanded={expanded === "panel10"}
              onChange={handleChange("panel10")}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.faqText}>
                  Does my whole team have to register?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.faqText}>
                  Yes, all members of your team must fill out a registration
                  form to confirm their spot in "Hack the Break" and join the
                  devpost team.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className={styles.htbContact}>
          <p>
            Questions still unanswered? Interested in sponsoring Hack the Break
            2023?
          </p>
          <p>
            <span className={styles.reachOut}>Reach out to us at:</span>
          </p>
          <p>
            <a
              className={styles.htbEmail}
              href="mailto:hackthebreakvancouver@gmail.com"
            >
              hackthebreakvancouver@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
