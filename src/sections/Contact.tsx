import styles from '../styles/Contact.module.css';
import TextField from '@mui/material/TextField';

function Contact() {

    return(
        <section id="contact">
            <div className="container">
                <h2>Send Us A Message</h2>
                <p>Question still unanswered? Interested in sponsoring Hack the Break 2023? <span className={styles.faqHighlight}>Reach out to us below:</span></p>
                <form className={styles.contactForm}>
                    <div className={styles.contactCols}>
                        <TextField 
                            required
                            label="Your Name"
                            fullWidth
                        />
                        <TextField 
                            required
                            label="Your Email Address"
                            fullWidth
                        />
                        <TextField 
                            required
                            label="Subject Line"
                            fullWidth
                        />
                    </div>
                    <div className={styles.contactCols}>
                        <TextField 
                            required
                            label="Message here"
                            fullWidth
                            multiline
                            rows={3}
                        />
                        <button 
                            type="submit"
                            className={styles.sendBtn}
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;