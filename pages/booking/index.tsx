#pages/booking/index.tsx

const [formData, setFormData] = useState({

const [formData, setFormData] = useState({

const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const handleSubmit = async (e) => {

e.preventDefault();


setLoading(true);
setError(null);


const response = await axios.post("/api/bookings", formData);

alert("Booking confirmed!");

catch (error) {
  setError("Failed to submit booking.");
}

finally {
  setLoading(false);
}

<button type="submit" disabled={loading}>

{loading ? "Processing..." : "Confirm & Pay"}

{error && <p className="text-red-500">{error}</p>}

if (!formData.email || !formData.firstName) {
  setError("Please fill all required fields");
  return;
}



interface BookingData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
  propertyId: string; // Crucial: The API needs to know which house is being booked!
  totalPrice: number;
}


const [isSuccess, setIsSuccess] = useState(false);

// Inside try block
const response = await axios.post("/api/bookings", formData);
if (response.status === 201 || response.status === 200) {
  setIsSuccess(true);
}

// In the return
if (isSuccess) {
  return (
    <div className="text-center p-10 bg-green-50 rounded-lg">
      <h2 className="text-2xl font-bold text-green-700">Booking Confirmed!</h2>
      <p>Check your email for the receipt and check-in instructions.</p>
      <button onClick={() => router.push('/')} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Return Home
      </button>
    </div>
  );
}
  


