import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@components/ui/popover';
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';

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
        <Popover>
            <PopoverTrigger className='cursor-pointer'>
                <RxHamburgerMenu size={20} />
            </PopoverTrigger>
            <PopoverContent className='flex flex-col text-sm md:hidden z-[2000]'>
                <Link href="/" className='p-3 rounded-md font-semibold hover:bg-accent transition'>Home</Link>
                <div className='flex flex-col gap-1 p-3'>
                    <span className='font-semibold text-sm'>Shop</span>
                    <div className='flex flex-col pl-3'>
                        {shopLinks.map(link => (
                            <Link
                                key={link.title}
                                href={link.href}
                                className='p-3 rounded-md hover:bg-accent transition'
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-1 p-3'>
                    <span className='font-semibold text-sm'>Contact</span>
                    <div className='flex flex-col pl-3'>
                        <Link href="/contact/us" className='p-3 rounded-md hover:bg-accent transition'>Contact Us</Link>
                        <Link href="/contact/support" className='p-3 rounded-md hover:bg-accent transition'>Support</Link>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default MobileMenu;