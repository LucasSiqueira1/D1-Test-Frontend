import styled from 'styled-components';


export const Container = styled.nav`
  width: 100%;
  height: calc(100vh - 9px); //calc para aparecer a barra azul no canto inferior do sidebar!
  padding: 50px 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  background-color: var(--side-bar);

  img {
    width: 60%;
    margin-top: -10px;
  }
`;

export const Bar = styled.div`
  position: fixed;
  width: 90px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: transparent linear-gradient(90deg, #00E1FF 40%, #117EFF 100%);
`;


export const SideBarIcons = styled.ul`
  height: 20vh;
  margin-top: -210px;
  position: relative; 

  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SideLowIcons = styled.ul`
  height: 24vh;
  margin-bottom:10px;

  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Line = styled.li`
  width: 50%;
  height: 2px;
  margin-left: 13px;
  margin-top:27px;
  margin-bottom: 40px;

  background: linear-gradient(100deg, #00E1FF 0%, #117EFF 100%);
`;

export const Icons = styled.div`
  margin: 19px 0;
  width: 50px;
  height: 18px;
  margin-left:15px;

`;


