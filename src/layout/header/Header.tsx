import styled from 'styled-components';

export const Header = () => {
    return (
        <StyledHeader>
            <a href="">
                <img src="" alt=""/>
            </a>

            <nav>
                <ul>
                    <li>
                        <a href="">#home</a>
                    </li>
                    <li>
                        <a href="">#works</a>
                    </li>
                    <li>
                        <a href="">#about-me</a>
                    </li>
                    <li>
                        <a href="">#contacts</a>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #67e5b4;
`
