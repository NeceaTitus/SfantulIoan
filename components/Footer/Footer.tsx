import {Text, Container, ActionIcon, Group, rem, Title, Center, SimpleGrid, Divider} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './Footer.module.css';
import Link from "next/link";
import {useTranslations} from "next-intl";
import {MyRoutePaths} from "@/utils/route-paths";

function link(link: string, label: string) {
    return (
        <Text component={Link} href={link} c="dimmed" size="sm">
            <Center>{label}</Center>
        </Text>
    );
}
export function Footer() {
    const t = useTranslations('HEADER');
    const commonT = useTranslations('COMMON');
    const heroT = useTranslations('HOME_HERO');
    
    return (
        <footer className={classes.footer}>
            <Container className={classes.inner} size="lg">
                <div className={classes.logo}>
                    <Title className={classes.title} size={18} mb="xs">
                        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
                            <Link href={t('HOME.LINK')}>
                                {commonT('ASSOCIATION_FULL')}
                            </Link>
                        </Text>
                    </Title>
                    <Text size="xs" c="dimmed" className={classes.description}>
                        {heroT('MOTTO_FIRST_PART')}{' '}{heroT('MOTTO_SECOND_PART')}.
                    </Text>
                </div>
            </Container>
            <Divider color="transparent" mb="lg" />
            <Container size="md">
                <Center>
            <SimpleGrid cols={6}>
                {link(MyRoutePaths.Home, t('HOME.LABEL'))}
                {link(MyRoutePaths.Projects, t('PROJECTS.LABEL'))}
                {link(MyRoutePaths.About, t('ABOUT.LABEL'))}
                {link(MyRoutePaths.Gallery, t('GALLERY.LABEL'))}
                {link(MyRoutePaths.Blog, t('BLOG.LABEL'))}
                {link(MyRoutePaths.Contact, t('CONTACT.LABEL'))}
            </SimpleGrid>
                </Center>
            </Container>
            <Container className={classes.afterFooter}>
                <Text c="dimmed" size="sm">
                    © {new Date().getFullYear()} {commonT('ASSOCIATION_FULL')}
                </Text>

                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    
                </Group>
            </Container>
        </footer>
    );
}