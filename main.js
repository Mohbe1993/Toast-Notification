let box = document.getElementById("box");

let sucMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
let inMsg = '<i class="fa-solid fa-circle-exclamation"></i> Check again';

function showbox(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  box.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("again")) {
    toast.classList.add("again");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
