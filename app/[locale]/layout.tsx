import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { ChatButton } from '@/components/ChatButton/ChatButton';
import { theme } from '@/theme';
import FirstTimeConfetti from "@/components/CoolEffects/FirstTimeConfetti";
//import WavySeparator from '@/components/WavySeparator/WavySeparator';
import {locales} from "@/middleware";
import {unstable_setRequestLocale} from 'next-intl/server';
import {useTranslations} from "next-intl";

export function generateStaticParams() {
    return locales.map((locale:string) => ({locale}));
}

export const metadata = {
  title: {
      default: 'Asociația Bucurie in Dar',
      template: '%s | Asociația Bucurie in Dar',
  },
  description: 'Cu ajutorul Bunului Dumnezeu și a sprijinului vostru, într-un efort comun, vrem să aducem bucurie în inimile multor oameni, tineri și bătrâni. Avem libertatea să alegem ce facem în această viață, și am ales să ajutăm, și o facem cu toată bucuria și tot dragostea noastră. Imparte și tu bucurie, împreună cu noi.',
};

export default function RootLayout({children, params: {locale}}: { children: React.ReactNode; params: {locale: string}; }) {
    unstable_setRequestLocale(locale);

    const headerT = useTranslations('HEADER');
    const commonT = useTranslations('COMMON');

    const headerTranslations = {
        home: { label: headerT('HOME.LABEL'), link: headerT('HOME.LINK') },
        projects: { label: headerT('PROJECTS.LABEL'), link: headerT('PROJECTS.LINK') },
        about: { label: headerT('ABOUT.LABEL'), link: headerT('ABOUT.LINK') },
        gallery: { label: headerT('GALLERY.LABEL'), link: headerT('GALLERY.LINK') },
        blog: { label: headerT('BLOG.LABEL'), link: headerT('BLOG.LINK') },
        contact: { label: headerT('CONTACT.LABEL'), link: headerT('CONTACT.LINK') },
        donate: commonT('DONATE')
    };
    
  return (
    <html lang={"ro"}>
    <head>
        <ColorSchemeScript/>
        <link rel="shortcut icon" href="/logoPng.png"/>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
    </head>
    <body>
    <MantineProvider theme={theme} defaultColorScheme="light">
        <Header headerTranslations={headerTranslations} locale={locale}/>
        {children}
        <ChatButton />
        <Footer/>
    </MantineProvider>

    <FirstTimeConfetti/>
    </body>
    </html>
  );
}
