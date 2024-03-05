import {ProjectType} from "@/utils/my-types";

const imagesPath = '/projects/';
const projectsData : ProjectType[] = [
    {
        id: '1', 
        slug: 'ajuta-o-comunitate', 
        image_path: imagesPath + 'comunitate.png',
        translation_key: 'HELP_A_COMMUNITY',
        goalAmount: 100000, 
        currentAmount: 0,
    },
    {
        id: '2',
        slug: 'masa-bucuriei',
        image_path: imagesPath + 'hrana.png',
        translation_key: 'TABLE_OF_JOY',
        goalAmount: 70000,
        currentAmount: 0,
    },
    {
        id: '3',
        slug: 'cazuri-medicale',
        image_path: imagesPath + 'medical.png',
        translation_key: 'LOVE_AND_MEDICINE',
        goalAmount: 50000,
        currentAmount: 0,
    },
    {
        id: '4',
        slug: 'tabere-si-excursii',
        image_path: imagesPath + 'tabere.png',
        translation_key: 'CAMPS_TRIPS_WORKSHOPS',
        goalAmount: 10000,
        currentAmount: 0,
    },
    {
        id: '5',
        slug: 'scoala-bucuriei',
        image_path: imagesPath + 'scoala.png',
        translation_key: 'SCHOOL_OF_JOY',
        goalAmount: 50000,
        currentAmount: 0,
    },
    {
        id: '6',
        slug: 'adopta-o-familie',
        image_path: imagesPath + 'adopta.png',
        translation_key: 'ADOPT_A_FAMILY',
        goalAmount: 100000,
        currentAmount: 0,
    },
];

export function GetAllProjectsStaticContent(amount: number): ProjectType[] {
    return projectsData.slice(0, amount);
}

export function GetProjectStaticContentWithSlug(slug: string): ProjectType {
    return projectsData.find((project) => project.slug === slug) as ProjectType;
}