const property = mockProperty

#pages/property/[id].tsx

/property/123
/property/45
/property/abc

const router = useRouter();
const { id } = router.query;

URL → /property/7
id  → "7"

const [property, setProperty] = useState(null);

const [loading, setLoading] = useState(true);

useEffect(() => {

if (!id) return;

const response = await axios.get(`/api/properties/${id}`);

setProperty(response.data);

catch (error) {
  console.error("Error fetching property details:", error);
}

finally {
  setLoading(false);
}

if (loading) {
  return <p>Loading...</p>;
}

if (!property) {
  return <p>Property not found</p>;
}

return <PropertyDetail property={property} />;


interface PropertyDetailProps {
  property: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[]; // Note: Detail pages often have multiple images
    amenities: string[];
    host: {
      name: string;
      avatar: string;
    };
  };
}

const PropertyDetail = ({ property }: PropertyDetailProps) => {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
      
      {/* Image Gallery Grid */}
      <div className="grid grid-cols-2 gap-2 mb-6 rounded-xl overflow-hidden">
        {property.images.map((img, index) => (
          <img key={index} src={img} alt={property.name} className="w-full h-64 object-cover" />
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">Hosted by {property.host.name}</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">{property.description}</p>
          
          <div className="mt-6">
            <h3 className="font-bold text-lg border-b pb-2">What this place offers</h3>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {property.amenities.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  ✅ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* This is where the Booking Form will likely go in the next task */}
        <aside className="w-full md:w-1/3 border p-6 rounded-xl shadow-lg h-fit">
          <p className="text-2xl font-bold">${property.price} <span className="text-base font-normal">/ night</span></p>
          {/* Booking form component will be integrated here */}
        </aside>
      </div>
    </main>
  );
};

export default PropertyDetail;
