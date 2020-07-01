import AsyncStorage from '@react-native-community/async-storage';

const get = async (key) => {
    try {
        const retrievedItem = await AsyncStorage.getItem(key);
        const item = JSON.parse(retrievedItem);
        return item;
    } catch (error) {
        // console.log('ERROR'+error.message);
    }
    return;
}
const save = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        // console.log(e.message);
    }
}
const clearAll = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        // clear error
        // console.log(e.message);
    }

}
const remove = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        // console.log('Done.')
    }
}
const getMany = async (keyArray) => {
    try {
        return await AsyncStorage.multiGet(keyArray)
    } catch (e) {
        // console.log(e.message);
    }
}
const saveMany = async (keyArray) => {
    try {
        return await AsyncStorage.multiSet(keyArray)
    } catch (e) {
        // console.log(e.message);
    }
}
const removeMany = async (keyArray) => {
    try {
        return await AsyncStorage.multiRemove(keyArray)
    } catch (e) {
        // console.log(e.message);
    }
}

export default MemeDB = {
    save: save,
    get: get,
    remove: remove,
    getMany: getMany,
    savemany: saveMany,
    removeMany: removeMany,
    clearAll: clearAll
};