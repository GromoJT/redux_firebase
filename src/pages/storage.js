import { st } from "../firebase";
import { useState,useEffect } from "react";
import {ref,uploadBytes,listAll,getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
import './st.css'

const Storage = () => {
    
    const imageListTef=ref(st,"images/")
    const [imageUpload,setImageUpload] = useState(null);
    const [imageList,setImageList]=useState([])
    const uploadImage = () =>{
        if(imageUpload == null) return;

        const imageRef = ref(st,`images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef,imageUpload).then((snapshot)=>{
            getDownloadURL(snapshot.ref).then((url)=>{
                setImageList((prev) => [...prev,url]);
            })
            
        });


    };

    useEffect(()=>{
        listAll(imageListTef).then((response)=>{
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setImageList((prev)=>[...prev,url]);
                });
            });
        });
    },[]);
    
    
    return ( 
        <div className="container">
            <input type="file" onChange={(event)=>{setImageUpload(event.target.files[0])}}/>
            <button onClick={uploadImage}>Upload Image</button>

            {imageList.map((url)=>{
                return <img src={url} key={v4()} />
            })}
        </div>
     );
}

export default Storage;