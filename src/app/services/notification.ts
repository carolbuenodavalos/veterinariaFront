import Swal from 'sweetalert2';

export function notifySuccess(message: string) {
  if (!message) return;
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 2200,
    timerProgressBar: true,
  });
}

export function notifyError(message: string) {
  const text = message || '';
  Swal.fire({
    icon: 'error',
    title: 'Erro',
    text,
  });
}

export default { notifySuccess, notifyError };
