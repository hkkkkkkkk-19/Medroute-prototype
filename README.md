# MedRoute Prototype

MedRoute is an AI-assisted platform designed to redistribute unused but safe medicines to patients who need them before they expire. The system connects donors, receivers, delivery partners, NGOs, and public health authorities to enable safe, verified, and efficient medicine redistribution while reducing pharmaceutical waste.

## Core Features

- **Donor Medicine Upload:** Donors submit unused medicines with details and images.
- **Receiver Verification:** Receivers validate their account using an Ayushman ID (prototype validation: `ABC`).
- **Prescription Upload:** Patients upload prescriptions which are verified before processing requests.
- **Medicine Matching:** Requests are prioritized based on proximity, urgency, and expiry constraints.
- **Secure Delivery:** Delivery scheduling with estimated time and OTP-based handover verification.
- **Request Tracking:** Receivers can view previous requests and delivery status.
- **AI Monitoring:** Machine learning modules detect suspicious request patterns to prevent misuse or black-market diversion.

## Setup

Clone the repository:

```bash
git clone https://github.com/hkkkkkkkk-19/Medroute-prototype.git
cd Medroute-prototype
```

Install dependencies:

```bash
npm install
```

Create `.env.local`:

```env
GEMINI_API_KEY=your_gemini_api_key

AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_region
AWS_BUCKET_NAME=medroute-storage
```

Run the application:

```bash
npm run dev
```

The app will start locally for development.
You can also access the live prototype here : https://medroute-prototype-ezqe.vercel.app/ 
