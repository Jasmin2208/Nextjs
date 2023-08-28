'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./login.css"

export default function Layout({ children }) {
    const pathName = usePathname();
    const paths = ['/login/loginteacher', '/login/loginstudents'];
    const isPathIncluded = paths.includes(pathName);

    return (
        <div>
            <ul className="login-menu">
                {!isPathIncluded && (
                    <li>
                        <Link href="/login"><h4>LoginNav</h4></Link>
                    </li>
                )}
                <li>
                    <Link href="/login">Login Main Page</Link>
                </li>
                <li>
                    <Link href="/login/loginstudents">Login Student Page</Link>
                </li>
                <li>
                    <Link href="/login/loginteacher">Login Teacher Page</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}
