import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

const useUserLog = () => {
  const { userLog, setUserLog } = useContext(AuthContext)

  useEffect(() => {
    if (sessionStorage.getItem('username') && !userLog.logged) {
      setUserLog({
        username: sessionStorage.getItem('username'),
        id: sessionStorage.getItem('user_id'),
        created_at: sessionStorage.getItem('antiquity'),
        logged: true
      })
    }
  }, [userLog, setUserLog])

  return { userLog, setUserLog }
}

export default useUserLog
