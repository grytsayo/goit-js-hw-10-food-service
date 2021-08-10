import foodMenu from '../menu.json';
import foodTemplate from '../templates/menu-card.hbs';

export const createMenu = () => {
    const menuList = document.querySelector('.menu');

    menuList.innerHTML = foodTemplate({menu: foodMenu});
};