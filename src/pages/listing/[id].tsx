import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface Address {
    line: string;
    street: string;
    city: string;
    state: string;
    postal_code: string;
}

interface Photo {
    href: string;
}

interface Property {
    address: Address;
    photos: Photo[];
    description: string;
    price: number;
}

export default function Listing() {
    const router = useRouter();
    const { id } = router.query;
    const [property, setProperty] = useState<Property | null>(null);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await fetch(`https://us-real-estate-listings.p.rapidapi.com/v2/property?property_url=${encodeURIComponent(id as string)}`, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Host': 'us-real-estate-listings.p.rapidapi.com',
                        'X-RapidAPI-Key': 'api-key'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data: Property = await response.json();
                setProperty(data);
            } catch (error) {
                console.error(error);
            }
        };

        if (id) {
            fetchProperty();
        }
    }, [id]);

    return (
        <>
            <Head>
                <title>Listing</title>
            </Head>
            <main className="max-w-4xl mx-auto px-4 py-8">
                {property ? (
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{property.address.line}</h1>
                        <div className="flex flex-wrap mb-8">
                            {property.photos.map((photo, index) => (
                                <img key={index} src={photo.href} alt={`Photo ${index + 1}`} className="w-1/3 h-auto mb-4" />
                            ))}
                        </div>
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold">Description</h2>
                            <p>{property.description}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold">Address</h2>
                            <p>{property.address.street}, {property.address.city}, {property.address.state} {property.address.postal_code}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-2xl font-bold">Price</h2>
                            <p>${property.price}</p>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </main>
        </>
    );
}
