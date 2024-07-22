import workIcon from '../images/icon-work.svg'
import playIcon from '../images/icon-play.svg'
import studyIcon from '../images/icon-study.svg'
import exerciseIcon from '../images/icon-exercise.svg'
import socialIcon from '../images/icon-social.svg'
import selfCareIcon from '../images/icon-self-care.svg'

export function getCategoryIcon(title) {
  // Mapping of category titles to their respective icon paths
  const icons = {
    Work: workIcon,
    Play: playIcon,
    Study: studyIcon,
    Exercise: exerciseIcon,
    Social: socialIcon,
    'Self Care': selfCareIcon,
  }

  // Return the icon path corresponding to the provided title
  return icons[title]
}