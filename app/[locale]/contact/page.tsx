import commonClasses from "@/utils/commonClasses.module.css";
import {Container, Divider} from "@mantine/core";
import {ContactPanel} from "@/components/Contact/ContactPanel";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {ContactTranslationType} from "@/utils/my-types";
import {useTranslations} from "next-intl";

export async function generateMetadata({params: {locale}}:{ params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'CONTACT' });
    const title = t('TITLE');
    const description = t('DESCRIPTION');
    return {
        title: title,
        description: description,
    };
}

export default function ContactPage( {params: {locale}} : {params: {locale: string}} ) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('CONTACT');
    const translations:ContactTranslationType = {
        FormTitle: t('FORM.TITLE'),
        Disclaimer: t('FORM.DISCLAIMER'),
        Email: t('FORM.EMAIL'),
        Phone: t('FORM.PHONE'),
        Address: t('FORM.ADDRESS'),
        WorkingHours: t('FORM.WORKING_HOURS'),
        Name: t('FORM.NAME'),
        YourMessage: t('FORM.YOUR_MESSAGE'),
        Send: t('FORM.SEND'),
        Success: t('FORM.SUCCESS'),
        Error: t('FORM.ERROR'),
    };
        
    
  return (
      <Container size="full">
          <Container className={commonClasses.container} size="lg">
              
              <ContactPanel translations={translations}/>

              <Divider color="transparent" pb={100}/>
          </Container>
      </Container>
  );
}
