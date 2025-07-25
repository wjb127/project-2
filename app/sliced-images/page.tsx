export default function SlicedImages() {
  const deployedUrl = 'https://project-2-phi-ten.vercel.app'
  
  const slicedImages = [
    {
      name: 'top.png',
      title: '📄 상단 부분',
      description: '헤더, 제목, Overview 섹션',
      url: `${deployedUrl}/images/sliced/top.png`,
      clickable: false
    },
    {
      name: 'register-onsite.png', 
      title: '🔵 Register On-site 버튼',
      description: '왼쪽 등록 버튼 (클릭 가능)',
      url: `${deployedUrl}/images/sliced/register-onsite.png`,
      clickable: true,
      link: `${deployedUrl}/register-onsite`
    },
    {
      name: 'register-korean.png',
      title: '🔵 현장 참가 등록 버튼', 
      description: '오른쪽 등록 버튼 (클릭 가능)',
      url: `${deployedUrl}/images/sliced/register-korean.png`,
      clickable: true,
      link: `${deployedUrl}/register-korean`
    },
    {
      name: 'live.png',
      title: '🔴 LIVE 버튼',
      description: 'LIVE 참가 버튼 (클릭 가능)',
      url: `${deployedUrl}/images/sliced/live.png`,
      clickable: true,
      link: `${deployedUrl}/live`
    },
    {
      name: 'bottom.png',
      title: '📄 하단 부분', 
      description: 'Programme, 주최기관 정보',
      url: `${deployedUrl}/images/sliced/bottom.png`,
      clickable: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🔪 슬라이싱된 이미지 미리보기
          </h1>
          <p className="text-gray-600">
            GCED Conference 이미지를 5개 조각으로 나눈 결과입니다
          </p>
        </div>

        <div className="grid gap-8">
          {slicedImages.map((image, index) => (
            <div key={image.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {image.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      {image.description}
                    </p>
                    <code className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded mt-2 inline-block">
                      {image.name}
                    </code>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-400">
                      #{index + 1}
                    </span>
                    {image.clickable && (
                      <div className="mt-2">
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          클릭 가능
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 bg-gray-50">
                  {image.clickable ? (
                    <a href={image.link} target="_blank" rel="noopener noreferrer" 
                       className="block hover:opacity-80 transition-opacity">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="w-full h-auto max-w-md mx-auto rounded border hover:shadow-lg transition-shadow"
                      />
                      <p className="text-center text-sm text-blue-600 mt-2 hover:underline">
                        클릭하면 {image.link}로 이동합니다
                      </p>
                    </a>
                  ) : (
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-auto max-w-md mx-auto rounded border"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            💡 이메일에서 사용하는 방법
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800 text-sm">
            <li>각 이미지 조각이 테이블의 행으로 배치됩니다</li>
            <li>클릭 가능한 이미지들은 &lt;a&gt; 태그로 감싸져 링크가 됩니다</li>
            <li>이메일 클라이언트에서 CSS 포지셔닝 없이 안정적으로 작동합니다</li>
            <li>메인 페이지에서 완성된 HTML 코드를 복사해서 사용하세요</li>
          </ol>
        </div>

        <div className="text-center mt-8">
          <a 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            ← 메인 페이지로 돌아가기
          </a>
        </div>
      </div>
    </div>
  )
}