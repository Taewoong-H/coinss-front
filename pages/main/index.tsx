import { MainGreeting } from '../../layout/main/MainGreeting'
import { MainHeader } from '../../layout/main/MainHeader'
import { MainBestSearch } from '../../layout/main/MainBestSearch'

export default function Main() {
  return (
    <div>
      <MainHeader />
      <MainGreeting />
      <MainBestSearch />
    </div>
  )
}