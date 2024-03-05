import commonClasses from "@/utils/commonClasses.module.css";
import {Container, rem, StyleProp, Text, Title} from "@mantine/core";

export function TitleWithDescription(props: {title: string, description?: string, maxWidth?: string }) {
    
    return  <>
            <Title order={2} className={commonClasses.titleBig} ta="center">
                {props.title}
            </Title>
    
            <Text c="dimmed" className={commonClasses.descriptionBig} ta="center" mt="md"
            style={{maxWidth: props.maxWidth ?? rem(600), margin: 'auto'}}>
                {props.description}
            </Text>
        </>;
}