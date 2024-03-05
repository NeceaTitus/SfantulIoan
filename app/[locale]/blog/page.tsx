import {Container, Divider} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {BlogPostsGrid} from "@/components/Blog/BlogPostsGrid/BlogPostsGrid";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {useTranslations} from "next-intl";

export async function generateMetadata({params: {locale}}:{ params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'BLOG' });
    const title = t('TITLE');
    const description = t('DESCRIPTION');
    return { title: title, description: description };
}

export default function BlogPage( {params: {locale}} : {params: {locale: string}} ) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('BLOG');
    
  return (
      <div>
      <Container className={commonClasses.container} size="md">
            <TitleWithDescription title={t('TITLE')} />
            <Divider mb="xl" color="transparent" />

            <BlogPostsGrid amount={25} cols={1} />

            <Divider color="transparent" pb={100}/>
        </Container>
    </div>
  );
}
