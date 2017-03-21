import {
    OPEN_LOGIN_DIALOG, CLOSE_LOGIN_DIALOG, REQUEST_LOGIN,
    LOGIN_SUCCESS, LOGIN_FAILED, OPEN_LOGOUT_DIALOG, CLOSE_LOGOUT_DIALOG,
    REQUEST_LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILED, KEY_USERNAME, KEY_PASSWORD,
    REQUEST_DELETE_ARTICLE, DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_FAILED,
    SHOW_DELETE_ARTICLE_MODAL, HIDE_DELETE_ARTICLE_MODAL
} from './admin.action-types';
import {
    openLoginDialog, closeLoginDialog, requestLogin, loginSuccess, loginFailed,
    openLogoutDialog, closeLogoutDialog, requestLogout, logoutSuccess, logoutFailed,
    keyUsername, keyPassword, requestDeleteArticle, deleteArticleSucess, deleteArticleFailed,
    showDeleteArticleModal, hideDeleteArticleModal
} from './admin.actions';
import { Auth } from './admin.state';
import { Article } from '../landing/landing.state';

describe('Admin Actions', () => {

    describe('openLoginDialog()', () => {

        it('should open the login dialog', () => {
            openLoginDialog().should.eql({ type: OPEN_LOGIN_DIALOG });
        });
    });

    describe('closeLoginDialog()', () => {

        it('should close the login dialog', () => {
            closeLoginDialog().should.eql({ type: CLOSE_LOGIN_DIALOG });
        });
    });

    describe('requestLogin()', () => {

        it('should request that the user be logged in', () => {
            let username = 'username';
            let password = 'password';
            requestLogin(username, password).should.eql({ type: REQUEST_LOGIN, username, password });
        });
    });

    describe('loginSuccess()', () => {

        it('should let the user know they are logged in', () => {
            let auth = { id: 'abc123', userId: 'abc123' } as Auth;
            loginSuccess(auth).should.eql({ type: LOGIN_SUCCESS, auth });
        });
    });

    describe('loginFailed()', () => {

        it('should alert the user that login has failed', () => {
            loginFailed().should.eql({ type: LOGIN_FAILED });
        });
    });

    describe('openLogoutDialog()', () => {

        it('should open the logout dialog', () => {
            openLogoutDialog().should.eql({ type: OPEN_LOGOUT_DIALOG });
        });
    });

    describe('closeLogoutDialog', () => {

        it('should close the logout dialog', () => {
            closeLogoutDialog().should.eql({ type: CLOSE_LOGOUT_DIALOG });
        });
    });

    describe('requestLogout()', () => {

        it('should request that the user be logged out', () => {
            requestLogout().should.eql({ type: REQUEST_LOGOUT });
        });
    });

    describe('logoutSuccess()', () => {

        it('should let the user know they have logged out', () => {
            logoutSuccess().should.eql({ type: LOGOUT_SUCCESS });
        });
    });

    describe('logoutFailed()', () => {

        it('should alert the user that the logout attempt has failed', () => {
            logoutFailed().should.eql({ type: LOGOUT_FAILED });
        });
    });

    describe('keyUsername()', () => {

        it('should add a new character to the username', () => {
            const character = 'abc';
            keyUsername(character).should.eql({ type: KEY_USERNAME, character });
        });
    });

    describe('keyPassword()', () => {

        it('should add a new character to the username', () => {
            const character = 'abc';
            keyPassword(character).should.eql({ type: KEY_PASSWORD, character });
        });
    });

    describe('showDeleteArticleModal()', () => {

        it('should show the delete article modal', () => {
            const article = { id: 'abc123' } as Article;
            showDeleteArticleModal(article).should.eql({ type: SHOW_DELETE_ARTICLE_MODAL, article });
        });
    });

    describe('hideDeleteArticleModal()', () => {

        it('should hide the delete article modal', () => {
            hideDeleteArticleModal().should.eql({ type: HIDE_DELETE_ARTICLE_MODAL });
        });
    });

    describe('requestDeleteArticle()', () => {

        it('should request that an article be deleted', () => {
            const article = { id: 'abc123' } as Article;
            requestDeleteArticle(article).should.eql({ type: REQUEST_DELETE_ARTICLE, article });
        });
    });

    describe('deleteArticleSucess()', () => {

        it('should inform user that the article has been deleted', () => {
            deleteArticleSucess().should.eql({ type: DELETE_ARTICLE_SUCCESS });
        });
    });

    describe('deleteArticleFailed()', () => {

        it('should inform the user that the article could not be deleted', () => {
            deleteArticleFailed().should.eql({ type: DELETE_ARTICLE_FAILED });
        });
    });

});