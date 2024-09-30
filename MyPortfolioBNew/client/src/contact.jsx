import '../src/contact.css';
import { useState } from 'react'; 

export default function Contact() {
   
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

   
    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        alert('Thank you for your message!'); 
        setFormData({
            firstName: '',
            lastName: '',
            contactNumber: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
            <h2>Contact Me</h2>

          
            <div className="contact-info">
                <p><i>Call me on: <strong>4162582954</strong></i></p>
                
                <p>Email: <a href="fatimamawaj1@gmail.com">Fatimamawaj1@gmail.com</a></p>
            </div>

           
            <form id="ffp" onSubmit={handleSubmit}>
                <label htmlFor="myFName">*First Name:</label>
                <input
                    type="text"
                    id="myFName"
                    name="firstName"
                    required
                    autoFocus
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <br /><br />

                <label htmlFor="myLName">*Last Name:</label>
                <input
                    type="text"
                    id="myLName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <br /><br />

                <label htmlFor="myContactNumber">*Contact Number:</label>
                <input
                    type="text"
                    id="myContactNumber"
                    name="contactNumber"
                    required
                    value={formData.contactNumber}
                    onChange={handleChange}
                />
                <br /><br />

                <label htmlFor="myEmail">*Email:</label>
                <input
                    type="email"
                    id="myEmail"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <br /><br />

                <label htmlFor="myMessage">Message:</label>
                <textarea
                    id="myMessage"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <br /><br />

                <input type="submit" className="submit" value="Submit" />
            </form>
        </>
    );
}
