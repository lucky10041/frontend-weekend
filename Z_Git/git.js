/*
! 버전 관리 시스템
: 파일 변경 이력을 관리하는 소프트웨어 시스템

  ? 중요성
    : 협업 강화, 변경 이력 추적, 데이터 백업 및 복구

! Git 사용 방법

1. 설치
: 구글 > git > https://git-scm.com/ (공식 웹 사이트)
  > 운영체제에 맞는 git 설치

  MaxOS에서 git 설치 (추가 방법)
  :Homebrew 사용 시
    >> brew install git 명령어 실행

: 깃 설치 확인 명령어
  git --version

2. 기본 설정 (Git에 사용자 이름과 이메일 설정)

! 시작버튼 > 자격 증명 관리자
  > windows 자격 증명 > 일반 자격 증명
  > git / github / sourcetree 에서 타인의 아이디로 설정되어 있는 경우 삭제
  > 브라우저에서 github에 로그인 상태 확인

- 사용자 이름과 이메일 설정
  : Windows (Git Bash, cmd)
  : MacOS (Git Bash, 터미널)
  >> 위 환경의 붙여넣기 - shift + Ins
  >> 새로운 명령어 환경 열기 - ctrl + c

  ? 사용자 이름 설정
  git config --global user.name 본인아이디
  ex) git config --global user.name devgiants75
  >> 방향키(위/아래)

  ? 사용자 이메일 주소 설정
  git config --global user.email 깃허브이메일
  ex) git config --global user.email devgiants75

  ? 설정 확인
  git config --global user.name
  git config --global user.email

! Git의 구조적 요소
1. work

! Git의 주요 명령어
1. 새로운 깃 저장소 초기화
>> 명령어 사용시 해당 폴더에 .git 디렉토리가 생성
: git init

2. 깃 상태 확인
>> 현재 저장소의 상태를 보여줌
    (변경된 파일, 스테이징괸 파일, 커밋되지 않은 사항을 확인)
: git status

3. 갓 사용 명령어
? git add .
  : 파일을 스테이징 영역에 추가하여 Git이 추적하게 함
  : git add 파일명 / git add . (모든 병경사항 추가)

? git commit -m "커밋 메시지"
  : 스테이징 영역의 변경사항을 (로컬)저장소의 기록으로 작성
  : 20240128 lsa

? git push
  : 로컬 변경사항을 히모트 저장소에 업로드
  : git push origin main

? git pull
  : 리모트 저장소의 변경사항을 로컬로 가져오는 명령어
  : 로컬에서 작업환경(work space)까지 바로 사용 가능
  : git pull origin main

! 깃과 깃허브 연동
? 리모트 저장소 추가
: 작업라는 환경(workspace)과 원격 리포지토리를 연결
: git remote add

*/