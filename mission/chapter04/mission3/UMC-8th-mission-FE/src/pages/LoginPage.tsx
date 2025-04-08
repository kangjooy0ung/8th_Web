import { postSignin } from "../apis/auth"
import { LOCAL_STORAGE_KEY } from "../constants/key"
import useForm from "../hooks/useForm"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { ResponseSigninDto } from "../types/auth"
import { UserSigninInformation, validateSignin } from "../utils/validate"

const LoginPage = () => {
    const {setItem} = useLocalStorage(LOCAL_STORAGE_KEY.accessToken)

    const {values, errors, touched, getInputProps} = useForm<UserSigninInformation>({
        initialValue: {
            email: "",
            password: "",
        },
        validate: validateSignin,
    })

    const handleSubmit = async() => {
        console.log(values)
        try{
            const response : ResponseSigninDto = await postSignin(values)
            setItem(response.data.accessToken)
        } catch (error) {
            alert(error?.message)
        }
        console.log(response)
    }

    const isDisabled : boolean = 
    Object.values(errors || {}).some((error : string) => error.length > 0) ||
    Object.values(values).some((value : string) => value === "") 

    return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
        <div className="flex flex-col gap-3">
            <input 
                {...getInputProps('email')}
                name="email"
                className={`border border-[#ccc] w-[300px] p-[10px] focus:border-[#807bff] rounded-sm ${errors?.email && touched?.email ? "borser-red-500 bg-red-200" : "border-gray-300"}`}
                type={"email"}
                placeholder={"이메일"}
            />
            {errors?.email && touched?.email && (
                <div className="text-red-500 text-sm">{errors.email}</div>
            )}
            <input 
                {...getInputProps('password')}
                className={`border border-[#ccc] w-[300px] p-[10px] focus:border-[#807bff] rounded-sm ${errors?.password && touched?.password ? "borser-red-500 bg-red-200" : "border-gray-300"}`}
                type={"password"}
                placeholder={"비밀번호"}
            />
            {errors?.passwoed && touched?.password && (
                <div className="text-red-500 text-sm">{errors.password}</div>
            )}
            <button 
                type="button" 
                onClick={handleSubmit} 
                disabled={isDisabled}
                className ="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer disabled:bg-gray-300"
                >
                    로그인
                </button>
        </div>
    </div>
    )
}

export default LoginPage