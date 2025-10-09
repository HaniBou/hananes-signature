import emailjs from '@emailjs/browser';

// Configuration EmailJS
export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
};

// Initialiser EmailJS
export const initEmailJS = () => {
  emailjs.init(emailConfig.publicKey);
};

// Fonction email
export const sendEmail = async (formData: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Non fourni',
        subject: formData.subject,
        message: formData.message,
      }
    );

    return { success: true, response };
  } catch (error: any) {
    return { success: false, error: error.message || 'Erreur lors de l\'envoi' };
  }
};