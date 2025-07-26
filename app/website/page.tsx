export default function Website() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          🌐 The IConGCED Website
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome to The 10th International Conference on Global Citizenship Education
        </p>
        <div className="space-y-4">
          <p className="text-gray-600">
            <strong>Conference Theme:</strong><br/>
            Democracy in the Post-Truth Crisis: The Role of GCED
          </p>
          <p className="text-gray-600">
            <strong>Date:</strong> August 27-28, 2025<br/>
            <strong>Venue:</strong> Seoul, South Korea
          </p>
        </div>
        <div className="mt-8 p-4 bg-blue-100 rounded-lg">
          <p className="text-sm text-blue-800">
            This is a demo page for the IConGCED Website button.<br/>
            In a real implementation, this would redirect to the actual conference website.
          </p>
        </div>
      </div>
    </div>
  )
}