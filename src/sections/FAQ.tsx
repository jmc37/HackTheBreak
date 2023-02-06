import React from 'react';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordionSummary, {
    AccordionSummaryProps,
  } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from '../styles/FAQ.module.css';
import abstractFAQ from '../assets/faq_graphic.jpg';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        boxShadow: `0px 0.25rem 0.25rem rgba(0, 0, 0, 0.15)`,
        backgroundColor: `#EEEEEE`,
        maxWidth: `600px`,
    }));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ArrowDropDownIcon sx={{ fontSize: '2rem', fill: '#000' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: `#FFA53B`,
    fontSize: `24px`,
}))
    
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) =>({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));

function FAQ() {

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = 
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return(
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
                        <Accordion className={styles.accordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={styles.accordion} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={styles.accordion} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={styles.faqText}>
                                    Do we need to bring power bars?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={styles.faqText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={styles.accordion} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={styles.faqText}>
                                    Can a 'noob' still succeed?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={styles.faqText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={styles.accordion} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={styles.accordion} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={styles.faqText}>
                                    Can we cancel after registering?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={styles.faqText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={styles.accordion} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={styles.faqText}>
                                    Frequently Asked Question 7
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={styles.faqText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={styles.accordion} expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={styles.faqText}>
                                Frequently Asked Question 8
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={styles.faqText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;