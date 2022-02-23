import { useRef , useState , useEffect } from "react";
import './Profile.css'

interface profilePictureProps{
  onChange: any;
  preview: string;
  image: File|undefined;
}

function ProfilePictureEdit(props:profilePictureProps) {
  
  const [preview, setPreview] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  useEffect(()=>{
    if(props.image){
      const reader = new FileReader();
      reader.readAsDataURL(props.image);
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
    }else{
      setPreview(undefined);
    }
  }, [props.image]);

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
          <img 
          className="imageShow"
          src={props.preview} 
          style={{objectFit: "cover"}} 
          onClick={(event) => {
            event.preventDefault();
            fileInputRef.current?.click();
          }}
        />)}
        <input 
          type="file" 
          style={{display:"none"}} 
          ref={fileInputRef}
          accept = "image/*"
          onChange={props.onChange}
        />
      </form>
    </div>
  );
}

export default ProfilePictureEdit;
