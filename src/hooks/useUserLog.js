import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

// Custom hook para extraer lógica del componente
const useUserLog = () => {
  const { userLog, setUserLog } = useContext(AuthContext)

  useEffect(() => {
    if (sessionStorage.getItem('username') && !userLog.logged) {
      const userId = parseInt(sessionStorage.getItem('user_id'))

      setUserLog({
        username: sessionStorage.getItem('username'),
        id: userId,
        created_at: sessionStorage.getItem('antiquity'),
        logged: true
      })
    }
  }, [userLog, setUserLog])

  return { userLog, setUserLog }
}

export default useUserLog
