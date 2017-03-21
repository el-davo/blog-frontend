import {
    ADD_ARTICLE, ADD_ARTICLE_FAILED, ADD_ARTICLE_SAVED, EDIT_ARTICLE,
    EDIT_ARTICLE_FAILED, EDIT_ARTICLE_SAVED, EDIT_KEY_ARTICLE_CONTENT, EDIT_KEY_ARTICLE_IMG,
    EDIT_KEY_ARTICLE_NAME, EDIT_KEY_ARTICLE_SUMMARY, EDITING_REQUEST_PREVIEW, EDITING_REQUEST_PREVIEW_FAILED,
    EDITING_UPDATE_PREVIEW, FETCH_EDIT_ARTICLE, NEW_KEY_ARTICLE_CONTENT, NEW_KEY_ARTICLE_IMG,
    NEW_KEY_ARTICLE_NAME, NEW_KEY_ARTICLE_SUMMARY, REQUEST_PREVIEW,
    REQUEST_PREVIEW_FAILED, UPDATE_EDIT_ARTICLE, UPDATE_PREVIEW,
    NEW_TOGGLE_ARTICLE_PUBLIC, EDIT_TOGGLE_ARTICLE_PUBLIC
} from './article-editor.action-types';
import { articleEditorReducer } from './article-editor.reducer';
import { articleEditor, ArticleEditorState } from './article-editor.state';
import { Article } from '../landing/landing.state';

