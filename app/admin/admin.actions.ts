import { Article } from '../landing/landing.state';
import {
    CLOSE_LOGIN_DIALOG, CLOSE_LOGOUT_DIALOG, DELETE_ARTICLE_FAILED,
    DELETE_ARTICLE_SUCCESS, HIDE_DELETE_ARTICLE_MODAL, KEY_PASSWORD, KEY_USERNAME,
    LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_FAILED, LOGOUT_SUCCESS, OPEN_LOGIN_DIALOG,
    OPEN_LOGOUT_DIALOG, REQUEST_DELETE_ARTICLE, REQUEST_LOGIN, REQUEST_LOGOUT,
    SHOW_DELETE_ARTICLE_MODAL
} from './admin.action-types';
import { Auth } from './admin.state';

export function openLoginDialog() {
    return { type: OPEN_LOGIN_DIALOG };
}

export function closeLoginDialog() {
    return { type: CLOSE_LOGIN_DIALOG };
}

export function requestLogin(username: string, password: string) {
    return { type: REQUEST_LOGIN, username, password };
}

export function loginSuccess(auth: Auth) {
    return { type: LOGIN_SUCCESS, auth };
}

export function loginFailed() {
    return { type: LOGIN_FAILED };
}

export function openLogoutDialog() {
    return { type: OPEN_LOGOUT_DIALOG };
}

export function closeLogoutDialog() {
    return { type: CLOSE_LOGOUT_DIALOG };
}

export function requestLogout() {
    return { type: REQUEST_LOGOUT };
}

export function logoutSuccess() {
    return { type: LOGOUT_SUCCESS };
}

export function logoutFailed() {
    return { type: LOGOUT_FAILED };
}

export function keyUsername(character: string) {
    return { type: KEY_USERNAME, character };
}

export function keyPassword(character: string) {
    return { type: KEY_PASSWORD, character };
}

export function showDeleteArticleModal(article: Article) {
    return { type: SHOW_DELETE_ARTICLE_MODAL, article };
}

export function hideDeleteArticleModal() {
    return { type: HIDE_DELETE_ARTICLE_MODAL };
}

export function requestDeleteArticle(article: Article) {
    return { type: REQUEST_DELETE_ARTICLE, article };
}

export function deleteArticleSucess() {
    return { type: DELETE_ARTICLE_SUCCESS };
}

export function deleteArticleFailed() {
    return { type: DELETE_ARTICLE_FAILED };
}
