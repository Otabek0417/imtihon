const loader = document.querySelector(".loader");

export const loaderFunc = (info) => {
  if (info) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
};

export default loaderFunc;
