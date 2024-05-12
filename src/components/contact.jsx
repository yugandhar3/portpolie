import React, { useState } from 'react';


function Contact() {
    const [result, setResult] = React.useState("");
    console.log("result", result)
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const onSubmit = async (event) => {
        console.log("event.currentTarget", event.currentTarget)
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "5647f5ae-9656-4d5b-9883-f4e365ee3435");
        formData.append("subject", "Custom Subject Here");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setShowToast(true);
        setToastMessage("Form submitted successfully!");
        scrollToIntroduction();

        if (data.success) {
            setResult("Form Submitted Successfully");
            setTimeout(() => {
                setShowToast(false);

            }, 3000);
        } else {
            console.log("Error", data);
            // setResult(data.message);
        }
    };
    const scrollToIntroduction = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <section className="colorlib-narrow-content" data-section="contact">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">Contact</span>
                    <h2 className="colorlib-heading animate-box">Get in Touch</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" name="message" rows="3" placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ marginBottom: '30px' }}>Submit</button>
                    </form>
                </div>
            </div>
            {showToast && <div className="toast">{toastMessage}</div>}
        </section>
    );
}

export default Contact;
