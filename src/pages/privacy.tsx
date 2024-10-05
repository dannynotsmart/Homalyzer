import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Banner from './Banner'; 
import BottomBar from './BottomBar'; 

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy</title>
      </Head>
      <main>
        {/* Image background */}
        <Image
          src="/assets/city.png"
          alt="bg"
          fill
          sizes="100vw"
          style={{
            objectFit: 'fill'
          }}
        />
        <div className="bg-gradient-to-r from-transparent via-white to-transparent backdrop-filter backdrop-blur-xl border border-black p-8 rounded-lg m-4">
          <b>Homalyzer Privacy Policy</b>
          <p>1. Information We Collect:</p>
          <p>a. <strong>Personal Information:</strong> When you create an account on Homalyzer, we collect basic personal information such as your name, email address, and password.</p>
          <p>b. <strong>Profile Information:</strong> You have the option to provide additional information to personalize your profile, such as your gender, age, and preferences.</p>
          <p>2. How We Use Your Information:</p>
          <p>a. <strong>Service Provision:</strong> We use your personal information to provide and improve our services, personalize your experience, and respond to your inquiries.</p>
          <p>b. <strong>Communication:</strong> We may use your email address to send you important updates, newsletters, or other communications related to Homalyzer. You can opt out of promotional emails at any time.</p>
          <p>7. Changes to this Privacy Policy:</p>
          <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on our website.</p>
          <p>8. Contact Us:</p>
          <p>If you have any questions, concerns, or requests regarding your privacy, please contact us at <a href="mailto:contact@homalyzer.com">contact@homalyzer.com</a>.</p>
        </div>
      </main>
    </>
  );
}
