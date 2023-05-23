import { headerHeight } from "./constants.ts";

export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
  description?: string
  image?: { src?: string; alt?: string };
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children,  } = item;

  return (
    <li class="group flex items-center border-r border-solid border-gray-300">
      <a href={href} class="px-4 py-3 text-gray-500 font-medium">
        <span class="group-hover:underline">
          {label}
        </span>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class="fixed transition shadow-md duration-300 text-left hidden hover:flex group-hover:flex bg-base-100 z-50 items-start justify-center gap-6 border-t border-b-2 border-base-200 w-80"
            style={{ top: "0px", left: "auto", marginTop: headerHeight }}
          >
            <ul class="flex flex-col items-start justify-center gap-6">
              {children.map((node) => (
                <li class={node.children ? "p-3" : ""}>
                  <a class="hover:underline text-base font-medium border-b-2 border-solid border-base-200" href={node.href}>
                    <span>{node.label}</span>
                  </a>

                  <p class="text-gray-500 font-medium">{node.description}</p>
                  <ul class="flex flex-col gap-1 mt-4">
                    {node.children?.map((leaf) => (
                      <li class="border-b border-solid border-gray-300">
                        <a class="hover:underline ml-4" href={leaf.href}>
                          <span class="text-sm">{leaf.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
    </li>
  );
}

export default NavItem;
