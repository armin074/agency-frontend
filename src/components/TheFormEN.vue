<template>
    <div>
        
      <form @submit.prevent="sendEmail">
        <h1>Contact us today to find out more about how we can help you.</h1>
        <label for="name">Your Name:</label>
        <input type="text" id="name" v-model="name"  required />
        <label for="email">Your E-Mail Address:</label>
        <input type="email" id="email" v-model="email" required />
        <label for="number">Your Phone Number:</label>
        <input type="number" id="number" v-model="number" required />
        <label for="message">Message:</label>
        <textarea id="message"  v-model="message" required></textarea>
  
        <button type="submit" :disabled="isSending">
          <span v-if="isSending">Sending...</span>
          <span v-else>Send Email</span>
        </button>
       
        <div v-if="isEmailSent" class="success-message">
            Email successfully sent, we will get back to you as soon as possible, thank you for your inquiry.
        </div>
      </form>
    </div>
  </template>
  <style scoped>
  h1{
    color: #1c1c1c;
    font-size: 36px;
    font-family: 'BodegaSans';
    margin-top: 100px;
    text-transform: uppercase;
    display: flex;
    
  }
    form {
        
        display: flex;
        height: 100vh;
        width: 100%;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        margin-top: 40px;
        font-family: 'BodegaSans';
        text-transform: uppercase;
        color: #1c1c1c;
        padding: 15px 100px;
        font-size: 18px;

    }
    
    label, input{
        margin-top: 20px;
        
    }

    input {
        width: 400px;
        height: 35px;
        border: none;
        border-bottom: 1px solid #adadad;
        font-family: 'NeueMontreal';
        text-transform: uppercase;
    }
    input:focus, textarea:focus{
        border: none;
        outline: none;
        border-bottom: 2.5px solid #e9531d;
    }
    textarea {
        border: none;
        border-bottom: 1px solid #adadad;
        width: 400px;
        height: 100%;
        padding-bottom: 50px;
    }

  form button {
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: #e9531d;
  transition: .2s ease-in-out;
  font-family: 'BodegaSans';
  text-transform: uppercase;
  font-size: 16px;
  padding: 10px;
  margin-top: 20px;
  height: 40px;
}
form button:hover{
  border: 1px solid #b9b9b9;
  color: #1c1c1c;
  background-color: transparent;
}
.success-message {
    color: green;
    font-family: 'BodegaSans';
    font-size: 16px;
    text-transform: uppercase;
    width: 60%;
}
@media only screen and (max-width: 976px) {


  form {
    padding: 30px;
    margin-top: 100px;
  }
  h1{
    font-size: 24px;
  }
}
  </style>
  <script>
  import emailjs from 'emailjs-com';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        number: '',
        message: '',
        isSending: false, // flag to track email sending status
        isEmailSent: false, // Flag to track email sent status
      };
    },
    methods: {
      sendEmail() {
        //prevent multiple submissions
        if(this.isSending) return;

        this.isSending = true;

        const templateParams = {
          from_name: this.name,
          from_email: this.email,
          from_number: this.number,
          message_html: this.message,
        };
  
        emailjs.send('inquiries@cultstaff.at', 'template_mg2oi9w', templateParams, 'lCeJKxWvciC0TeBTP')
          .then(response => {
            console.log('Email sent successfully:', response);
            this.isEmailSent = true;
            //hide success message after 10secs
            setTimeout(() => {
            this.hideSuccessMessage();
          }, 10000);
            this.name = '';
            this.email = '';
            this.number = '';
            this.message = '';
            
          })
          .catch(error => {
            console.error('Email sending failed:', error);
          })
          .finally(() => {
            this.isSending = false;
          });
      },
      hideSuccessMessage(){
        this.isEmailSent = false;
      }
    },
  };
  </script>
  