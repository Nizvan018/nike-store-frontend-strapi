import React from 'react';

interface ShopLink {
    title: string;
    description: string;
    href: string;
}

interface Props {
    shopLinks: ShopLink[];
}

const MobileMenu = ({ shopLinks }: Props) => {
    return (
        <div>From items menu mobile</div>
    )
}

export default MobileMenu;