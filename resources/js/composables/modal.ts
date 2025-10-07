export function openModal(modalId: string){
  if (typeof window !== 'undefined' && window.openModal) {
    console.log('OPEN: ' + modalId);
    window.openModal(modalId);
  }
}

export function closeModal(modalId: string) {
  if (typeof window !== 'undefined' && window.closeModal) {
    console.log('CLOSE: ' + modalId);
    window.closeModal(modalId);
  }
}
