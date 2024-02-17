// services/email.js
import emailjs from '@emailjs/browser';
import { KEY, SID, TID } from '@/config/constants'; 

export const sendEmail = async (data) => {
  try {
    const form = data;
    await emailjs.sendForm(SID, TID, form, {
      publicKey: KEY,
    });
    return true; 
  } catch (error) {
    
    return false; 
  }
};
