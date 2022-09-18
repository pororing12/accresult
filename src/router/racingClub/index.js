import leaderBoard from '@/views/racingClub/leaderBoard'
import leaderBoardDetail from '@/views/racingClub/leaderBoardDetail'
const routes = [
  {
    path: '/leaderboard',
    name: 'leaderBoard',
    component: leaderBoard
  },
  {
    path: '/leaderboardDetail',
    name: 'leaderboardDetail',
    component: leaderBoardDetail
  }
]

export default routes
