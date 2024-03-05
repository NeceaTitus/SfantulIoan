import {Center, Container, Divider, Image, Text} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {GetArticleStaticContentWithSlug, GetAllArticlesStaticContent} from "@/content/blog/blog-content";
import {Metadata} from "next";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {locales} from "@/middleware";
import {useTranslations} from "next-intl";

export function generateStaticParams() {
    const allArticles = GetAllArticlesStaticContent(99);
    return allArticles.flatMap(article => locales.map(locale => ({
        params: { locale, slug: article.slug }
    })));
}

export async function generateMetadata({params: {locale, slug}}:{ params: { locale: string, slug: string } }) : Promise<Metadata> {
    const article = GetArticleStaticContentWithSlug(slug);
    const t = await getTranslations({locale, namespace: 'BLOG.ARTICLES.' + article.translation_key });
    return {
        title: t('TITLE'),
        description: t('DESCRIPITION').slice(0, 100)
    };
}

export default function BlogPage({params: {locale, slug}}:{ params: { locale: string, slug: string } }) {
    unstable_setRequestLocale(locale);
    
    const imageFolder = '/blog/';
    const article = GetArticleStaticContentWithSlug(slug);
    const t = useTranslations('BLOG.ARTICLES.' + article.translation_key);
    
  return (
      <div>
          <Container className={commonClasses.container} size="lg">
              <TitleWithDescription title={t('TITLE')} />

              <Divider mb="xl" color="transparent"/>

              <div style={{borderRadius: '5px', overflow: 'hidden'}}>
                  <Image src={imageFolder + article.image_name}/>
              </div>

              <Divider mb="xl" mt="md" color="transparent"/>
              
                  <Text c="dimmed" style={{textAlign: 'center'}}>
                      {t('DESCRIPTION')}
                  </Text>

              <Divider color="transparent" pb={100}/>
              
          </Container>
      </div>
);
}
