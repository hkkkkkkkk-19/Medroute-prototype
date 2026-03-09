
export const sendWelcomeEmail = async (email: string) => {
  console.log(`[MailService] Sending welcome email to: ${email}`);
  
  const subject = "Welcome to MedRoute - Your Smart Medicine Redistribution Network";
  const body = `
    Hello,
    
    Welcome to MedRoute! We are thrilled to have you join our mission to eliminate medicine waste and ensure life-saving treatments reach those who need them most.
    
    MedRoute is a decentralized, smart redistribution network that connects donors, NGOs, and healthcare providers. By using our platform, you are helping to:
    - Reduce medical waste by redistributing unused, unexpired medications.
    - Provide affordable healthcare to underserved communities.
    - Ensure transparency and safety through our clinical audit and tracking system.
    
    Whether you are a donor, a healthcare provider, or a partner organization, your contribution makes a real difference.
    
    Get started by exploring your dashboard and seeing how you can contribute to the grid.
    
    Stay healthy,
    The MedRoute Team
  `;

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`[MailService] Email sent successfully to ${email}`);
      console.log(`Subject: ${subject}`);
      console.log(`Body: ${body}`);
      resolve(true);
    }, 1000);
  });
};
