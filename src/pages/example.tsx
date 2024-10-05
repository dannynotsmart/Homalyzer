import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Parallax from 'parallax-js';

export default function Example() {
  useEffect(() => {
    const scene = document.getElementById('scene');

    if (scene) {
      const parallaxInstance = new Parallax(scene);

      return () => {
        if (parallaxInstance) {
          parallaxInstance.destroy();
        }
      };
    }

  }, []);

  return (
    <>
      <Head>
        <title>Example</title>
        <script defer src="/js/parallax.min.js"></script>
      </Head>
      <main>
        <Image src="/assets/bg.png" alt="bg" fill sizes="100vw" />

        <div id="scene">
          <div data-depth=".1">
            <Image src="/assets/clouds.png" alt="" width="280" height="280" />
          </div>
          <div data-depth=".9">
            <Image src="/assets/birds.png" alt="" width="280" height="280" />
          </div>
          <div data-depth="3">
            <Image src="/assets/house.png" alt="" width="320" height="560" />
          </div>
        </div>
      </main>
    </>
  );
}
