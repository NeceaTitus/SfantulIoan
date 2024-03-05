import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {Center, Container, Divider, Image, SimpleGrid, Stack, Text, Title} from "@mantine/core";
import {OurTeam} from "@/components/OurTeam/OurTeam";
import {AnimatedThing} from "@/components/CoolEffects/AnimatedNumber/AnimatedThing";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {useTranslations} from "next-intl";

const spacing = "xl";
const division = 75;
const cols = { base: 1, sm: 2, md: 2, lg: 2, xl: 2 };

export async function generateMetadata({params: {locale}}:{ params: { locale: string } }) {
    const t = await getTranslations({locale: locale, namespace: 'ABOUT'});
    const title = t('TITLE');
    const description = t('DESCRIPTION');
    return {
        title: title,
        description: description.slice(0, 100),
    };
}
export default function AboutPage( {params: {locale}} : {params: {locale: string}} ) {
    unstable_setRequestLocale(locale);
    
    const t = useTranslations('ABOUT');
    
    const roundedImage = (src: string) => {
        return (
            <div style={{borderRadius: '10px', overflow: 'hidden'}}>
                <Image src={src}/>
            </div>
        );
    }
    
  return (
      <>
    <div>
      <Container className={commonClasses.container} size="lg">
        <TitleWithDescription title={t('TITLE')} />
          <Divider mb="xl" color="transparent" />

          {/* FIRST */}
          <SimpleGrid cols={cols} spacing={spacing}>
              <Center>
                    {roundedImage("/despre/oameni.jpg")}
              </Center>

              <Center>
              <Stack>
                      <AnimatedThing thing={t('WHO_ARE_WE.TITLE')} class={commonClasses.titleBigLight} />
                      <Text c="dimmed">
                          {t('WHO_ARE_WE.DESCRIPTION')}
                      </Text>
                  </Stack>
              </Center>
          </SimpleGrid>
          
          <Divider color="transparent" mb={division}/>

          {/* SECOND */}
          <SimpleGrid cols={cols} spacing={spacing}>
              <Center>
                  <Stack>
                      <AnimatedThing thing={t('WHAT_WE_DO.TITLE')} class={commonClasses.titleBigLight} />
                      <Text c="dimmed">
                          {t('WHAT_WE_DO.DESCRIPTION')}
                      </Text>
                  </Stack>
              </Center>
              
              <Center>
                    {roundedImage("/despre/ajutor.jpeg")}
              </Center>
          </SimpleGrid>

          <Divider color="transparent" mb={division}/>

          {/* THIRD */}
          <SimpleGrid cols={cols} spacing={spacing}>
              <Center>
                    {roundedImage("/despre/biserica.jpg")}
              </Center>

              <Center>
                  <Stack>
                      <AnimatedThing thing={t('WHY_WE_HELP.TITLE')} class={commonClasses.titleBigLight} />
                      <Text c="dimmed">
                          {t('WHY_WE_HELP.DESCRIPTION')}
                      </Text>
                  </Stack>
              </Center>
          </SimpleGrid>
      </Container>
    </div>
          
<Container size="full" className={commonClasses.darkerBackground}>
          <Divider mt={division} my="sm" color="transparent" pt={25}/>
        
          <OurTeam />

          <Divider color="transparent" pb="xl"/>
</Container>
      </>
  );
}
