import loaderFunc from "./loader.js";

const getData = async (url) => {
  if (url) {
    loaderFunc(true);
    const req = await fetch(url);
    if (!req.ok) {
      throw new Error("Xatolik yuz berdi 😥");
    }
    const data = await req.json();
    loaderFunc(false);
    return data;
  } else {
    throw new Error("Wrong URL!");
  }
};
export default getData;

