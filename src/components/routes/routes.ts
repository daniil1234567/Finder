import {Route} from "react-router-dom";
import {ReactNode} from "react";
import ChatPage from "../../views/chat/ChatScreen";


export const privateRoutes = [
    {path: '/chat', element: ChatPage}
    // {path: '/home', element: <HomePage / >},
    // {path: '/post/create', element: <PostCreatePage / >},
    // {path: '/profile', element: <ProfilePage / >},
    // {path: '/post/:id', element: <PostDetailPage / >},
    // {path: '/profile/:id', element: <ProfilePage / >},
]

export const publicRoutes = [
    {path: '/chat', element: ChatPage},
    // {path: '/sign-in', element: <SignInPage / >},
    // {path: '/sign-up', element: <SignUpPage / >},
    // {path: '/post/:id', element: <PostDetailPage / >},
    // {path: '/profile/:id', element: <ProfilePage / >},
]
