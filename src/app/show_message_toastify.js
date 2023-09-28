
export const toastifyShowMessage = (msg,type = "success") => {
    Toastify({
        text: msg,
        duration: 2700,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: (type==="success") ? "linear-gradient(to right, #00b09b, #96c93d)" : "red",
            width: 100,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}