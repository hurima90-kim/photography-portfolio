# Photography Portfolio

사진 포트폴리오 웹사이트 - Contentlayer와 로컬 이미지를 사용한 Next.js 프로젝트

## 기술 스택

- **Next.js 13** - React 프레임워크
- **Contentlayer** - 마크다운 기반 콘텐츠 관리
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 스타일링
- **로컬 이미지** - `/public/images` 폴더에 저장

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 콘텐츠 관리

### 갤러리 추가하기

1. `content/galleries/` 폴더에 새 마크다운 파일을 생성합니다.
2. 프론트매터(frontmatter)에 갤러리 정보를 작성합니다:

```markdown
---
title: "갤러리 제목"
description: "갤러리 설명"
coverImage: "/images/galleries/my-gallery/cover.jpg"
date: "2024-03-01"
featured: true
tags: ["태그1", "태그2"]
---

갤러리에 대한 설명을 여기에 작성합니다.
```

### 사진 추가하기

1. `content/photos/` 폴더에 새 마크다운 파일을 생성합니다.
2. 프론트매터에 사진 정보를 작성합니다:

```markdown
---
title: "사진 제목"
image: "/images/photos/my-photo.jpg"
caption: "사진 설명"
gallery: "gallery-slug"
date: "2024-03-01"
location: "촬영 장소"
camera: "카메라 모델"
lens: "렌즈 모델"
aperture: "f/2.8"
shutterSpeed: "1/250"
iso: "100"
focalLength: "50mm"
tags: ["태그1", "태그2"]
---

사진에 대한 상세 설명을 여기에 작성합니다.
```

### 이미지 추가하기

이미지는 `/public/images` 폴더에 저장합니다:

```
public/
  images/
    galleries/
      nature-landscapes/
        cover.jpg
        photo1.jpg
        photo2.jpg
    photos/
      mountain-sunrise.jpg
      city-night.jpg
```

## 프로젝트 구조

```
photography-portfolio/
├── content/                  # 마크다운 콘텐츠
│   ├── galleries/           # 갤러리 콘텐츠
│   └── photos/              # 사진 콘텐츠
├── public/
│   └── images/              # 이미지 파일
│       ├── galleries/
│       └── photos/
├── src/
│   ├── app/                 # Next.js 앱 라우터
│   │   ├── page.tsx        # 홈페이지
│   │   └── layout.tsx      # 레이아웃
│   ├── components/          # React 컴포넌트
│   └── lib/
│       └── queries.ts       # Contentlayer 쿼리 함수
├── contentlayer.config.ts   # Contentlayer 설정
└── next.config.js           # Next.js 설정
```

## 배포

### Vercel

가장 쉬운 방법은 [Vercel](https://vercel.com)에 배포하는 것입니다:

1. GitHub에 코드를 푸시합니다
2. Vercel에서 새 프로젝트를 생성합니다
3. GitHub 저장소를 연결합니다
4. 자동으로 배포됩니다

### Netlify

1. GitHub에 코드를 푸시합니다
2. Netlify에서 새 사이트를 생성합니다
3. Build command: `npm run build`
4. Publish directory: `.next`

## 주의사항

### 이미지 파일 크기

- 이미지 파일이 크면 Git 저장소 크기가 커집니다
- 이미지를 최적화하여 업로드하는 것을 권장합니다
- 필요한 경우 Git LFS를 사용하세요

### Git LFS 사용 (선택사항)

큰 이미지 파일을 관리하려면 Git LFS를 사용하세요:

```bash
git lfs install
git lfs track "*.jpg" "*.png" "*.webp"
git add .gitattributes
```

## 라이선스

MIT