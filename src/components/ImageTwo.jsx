import { Parallax } from 'react-parallax';
import image2 from '../images/whybg1.jpg'
import WhyUs from './WhyUs';

const ImageTwo = () => (
    <Parallax className='paraimage' bgImage={image2} strength={800}>
        <WhyUs />
    </Parallax>
);

export default ImageTwo