import "./Contact.css";
import React from 'react'

export default function Contact() {
  return (
    <> 
 <section class="contact-page-section">
      <div class="container">
          <div class="sec-title">
              <div class="title">Contact Us</div>
            </div>
            <div class="inner-container">
              <div class="row clearfix">
                
                 
                    <div class="form-column col-md-8 col-sm-12 col-xs-12">
                      <div class="inner-column">
                          
                           
                            <div class="contact-form">
                                <form method="post" action="sendemail.php" id="contact-form">
                                    <div class="row clearfix">
                                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="text" name="name" value="" placeholder="Name" required />
                                        </div>
                                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="email" name="email" value="" placeholder="Email" required />
                                        </div>
                                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="text" name="subject" value="" placeholder="Subject" required />
                                        </div>
                                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="text" name="phone" value="" placeholder="Phone" required />
                                        </div>
                                        <div class="form-group col-md-12 col-sm-12 co-xs-12">
                                            <textarea name="message" placeholder="Massage"></textarea>
                                        </div>
                                        <div class="form-group col-md-12 col-sm-12 co-xs-12">
                                            <button type="submit" class="theme-btn btn-style-one">Send Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                           
                            
                        </div>
                    </div>
                    
                   
                    <div class="info-column col-md-4 col-sm-12 col-xs-12">
                      <div class="inner-column">
                          <h2>Contact Info</h2>
                            <ul class="list-info">
                              <li><i class="fas fa-globe"></i>Zarqa-36street-building NO.35</li>
                                <li><i class="far fa-envelope"></i>INFO@EXPERT-EX.COM</li>
                                <li><i class="fas fa-phone"></i>079-84699-07 <br/> 077-80819-20</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  </>
);
  };

