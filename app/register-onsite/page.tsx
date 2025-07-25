export default function RegisterOnsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">
              Register On-site
            </h1>
            <p className="text-gray-600 text-lg">
              GCED Conference 현장 등록 페이지입니다
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                현장 등록 안내
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>• 회의장 현장에서 직접 등록 가능합니다</li>
                <li>• 등록비: 100,000원 (현금/카드 결제)</li>
                <li>• 등록 시간: 오전 8:30 - 9:30</li>
                <li>• 위치: 컨퍼런스 홀 1층 로비</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">준비물</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• 신분증</li>
                <li>• 명함 (선택사항)</li>
                <li>• 등록비</li>
              </ul>
            </div>

            <div className="text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                현장 등록 문의: 02-1234-5678
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}