import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room,
    Telegram,
    Twitter,
  } from '@mui/icons-material';
  import styled from "styled-components";
  import img from '../assets/telebirr.png';
  import img2 from '../assets/Amole.png';
  import { mobile } from '../responsive'; 
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
    
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  const Sublogo = styled.span`
  font-size: 18px;
`;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 20%;
      height: 15%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>FUA.<Sublogo>MART</Sublogo></Logo>
          
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="55ACEE">
              <Telegram />
            </SocialIcon>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Ayat, Addis Ababa , Ethiopia
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +251 947912478
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> Nathnaelkibru@gmail.com
          </ContactItem>
          <Payment src={img}/>
          <Payment src={img2}/>
        </Right>
      </Container>
    );
  };
  
  export default Footer;
  