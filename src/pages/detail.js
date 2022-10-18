import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumbs, Crumb } from '../components/breadcrumb';
import { Container, Row, Col } from 'react-grid';
import { Title } from '../components/title';
import { getDetailAnime } from '../services/api';
import ClipLoader from "react-spinners/ClipLoader";
import { Card, CardContainer, CardDetail, CardImage, CardTitle } from '../components/card';

const override = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}

export default function DetailAnime() {
    const { id } = useParams();

    const [data, setData] = useState();
    const [loading, setloading] = useState(false);

    const getData = async () => {
        setloading(true);
        let data = await getDetailAnime(id);
        console.log(data[0].data)
        setData(data[0].data);
        setloading(false);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Title>
                Anime List
            </Title>
            <Container>
                <Breadcrumbs>
                    <Crumb>
                        <a href='/'>
                            Home
                        </a>
                    </Crumb>
                    <Crumb>
                        {data?.attributes.titles.en || data?.attributes.titles.en_jp} ({data?.attributes.titles.ja_jp})
                    </Crumb>
                </Breadcrumbs>
                {loading ? <ClipLoader loading={loading} cssOverride={override} color={'black'} /> :
                    <Row>
                        <Col xs={12}>
                            <CardContainer>
                                <CardImage width={'30%'} src={data?.attributes.posterImage?.small} alt='none' />
                                <CardDetail width={'30%'}>
                                    <p style={{ padding: "8px", display: "flex", justifyContent: "space-between" }} ><span>Rating : {data?.attributes.averageRating}</span> {data?.attributes.episodeCount} EPS</p>
                                </CardDetail>
                                <CardTitle>
                                    {data?.attributes.titles.en || data?.attributes.titles.en_jp} ({data?.attributes.titles.ja_jp})
                                </CardTitle>
                                <Card padding={'20px'}>
                                    <h3>Synopsis</h3>
                                    <p style={{ marginTop: '10px' }}>
                                        {data?.attributes.synopsis}
                                    </p>
                                </Card>
                            </CardContainer>
                        </Col>
                    </Row>
                }
            </Container>
        </>
    )
}
