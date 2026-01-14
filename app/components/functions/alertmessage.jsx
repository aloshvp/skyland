import Swal from 'sweetalert2'
export function alert(text, type = "") {
  if (type == "") {
    Swal.fire({
      title: 'Oops...!',
      text: text,
      icon: 'error',
      showCloseButton: true,
    });
  }
  else if (type == "success") {
    Swal.fire({
      text: text,
      icon: 'success',
      showCloseButton: false,
      showConfirmButton: false,
      timer: 1500
    });
  }
  else if (type == "loading") {
    let timerInterval;
    Swal.fire({
      title: "Loading!",
      html: "Please wait.",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
    });
  }
  else if (type == "warning") {
    Swal.fire({
      text: text,
      icon: 'warning',
      showCloseButton: true,

    });
  }
  else if (type === "mailing") {
    Swal.fire({
      title: "Sending!",
      html: "Please wait.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }
}