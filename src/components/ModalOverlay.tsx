function ModalOverlay({ onOverlayClick }) {
  return (
    <div
      className="fixed z-40 top-0 right-0 bottom-0 left-0 md:hidden bg-gray-700/40"
      onClick={onOverlayClick}
    />
  );
}
export default ModalOverlay;
