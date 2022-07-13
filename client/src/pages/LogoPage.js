import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AttentionSeeker } from 'react-awesome-reveal';
import QRpage from './QRpage';

const LogoPageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function LogoPage() {
	const [loading, setLoding] = useState(true);

	const navigate = useNavigate();
	const timeout = () => {
		setTimeout(() => {
			navigate('/QRpage');
		}, 2000);
	};
	useEffect(() => {
		timeout();
		return () => {
			clearTimeout(timeout);
		};
	}); 
	return (
		<LogoPageDiv>
			<AttentionSeeker tada>
				<img alt='logo' src='img/logo1.png' width={200} height={200}/>
			</AttentionSeeker>
		</LogoPageDiv>
	);
};

export default LogoPage;