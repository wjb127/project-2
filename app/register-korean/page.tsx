export default function RegisterKorean() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-900 mb-4">
              현장 참가 등록
            </h1>
            <p className="text-gray-600 text-lg">
              GCED 국제회의 현장 참가 신청
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-green-800 mb-3">
                등록 정보
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <strong>일시:</strong> 2024년 3월 15일 (금)
                </div>
                <div>
                  <strong>시간:</strong> 09:00 - 18:00
                </div>
                <div>
                  <strong>장소:</strong> 서울 컨벤션센터
                </div>
                <div>
                  <strong>등록비:</strong> 80,000원
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">포함 사항</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• 회의 자료집</li>
                <li>• 점심 및 다과</li>
                <li>• 네트워킹 세션</li>
                <li>• 수료증</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <p className="text-yellow-800">
                <strong>마감 안내:</strong> 현장 등록은 선착순 100명까지 가능합니다.
              </p>
            </div>

            <div className="text-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200">
                온라인 사전등록 바로가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}