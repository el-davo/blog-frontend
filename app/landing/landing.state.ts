export const landing = {
    articles: [],
    isFetchingNewestArticles: false
};

export interface LandingState {
    articles: Article[];
    isFetchingNewestArticles: boolean;
}

export interface Article {
    id: string;
    name: string;
    summary: string;
    content: string;
    parsedContent: string;
    imgUrl: string;
    public: boolean;
}
