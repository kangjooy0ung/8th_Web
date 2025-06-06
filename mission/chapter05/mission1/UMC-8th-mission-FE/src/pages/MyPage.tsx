import { useEffect, useState } from "react"
import { ResponseMyInfoDto } from "../types/auth"
import { getMyInfo } from "../apis/auth"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const MyPage = () => {
  const {logout} = useAuth()
  const navigate = useNavigate();

  const [data, setData] = useState<ResponseMyInfoDto>([])

    useEffect(() => {
        const getData = async () => {
            const response : ResponseMyInfoDto = await getMyInfo()
            console.log(response)

            setData(response)
        }

        getData()
    }, [])

    const handelLogout = async() => {
      await logout()
      navigate("/")
    }

  return <div>
    <h1>{data.data?.name}님 환영합니다.</h1>
    <img src={data.data?.avatar as string} alt={"구글 로고"} />
    <h1>{data.data?.email}</h1>

    <button 
     className="cursor-pointer bg-blue-300 rounded-sm p-5 hover:scale-90" 
     onClick={handelLogout}>
     로그아웃
    </button>
    </div>
}

export default MyPage
