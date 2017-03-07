export const landing = {
    articles: [],
    isFetchingNewestArticles: false
}

export interface LandingState {
    articles: Article[];
    isFetchingNewestArticles: boolean;
}

export interface Article {
    name: string;
    content: string;
}