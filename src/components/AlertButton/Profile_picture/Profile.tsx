import { useRef , useState , useEffect } from "react";
import './Profile.css'
import circle from './add_circle_outline.png'

function Profile() {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    if(image){
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
    }else{
      setPreview(undefined);
    }
  }, [image]);

  return (
    <div className="container">
      <form>
        {preview ? (
          <img 
            className="imageShow"
            src={preview} 
            style={{objectFit: "cover"}} 
            onClick={(event) => {
              event.preventDefault();
              fileInputRef.current?.click();
            }}
          />
        ) : (
        <button
          onClick={(event) => {
            event.preventDefault();
            fileInputRef.current?.click();
          }}
        >
          <img className="circle_plus" src={circle} alt=""/>
        </button>)}
        <input 
          type="file" 
          style={{display:"none"}} 
          ref={fileInputRef}
          accept = "image/*"
          onChange={(event) => {
            const file = event.target.files?.item(0);
            if(file && file.type.substring(0,5) == "image"){
              setImage(file);
            } 
          }}
        />
      </form>
    </div>
  );
}

export default Profile;
