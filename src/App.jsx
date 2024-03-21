import Navbar from "./components/Navbar";
import FileInput from "./components/FileInput";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { storage } from "./utils/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export default function App() {
    const [listUrls, setListUrls] = useState([]);

    useEffect(() => {
        const listRef = ref(storage, "files/");
        listAll(listRef).then((list) => {
            list.items.forEach((item) => {
                addUrlToList(item);
                console.log("useEffect")
            })
        })
    }, [])

    const addUrlToList = (ref) => {
        getDownloadURL(ref).then((downloadURL) => {
            setListUrls([...listUrls, downloadURL])
            console.log("async")
            console.log(listUrls)
        })
    }

    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            <Navbar />
            <div className="w-screen flex justify-center">
                <FileInput addUrlToList={addUrlToList} />
            </div>
            <main className="mx-auto my-4 w-fit grid gap-4 place-items-center grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                {listUrls.map((url, index) => (
                    <img className="rounded-lg w-[90%]" src={url} key={index} />
                ))}
            </main>
            <Footer />
        </div>
    );
}