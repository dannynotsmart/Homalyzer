import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Banner from './Banner'; 
import BottomBar from './BottomBar'; 

export default function Home() {
  return (
    <>
      <Head>
        <title>Find Your Dream Home</title>
      </Head>
      <main className="bg-gray-100 h-screen overflow-y-auto relative">

        <Image
          src="/assets/bg.png"
          alt="bg"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">

          <div className="bg-gradient-to-r from-transparent via-white to-transparent backdrop-filter backdrop-blur-xl border border-black p-8 rounded-lg m-4">
            
            <div className="text-center">
              <Banner />

              <Link href="https://www.youtube.com/watch?v=hP_BAixhwEI">
              <p className="text-lg text-black-300 mb-8">
                Discover the perfect home that matches your preferences.
              </p>
                </Link>

              <Link href="/chat" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
                Start Your Chat
              </Link>
            </div>

          </div>
        </div>

        <BottomBar />
      </main>
    </>
  );
}
