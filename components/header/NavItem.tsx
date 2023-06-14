import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import { headerHeight } from "./constants.ts";

export interface INavItem {
  label: string;
  href: string;
  icon: AvailableIcons;
  children?: Array<{
    label: string;
    href: string;
    description?: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: { src?: string; alt?: string };
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children, icon } = item;

  const mobileLabel = label.split(" ");
  const lastWord = mobileLabel[mobileLabel.length - 1];
  return (
    <>
      <li class="md:hidden flex group items-center border-r border-solid w-full border-gray-300">
        <details>
          <summary class="py-3 px-0 text-gray-500 font-semibold flex text-left">
            <a href={href} class="group-hover:underline flex text-left text-xs">
              {lastWord}
            </a>
            <Icon
              id={icon}
              width={15}
              height={15}
              strokeWidth={2}
              class="ml-1"
            />
          </summary>

          {children && children.length > 0 && (
            <div class="fixed shadow-md duration-300 text-left bg-base-100 z-50 items-center justify-center border-t border-b-2 border-base-200 w-80 mx-auto mt-9 left-0 right-0">
              <ul class="flex flex-col items-start ml-2 justify-center gap-6">
                {children.map((node) => (
                  <li class={node.children ? "p-3" : ""}>
                    <a
                      class="hover:underline text-base font-medium border-b-2 border-solid border-base-200"
                      href={node.href}
                    >
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
        </details>
      </li>

      {/* Desktop Version */}
      <li class="hidden md:flex group items-center border-r border-solid border-gray-300">
        <details>
          <summary class="px-4 text-gray-500 font-medium flex items-center">
            <a href={href} class="group-hover:underline flex">
              {label}
            </a>
            <Icon
              id={icon}
              width={15}
              height={15}
              strokeWidth={2}
              class="ml-1"
            />
          </summary>

          {children && children.length > 0 && (
            <div
              class="fixed shadow-md duration-300 text-left bg-base-100 z-50 items-start justify-center gap-6 border-t border-b-2 border-base-200 w-80"
              style={{ top: "0px", left: "auto", marginTop: headerHeight }}
            >
              <ul class="flex mt-4 flex-col items-start  ml-2 justify-center gap-6">
                {children.map((node) => (
                  <li class={node.children ? "p-3" : ""}>
                    <a
                      class="hover:underline text-base font-medium border-b-2 border-solid border-base-200"
                      href={node.href}
                    >
                      <span>{node.label}</span>
                    </a>

                    <p class="text-gray-500 font-medium">{node.description}</p>
                    <ul class="flex flex-col gap-1 mt-4">
                      {node.children?.map((leaf) => (
                        <li class="border-b border-solid border-gray-300 flex group">
                          <a class="hover:underline ml-4" href={leaf.href}>
                            <span class="text-sm">{leaf.label}</span>
                          </a>
                          <Icon
                            id="ChevronRight"
                            width={15}
                            height={15}
                            strokeWidth={2}
                            class="ml-auto opacity-0 group-hover:opacity-100"
                          />
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </details>
      </li>
    </>
  );
}

export default NavItem;
