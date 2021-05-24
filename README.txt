
축구 소개 페이지

참고 https://data.kleague.com/

컴포넌트 

EachTeamsLeftGame : 팀별 남은 게임
HomeThreeDay : 날짜 계산 및 날짜 프롭스
NowdayMatches:오늘 경기 테이블
playerInfo : 아코디언으로 간략한 선수정보
playterTabs: 아코디언 탭별
RankingTable : 팀순위 
ScorerTable : 골 순위
TeamsEmblem : 팀 엠블럼
TwoDaysAgo: 이틀전 경기 테이블
yesterdayMatches:하루전 경기 테이블

페이지 

/ :홈  		:오늘의 예정,어제,엊그제 까지의 경기(5대리그)
/Leagues/ID	: 5대 리그 순위표,득점순위, 예정경기
/teams/ID	: 팀 간단한 정보, 팀컬러,해당 팀의 선수층,예정경기

간단한 반응형

문제점

* 네비게이션 분데스리가 CORS 에러
* 홈 경기목록에서 map if문을 타지 않음
* 잦은 429 에러