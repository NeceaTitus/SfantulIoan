import {Container, Divider, Group, SimpleGrid} from "@mantine/core";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import commonClasses from "@/utils/commonClasses.module.css";
import {ProjectPreviewCardsSlider} from "@/components/Projects/ProjectPreviewCardsSlider";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {SfIoan} from "@/components/SfIoan/SfIoan";
import {useTranslations} from "next-intl";

export async function generateMetadata({params: {locale}}:{ params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'PROJECTS' });
    const title = t('TITLE');
    const description = t('DESCRIPTION');
    return {
        title: title,
        description: description,
    };
}

export default function ProjectsPage( {params: {locale}} : {params: {locale: string}} ) {
    unstable_setRequestLocale(locale);

    const t = useTranslations('PROJECTS');
    
    return (
        <Container className={commonClasses.container} size="lg">
      <TitleWithDescription title={t('TITLE')} />
        <Divider mb="xl" color="transparent" />

        <ProjectPreviewCardsSlider amount={100}/>

            <Divider color="transparent" pb="xl" />
            
            <SfIoan disableBackground={true}/>

        <Divider color="transparent" pb={100}/>
        </Container>
  );
}
