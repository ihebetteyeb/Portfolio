import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

type NavbarProps = {
  onNavigate: (section: string) => void;
};

const navigationLinks = [
  { label: "Work Experience", href: "workExperience" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export default function Navbar({ onNavigate }: NavbarProps) {
  return (
    <header className="sticky top-0 w-full p-4 z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl">IHEB ETTEYEB</span>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-1 items-center">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <button
                    onClick={() => onNavigate(link.href)}
                    className={cn(
                      "group h-9 flex items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-all duration-200 cursor-pointer no-underline text-neutral-300 hover:text-white hover:bg-neutral-700",
                    )}
                  >
                    {link.label}
                  </button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
