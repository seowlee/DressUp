import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
  CssBaseline,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
  CardHeader,
  Paper,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const ProductPaymentfin = () => {

  const arr = [
    {id: 1, name: '테이퍼드핏 데님 팬츠', price: '100000', count: '1', color: '블루', size: 'M',
    url: ["https://contents.lotteon.com/itemimage/_v121057/LO/16/45/32/86/32/_1/64/53/28/63/3/LO1645328632_1645328633_1.jpg/dims/resizef/720X720",
          "https://picsum.photos/800/600?random=2",
          "https://picsum.photos/800/600?random=3",
          "https://picsum.photos/800/600?random=4"]}

  ];

  const result =
    arr.reduce((total, currentValue) =>
      total = parseInt(total) + parseInt(currentValue.price), 0);// price를 정수로 변환


  console.log(result);
  return (

    <React.Fragment>

      <CssBaseline />

      {/* <Container fixed> */}
      <Grid
        pl={5}
        pr={5}
        pt={10}
        container spacing={0}>

        <Grid item xs={12} >
          <Card sx={{ minHeight: 500, minWidth: 350, align: 'center' }} justifyContent="center">
            <CardHeader title=
              {<Typography style={{ textAlign: 'center' }}>
                {/* 여기에 구매완료 데이터 수 입력 */}
                <h1>{arr.length}건 결제완료</h1>
                {/* //배열의 길이를 표기할 수 있음 */}
                <h5>출구 퇴장시 아래 바코드를 인식해 주세요</h5>
                <p>
                  <img alt='barcode' src='https://cdn.pixabay.com/photo/2014/04/02/16/19/barcode-306926__480.png' width={200} height={100} />
                </p>
              </Typography>} />
            <Divider variant="middle" />
            <CardContent justifyContent="center">
              <Grid container rowSpacing={1} columnSpacing={{ xs: 10, sm: 2, md: 2 }}>
                <Grid item xs={12}>
                  <Typography pb={1} variant="h8" component="div" align="center">
                    결제완료 상품 리스트
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                pl={0}
                pr={0}
                pt={0} >
                {/* 반복되는 상품은 맵을 이용해 지정 */}
                {arr.map((data) => {
                  return (
                    <StyledPaper
                      sx={{
                        my: 1,
                        mx: 'auto',
                        p: 1,
                        minWidth: 200,
                        maxWidth: 1200,
                        align: 'center'
                      }}
                    >
                      <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                          {/* 여기에 결제완료 상품 이미지 */}
                          <img width={100} height={100} src={data.url[0]} flexDirection='column' />
                        </Grid>
                        <Grid item xs>
                          {/* 여기에 결제완료 상품 상세정보 */}
                          <Typography>
                            <React.Fragment>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="h6"
                                color="text.primary">
                                {data.name}
                              </Typography>
                              <br></br>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary">
                                {data.size}
                              </Typography>
                              <br></br>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary">
                                {data.color}
                              </Typography>
                              <br></br>
                              <Typography
                                sx={{ display: 'inline' }}
                                variant="h6"
                                color="text.primary" >
                                {data.price}원
                              </Typography>
                            </React.Fragment></Typography>
                        </Grid>
                      </Grid>
                    </StyledPaper>
                  )
                })}
              </Grid>

              <Typography
                variant="h6"
                style={{ textAlign: 'right' }}>
                합계 가격 {result}
              </Typography>
            </CardContent>

          </Card>
        </Grid>
        <Grid container
          pt={2} pb={2} >
          <Link to="/main" style={{ textDecoration: 'none' }}>
            <Button variant="contained" disableElevation>
              메인으로
            </Button>
          </Link>
        </Grid>
      </Grid>

      {/* </Container> */}

    </React.Fragment >
  );
};

export default ProductPaymentfin;