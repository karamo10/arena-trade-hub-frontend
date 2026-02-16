// "use client";
import TopBar from "./TopBar"
import HeaderMain from "./HeaderMain"
import NavLinks from "./NavLinks"

export default function Header() {

    return (
        <header className="bg-amber border-b border-b-gray-200 shadow-2xl">
            <TopBar />
            <HeaderMain />
            <NavLinks />
        </header>
    )
}