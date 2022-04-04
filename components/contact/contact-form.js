import classes from './contact-form.module.css';

const ContactForm = () => {
  return (
    <section className={classes.contact}>
      <h1>Contact Form</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required />
          </div>

          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' required />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea id='name' rows='5' required />
        </div>

        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
};
export default ContactForm;
