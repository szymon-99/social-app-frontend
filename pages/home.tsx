import { useUser } from '@hooks/useUser'

const home = () => {
  useUser({ redirectTo: '/' })

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default home
