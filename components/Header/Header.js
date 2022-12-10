import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  HomeIcon,
  WalletIcon,
} from "@heroicons/react/24/solid";
import Logo from "./Logo";

const navigation = [
  { name: "Dashboard", href: "/", current: true, icon: HomeIcon },
  { name: "Team", href: "#", current: false, icon: WalletIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-black sm:h-screen sm:w-20">
      {({ open }) => (
        <>
          <div className="">
            <div className="relative sm:block flex h-16 items-center justify-between sm:px-0 px-6">
              <div className="inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex gap-10 flex-col sm:py-8">
                <div className="flex justify-center sm:px-4">
                  <Logo />
                </div>
                <div className="hidden sm:block">
                  <div className="flex gap-4 flex-col">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? " text-white border-l-2 border-white"
                            : "text-gray-500 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 text-xs font-medium flex justify-center text-gray-500"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon width={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
