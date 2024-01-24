import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";

export default function MyNavbar() {
    return(
        <Navbar isBordered position="static" maxWidth="md" className="shadow-md">
            <NavbarContent justify="start">
                START
            </NavbarContent>
            <NavbarContent justify="center">
                <NavbarBrand>
                    <p className="font-bold uppercase text-2xl">Wordlad</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="end">
                END
            </NavbarContent>
        </Navbar>
    )
}