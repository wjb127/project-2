export default function EmailTemplate() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">이메일 템플릿 미리보기</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-4 border-b">
            <div className="flex items-center space-x-2 text-sm">
              <span className="font-semibold">To:</span>
              <span className="text-gray-600">recipient@example.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm mt-1">
              <span className="font-semibold">Subject:</span>
              <span className="text-gray-600">GCED Conference 참가 안내</span>
            </div>
          </div>
          
          <div className="p-8">
            <div dangerouslySetInnerHTML={{ __html: `
              <table width="400" cellpadding="0" cellspacing="0" border="0" align="center">
                <tr>
                  <td>
                    <img src="/images/gced-conference.png" 
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
                          <a href="#" 
                             style="display:inline-block; background-color:#0066cc; color:#ffffff; text-decoration:none; padding:12px 25px; border-radius:5px; font-weight:bold;">
                             Register On-site
                          </a>
                        </td>
                        <td align="center">
                          <a href="#" 
                             style="display:inline-block; background-color:#ffffff; color:#0066cc; text-decoration:none; padding:10px 25px; border:2px solid #0066cc; border-radius:5px; font-weight:bold;">
                             현장 참가 등록
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" colspan="2" style="padding-top:15px;">
                          <a href="#" 
                             style="display:inline-block; background-color:#ff0000; color:#ffffff; text-decoration:none; padding:15px 40px; border-radius:25px; font-weight:bold; font-size:18px;">
                             LIVE 참가
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            ` }} />
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">사용 방법</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
            <li>위 템플릿이 올바르게 표시되는지 확인하세요</li>
            <li>메인 페이지에서 HTML 코드를 복사하세요</li>
            <li>이메일 클라이언트의 HTML 모드에 붙여넣으세요</li>
            <li>이미지 URL을 Vercel 배포 URL로 변경하세요</li>
            <li>각 버튼의 링크를 실제 URL로 변경하세요</li>
          </ol>
        </div>
      </div>
    </div>
  )
}