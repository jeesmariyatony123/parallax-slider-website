import { Parallax } from 'react-parallax';
import image from '../images/pexels-photo-7033663.webp'
import Header from './Header';

const ImageOne = () => (
    <Parallax className='paraimage' bgImage={image} strength={800}>
        <Header />
    </Parallax>
);

export default ImageOne

// import { Parallax } from 'react-parallax';

// const ImageOne = () => (
//     <Parallax blur={10} bgImage="path/to/image.jpg" bgImageAlt="the cat" strength={200}>
//         Content goes here. Parallax height grows with content height.
//     </Parallax>
// );

//remove : blur={10}, bgImageAlt="the cat" 