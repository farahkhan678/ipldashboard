// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchesList} = props

  const {competingTeam, competingTeamLogo, matchStatus, result} = matchesList

  const getMatchClassName = data => {
    if (data === 'Won') {
      return 'match-won'
    }
    return 'match-lost'
  }

  const resultClassName = `match-status ${getMatchClassName(matchStatus)}`

  return (
    <li className="recent-team-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`status ${resultClassName}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
