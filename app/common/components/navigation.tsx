import { Link } from "react-router";
import { cn } from "~/lib/utils";

import { Separator } from "~/common/components/ui/separator";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/common/components/ui/navigation-menu";

import { Button } from "~/common/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/common/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";

import { BarChart3Icon, BellIcon, LogOutIcon, MessageCircleIcon, SettingsIcon, UserIcon } from "lucide-react";

const menus = [
  {
    name: "Products",
    to: "/products",
    items: [
      { name: "Leaderboards", to: "/products/leaderboards", description: "Leaderboards" },
      { name: "Categories", to: "/products/categories", description: "Categories" },
      { name: "Search", to: "/products/search", description: "Search" },
      { name: "Submit", to: "/products/submit", description: "Submit" },
      { name: "Promote", to: "/products/promote", description: "Promote" },
    ],
  },
  {
    name: "Jobs",
    to: "/jobs",
    items: [
      { name: "Remote Jobs", to: "/jobs?location=remote", description: "Remote Jobs" },
      { name: "Full-Time Jobs", to: "/jobs?type=full-time", description: "Full-Time Jobs" },
      { name: "Freelance Jobs", to: "/jobs?type=freelance", description: "Freelance Jobs" },
      { name: "Internships", to: "/jobs?type=internship", description: "Internships" },
      { name: "Submit a Job", to: "/jobs/submit", description: "Submit a Job" },
    ],
  },
  {
    name: "Community",
    to: "/community",
    items: [
      { name: "All Posts", to: "/community", description: "All Posts" },
      { name: "Top Posts", to: "/community?sort=top", description: "Top Posts" },
      { name: "New Posts", to: "/community?sort=new", description: "New Posts" },
      { name: "Create a Post", to: "/community/create", description: "Create a Post" },
    ],
  },
  {
    name: "IdeasGPT",
    to: "/ideas",
  },
  {
    name: "Teams",
    to: "/teams",
    items: [
      { name: "All Teams", to: "/teams", description: "All Teams" },
      { name: "Create a Team", to: "/teams/create", description: "Create a Team" },
    ],
  },
];

export default function Navigation({
  isLoggedIn,
  hasNotifications,
  hasMessages,
}: {
  isLoggedIn: boolean;
  hasNotifications: boolean;
  hasMessages: boolean;
}) {
  return (
    <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-bac/">
      <div className="flex items-center">
        <Link to="/" className="font-bold tracking-tighter text-lg">
          wemake
        </Link>
        <Separator orientation="vertical" className="h-6 mx-4" />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                {menu.items ? (
                  <>
                    <Link to={menu.to}>
                      <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="grid w-[500px] font-light gap-3 p-4 grid-cols-2">
                        {menu.items?.map((item) => (
                          <NavigationMenuItem
                            key={item.name}
                            className={cn(["select-none rounded-md transition-colors focus:bg-accent hover:bg-accent"])}
                          >
                            <NavigationMenuLink asChild>
                              <Link className="p-3 space-y-1 block leading-none no-underline outline-none" to={item.to}>
                                <span className="text-sm font-medium leading-none">{item.name}</span>
                                <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link className={navigationMenuTriggerStyle()} to={menu.to}>
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {isLoggedIn ? (
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" asChild className="relative">
            <Link to="/my/notifications">
              <BellIcon className="size-4" />
              {hasNotifications && <div className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full" />}
            </Link>
          </Button>
          <Button size="icon" variant="ghost" asChild className="relative">
            <Link to="/my/messages">
              <MessageCircleIcon className="size-4" />
              {hasMessages && <div className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full" />}
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/5undaye.png" />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="flex flex-col">
                <span className="font-medium">5undaye</span>
                <span className="text-xs text-muted-foreground">5undaye@naver.com</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/dashboard">
                    <BarChart3Icon className="size-4 mr-2" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/dashboard">
                    <UserIcon className="size-4 mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/settings">
                    <SettingsIcon className="size-4 mr-2" />
                    Settings
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/auth/logout">
                  <LogOutIcon className="size-4 mr-2" />
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button asChild variant="secondary">
            <Link to={"/auth/login"}>Login</Link>
          </Button>
          <Button asChild>
            <Link to={"/auth/join"}>Join</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
