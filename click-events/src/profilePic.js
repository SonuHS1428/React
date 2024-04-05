function ProfilePic(){
    
    const imageUrl='https://cdn.pixabay.com/photo/2017/07/13/19/51/sunset-2501727_960_720.png';
    const handleClick=(e) => e.target.style.display="none";
    return(
        <>
        <img onClick={(e)=>handleClick(e)} src={imageUrl} alt="not found"></img>
        </>
    );
}
export default ProfilePic