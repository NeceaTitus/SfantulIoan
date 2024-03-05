import {BlogArticleType} from "@/utils/my-types";

const imagesPath = '/blog/';
const articlesData : BlogArticleType[] = [
    {
        id: '1',
        slug: "importanta-donatiilor-de-caritate",
        image_name: 'flowers.jpg',
        translation_key: "1",
        tag: 'Caritate',
    },
    {
        id: '2',
        slug: "importanta-donatiilor-de-caritate",
        image_name: 'flowers.jpg',
        translation_key: "2",
        tag: 'Caritate',
    },
    // {
    //     id: '3',
    //     slug: "importanta-donatiilor-de-caritate",
    //     title: "Importanța Menținerii Sănătății Mintale și a Bunăstării",
    //     image_name: 'flowers.jpg',
    //     content: "",
    //     category: 'Caritate',
    // },
];

export function GetAllArticlesStaticContent(amount: number): BlogArticleType[] {
    return articlesData.slice(0, amount);
}

export function GetArticleStaticContentWithSlug(slug: string): BlogArticleType {
    return articlesData.find((article) => article.slug === slug) as BlogArticleType;
}