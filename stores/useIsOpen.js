import create from 'zustand'

const useIsOpen = create((set)=>({
    isOpen: false,
    setIsOpen:() => set(state => ({isOpen: !(state.isOpen)})),
}))
export default useIsOpen;