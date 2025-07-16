"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <Menu.Button className="inline-flex justify-between items-center w-full px-4 py-3 bg-white text-sm font-medium text-gray-700 border-b border-gray-200 hover:bg-gray-50 focus:outline-none">
          <span className="font-semibold text-gray-800">User Menu</span>
          <ChevronDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-1 w-full rounded-md shadow bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/userprofile/linkedprofile"
                  className={classNames(
                    active ? "bg-blue-50 text-blue-700" : "text-gray-700",
                    "block px-4 py-2 text-sm font-medium hover:bg-blue-50"
                  )}
                >
                  Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/userprofile/usercontact"
                  className={classNames(
                    active ? "bg-blue-50 text-blue-700" : "text-gray-700",
                    "block px-4 py-2 text-sm font-medium hover:bg-blue-50"
                  )}
                >
                  Contact
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/userprofile/userabout"
                  className={classNames(
                    active ? "bg-blue-50 text-blue-700" : "text-gray-700",
                    "block px-4 py-2 text-sm font-medium hover:bg-blue-50"
                  )}
                >
                  About
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
