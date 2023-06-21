import MenuModal from "./MenuModal"
const Modal = ({setModal}) => {

  const cerrarModal = () => {
    setModal(false)
  }
  return (
    <div className='modal b-10 '>
        <div className="cerrar-modal">
        <i 
          class="fa-solid fa-xmark text-white text-4xl" 
          onClick={cerrarModal}
        />
            
        </div>

        <MenuModal />
    </div>
  )
}

export default Modal