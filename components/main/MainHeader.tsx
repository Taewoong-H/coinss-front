import styled from 'styled-components';
import Link from 'next/link';

export function MainHeader({}: any) {
  return (
    <HeaderContainer>
      <Link href="/">
        <Logo>COINSS</Logo>
      </Link>
      <ul>
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </HeaderContainer>
  )
}

// styled-components
const HeaderContainer = styled.header`
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      list-style: none;
      margin-left: 20px;

      a {
        text-decoration: none;
        padding: 6px 15px;
        color: #fff;
        border-radius: 20px;

        &:hover {
          background: #fff;
          color: #2b1055;
        }
      }
      a.active {
        background: #fff;
        color: #2b1055;
      }
    }
  }
`;

const Logo = styled.a`
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
`;