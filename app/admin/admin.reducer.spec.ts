import {
    CLOSE_LOGIN_DIALOG, CLOSE_LOGOUT_DIALOG, DELETE_ARTICLE_FAILED,
    DELETE_ARTICLE_SUCCESS, HIDE_DELETE_ARTICLE_MODAL, KEY_PASSWORD, KEY_USERNAME,
    LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_FAILED, LOGOUT_SUCCESS, OPEN_LOGIN_DIALOG,
    OPEN_LOGOUT_DIALOG, REQUEST_DELETE_ARTICLE, REQUEST_LOGIN,
    REQUEST_LOGOUT, SHOW_DELETE_ARTICLE_MODAL
} from './admin.action-types';
import { admin, AdminState, Auth } from './admin.state';
import { adminReducer } from './admin.reducer';
import { Article } from '../landing/landing.state';

describe('Admin Reducer', () => {

    describe('OPEN_LOGIN_DIALOG', () => {

        it('should open the login dialog', () => {
            const action = { type: OPEN_LOGIN_DIALOG };
            const state = { ...admin, showLoginDialog: false } as AdminState;
            adminReducer(state, action).should.eql({ ...state, showLoginDialog: true } as AdminState);
        });
    });

    describe('CLOSE_LOGIN_DIALOG', () => {

        it('should close the login dialog', () => {
            const action = { type: CLOSE_LOGIN_DIALOG };
            const state = { ...admin, showLoginDialog: true } as AdminState;
            adminReducer(state, action).should.eql({ ...state, showLoginDialog: false } as AdminState);
        });
    });

    describe('REQUEST_LOGIN', () => {

        it('should request to be logged in', () => {
            const action = { type: REQUEST_LOGIN, username: 'username', password: 'password' };
            const state = { ...admin, isLoggingIn: false } as AdminState;
            adminReducer(state, action).should.eql({ ...state, isLoggingIn: true } as AdminState);
        });
    });

    describe('LOGIN_SUCCESS', () => {

        it('should let the user know that they have logged in', () => {
            const action = { type: LOGIN_SUCCESS, auth: { id: 'abc123' } as Auth };
            const state = { ...admin, isLoggedIn: false, isLoggingIn: true, showLoginDialog: true } as AdminState;
            adminReducer(state, action).should.eql({
                ...state, isLoggedIn: true, isLoggingIn:
                false, auth: action.auth, showLoginDialog: false
            } as AdminState);
        });
    });

    describe('LOGIN_FAILED', () => {

        it('should alert the user that the login attempt has failed', () => {
            const action = { type: LOGIN_FAILED };
            const state = { ...admin, isLoggedIn: false, isLoggingIn: true } as AdminState;
            adminReducer(state, action).should.eql({ ...state, isLoggedIn: false, isLoggingIn: false } as AdminState);
        });
    });

    describe('OPEN_LOGOUT_DIALOG', () => {

        it('should open the logout dialog', () => {
            const action = { type: OPEN_LOGOUT_DIALOG };
            const state = { ...admin, showLogoutDialog: false } as AdminState;
            adminReducer(state, action).should.eql({ ...state, showLogoutDialog: true } as AdminState);
        });
    });

    describe('CLOSE_LOGOUT_DIALOG', () => {

        it('should close the logout dialog', () => {
            const action = { type: CLOSE_LOGOUT_DIALOG };
            const state = { ...admin, showLogoutDialog: true } as AdminState;
            adminReducer(state, action).should.eql({ ...state, showLogoutDialog: false } as AdminState);
        });
    });

    describe('REQUEST_LOGOUT', () => {

        it('should request that the user be logged out', () => {
            const action = { type: REQUEST_LOGOUT };
            const state = { ...admin, isLoggedIn: true, isLoggingOut: false } as AdminState;
            adminReducer(state, action).should.eql({ ...state, isLoggingOut: true } as AdminState);
        });
    });

    describe('LOGOUT_SUCCESS', () => {

        it('should let the user know they have logged out successfully', () => {
            const action = { type: LOGOUT_SUCCESS };
            const state = { ...admin, isLoggedIn: true, isLoggingOut: true, showLogoutDialog: true, auth: { id: 'abc123' } } as AdminState;
            adminReducer(state, action).should.eql({
                ...state, isLoggedIn: false,
                isLoggingOut: false,
                showLogoutDialog: false,
                auth: {}
            } as AdminState);
        });
    });

    describe('LOGOUT_FAILED', () => {

        it('should alert the user that the logout attempt has failed', () => {
            const action = { type: LOGOUT_FAILED };
            const state = { ...admin, isLoggedIn: true, isLoggingOut: true } as AdminState;
            adminReducer(state, action).should.eql({ ...state, isLoggedIn: true, isLoggingOut: false } as AdminState);
        });
    });

    describe('KEY_USERNAME', () => {

        it('should update the username for login', () => {
            const action = { type: KEY_USERNAME, character: 'abc' };
            const state = { ...admin, username: '' } as AdminState;
            adminReducer(state, action).should.eql({ ...state, username: 'abc' } as AdminState);
        });
    });

    describe('KEY_PASSWORD', () => {

        it('should update the username for login', () => {
            const action = { type: KEY_PASSWORD, character: 'abc' };
            const state = { ...admin, password: '' } as AdminState;
            adminReducer(state, action).should.eql({ ...state, password: 'abc' } as AdminState);
        });
    });

    describe('SHOW_DELETE_ARTICLE_MODAL', () => {

        it('should show the delete article modal', () => {
            const action = { type: SHOW_DELETE_ARTICLE_MODAL, article: { id: 'abc123' } as Article };
            const state = { ...admin, showDeleteArticleDialog: false, deleteArticle: {} } as AdminState;
            adminReducer(state, action).should.eql({
                ...state,
                showDeleteArticleDialog: true,
                deleteArticle: action.article
            } as AdminState);
        });
    });

    describe('HIDE_DELETE_ARTICLE_MODAL', () => {

        it('should hide the delete article modal', () => {
            const action = { type: HIDE_DELETE_ARTICLE_MODAL, article: { id: 'abc123' } as Article };
            const state = { ...admin, showDeleteArticleDialog: true, article: { id: 'abc123' } as Article } as AdminState;
            adminReducer(state, action).should.eql({
                ...state,
                showDeleteArticleDialog: false,
                deleteArticle: {}
            } as AdminState);
        });
    });

    describe('REQUEST_DELETE_ARTICLE', () => {

        it('should request that the article be deleted', () => {
            const action = { type: REQUEST_DELETE_ARTICLE };
            const state = { ...admin, isDeleteingArticle: false } as AdminState;
            adminReducer(state, action).should.eql({
                ...state,
                isDeleteingArticle: true
            } as AdminState);
        });
    });

    describe('DELETE_ARTICLE_SUCCESS', () => {

        it('should inform the user that the article has been deleted', () => {
            const action = { type: DELETE_ARTICLE_SUCCESS };
            const state = { ...admin, isDeleteingArticle: true } as AdminState;
            adminReducer(state, action).should.eql({
                ...state,
                isDeleteingArticle: false
            } as AdminState);
        });
    });

    describe('DELETE_ARTICLE_FAILED', () => {

        it('should inform the user that the article cannot be deleted', () => {
            const action = { type: DELETE_ARTICLE_FAILED };
            const state = { ...admin, isDeleteingArticle: true } as AdminState;
            adminReducer(state, action).should.eql({
                ...state,
                isDeleteingArticle: false
            } as AdminState);
        });
    });
});
