import {Card, Text, SimpleGrid, Image, AspectRatio, Divider} from '@mantine/core';
import classes from './Gallery.module.css';
import {useTranslations} from "next-intl";

const prePath = '/gallery/';

export function Gallery() {
    
    const t = useTranslations('GALLERY');

    const videosData = [
        {
            title: t('VIDEOS.1.DESCRIPTION'),
            youtubeId: 'FKUvxS3grqg',
        },
        {
            title: t('VIDEOS.2.DESCRIPTION'),
            youtubeId: 'OBcBR5o5TpM',
        }
    ];

    const imagesData = [
        {
            title: t('PHOTOS.1.DESCRIPTION'),
            image: 'copii.jpeg',
        },
        {
            title: t('PHOTOS.2.DESCRIPTION'),
            image: 'supermarket.jpeg',
        },
        {
            title: t('PHOTOS.3.DESCRIPTION'),
            image: 'martisoare.jpeg',
        },
        {
            title: t('PHOTOS.4.DESCRIPTION'),
            image: 'mare.jpeg',
        },
        {
            title: t('PHOTOS.5.DESCRIPTION'),
            image: 'medicover.jpeg',
        },
        {
            title: t('PHOTOS.6.DESCRIPTION'),
            image: 'mancare.jpeg',
        },
        {
            title: t('PHOTOS.7.DESCRIPTION'),
            image: 'scoala.jpeg',
        },
        {
            title: t('PHOTOS.8.DESCRIPTION'),
            image: 'camion.jpeg',
        },
        {
            title: t('PHOTOS.9.DESCRIPTION'),
            image: 'masabucuriei.jpeg',
        },
        {
            title: t('PHOTOS.10.DESCRIPTION'),
            image: 'comunitate.jpeg',
        },
        {
            title: t('PHOTOS.11.DESCRIPTION'),
            image: 'cocos.jpeg',
        },
        {
            title: t('PHOTOS.12.DESCRIPTION'),
            image: 'portocale.jpeg',
        },
        {
            title: t('PHOTOS.13.DESCRIPTION'),
            image: 'pantofi.jpeg',
        },
        {
            title: t('PHOTOS.14.DESCRIPTION'),
            image: `copil.png`,
        },
    ];
    
    const allImageCards = imagesData.map((article) => (
        <Card p="md" radius="md" className={classes.card}>
            <AspectRatio ratio={16 / 10}>
                <Image src={prePath + '/' + article.image} />
            </AspectRatio>
            <Text className={classes.title} mt={5} pt={5}>
                {article.title}
            </Text>
        </Card>
    ));
    
    const allVideoCards = videosData.map((video) => (
        <Card p="md" radius="md" className={classes.card}>
            <AspectRatio ratio={16 / 9}>
                <iframe
                    src={"https://www.youtube-nocookie.com/embed/" + video.youtubeId}
                    allowFullScreen
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
            </AspectRatio>
            <Text className={classes.title} mt={5} pt={5}>
                {video.title}
            </Text>
        </Card>
    ));
        
    return (
        <>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 2 }} spacing="lg" verticalSpacing="xl">
                {allVideoCards}
            </SimpleGrid>
            <Divider  mb="xl" color="transparent"/>
            <SimpleGrid cols={{base: 1, sm: 2, md: 2}} spacing="lg" verticalSpacing="xl">
                {allImageCards}
            </SimpleGrid>
        </>
    );
}