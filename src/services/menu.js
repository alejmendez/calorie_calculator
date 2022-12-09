const menuList = [
    {
        text: 'Home',
        to: { name: 'home' },
    },
    {
        text: 'About',
        to: { name: 'about' },
    }
]

const getMenu = () => {
    return menuList
}

export {
    getMenu,
}
