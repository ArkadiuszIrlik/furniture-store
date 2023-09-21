function ModalOverlay({ onOverlayClick }: { onOverlayClick: () => void }) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-gray-700/40"
      onClick={onOverlayClick}
    />
  );
}
export default ModalOverlay;
