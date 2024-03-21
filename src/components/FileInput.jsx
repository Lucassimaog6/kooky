import { storage } from "../utils/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export default function FileInput({
    addUrlToList
}) {
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const file = event.target[0]?.files[0];
        if (!file) return;
    
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on("state_changed", {
            next: (snapshot) => {},
            error: (error) => alert(error),
            complete: () => {
                addUrlToList(uploadTask.snapshot.ref);
            }
        })
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input type="file" className="file-input file-input-bordered w-full max-w-96" />
            <button className="btn" type="submit">Enviar</button>
        </form>
    );
}