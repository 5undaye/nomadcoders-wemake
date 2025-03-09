import { Link } from "react-router";
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
import { cn } from "~/lib/utils";

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

export default function Navigation() {
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
    </nav>
  );
}
