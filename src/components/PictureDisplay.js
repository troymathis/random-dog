const PictureDisplay = ({ picture }) => {
    return (
        <div>
        <img src= {picture?.message} alt='cute dog I swear'/>
        </div>
    )
}

export default PictureDisplay;