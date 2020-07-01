import MemeDB from '../common';
const USER_KEY = 'new_current_user';
/*
user model 
{
    isInvited:false,
    profileId:'',
    isLoggedIn:'',
    auth_token:'',
    lastScreen: {
        screen:'',
        routeData:{}
    },
    profilePicture:''
}
*/
const loadUser = async () => {
    return await MemeDB.get(USER_KEY);
}
export default UserDB = {
    async loadLasScreen() {
        let u = await loadUser();
        if (u) {
            return u.lastScreen;
        }
        return null;
    },
    async isLoggedIn() {
        let u = await loadUser();
        if (u) {
            return u.isLoggedIn === true;
        }
        return false;
    },
    loginUser(userData) {
        let u = {
            ...userData,
            isLoggedIn: true,
            lastUpdated: new Date()
        };
        // console.log('loginUser: ' + JSON.stringify(u));
        MemeDB.save(USER_KEY, u);
    },
    async updateUser(userData) {
        let u = await loadUser() ?? {};
        u = {
            ...u,
            ...userData,
            lastUpdated: new Date()
        };
        MemeDB.save(USER_KEY, u);
    },
    logoutUser() {
        MemeDB.clearAll();
    },
    async fetchLoggedUser() {
        let u = await MemeDB.get(USER_KEY);
        return u;
    }
}