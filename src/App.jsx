import Navbar from "./components/Navbar";
import FileInput from "./components/FileInput";
import Footer from "./components/Footer";
import ImageGrid from "./components/ImageGrid";
import { useEffect, useMemo, useState } from "react";
import { storage } from "./utils/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export default function App() {
    const [listUrls, setListUrls] = useState([]);
    const windowWidth = useMemo(() => window.innerWidth, [window.innerWidth])

    useEffect(() => {
        const listRef = ref(storage, "files/");
        listAll(listRef).then((list) => {
            list.items.forEach((item) => {
                addUrlToList(item);
            })
        })
    }, [])

    const addUrlToList = (ref) => {
        getDownloadURL(ref).then((downloadURL) => {
            setListUrls(old => [...old, downloadURL])
        })
    }

    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            <Navbar />
            <div className="w-full flex justify-center">
                <FileInput addUrlToList={addUrlToList} />
            </div>
            <main className="w-full p-4">
                {windowWidth >= 1200 ? (
                    <ImageGrid listUrls={listUrls} cols={3} />
                ) : windowWidth >= 600 ? (
                    <ImageGrid listUrls={listUrls} cols={2} />
                ) : (
                    <ImageGrid listUrls={listUrls} cols={1} />
                )}
            </main>
            <Footer />
        </div>
    );
}