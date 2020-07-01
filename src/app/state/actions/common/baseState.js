

export function actionCreatorHOF(type, data) {
    return {
        type: type,
        payload: data
    };
}