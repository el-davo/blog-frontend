import { Article } from '../landing/landing.state';

export const admin = {
    isLoggingIn: false,
    isLoggingOut: false,
    isLoggedIn: false,
    showLoginDialog: false,
    showLogoutDialog: false,
    showDeleteArticleDialog: false,
    isDeleteingArticle: false,
    deleteArticle: {},
    username: '',
    password: '',
    auth: {}
} as AdminState;

export interface AdminState {
    isLoggingIn: boolean;
    isLoggingOut: boolean;
    isLoggedIn: boolean;
    showLoginDialog: boolean;
    showLogoutDialog: boolean;
    showDeleteArticleDialog: boolean;
    isDeleteingArticle: boolean;
    deleteArticle: Article;
    username: string;
    password: string;
    auth: Auth;
}

export interface Auth {
    id: string;
    ttl: number;
    created: string;
    userId: string;
}
