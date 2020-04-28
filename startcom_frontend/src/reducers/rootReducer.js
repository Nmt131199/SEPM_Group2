import {combineReducers} from 'redux';
import BIReducer from './BIReducer';
import UsersReducer from './UsersReducer';
import AdminReducer from './AdminReducer';
export default combineReducers({
    businessIdeas: BIReducer,
    registerMessage: UsersReducer,
    loginMessage: UsersReducer,
    registerLoading: UsersReducer,
    loginLoading: UsersReducer,
    unverifiedEmails: AdminReducer,
    emailLoading: AdminReducer,
    verifySuccess: AdminReducer,
    loadingVerify: AdminReducer,
    deleteLoading: AdminReducer,
    deleteSuccess: AdminReducer,
    sendMessageLoading: UsersReducer,
    sendMessageSuccess: UsersReducer,
    profileLoading: UsersReducer,
    profileReceiver: UsersReducer,
    profileSender: UsersReducer,

    
});
