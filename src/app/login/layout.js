import Link from "next/link";
import "./login.css"

export default function Layout({ children }) {
    return (
        <div>
            <ul className="login-menu">
                <li>
                    <Link href="/login"><h4>LoginNav</h4></Link>
                </li>
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
