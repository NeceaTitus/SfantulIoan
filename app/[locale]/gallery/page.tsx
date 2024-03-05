import {Center, Container, Divider, Text, Title} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {Gallery} from "@/components/Gallery/Gallery";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {useTranslations} from "next-intl";
import classes from "@/components/SfIoan/SfIoan.module.css";
import Link from "next/link";
import {IconBrandFacebook, IconExternalLink} from "@tabler/icons-react";
import {contactInfo} from "@/content/contact/my-contact";

export async function generateMetadata({params: {locale}}:{ params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'GALLERY' });
    const title = t('TITLE');
    const description = t('DESCRIPTION');
    return {
        title: title,
        description: description,
    };
}

const linkProps = {
    href: contactInfo.facebookLink,
    rel:"noopener noreferrer",
    target:"_blank"
};

export default function GalleryPage( {params: {locale}} : {params: {locale: string}} ) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('GALLERY');
    
  return (
    <>
        <Container className={commonClasses.container} size="xl">
          <TitleWithDescription title={t('TITLE')} />
            {/*<Center>*/}
            {/*<Text component={Link} {...linkProps}>*/}
            {/*    <IconBrandFacebook color="blue"/> <IconExternalLink color="blue"/>*/}
            {/*</Text>*/}
            {/*</Center>*/}
          <Divider mb="xl" color="transparent" />
            
            <Gallery />
            
          <Divider color="transparent" pb={100}/>
        </Container>
    </>
  );
}
