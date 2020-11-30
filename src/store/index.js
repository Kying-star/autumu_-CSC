/*
 * @Author: your name
 * @Date: 2020-11-21 15:32:46
 * @LastEditTime: 2020-11-30 17:07:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /clean-plant/src/store/index.js
 */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import vue from "vue";
import vuex from "vuex";
vue.use(vuex);
import { DLELTE_IMAGE, UPLOAD_IMAGE } from './type/actions'
import {
    DELETE_EDIT_IMAGES,
    END_IMAGE_UPLOADING,
    SET_EDIT_IMAGES,
    SET_IMAGE_UPLOADING,
} from "./type/mutations";

export default new vuex.Store({
    state: {
        index: '1',
        num: 0,
        image: [],
        imageId: [],
        lostList: [1, 2, 3, 4]
    },
    mutations: {
        changeList(state, itme) {
            state.lostList.push(itme)
        },
        [SET_IMAGE_UPLOADING](state) {
            state.isUploading = true;
        },
        [END_IMAGE_UPLOADING](state) {
            state.isUploading = false;
        },
        [SET_EDIT_IMAGES](state, { blob, imageId }) {
            state.image.push(blob);
            state.imageId.push(imageId);
        },
        [DELETE_EDIT_IMAGES](state, index) {
            state.image.splice(index, 1);
            state.imageId.splice(index, 1);
        },
    },
    actions: {
        async [UPLOAD_IMAGE]({ commit }, blob) {
            commit(SET_IMAGE_UPLOADING);
            try {
                // const { data } = await ImageService.post(blob)
                commit(END_IMAGE_UPLOADING);
                commit(SET_EDIT_IMAGES, { blob });
            } catch (error) {
                commit(END_IMAGE_UPLOADING);
            }
        },
        async [DLELTE_IMAGE]({ commit, state }, index) {
            try {
                // await ImageService.delete([state.imageId[index]])
                commit(DELETE_EDIT_IMAGES, index);
            } catch (error) {
                commit(DELETE_EDIT_IMAGES, index);
            }
        },
    },
    modules: {},
});