describe('Article Viewer Reducer', () => {

    describe('ADD_ARTICLE', () => {

        it('should create a new article on the server', () => {
            let action = { type: ADD_ARTICLE, article: { id: 'id', name: 'name' } as Article };
            let state = { ...articleEditor, isCreatingNewArticle: false } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, isCreatingNewArticle: true });
        });
    });

    describe('ADD_ARTICLE_SAVED', () => {

        it('should alert the user that the article is saved', () => {
            let action = { type: ADD_ARTICLE_SAVED };
            let state = { ...articleEditor, isCreatingNewArticle: true } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, isCreatingNewArticle: false });
        });
    });

    describe('ADD_ARTICLE_FAILED', () => {

        it('should alert the user that the article is failed to save', () => {
            let action = { type: ADD_ARTICLE_FAILED };
            let state = { ...articleEditor, isCreatingNewArticle: true } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, isCreatingNewArticle: false });
        });
    });

    describe('FETCH_EDIT_ARTICLE', () => {

        it('should fetch the article we want to edit', () => {
            let action = { type: FETCH_EDIT_ARTICLE };
            let state = { ...articleEditor, isFetchingEditArticle: false } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, isFetchingEditArticle: true });
        });
    });

    describe('UPDATE_EDIT_ARTICLE', () => {

        it('should display the article that we are editing', () => {
            let action = { type: UPDATE_EDIT_ARTICLE, article: { id: 'id', name: 'name' } as Article };
            let state = { ...articleEditor, isFetchingEditArticle: true, editingArticle: {} } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, isFetchingEditArticle: false, editingArticle: action.article });
        });
    });

    describe('EDIT_ARTICLE', () => {

        it('should edit an article on the server', () => {
            let action = { type: EDIT_ARTICLE };
            let state = { ...articleEditor, isUpdatingAnArticle: false } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, isUpdatingAnArticle: true });
        });
    });

    describe('EDIT_ARTICLE_SAVED', () => {

        it('should alert the user that the article is updated on the server', () => {
            let action = { type: EDIT_ARTICLE_SAVED };
            let state = { ...articleEditor, isUpdatingAnArticle: true } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, isUpdatingAnArticle: false });
        });
    });

    describe('EDIT_ARTICLE_FAILED', () => {

        it('should alert the user that the article failed to update on the server', () => {
            let action = { type: EDIT_ARTICLE_FAILED };
            let state = { ...articleEditor, isUpdatingAnArticle: true } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, isUpdatingAnArticle: false });
        });
    });

    describe('NEW_KEY_ARTICLE_NAME', () => {

        it('should add a new character to the end of the string', () => {
            let action = { type: NEW_KEY_ARTICLE_NAME, character: 'potato' };
            let state = { ...articleEditor, newArticle: { ...articleEditor.newArticle, name: '' } } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, newArticle: { ...state.newArticle, name: 'potato' } });
        });

    });

    describe('NEW_KEY_ARTICLE_SUMMARY', () => {

        it('should add a new character to the end of the string', () => {
            let action = { type: NEW_KEY_ARTICLE_SUMMARY, character: 'potato' };
            let state = { ...articleEditor, newArticle: { ...articleEditor.newArticle, summary: '' } } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, newArticle: { ...state.newArticle, summary: 'potato' } });
        });

    });

    describe('NEW_KEY_ARTICLE_CONTENT', () => {

        it('should add a new character to the end of the string', () => {
            let action = { type: NEW_KEY_ARTICLE_CONTENT, character: 'potato' };
            let state = { ...articleEditor, newArticle: { ...articleEditor.newArticle, content: '' } } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, newArticle: { ...state.newArticle, content: 'potato' } });
        });

    });

    describe('NEW_KEY_ARTICLE_IMG', () => {

        it('should add a new character to the end of the string', () => {
            let action = { type: NEW_KEY_ARTICLE_IMG, character: 'potato' };
            let state = { ...articleEditor, newArticle: { ...articleEditor.newArticle, imgUrl: '' } } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, newArticle: { ...state.newArticle, imgUrl: 'potato' } });
        });

    });

    describe('EDIT_KEY_ARTICLE_NAME', () => {

        it('should add a new character to the end of the string', () => {
            let action = { type: EDIT_KEY_ARTICLE_NAME, character: 'potato' };
            let state = { ...articleEditor, editingArticle: { ...articleEditor.editingArticle, name: '' } } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, editingArticle: { ...state.editingArticle, name: 'potato' } });
        });
    });

    describe('EDIT_KEY_ARTICLE_SUMMARY', () => {

        it('should add a new character to the end of the string', () => {
            let action = { type: EDIT_KEY_ARTICLE_SUMMARY, character: 'potato' };
            let state = { ...articleEditor, editingArticle: { ...articleEditor.editingArticle, summary: '' } } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, editingArticle: { ...state.editingArticle, summary: 'potato' } });
        });
    });

    describe('EDIT_KEY_ARTICLE_CONTENT', () => {

        it('should add a new character to the end of the string', () => {
            let action = { type: EDIT_KEY_ARTICLE_CONTENT, character: 'potato' };
            let state = { ...articleEditor, editingArticle: { ...articleEditor.editingArticle, content: '' } } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, editingArticle: { ...state.editingArticle, content: 'potato' } });
        });
    });

    describe('EDIT_KEY_ARTICLE_IMG', () => {

        it('should add a new character to the end of the string', () => {
            let action = { type: EDIT_KEY_ARTICLE_IMG, character: 'potato' };
            let state = { ...articleEditor, editingArticle: { ...articleEditor.editingArticle, imgUrl: '' } } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, editingArticle: { ...state.editingArticle, imgUrl: 'potato' } });
        });
    });

    describe('REQUEST_PREVIEW', () => {

        it('should request a preview of the markdown entered by the admin', () => {
            let action = { type: REQUEST_PREVIEW, markdown: 'potato' };
            let state = { ...articleEditor, isFetchingPreview: false } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, isFetchingPreview: true });
        });
    });

    describe('UPDATE_PREVIEW', () => {

        it('should update the preview with the parsed markdown', () => {
            let action = { type: UPDATE_PREVIEW, markdownOutput: 'abc123' };
            let state = { ...articleEditor, isFetchingPreview: true, newArticlePreview: '' } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, isFetchingPreview: false, newArticlePreview: 'abc123' });
        });
    });

    describe('REQUEST_PREVIEW_FAILED', () => {

        it('should notify the user that fetching the preview has failed', () => {
            let action = { type: REQUEST_PREVIEW_FAILED };
            let state = { ...articleEditor, isFetchingPreview: true } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, isFetchingPreview: false });
        });
    });

    describe('EDITING_REQUEST_PREVIEW', () => {

        it('should request a preview of the markdown entered by the admin', () => {
            let action = { type: EDITING_REQUEST_PREVIEW, markdown: 'potato' };
            let state = { ...articleEditor, isFetchingEditingPreview: false } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, isFetchingEditingPreview: true });
        });
    });

    describe('EDITING_UPDATE_PREVIEW', () => {

        it('should update the preview with the parsed markdown', () => {
            let action = { type: EDITING_UPDATE_PREVIEW, markdownOutput: 'abc123' };
            let state = { ...articleEditor, isFetchingEditingPreview: true, editingArticlePreview: '' } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, isFetchingEditingPreview: false, editingArticlePreview: 'abc123' });
        });
    });

    describe('EDITING_REQUEST_PREVIEW_FAILED', () => {

        it('should notify the user that fetching the preview has failed', () => {
            let action = { type: EDITING_REQUEST_PREVIEW_FAILED };
            let state = { ...articleEditor, isFetchingEditingPreview: true } as ArticleEditorState;

            articleEditorReducer(state, action).should.eql({ ...state, isFetchingEditingPreview: false });
        });
    });

    describe('NEW_TOGGLE_ARTICLE_PUBLIC', () => {

        it('should toggle the public state of the new article', () => {
            let action = { type: NEW_TOGGLE_ARTICLE_PUBLIC };
            let offState = { ...articleEditor, newArticle: { public: false } } as ArticleEditorState;
            let onState = { ...articleEditor, newArticle: { public: true } } as ArticleEditorState;

            articleEditorReducer(offState, action).should.eql({ ...offState, newArticle: { public: true } } as ArticleEditorState);
            articleEditorReducer(onState, action).should.eql({ ...onState, newArticle: { public: false } } as ArticleEditorState);
        });
    });

    describe('EDIT_TOGGLE_ARTICLE_PUBLIC', () => {

        it('should toggle the public state of the new article', () => {
            let action = { type: EDIT_TOGGLE_ARTICLE_PUBLIC };
            let offState = { ...articleEditor, editingArticle: { public: false } } as ArticleEditorState;
            let onState = { ...articleEditor, editingArticle: { public: true } } as ArticleEditorState;

            articleEditorReducer(offState, action).should.eql({ ...offState, editingArticle: { public: true } } as ArticleEditorState);
            articleEditorReducer(onState, action).should.eql({ ...onState, editingArticle: { public: false } } as ArticleEditorState);
        });
    });

});
