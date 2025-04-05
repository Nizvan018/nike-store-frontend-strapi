import { SiNike } from "react-icons/si";
import { BiLogoInstagramAlt, BiLogoFacebook } from "react-icons/bi";


const links = [
    { label: "Home", pathname: "/" },
    { label: "Store", pathname: "/store" },
    { label: "Contact", pathname: "/contact" }
];

export default function Footer() {
    return (
        <footer className="flex justify-center w-full px-8 py-12 text-white text-sm bg-gradient-to-br from-blue-zodiac-950 to-slate-950">
            <div className="flex items-start justify-between gap-16 w-full max-w-[1200px]">
                {/* INFO AND SOCIAL MEDIA */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold italic">NIKE</span>
                        <SiNike size={40} />
                    </div>
                    <span>
                        Developed by <a
                            href="https://github.com/Nizvan018"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            nizvan.dev
                        </a>
                    </span>
                    <div className="flex items-center gap-1">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <BiLogoInstagramAlt size={16} />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <BiLogoFacebook size={16} />
                        </a>
                    </div>
                </div>

                {/* NAVIGATION AND USER */}
                <div className="flex items-start gap-16">
                    <div className="flex flex-col gap-2">
                        <span className="font-semibold mb-2">Navigation</span>

                        <ul className="flex flex-col gap-2 text-sm">
                            {links.map(item => (
                                <li key={item.label}>
                                    <a href={item.pathname}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="font-semibold mb-2">User</span>

                        <ul className="flex flex-col gap-2 text-sm">
                            <li>
                                <a href="#">Mi profile</a>
                            </li>
                            <li>
                                <a href="#">Mi bag</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
