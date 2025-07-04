import { TextField } from "@shopify/polaris";
import { useState, useCallback} from "react";

export default function Textinput({inputName, indexInput, setAnswerIndex, id, handle}){

  const [value, setValue] = useState(handle?handle:'');
  const handlechange = useCallback((newValue) => {
    setValue(newValue);
    function handleize(str) {
      return str.toLowerCase().trim().replace(/['"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    }
    const handle = handleize(newValue);
    if(id){
      setAnswerIndex(newValue, id)
    }
  },[]);
  return(
    <TextField
      label={inputName}
      value={value}
      onChange={handlechange}
      autoComplete="off" />
  )
}
