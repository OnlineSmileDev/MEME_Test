import { SCREEN_PREFIX, UPDATE_SCREEN_PARAM } from "../../actions/screen/screenActions";
import { LOADER_UPDATE } from "../../actions/loader/loaderAction";
import { SNACKBAR_UPDATE } from "../../actions/snackbar/snackbarActions";
import { STORAGE_UPLOAD_SUCCESS } from "../../actions/api/storageApiActions";
import RouteNames from "../../../navigation/common/RouteNames";
import { RESETUSER_SUCCESS } from "../../actions/api/userApiActions";
/*
format:
{
    screen:<>,
    key:<>,
    value:<>
}

*/
export const screenState = {
    loader: {
        isVisible: false
    },
    snackbar: {
        isVisible: false,
        message: ''
    }
};

export function screenReducer(state = screenState, action) {
    const { payload } = action;
    switch (action.type) {
        case UPDATE_SCREEN_PARAM:
            return {
                ...state,
                [payload.screen]: {
                    ...state[payload.screen],
                    [payload.key]: payload.value
                }
            };
        case LOADER_UPDATE:
            return {
                ...state,
                loader: {
                    ...state.loader,
                    isVisible: payload.isVisible
                }
            }
        case SNACKBAR_UPDATE:
            return {
                ...state,
                snackbar: {
                    ...state.snackbar,
                    isVisible: payload.isVisible,
                    message: payload.message
                }
            }
        case STORAGE_UPLOAD_SUCCESS:
            let queue = state[RouteNames.ImageChooser].waitingQueue;
            let index = 0;
            let item = queue.find((value, ind) => {
                index = ind;
                return value.requestId === payload.requestId;
            });
            if (item) {
                item.isComplete = true;
                item.isUpdated = false;
                item.image = {
                    ...item.image,
                    objectId: payload.objectId,
                    mediaLink: payload.mediaLink
                };
                queue.splice(index, 1);
                queue.push(item);
            }
            else {
                console.log('ERROR. Item not found');
            }
            return {
                ...state,
                [RouteNames.CameraUpload]: {
                    ...state[RouteNames.CameraUpload],
                    waitingQueue: queue
                }
            }
        default:
            return {
                ...state
            };
    }
}