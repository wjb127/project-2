export default function KoreanWebsite() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          🇰🇷 국제회의 홈페이지
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          제10회 세계시민교육 국제회의에 오신 것을 환영합니다
        </p>
        <div className="space-y-4">
          <p className="text-gray-600">
            <strong>회의 주제:</strong><br/>
            탈진실 시대의 민주주의: 세계시민교육의 역할
          </p>
          <p className="text-gray-600">
            <strong>일시:</strong> 2025년 8월 27일-28일<br/>
            <strong>장소:</strong> 서울, 대한민국
          </p>
        </div>
        <div className="mt-8 p-4 bg-blue-100 rounded-lg">
          <p className="text-sm text-blue-800">
            이것은 국제회의 홈페이지 버튼을 위한 데모 페이지입니다.<br/>
            실제 구현에서는 공식 회의 웹사이트로 리디렉션됩니다.
          </p>
        </div>
      </div>
    </div>
  )
}