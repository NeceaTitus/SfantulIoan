import { SimpleGrid, Container } from '@mantine/core';
import {BlogPostPreviewCard} from "@/components/Blog/BlogPostPreviewCard/BlogPostPreviewCard";
import {BlogArticleType} from "@/utils/my-types";
import {GetAllArticlesStaticContent} from "@/content/blog/blog-content";


export function BlogPostsGrid(props: { amount: number; cols: number }) {
    const previews = GetAllArticlesStaticContent(props.amount)
        .map((article    ) => (
            <BlogPostPreviewCard article={article} />
        ));

    return (
        <SimpleGrid cols={{ base: 1, sm: props.cols }}>
            {previews}
        </SimpleGrid>
    );
}