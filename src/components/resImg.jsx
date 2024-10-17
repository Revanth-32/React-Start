import image from './img1.png';
import image2 from './img2.png'

function Resimg() {
  return (
    <>
        <center>
        <img src={image} alt="Image" width={130} height={130} style={{ marginRight: '40px' }}/>
        <img src={image2} alt="Image" width={140} height={130}/>
        </center>
    </>
  );
}

export default Resimg;
