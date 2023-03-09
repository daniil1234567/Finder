import MessengerScreen from "../../views/messenger/MessengerScreen";
import ChatScreen from "../../views/messenger/ChatScreen";
import CodeConfirmScreen from "../../views/authorization/confirm/CodeConfirmScreen";
import Authentication from "../../views/authorization/Authentication";
import WelcomeScreen from "../../views/authorization/WelcomeScreen";
import NameConfirmScreen from "../../views/authorization/confirm/NameConfirmScreen";
import UsernameConfirmScreen from "../../views/authorization/confirm/UsernameConfirmScreen";
import LoginScreen from "../../views/authorization/registration/LoginScreen";
import RegistrationMainInformationScreen
    from "../../views/authorization/registration/RegistrationMainInformationScreen";
import RegistrationTitleScreen
    from "../../views/authorization/registration/RegistrationTitleScreen";
import RegistrationProfileRecommendation
    from "../../views/authorization/registration/RegistrationProfileRecommendation";
import PasswordSettingsScreen from "../../views/settings/PasswordSettingsScreen";


export const privateRoutes = [
    {path: '/messenger', element: MessengerScreen},
    {path: '/chat/:id', element: ChatScreen},
    {path: '/confirm/code', element: CodeConfirmScreen},
    {path: '/confirm/account', element: CodeConfirmScreen},
    {path: '/confirm/name', element: NameConfirmScreen},
    {path: '/registration', element: RegistrationMainInformationScreen},
    {path: '/registration/title', element: RegistrationTitleScreen},
    {path: '/registration/profiles', element: RegistrationProfileRecommendation},
    {path: '/registration/password', element: PasswordSettingsScreen},
    {path: '/settings/password', element: PasswordSettingsScreen},
]

export const publicRoutes = [
    {path: '/', element: WelcomeScreen},
    {path: '/login', element: LoginScreen},
    {path: '/authentication', element: Authentication},
    {path: '/confirm/username', element: UsernameConfirmScreen},
]
