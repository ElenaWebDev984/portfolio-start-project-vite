import styled from 'styled-components';
import photo from '../../../assets/images/foto1.png';

export const Main = () => {
    return (
        <div>
            <div>
                <span>Elias is a web designer and</span>
                <h1>front-end developer</h1>
                <p>He crafts responsive websites where technologies meet creativity</p>
                <span>Contact me!!</span>
            </div>

            <Photo src={photo} alt="foto"/>
        </div>
    );
};


const Photo = styled.img`
    width: 457px;
    height: 386px;

`