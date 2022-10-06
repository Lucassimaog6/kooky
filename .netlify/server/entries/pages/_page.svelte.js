import { c as create_ssr_component, d as each, f as add_attribute } from "../../chunks/index.js";
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1v5lz4f{overflow-x:hidden;column-count:3;column-gap:2rem;margin:2rem}img.svelte-1v5lz4f{max-width:100%;margin-bottom:2rem;border-radius:1rem}@media screen and (max-width: 1000px){main.svelte-1v5lz4f{column-count:2}}@media screen and (max-width: 600px){main.svelte-1v5lz4f{column-count:1}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBCsm0fErlM01kq6w2DJqyQaPOH0T3xD2Q",
    authDomain: "kooky-5b2df.firebaseapp.com",
    projectId: "kooky-5b2df",
    storageBucket: "kooky-5b2df.appspot.com",
    messagingSenderId: "213871871539",
    appId: "1:213871871539:web:03d336e326742965328546"
  };
  let urlImages = [];
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  const storageRef = ref(storage);
  listAll(storageRef).then((res) => {
    res.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        urlImages = [...urlImages, url];
      });
    });
  });
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Kooky\u{1F430}</title>`, ""}`, ""}

<main class="${"svelte-1v5lz4f"}">${each(urlImages, (url) => {
    return `<img${add_attribute("src", url, 0)} alt="${"kooky"}" class="${"svelte-1v5lz4f"}">`;
  })}</main>
`;
});
export {
  Page as default
};
