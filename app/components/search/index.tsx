import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiOutlineSearch as SearchIcon } from "react-icons/hi";
import { MdClose as Close } from "react-icons/md";
import SearchForm from "./SearchForm";
import clsx from "clsx";

const Search = () => {
  const [open, setOpen] = useState(false);
  const [openOverlay, setOpenOverlay] = useState(false);

  return (
    <>
      {openOverlay && (
        <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-green-900 overlay opacity-80">
          <h3>Searching...</h3>
        </div>
      )}
      <button
        aria-label="search"
        onClick={() => setOpen(true)}
        className="border-l border-white cursor-pointer"
      >
        <SearchIcon className={`text-[24px] text-white   ml-3`} />
      </button>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className={clsx("fixed inset-0 overflow-hidden", "z-20")}
          open={open}
          onClose={setOpen}
        >
          <div className={clsx("absolute inset-0 overflow-hidden")}>
            {/* Overlay */}
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className={clsx(
                  "absolute inset-0",
                  "transition-opacity",
                  "bg-teal-900 bg-opacity-80"
                )}
              />
            </Transition.Child>
            <div
              className={clsx("fixed inset-x-0 top-0", "flex", "max-w-full")}
            >
              {/* Sliding search */}
              <Transition.Child
                as={Fragment}
                enter=" transition ease-in-out duration-500"
                enterFrom="-translate-y-full"
                enterTo="-translate-y-0"
                leave="transition ease-in-out duration-500 "
                leaveFrom="-translate-y-0"
                leaveTo="-translate-y-full"
              >
                <div
                  className={clsx(
                    "relative",
                    "w-screen max-w-full",
                    "bg-teal-900",
                    "px-10 py-5"
                  )}
                >
                  <button
                    className={clsx("absolute right-3 top-3")}
                    aria-label="close menu"
                  >
                    <Close
                      className={`text-[24px] text-white `}
                      onClick={() => setOpen(false)}
                    />
                  </button>
                  <div>
                    <SearchForm
                      setOpen={setOpen}
                      openOverlay={openOverlay}
                      setOpenOverlay={setOpenOverlay}
                    />
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Search;
