import { Article } from '../landing/landing.state';
import {
    CLOSE_LOGIN_DIALOG, CLOSE_LOGOUT_DIALOG, DELETE_ARTICLE_FAILED,
    DELETE_ARTICLE_SUCCESS, HIDE_DELETE_ARTICLE_MODAL, KEY_PASSWORD, KEY_USERNAME,
    LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_FAILED, LOGOUT_SUCCESS, OPEN_LOGIN_DIALOG,
    OPEN_LOGOUT_DIALOG, REQUEST_DELETE_ARTICLE, REQUEST_LOGIN,
    REQUEST_LOGOUT, SHOW_DELETE_ARTICLE_MODAL
} from './admin.action-types';
import { admin, AdminState, Auth } from './admin.state';

interface Action {
    type: string;
    auth?: Auth;
    character?: string;
    article?: Article;
}

export function adminReducer(state: AdminState = admin, action: Action): AdminState {
    switch (action.type) {
        case OPEN_LOGIN_DIALOG:
            return { ...state, showLoginDialog: true };
        case CLOSE_LOGIN_DIALOG:
            return { ...state, showLoginDialog: false };
        case REQUEST_LOGIN:
            return { ...state, isLoggingIn: true };
        case LOGIN_SUCCESS:
            return { ...state, isLoggingIn: false, isLoggedIn: true, auth: action.auth, showLoginDialog: false };
        case LOGIN_FAILED:
            return { ...state, isLoggedIn: false, isLoggingIn: false };
        case OPEN_LOGOUT_DIALOG:
            return { ...state, showLogoutDialog: true };
        case CLOSE_LOGOUT_DIALOG:
            return { ...state, showLogoutDialog: false };
        case REQUEST_LOGOUT:
            return { ...state, isLoggingOut: true };
        case LOGOUT_SUCCESS:
            return { ...state, isLoggingOut: false, isLoggedIn: false, showLogoutDialog: false, auth: {} as Auth };
        case LOGOUT_FAILED:
            return { ...state, isLoggedIn: true, isLoggingOut: false };
        case KEY_USERNAME:
            return { ...state, username: action.character };
        case KEY_PASSWORD:
            return { ...state, password: action.character };
        case SHOW_DELETE_ARTICLE_MODAL:
            return { ...state, showDeleteArticleDialog: true, deleteArticle: action.article };
        case HIDE_DELETE_ARTICLE_MODAL:
            return { ...state, showDeleteArticleDialog: false, deleteArticle: {} as Article };
        case REQUEST_DELETE_ARTICLE:
            return { ...state, isDeleteingArticle: true };
        case DELETE_ARTICLE_SUCCESS:
            return { ...state, isDeleteingArticle: false };
        case DELETE_ARTICLE_FAILED:
            return { ...state, isDeleteingArticle: false };
        default:
            return state;
    }
}
