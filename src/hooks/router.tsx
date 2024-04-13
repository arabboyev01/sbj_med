import { useRouter } from "next/router";

export const Route = () => {
    const router = useRouter();
    const currentLanguage = router.locale;

    const routes = router.pathname.split('/')
    const pathname: string = routes?.length >= 1 ? routes[1] : ''
    const navigate  = (route: string) => {
        router.push(route)
    }

    return {
        lang: currentLanguage,
        pathname, navigate
    }
}