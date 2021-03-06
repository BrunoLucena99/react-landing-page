const mapMenuLinks = (links) => {
  return links.map((item) => ({
    newTab: item.new_tab ?? false,
    href: item.url ?? '',
    children: item.link_text ?? '',
  }));
};

const mapMenu = (menu = {}) => {
  return {
    newTab: menu.open_in_new_tab ?? false,
    text: menu.logo_text ?? '',
    links: mapMenuLinks(menu.menu_link ?? [{}]),
    link: menu.logo_link ?? '',
    image: menu.logo?.url ?? '',
  };
};

export default mapMenu;
