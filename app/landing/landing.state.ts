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
    userId: string;
    name: string;
    summary: string;
    content: string;
    parsedContent: string;
    imgUrl: string;
    public: boolean;
    modified: string;
}
