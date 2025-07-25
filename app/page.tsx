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
          <ul className="space-y-2">
            <li>
              <Link href="/images/gced-conference.png" className="text-blue-600 hover:underline">
                이미지 보기
              </Link>
            </li>
            <li>
              <Link href="/templates/correct-button-positions.html" className="text-blue-600 hover:underline">
                HTML 템플릿 보기
              </Link>
            </li>
            <li>
              <Link href="/register-onsite" className="text-blue-600 hover:underline">
                Register On-site 페이지
              </Link>
            </li>
            <li>
              <Link href="/register-korean" className="text-blue-600 hover:underline">
                현장 참가 등록 페이지
              </Link>
            </li>
            <li>
              <Link href="/live" className="text-blue-600 hover:underline">
                LIVE 참가 페이지
              </Link>
            </li>
            <li>
              <Link href="/email-template" className="text-blue-600 hover:underline">
                이메일 템플릿 미리보기
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">이메일용 HTML 코드</h2>
          <div className="bg-gray-100 p-4 rounded overflow-x-auto">
            <pre className="text-xs">{`<table width="400" cellpadding="0" cellspacing="0" border="0" align="center">
  <tr>
    <td>
      <img src="${deployedUrl}/images/gced-conference.png" 
           width="400" 
           alt="GCED Conference" 
           style="display:block; width:100%; max-width:400px; height:auto;">
    </td>
  </tr>
  <tr>
    <td style="padding:20px; background-color:#f8f8f8; text-align:center;">
      <p style="margin:0 0 15px 0; font-size:16px; color:#333; font-weight:bold;">
        참가 신청하기
      </p>
      <table width="100%" cellpadding="5" cellspacing="0" border="0">
        <tr>
          <td align="center">
            <a href="${deployedUrl}/register-onsite" 
               style="display:inline-block; background-color:#0066cc; color:#ffffff; text-decoration:none; padding:12px 25px; border-radius:5px; font-weight:bold;">
               Register On-site
            </a>
          </td>
          <td align="center">
            <a href="${deployedUrl}/register-korean" 
               style="display:inline-block; background-color:#ffffff; color:#0066cc; text-decoration:none; padding:10px 25px; border:2px solid #0066cc; border-radius:5px; font-weight:bold;">
               현장 참가 등록
            </a>
          </td>
        </tr>
        <tr>
          <td align="center" colspan="2" style="padding-top:15px;">
            <a href="${deployedUrl}/live" 
               style="display:inline-block; background-color:#ff0000; color:#ffffff; text-decoration:none; padding:15px 40px; border-radius:25px; font-weight:bold; font-size:18px;">
               LIVE 참가
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
