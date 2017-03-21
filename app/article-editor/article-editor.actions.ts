import { ReactMarkdownProps } from 'react-markdown';
import { fetchArticleSaga } from '../article-viewer/saga/fetch-article.saga';
import { Article } from '../landing/landing.state';
import {
    ADD_ARTICLE, ADD_ARTICLE_FAILED, ADD_ARTICLE_SAVED, EDIT_ARTICLE,
    EDIT_ARTICLE_FAILED, EDIT_ARTICLE_SAVED, EDIT_KEY_ARTICLE_CONTENT, EDIT_KEY_ARTICLE_IMG,
    EDIT_KEY_ARTICLE_NAME, EDIT_KEY_ARTICLE_SUMMARY, EDITING_REQUEST_PREVIEW, EDITING_REQUEST_PREVIEW_FAILED,
    EDITING_UPDATE_PREVIEW, FETCH_EDIT_ARTICLE, NEW_KEY_ARTICLE_CONTENT, NEW_KEY_ARTICLE_IMG,
    NEW_KEY_ARTICLE_NAME, NEW_KEY_ARTICLE_SUMMARY, REQUEST_PREVIEW,
    REQUEST_PREVIEW_FAILED, UPDATE_EDIT_ARTICLE, UPDATE_PREVIEW
} from './article-editor.action-types';

export function addArticle(article: Article) {
    return { type: ADD_ARTICLE, article };
}

export function addArticleSaved() {
    return { type: ADD_ARTICLE_SAVED };
}

export function addArticleFailed() {
    return { type: ADD_ARTICLE_FAILED };
}

export function fetchEditArticle(articleId: string) {
    return { type: FETCH_EDIT_ARTICLE, articleId };
}

export function updateEditArticle(article: Article) {
    return { type: UPDATE_EDIT_ARTICLE, article };
}

export function editArticle(article: Article) {
    return { type: EDIT_ARTICLE, article };
}

export function editArticleSaved() {
    return { type: EDIT_ARTICLE_SAVED };
}

export function editArticleFailed() {
    return { type: EDIT_ARTICLE_FAILED };
}

export function newKeyArticleName(character: string) {
    return { type: NEW_KEY_ARTICLE_NAME, character };
}

export function newKeyArticleSummary(character: string) {
    return { type: NEW_KEY_ARTICLE_SUMMARY, character };
}

export function newKeyArticleContent(character: string) {
    return { type: NEW_KEY_ARTICLE_CONTENT, character };
}

export function newKeyArticleImg(character: string) {
    return { type: NEW_KEY_ARTICLE_IMG, character };
}

export function editKeyArticleName(character: string) {
    return { type: EDIT_KEY_ARTICLE_NAME, character };
}

export function editKeyArticleSummary(character: string) {
    return { type: EDIT_KEY_ARTICLE_SUMMARY, character };
}

export function editKeyArticleContent(character: string) {
    return { type: EDIT_KEY_ARTICLE_CONTENT, character };
}

export function editKeyArticleImg(character: string) {
    return { type: EDIT_KEY_ARTICLE_IMG, character };
}

export function requestPreview(markdown: string) {
    return { type: REQUEST_PREVIEW, markdown };
}

export function updatePreview(markdownOutput: string) {
    return { type: UPDATE_PREVIEW, markdownOutput };
}

export function requestPreviewFailed() {
    return { type: REQUEST_PREVIEW_FAILED };
}

export function editingRequestPreview(markdown: string) {
    return { type: EDITING_REQUEST_PREVIEW, markdown };
}

export function editingUpdatePreview(markdownOutput: string) {
    return { type: EDITING_UPDATE_PREVIEW, markdownOutput };
}

export function editingRequestPreviewFailed() {
    return { type: EDITING_REQUEST_PREVIEW_FAILED };
}
