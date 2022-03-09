import Router, { useRouter } from 'next/router'
import useCountItems from '../../stores/useCountItems'

export function Header() {

    const countItems = useCountItems(state => state.countItems)
    const router= useRouter();

    function redirect() {   
        router.push('/Cart')
        
    }

    return (
        <>
            <div className={"flex content-center justify-between w-screen h-20 bg-[#2D4654] text-white"}>
                <div className={"font-extrabold text-3xl m-6 mt-4 "}>
                    Company
                </div>

                <div className={"bg-white w-full h-px m-auto"} />

                <div className={"flex flex-col align-middle justify-center text-center m-auto w-9 h-9 text-red-200 bg-[#988B8E] rounded-full"}>{countItems}</div>

                <button onClick={redirect}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-gray-300 cursor-pointer m-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </button>
            </div>
        </>
    )
}