import {
    ADD_ARTICLE,
    ADD_ARTICLE_FAILED,
    ADD_ARTICLE_SAVED,
    EDIT_ARTICLE,
    EDIT_ARTICLE_FAILED,
    EDIT_ARTICLE_SAVED,
    EDIT_KEY_ARTICLE_CONTENT,
    EDIT_KEY_ARTICLE_IMG,
    EDIT_KEY_ARTICLE_NAME,
    EDIT_KEY_ARTICLE_SUMMARY,
    EDIT_TOGGLE_ARTICLE_PUBLIC,
    EDITING_REQUEST_PREVIEW,
    EDITING_REQUEST_PREVIEW_FAILED,
    EDITING_UPDATE_PREVIEW,
    FETCH_EDIT_ARTICLE,
    NEW_KEY_ARTICLE_CONTENT,
    NEW_KEY_ARTICLE_IMG,
    NEW_KEY_ARTICLE_NAME,
    NEW_KEY_ARTICLE_SUMMARY,
    NEW_TOGGLE_ARTICLE_PUBLIC,
    REQUEST_PREVIEW,
    REQUEST_PREVIEW_FAILED,
    UPDATE_EDIT_ARTICLE,
    UPDATE_PREVIEW
} from './article-editor.action-types';
import {
    addArticle, addArticleSaved, addArticleFailed, fetchEditArticle,
    updateEditArticle, editArticle, editArticleSaved, editArticleFailed,
    newKeyArticleName, newKeyArticleSummary, newKeyArticleContent, newKeyArticleImg,
    editKeyArticleName, editKeyArticleSummary, editKeyArticleContent, editKeyArticleImg,
    requestPreview, updatePreview, requestPreviewFailed, editingRequestPreview,
    editingUpdatePreview, editingRequestPreviewFailed, newToggleArticlePublic,
    editToggleArticlePublic
} from './article-editor.actions';
import { Article } from '../landing/landing.state';

describe('Article Editor Actions', () => {

    describe('addArticle()', () => {

        it('should create a new article', () => {
            const article = { name: 'test' } as Article;
            addArticle(article).should.eql({ type: ADD_ARTICLE, article });
        });
    });

    describe('addArticleSaved', () => {

        it('should inform the user that the article has been saved', () => {
            addArticleSaved().should.eql({ type: ADD_ARTICLE_SAVED });
        });
    });

    describe('addArticleFailed()', () => {

        it('should inform the user that saving the article did not complete correctly', () => {
            addArticleFailed().should.eql({ type: ADD_ARTICLE_FAILED });
        });
    });

    describe('fetchEditArticle()', () => {

        it('should fetch the article to edit', () => {
            const articleId = 'abc123';
            fetchEditArticle(articleId).should.eql({ type: FETCH_EDIT_ARTICLE, articleId });
        });
    });

    describe('updateEditArticle()', () => {

        it('should display the article that we want to edit', () => {
            const article = { id: '1', name: 'test' } as Article;
            updateEditArticle(article).should.eql({ type: UPDATE_EDIT_ARTICLE, article });
        });
    });

    describe('editArticle()', () => {

        it('should display the article that we want to edit', () => {
            const article = { id: '1', name: 'test' } as Article;
            editArticle(article).should.eql({ type: EDIT_ARTICLE, article });
        });
    });

    describe('editArticleSaved()', () => {

        it('should alert the user that the edited article was saved', () => {
            editArticleSaved().should.eql({ type: EDIT_ARTICLE_SAVED }); ;
        });
    });

    describe('editArticleFailed()', () => {

        it('should alert the user that editing the article failed to save on the server', () => {
            editArticleFailed().should.eql({ type: EDIT_ARTICLE_FAILED });
        });
    });

    describe('newKeyArticleName()', () => {

        it('should add new character to the article name', () => {
            const character = 'a';
            newKeyArticleName(character).should.eql({ type: NEW_KEY_ARTICLE_NAME, character });
        });
    });

    describe('newKeyArticleSummary()', () => {

        it('should add new character to the article summary', () => {
            const character = 'a';
            newKeyArticleSummary(character).should.eql({ type: NEW_KEY_ARTICLE_SUMMARY, character });
        });
    });

    describe('newKeyArticleContent()', () => {

        it('should add new character to the article content', () => {
            const character = 'a';
            newKeyArticleContent(character).should.eql({ type: NEW_KEY_ARTICLE_CONTENT, character });
        });
    });

    describe('newKeyArticleImg()', () => {

        it('should add a new character to the article img url', () => {
            const character = 'a';
            newKeyArticleImg(character).should.eql({ type: NEW_KEY_ARTICLE_IMG, character });
        });
    });

    describe('editKeyArticleName()', () => {

        it('should add new character to the editing article name', () => {
            const character = 'a';
            editKeyArticleName(character).should.eql({ type: EDIT_KEY_ARTICLE_NAME, character });
        });
    });

    describe('editKeyArticleSummary()', () => {

        it('should add new character to the editing article summary', () => {
            const character = 'a';
            editKeyArticleSummary(character).should.eql({ type: EDIT_KEY_ARTICLE_SUMMARY, character });
        });
    });

    describe('editKeyArticleContent()', () => {

        it('should add new character to the editing article content', () => {
            const character = 'a';
            editKeyArticleContent(character).should.eql({ type: EDIT_KEY_ARTICLE_CONTENT, character });
        });
    });

    describe('editKeyArticleImg()', () => {

        it('should add a new character to the editing article img url', () => {
            const character = 'a';
            editKeyArticleImg(character).should.eql({ type: EDIT_KEY_ARTICLE_IMG, character });
        });
    });

    describe('requestPreview()', () => {

        it('should request a preview version of the markdown entered by the admin', () => {
            const markdown = 'abc123';
            requestPreview(markdown).should.eql({ type: REQUEST_PREVIEW, markdown });
        });
    });

    describe('updatePreview()', () => {

        it('should update the preview with the parsed markdown', () => {
            const markdownOutput = 'abc123';
            updatePreview(markdownOutput).should.eql({ type: UPDATE_PREVIEW, markdownOutput });
        });
    });

    describe('requestPreviewFailed()', () => {

        it('should notify the user that the markdown preview has failed', () => {
            requestPreviewFailed().should.eql({ type: REQUEST_PREVIEW_FAILED });
        });
    });

    describe('editingRequestPreview()', () => {

        it('should request a preview of the editing markdown', () => {
            const markdown = 'abc123';
            editingRequestPreview(markdown).should.eql({ type: EDITING_REQUEST_PREVIEW, markdown });
        });
    });

    describe('editingUpdatePreview()', () => {

        it('should update the markdown preview with parsed markdown', () => {
            const markdownOutput = 'abc123';
            editingUpdatePreview(markdownOutput).should.eql({ type: EDITING_UPDATE_PREVIEW, markdownOutput });
        });
    });

    describe('editingRequestPreviewFailed()', () => {

        it('should notify the user that the markdown preview has failed for editing an article', () => {
            editingRequestPreviewFailed().should.eql({ type: EDITING_REQUEST_PREVIEW_FAILED });
        });
    });

    describe('newToggleArticlePublic()', () => {

        it('should toggle the public state of the article', () => {
            newToggleArticlePublic().should.eql({ type: NEW_TOGGLE_ARTICLE_PUBLIC });
        });
    });

    describe('editToggleArticlePublic()', () => {

        it('should toggle the public state of the article when editing', () => {
            editToggleArticlePublic().should.eql({ type: EDIT_TOGGLE_ARTICLE_PUBLIC });
        });
    });
});
