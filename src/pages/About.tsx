import Head from 'next/head';
import Image from 'next/image';
import Banner from './Banner';
import BottomBar from './BottomBar';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <main className="relative bg-gray-100 h-screen overflow-y-auto">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/city.png"
            alt="bg"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md relative z-10">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-700 mb-4">Homalyzer provides a futuristic spin on the home buying experience!</p>
          <p className="text-gray-700 mb-4">Our agents offer:</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>24/7 Service: Our agents are available any time of day</li>
            <li>Tailored Recommendations: Specific suggestions based on your criteria</li>
            <li>Cutting-edge Technology: Utilizing the latest AI tech to better assist our customers</li>
          </ul>
        </div>
      </main>
    </>
  );
}
