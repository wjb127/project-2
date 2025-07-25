export default function Live() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full mb-4">
              <div className="w-3 h-3 bg-red-300 rounded-full mr-2 animate-pulse"></div>
              LIVE
            </div>
            <h1 className="text-3xl font-bold text-red-900 mb-4">
              LIVE 온라인 참가
            </h1>
            <p className="text-gray-600 text-lg">
              실시간 스트리밍으로 GCED Conference에 참여하세요
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-red-800 mb-3">
                LIVE 스트리밍 정보
              </h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center">
                  <span className="font-semibold w-20">일시:</span>
                  <span>2024년 3월 15일 (금) 09:00 - 18:00</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-20">플랫폼:</span>
                  <span>YouTube Live, Zoom</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-20">참가비:</span>
                  <span className="text-red-600 font-bold">무료</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">LIVE 참가 혜택</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 실시간 Q&A 참여</li>
                <li>• 채팅을 통한 네트워킹</li>
                <li>• 발표 자료 다운로드</li>
                <li>• 녹화본 7일간 제공</li>
                <li>• 참가 인증서 발급</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-800 text-center">
                <strong>📺 스트리밍 링크는 등록 후 이메일로 발송됩니다</strong>
              </p>
            </div>

            <div className="text-center space-y-3">
              <button className="w-full bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition duration-200 text-lg">
                LIVE 참가 등록하기
              </button>
              <p className="text-sm text-gray-500">
                등록 마감: 2024년 3월 14일 23:59
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}