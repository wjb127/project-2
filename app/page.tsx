import Link from 'next/link'

export default function Home() {
  const deployedUrl = 'https://project-2-phi-ten.vercel.app'

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">GCED Conference Email Resources</h1>
        
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">이미지 URL</h2>
          <div className="bg-gray-100 p-4 rounded">
            <code className="text-sm">{deployedUrl}/images/gced-conference.png</code>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            이 URL을 이메일 템플릿의 이미지 src에 사용하세요.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">사용 가능한 리소스</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">🖼️ 이미지 및 템플릿</h3>
            <ul className="space-y-2 ml-4">
              <li>
                <Link href="/images/gced-conference.png" className="text-blue-600 hover:underline">
                  📷 GCED Conference 원본 이미지
                </Link>
              </li>
              <li className="ml-4">
                <details className="text-sm">
                  <summary className="cursor-pointer text-gray-600 hover:text-blue-600">🔪 슬라이싱된 이미지들 보기</summary>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>
                      <Link href="/images/sliced/top.png" className="text-blue-500 hover:underline text-xs">
                        📄 상단 부분 (top.png)
                      </Link>
                    </li>
                    <li>
                      <Link href="/images/sliced/register-onsite.png" className="text-blue-500 hover:underline text-xs">
                        🔵 Register On-site 버튼 (register-onsite.png)
                      </Link>
                    </li>
                    <li>
                      <Link href="/images/sliced/register-korean.png" className="text-blue-500 hover:underline text-xs">
                        🔵 현장 참가 등록 버튼 (register-korean.png)
                      </Link>
                    </li>
                    <li>
                      <Link href="/images/sliced/live.png" className="text-blue-500 hover:underline text-xs">
                        🔴 LIVE 버튼 (live.png)
                      </Link>
                    </li>
                    <li>
                      <Link href="/images/sliced/bottom.png" className="text-blue-500 hover:underline text-xs">
                        📄 하단 부분 (bottom.png)
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/sliced-images" className="text-blue-600 hover:underline">
                  🔪 슬라이싱된 이미지 미리보기 페이지
                </Link>
              </li>
              <li>
                <Link href="/templates/correct-button-positions.html" className="text-blue-600 hover:underline">
                  🎯 클릭 가능한 버튼 템플릿 (데모)
                </Link>
                <span className="text-xs text-gray-500 ml-2">- Ctrl+D로 디버그 모드</span>
              </li>
              <li>
                <Link href="/templates/email-ready-updated.html" className="text-blue-600 hover:underline">
                  📧 이메일용 HTML 템플릿
                </Link>
              </li>
              <li>
                <Link href="/templates/gmail-clickable-image.html" className="text-blue-600 hover:underline">
                  ✉️ Gmail 클릭 가능한 이미지 템플릿
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">🔗 참가 신청 페이지</h3>
            <ul className="space-y-2 ml-4">
              <li>
                <Link href="/register-onsite" className="text-blue-600 hover:underline">
                  🏢 Register On-site 페이지
                </Link>
              </li>
              <li>
                <Link href="/register-korean" className="text-blue-600 hover:underline">
                  🇰🇷 현장 참가 등록 페이지
                </Link>
              </li>
              <li>
                <Link href="/live" className="text-blue-600 hover:underline">
                  🔴 LIVE 참가 페이지
                </Link>
              </li>
              <li>
                <Link href="/email-template" className="text-blue-600 hover:underline">
                  👀 이메일 템플릿 미리보기
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">🎯 슬라이싱된 이미지 템플릿 (최종 추천)</h2>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto">
            <pre className="text-xs">{`<table width="400" cellpadding="0" cellspacing="0" border="0" align="center" style="background-color:#ffffff;">
  <tr>
    <td align="center" style="padding:0;">
      <img src="${deployedUrl}/images/sliced/top.png" 
           width="400" alt="GCED Conference Header" 
           style="display:block; width:100%; max-width:400px; height:auto;">
    </td>
  </tr>
  <tr>
    <td style="padding:0;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td align="center" width="50%" style="padding:0;">
            <a href="${deployedUrl}/register-onsite" target="_blank">
              <img src="${deployedUrl}/images/sliced/register-onsite.png" 
                   width="200" alt="Register On-site" 
                   style="display:block; width:100%; max-width:200px; height:auto;">
            </a>
          </td>
          <td align="center" width="50%" style="padding:0;">
            <a href="${deployedUrl}/register-korean" target="_blank">
              <img src="${deployedUrl}/images/sliced/register-korean.png" 
                   width="200" alt="현장 참가 등록" 
                   style="display:block; width:100%; max-width:200px; height:auto;">
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td align="center" style="padding:0;">
      <a href="${deployedUrl}/live" target="_blank">
        <img src="${deployedUrl}/images/sliced/live.png" 
             width="400" alt="LIVE 참가" 
             style="display:block; width:100%; max-width:400px; height:auto;">
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" style="padding:0;">
      <img src="${deployedUrl}/images/sliced/bottom.png" 
           width="400" alt="GCED Conference Footer" 
           style="display:block; width:100%; max-width:400px; height:auto;">
    </td>
  </tr>
</table>`}</pre>
          </div>
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">✅ 이메일 최적화 완료!</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• 원본 이미지를 5개 조각으로 슬라이싱</li>
              <li>• 각 버튼이 별도 이미지로 클릭 가능</li>
              <li>• 모든 이메일 클라이언트에서 100% 작동</li>
              <li>• CSS 포지셔닝 없이 순수 HTML 구조</li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">📧 간단한 버튼 템플릿</h2>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto">
            <pre className="text-xs">{`<table width="400" cellpadding="0" cellspacing="0" border="0" align="center" style="background-color:#ffffff; border-radius:8px; overflow:hidden; margin:20px auto;">
  <tr>
    <td align="center" style="padding:0;">
      <img src="${deployedUrl}/images/gced-conference.png" 
           width="400" 
           alt="GCED Conference" 
           style="display:block; width:100%; max-width:400px; height:auto;">
    </td>
  </tr>
  <tr>
    <td style="padding:30px 20px; background-color:#f8f9fa; text-align:center;">
      <h2 style="margin:0 0 20px 0; font-size:20px; color:#333; font-weight:bold;">
        GCED Conference 참가 신청
      </h2>
      
      <table width="100%" cellpadding="8" cellspacing="0" border="0" style="margin-bottom:20px;">
        <tr>
          <td align="center" width="50%">
            <a href="${deployedUrl}/register-onsite" 
               style="display:inline-block; background-color:#0066cc; color:#ffffff; text-decoration:none; padding:15px 25px; border-radius:8px; font-weight:bold; font-size:16px; min-width:120px; text-align:center;"
               target="_blank">Register On-site</a>
          </td>
          <td align="center" width="50%">
            <a href="${deployedUrl}/register-korean" 
               style="display:inline-block; background-color:#ffffff; color:#0066cc; text-decoration:none; padding:15px 25px; border:2px solid #0066cc; border-radius:8px; font-weight:bold; font-size:16px; min-width:120px; text-align:center;"
               target="_blank">현장 참가 등록</a>
          </td>
        </tr>
      </table>
      
      <div style="margin:20px 0;">
        <a href="${deployedUrl}/live" 
           style="display:inline-block; background-color:#ff0000; color:#ffffff; text-decoration:none; padding:18px 50px; border-radius:25px; font-weight:bold; font-size:18px;"
           target="_blank">🔴 LIVE 참가</a>
      </div>
      
      <div style="margin-top:30px; padding-top:20px; border-top:1px solid #ddd;">
        <p style="margin:0; font-size:14px; color:#666; line-height:1.5;">
          <strong>GCED Conference 2024</strong><br>
          📅 2024년 3월 15일 (금) 09:00-18:00<br>
          📍 서울 컨벤션센터
        </p>
      </div>
    </td>
  </tr>
</table>`}</pre>
          </div>
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">✅ 이메일 호환성 최우선</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• 절대 위치 사용 안 함 (이메일 클라이언트 호환성)</li>
              <li>• 테이블 기반 레이아웃으로 안정성 확보</li>
              <li>• 모든 스타일 인라인 적용</li>
              <li>• Gmail, Naver Mail, Outlook 모두 지원</li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">🧪 실험용: 클릭 가능한 이미지 HTML</h2>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto">
            <pre className="text-xs">{`<table width="400" cellpadding="0" cellspacing="0" border="0" align="center" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
  <tr>
    <td style="position:relative; padding:0;">
      <img src="${deployedUrl}/images/gced-conference.png" 
           width="400" 
           alt="GCED Conference" 
           style="display:block; width:100%; max-width:400px; height:auto; position:relative;">
      
      <div style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none;">
        <a href="${deployedUrl}/register-onsite" 
           style="position:absolute; top:42.0%; left:13%; width:35%; height:2%; display:block; text-decoration:none; background-color:transparent; border-radius:6px; pointer-events:auto; z-index:10;"
           title="Register On-site" target="_blank"></a>
        
        <a href="${deployedUrl}/register-korean" 
           style="position:absolute; top:42.0%; right:13%; width:35%; height:2%; display:block; text-decoration:none; background-color:transparent; border-radius:6px; pointer-events:auto; z-index:10;"
           title="현장 참가 등록" target="_blank"></a>
        
        <a href="${deployedUrl}/live" 
           style="position:absolute; top:48.0%; left:32%; width:35%; height:2%; display:block; text-decoration:none; background-color:transparent; border-radius:6px; pointer-events:auto; z-index:10;"
           title="LIVE 참가" target="_blank"></a>
      </div>
    </td>
  </tr>
  <tr>
    <td style="padding:20px; background-color:#f8f8f8; text-align:center;">
      <p style="margin:0 0 15px 0; font-size:16px; color:#333; font-weight:bold;">참가 신청하기</p>
      <table width="100%" cellpadding="5" cellspacing="0" border="0">
        <tr>
          <td align="center">
            <a href="${deployedUrl}/register-onsite" 
               style="display:inline-block; background-color:#0066cc; color:#ffffff; text-decoration:none; padding:12px 25px; border-radius:5px; font-weight:bold;" target="_blank">
               Register On-site</a>
          </td>
          <td align="center">
            <a href="${deployedUrl}/register-korean" 
               style="display:inline-block; background-color:#ffffff; color:#0066cc; text-decoration:none; padding:10px 25px; border:2px solid #0066cc; border-radius:5px; font-weight:bold;" target="_blank">
               현장 참가 등록</a>
          </td>
        </tr>
        <tr>
          <td align="center" colspan="2" style="padding-top:15px;">
            <a href="${deployedUrl}/live" 
               style="display:inline-block; background-color:#ff0000; color:#ffffff; text-decoration:none; padding:15px 40px; border-radius:25px; font-weight:bold; font-size:18px;" target="_blank">
               LIVE 참가</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`}</pre>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">사용 방법</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• 이미지 위의 투명 버튼을 클릭하면 해당 페이지로 이동합니다</li>
              <li>• 투명 버튼이 작동하지 않으면 아래 텍스트 버튼을 사용하세요</li>
              <li>• Gmail 확장 프로그램에 위 코드를 복사해서 붙여넣으세요</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
