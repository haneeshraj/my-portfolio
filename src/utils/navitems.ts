export type NavItem = {
    name: string;
    path: string;
}

const navItems: NavItem[] = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "about",
        path: "/about"
    },
    {
        name: "contact",
        path: "/contact"
    },
    
]

export default navItems;