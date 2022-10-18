import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-grid'
import { Breadcrumbs, Crumb } from '../components/breadcrumb'
import { Card, CardContainer, CardDetail, CardImage, CardTitle } from '../components/card'
import ClipLoader from "react-spinners/ClipLoader";
import { Title } from '../components/title'
import { getAllAnimeList } from '../services/api';
import { Link } from 'react-router-dom';

const override = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}

export default function ListAnime() {
    const [data, setData] = useState();
    const [loading, setloading] = useState(false);

    const getData = async () => {
        setloading(true);
        let data = await getAllAnimeList();
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
                </Breadcrumbs>
                {loading ? <ClipLoader loading={loading} cssOverride={override} color={'black'} /> :
                    <Row style={{ justifyContent: 'center' }}>
                        {data?.map((res) => (
                            <Col lg={3} sm={4} xs={6}>
                                <Link to={`/${res.id}`}>
                                    <CardContainer pointer>
                                        <Card hover>
                                            <CardImage src={res.attributes.posterImage?.medium} alt='none' />
                                            <CardDetail>
                                                <p style={{ padding: "8px", display: "inherit" }}>{res.attributes.episodeCount} EPS</p>
                                            </CardDetail>
                                        </Card>
                                        <CardTitle>
                                            {res.attributes.titles.en || res.attributes.titles.en_jp} ({res.attributes.titles.ja_jp})
                                        </CardTitle>
                                    </CardContainer>
                                </Link>
                            </Col>
                        ))}

                    </Row>
                }
            </Container>
        </>
    )
}
