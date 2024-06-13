export const handleChange =(setData,type,value)=>{
    setData(prev =>({...prev,[type]:value}))
}


