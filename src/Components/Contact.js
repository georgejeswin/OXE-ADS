import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
    <div className="contact">
      <div className="contact-container">
       
        <div className="contact-content">
          <img src="./logo/contact.png" alt="" />
        </div>
        <div className="contact-head">
          <h1>Contact Us</h1>
         
          <div className="card">
              <div className="card-text">
                <h1>New Biz</h1>
                <p>Oxeadsmedia@gmail.com</p>
                <p>+8289906276</p>
              </div>  
              <div className="card-text">
                <h1>General</h1>
                <p>Oxeadsmedia@gmail.com</p>
                <p>+8289906276</p>
              </div>  
              <div className="card-text">
                <h1>Career</h1>
                <p>Oxeadsmedia@gmail.com</p>
                <p>+8289906276</p>
              </div>  
          <div class="drops">
    <div class="drop drop-1"></div>
    <div class="drop drop-2"></div>
    <div class="drop drop-3"></div>
    <div class="drop drop-4"></div>
    {/* <div class="drop drop-5"></div> */}
            </div>
   
       </div>
</div>
          </div>
         
        </div>
       <div className="contact-form">
       <div className="card card-2">
       <input type="text" placeholder="Name"/>
       <input type="email" placeholder="Email"/>
       <input type="number" placeholder="Phone"/>
       <textarea type="text" rows="6"  placeholder="Messages">
      </textarea>
      <button className="btn-2"><span>Send</span><i class="fas fa-paper-plane"></i></button>
          <div class="drops">
    <div class="drop drop-5"></div>
    <div class="drop drop-2"></div>
    <div class="drop drop-7"></div>
    <div class="drop drop-4"></div>
    <div class="drop drop-6"></div>
            </div>
            </div>
       </div>
       
      
      </>
    
  );
};

export default Contact;
