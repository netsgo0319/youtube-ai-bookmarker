## 개요

- 목적: `docs/PRD.md` 기반으로 AI YouTube Second Brain MVP를 소개하는 단일 페이지 GitHub Pages 랜딩.
- 목표: 문제 인식 → 해결책 → 핵심 기능 → 신뢰 확보 → CTA 순으로 자연스러운 스토리라인 제공.
- KPI: 방문자의 `Try the MVP` 클릭률, Notion/깃허브 스타 유도.

## 타겟 사용자 요약

1. 지식노동자(개발자·PM·디자이너)
2. 프리랜서 강사·코치
3. PKM 매니아(Notion/Obsidian 사용자)
4. 스타트업 리더
5. 연구형 크리에이터

> 근거: `docs/PRD.md` 2장 타겟 사용자 표.

## 핵심 메시지

- "영상도 텍스트처럼 검색하고, 필요한 장면으로 바로 점프하자."
- 차별점: 자동 텍스트화 + 문장 검색 + 타임스탬프 점프(Top Needs 1~3).
- 사회적 증거: 첫 사용자 시나리오 인용문, 성공 지표 예정 수치 활용.

## 페이지 섹션 구조

1. **Hero**
   - 헤드라인: "AI 기반 YouTube Second Brain"
   - 서브카피: 문제 요약 + 해결 가치
   - CTA: `Try the MVP`, `View on GitHub`
   - 비주얼: 인터페이스 모형, 텍스트 검색 → 타임스탬프 점프 흐름.

2. **문제 제기 (Problem)**
   - PRD 3장/4장 요약: 흩어진 영상, 검색 불가, 수동 타임스탬프 등 5개 bullet.
   - 데이터 포인트: "영상 인사이트를 저장해도 다시 찾지 못한다" 문장 강조.

3. **솔루션 소개**
   - 비전 구절(1장) 활용.
   - "영상 → 텍스트 → 재사용" 파이프라인 다이어그램.

4. **핵심 기능 섹션 (Cards)**
   - 기능 4개 (MVP Scope): 링크 입력 처리, 문장 검색, 요약/클립, Inbox & 폴더.
   - 각 카드: 아이콘 + 한 줄 가치 + 주요 행동.

5. **사용자 시나리오 / Use Cases**
   - 3명 페르소나를 인용문 형태로 배치.
   - "Before → After" 비교 미니 테이블.

6. **동작 플로우**
   - FR1~FR5 기반 4단계 타임라인: 링크 입력 → 텍스트화 → 검색 → 재사용.

7. **기술 스택 & 요구사항**
   - Next.js, Supabase, OpenAI, YouTube iframe API 아이콘 나열.
   - 성공 지표 중 핵심 두 개를 하이라이트(업로드 성공률, 검색→타임스탬프 클릭률).

8. **로드맵 하이라이트**
   - 4주 MVP / v2~v4 로드맵 간단 타임라인(12장).
   - "현재 MVP 빌딩 중" 배지.

9. **FAQ / Contact**
   - 자주 물을 질문: 지원 포맷, 데이터 보안, 추후 기능 등.
   - CTA 반복: 알파 신청 폼 or 깃허브 이슈 링크.

## 콘텐츠 소스 매핑

| 섹션 | PRD 참조 | 추가 필요 |
| --- | --- | --- |
| Hero | Vision(1장) + Value positioning | UI 목업 |
| Problem | 3장, 4장 | 관련 통계 (선택) |
| Features | 5장 + 8장 | 기능 아이콘 |
| Scenarios | 7장 | 인용문 스타일링 |
| Flow | 8장 FR1~FR5 | 다이어그램 |
| Tech | 10장 | 로고 에셋 |
| Metrics | 11장 | Progress bar |
| Roadmap | 12장 | 타임라인 그래픽 |

## 비주얼 & 톤

- 톤: 실무 중심, 신뢰감 있는 B2B SaaS 스타일.
- 색상: YouTube 레드(#FF0000) + 딥네이비 (#0A0F29) + 액센트 민트.
- 폰트: GitHub Pages 기본(Inter, Noto Sans) 또는 Google Fonts.
- 아이콘: simple outline, Hero에 mock 브라우저 프레임.

## 제작 체크리스트

1. PRD 기반 문구 초안 작성
2. 와이어프레임(Figma) or 저충실도 스케치
3. GitHub Pages용 Next.js/React 정적 빌드 or 단일 HTML 배치 결정
4. CTA 연결(레포 링크, 알파 테스트 폼)
5. 메트릭/텍 스택 섹션 아이콘 수급
6. 다국어 여부(기본 한국어, 향후 영어)

## 다음 단계 제안

- `landing-page/content` 디렉터리 생성 후 섹션별 카피 초안 작성
- 깃허브 페이지용 빌드 툴체인(예: `pnpm create vite` or `next export`) 결정
- 디자인 레퍼런스 수집(Linear, Notion, Read.cv 등)


