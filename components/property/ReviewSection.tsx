interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  date: string;
}

const ReviewSection = ({ propertyId }: { propertyId: string }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // ... (Your useEffect fetching logic)

  if (loading) return <div className="animate-pulse">Loading reviews...</div>;

  return (
    <div className="mt-8 border-t pt-8">
      <h3 className="text-2xl font-semibold mb-6">
        {reviews.length} Reviews
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-2">
            <div className="flex items-center gap-3">
              <img 
                src={review.user.avatar} 
                className="w-12 h-12 rounded-full" 
                alt={review.user.name} 
              />
              <div>
                <p className="font-bold">{review.user.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
            <div className="flex text-yellow-500">
               {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
            </div>
            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
