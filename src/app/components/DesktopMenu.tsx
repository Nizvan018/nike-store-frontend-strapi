"use client"

import Link from "next/link"
import { cn } from "@/app/lib/shadcn-utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu"
import { SiNike } from "react-icons/si";
import React from "react";


interface ShopLink {
    title: string;
    description: string;
    href: string;
}

interface Props {
    shopLinks: ShopLink[];
}

const DesktopMenu = ({ shopLinks }: Props) => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                        Home
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild >
                                    <Link
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-blue-zodiac-950/5 dark:from-slate-950/10 to-slate-950/10 dark:to-near-black/40 p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-bold italic">
                                            NIKE
                                            <SiNike size={40} />
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed products built for true athletes.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            {shopLinks.map((link) => (
                                <ListItem
                                    key={link.title}
                                    title={link.title}
                                    href={link.href}
                                >
                                    {link.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                            <ListItem
                                title="Contact Us"
                                href="/contact/us"
                            >
                                Get in touch with our support team for any inquiries.
                            </ListItem>
                            <ListItem
                                title="Support"
                                href="/contact/support"
                            >
                                Find answers to common questions and issues.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

interface ListItemProps {
    className?: string;
    title: string;
    children: React.ReactNode;
    href: string;
}

const ListItem = ({ className, title, children, href }: ListItemProps) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

export default DesktopMenu;
