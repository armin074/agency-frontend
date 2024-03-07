<template>
    <div>
        
      <form @submit.prevent="sendEmail">
        <h1>Na kontaktoni që sot, për të mësuar më shumë, se si mund t ju ndihmojmë</h1>
        <p>I ofrojmë ndihmë dhe personave të cilët nuk kanë nënshtetësi europiane apo nuk kanë leje pune në Europë. Qëllimi jonë është që të Ju japim informacione relevante, këshilla dhe resurse me të cilat e keni më lehtë të drejtoni proçesin e kërkimit të punës dhe të arrini deri tek qëllimet e Juaja profesionale. Në rast se keni ndonjë pyetje apo Ju nevojitet ndonjë sqarim , atëherë na u lajmëroni!</p>
        <label for="name">Emri juaj:</label>
        <input type="text" id="name" v-model="name"  required />
        <label for="email">E-maili juaj:</label>
        <input type="email" id="email" v-model="email" required />
        <label for="number">Numri i telefonit:</label>
        <input type="number" id="number" v-model="number" required />
        <label for="message">Mesazhi:</label>
        <textarea id="message"  v-model="message" required placeholder="Opciono"></textarea>
  
        <button type="submit" :disabled="isSending">
          <span v-if="isSending">Duke dërguar...</span>
          <span v-else>Nise emailin</span>
        </button>
       
        <div v-if="isEmailSent" class="success-message">
            Mesazhi u dërgua me sukses, ekipi ynë do t'ju kontaktojë sa më shpejt të jetë e mundur.
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
    line-height: 1em;
    padding-bottom: 3px;
    
  }

  p{
    font-family: 'NeueMontreal';
    font-size: 12px;
    line-height: 1.2;
   

  }
    form {
        
        display: flex;
        height: 100%;
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
  