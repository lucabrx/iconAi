import { create } from "zustand";


interface  GenerateModalStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useGenerateModal = create<GenerateModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
 }));

 export default useGenerateModal;