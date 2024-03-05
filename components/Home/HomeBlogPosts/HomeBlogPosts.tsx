import classes from './HomeBlogPosts.module.css';
import {BlogPostsGrid} from "@/components/Blog/BlogPostsGrid/BlogPostsGrid";
import {Button, Container, Divider, Group} from "@mantine/core";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {useTranslations} from "next-intl";

export function HomeBlogPosts() {
    const t = useTranslations('HOME_BLOG');
    
    return (
        <Container size="xl" pt="xl">
            <TitleWithDescription title={t('TITLE')} 
                                  description={t('DESCRIPTION')}/>
            <Divider mb="xl" color="transparent" />
            <BlogPostsGrid amount={4} cols={2}/>
        </Container>
    );
}