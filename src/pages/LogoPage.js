import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AttentionSeeker } from 'react-awesome-reveal';

const LogoPageDiv = styled.div`
  background-color: white;
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
			navigate('/main');
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
				<img alt='logo_start' src='img/logo_start.png' width={500} height={500}/>
			</AttentionSeeker>
		</LogoPageDiv>
	);
};

export default LogoPage;