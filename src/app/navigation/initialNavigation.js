import SplashScreen from '../screens/Splash/SplashScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import WaitListScreen from '../screens/WaitList/WaitListScreen';
import GenderInterestScreen from '../screens/Onboarding/GenderInterest/GenderInterestScreen';
import MatchDesireScreen from '../screens/Onboarding/MatchDesire/MatchDesireScreen';
import CameraPermissionScreen from '../screens/Onboarding/Gallery/Permission/CameraPermissionScreen';
import CameraUploadScreen from '../screens/Onboarding/Gallery/Upload/CameraUploadScreen';
import BirthdayEditScreen from '../screens/Profile/Birthday/BirthdayEditScreen';
import ReadyToSwipeScreen from '../screens/Memes/ReadyToSwipe/ReadyToSwipeScreen';
import CompletedPolarizersScreen from '../screens/Memes/CompletedPolarizers/CompletedPolarizersScreen';
import MemeResponseScreen from '../screens/Memes/MemeResponse/MemeResponseScreen';
import ProfileBioScreen from '../screens/Profile/ProfileBio/ProfileBioScreen';

import RouteNames from './common/RouteNames';
import HumorStyleScreen from '../screens/HumorStyle/HumorStyleScreen';
import NewMatchesPermissionScreen from '../screens/Onboarding/NewMatches/NewMatchesPermissionScreen';
import ImageChooserScreen from '../screens/ImageChooser/ImageChooserScreen';

const initialScreens = [
    {
        name: RouteNames.Login,
        component: LoginScreen
    },
    {
        name: RouteNames.Splash,
        component: SplashScreen
    },
    {
        name: RouteNames.ImageChooser,
        component: ImageChooserScreen
    },
    {
        name: RouteNames.WaitList,
        component: WaitListScreen
    },
    ,
    {
        name: RouteNames.GenderInterest,
        component: GenderInterestScreen
    },
    {
        name: RouteNames.MatchDesire,
        component: MatchDesireScreen
    },
    {
        name: RouteNames.CameraPermission,
        component: CameraPermissionScreen
    },
    {
        name: RouteNames.CameraUpload,
        component: CameraUploadScreen
    },
    {
        name: RouteNames.BirthdayEdit,
        component: BirthdayEditScreen
    },
    {
        name: RouteNames.ProfileBio,
        component: ProfileBioScreen
    },
    {
        name: RouteNames.ReadyToSwipe,
        component: ReadyToSwipeScreen
    },
    {
        name: RouteNames.MemeResponse,
        component: MemeResponseScreen
    },
    {
        name: RouteNames.HumorStyle,
        component: HumorStyleScreen
    },
    {
        name: RouteNames.CompletedPolarizers,
        component: CompletedPolarizersScreen
    },
    {
        name: RouteNames.NewMatchesPermission,
        component: NewMatchesPermissionScreen
    }
]

export { initialScreens }