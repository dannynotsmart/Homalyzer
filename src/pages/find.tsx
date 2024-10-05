import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Banner from './Banner';
import Link from 'next/link';

export default function Find() {
  const router = useRouter();
  const [properties, setProperties] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const data = router.query.data ? JSON.parse(router.query.data as string) : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://homeharvest.bunsly.com/api/v1/harvest', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            location: data.location,
            listing_type: 'for_sale',
            file_type: 'csv',
            mls_only: false
          })
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const csvData = await response.text();
        const rows = csvData.split('\n');
        const headers = rows[0].split(',');
        const propertyData = rows.slice(1).map(row => {
          const columns = row.split(',');
          return headers.reduce((obj, key, index) => {
            obj[key] = columns[index];
            return obj;
          }, {} as { [key: string]: string });
        });

        setProperties(propertyData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    if (data && data.location) {
      fetchData();
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>Search Results - Find My Home</title>
      </Head>
      <main>
        <Banner />
        <h1 className="text-4xl font-bold text-center mt-8 mb-4">Search Results</h1>
        {isLoading ? (
          <p className="text-6xl text-center mt-16">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {properties.map((property, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                <img src={property.primary_photo} alt="Property" className="w-full mb-4" />
                <p className="text-xl mb-2 text-center">{property.street}, {property.unit}</p>
                <p className="text-lg mb-2 text-center">{property.city}, {property.state}, {property.zip_code}</p>
                <Link href={property.property_url} passHref>
                  <a className="bg-blue-500 text-white rounded-lg px-4 py-2">View Listing</a>
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
