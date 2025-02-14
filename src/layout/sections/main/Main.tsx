import styled from 'styled-components';
import photo from '../../../assets/images/foto1.png';
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper alignItems={"center"} justifyContent={'space-around'}>
                <div>
                    <span>Hi there!</span>
                    <Name>I'm Elena</Name>
                    <MainTitle>a front-end developer</MainTitle>
                    <p>I craft responsive websites where technologies meet creativity</p>
                    <span>Contact me!!</span>
                </div>

                <Photo src={photo} alt="foto"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #727578;
`


const Photo = styled.img`
    width: 457px;
    height: 386px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    
`

const Name = styled.h2`

`