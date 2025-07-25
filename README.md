# GCED Email Project

이 프로젝트는 GCED Conference 이메일 템플릿을 Vercel에 배포하여 이메일에서 사용할 수 있는 이미지 URL을 제공합니다.

## 프로젝트 구조

```
gced-email-project/
├── app/                        # Next.js 앱 디렉토리
│   ├── page.tsx               # 메인 페이지 (배포된 URL 및 HTML 코드 제공)
│   ├── email-template/        # 이메일 템플릿 미리보기
│   │   └── page.tsx
│   ├── layout.tsx             # 레이아웃 컴포넌트
│   └── globals.css            # 전역 스타일
├── public/                    # 정적 파일
│   ├── images/               # 이미지 파일
│   │   └── gced-conference.png
│   └── templates/            # HTML 템플릿
│       └── correct-button-positions.html
├── vercel.json               # Vercel 설정 (CORS, 캐싱)
├── package.json              # 프로젝트 의존성
├── next.config.js            # Next.js 설정
├── tailwind.config.js        # Tailwind CSS 설정
└── tsconfig.json             # TypeScript 설정
```

## 배포하기

### 1. 로컬에서 실행하기

```bash
npm install
npm run dev
```

### 2. Vercel에 배포하기

```bash
# Vercel CLI 설치 (선택사항)
npm i -g vercel

# 배포
vercel
```

또는 GitHub 연동 후 자동 배포:
1. GitHub에 푸시
2. [Vercel 대시보드](https://vercel.com/new)에서 프로젝트 임포트
3. 자동 배포 설정

## 이메일에서 사용하기

### 배포된 이미지 URL
```
https://your-project-name.vercel.app/images/gced-conference.png
```

### 이메일 HTML 템플릿

```html
<table width="400" cellpadding="0" cellspacing="0" border="0" align="center">
  <tr>
    <td>
      <img src="https://your-project-name.vercel.app/images/gced-conference.png" 
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
            <a href="YOUR_REGISTER_URL" 
               style="display:inline-block; background-color:#0066cc; color:#ffffff; text-decoration:none; padding:12px 25px; border-radius:5px; font-weight:bold;">
               Register On-site
            </a>
          </td>
          <td align="center">
            <a href="YOUR_KOREAN_URL" 
               style="display:inline-block; background-color:#ffffff; color:#0066cc; text-decoration:none; padding:10px 25px; border:2px solid #0066cc; border-radius:5px; font-weight:bold;">
               현장 참가 등록
            </a>
          </td>
        </tr>
        <tr>
          <td align="center" colspan="2" style="padding-top:15px;">
            <a href="YOUR_LIVE_URL" 
               style="display:inline-block; background-color:#ff0000; color:#ffffff; text-decoration:none; padding:15px 40px; border-radius:25px; font-weight:bold; font-size:18px;">
               LIVE 참가
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

### 사용 방법

1. 위 HTML 코드를 복사합니다
2. `your-project-name`을 실제 Vercel 프로젝트 URL로 변경합니다
3. `YOUR_REGISTER_URL`, `YOUR_KOREAN_URL`, `YOUR_LIVE_URL`을 실제 링크로 변경합니다
4. 이메일 클라이언트의 HTML 모드에 붙여넣습니다

### 지원 이메일 클라이언트

- Gmail (HTML 모드 확장 프로그램 필요)
- Naver Mail
- Outlook
- 기타 HTML을 지원하는 이메일 클라이언트

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (배포)

## 주요 기능

- 정적 이미지 서빙 with CORS 헤더
- 이메일 호환 HTML 템플릿
- 이미지 캐싱 설정 (1년)
- 반응형 이메일 템플릿

## 라이센스

MIT
