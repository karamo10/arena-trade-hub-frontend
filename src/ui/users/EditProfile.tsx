import { useEffect, useState } from 'react';

interface EditProfileProps {
  onClose: () => void;
}

export function EditProfile({ onClose }: EditProfileProps) {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-[300px] sm:max-w-[500px] bg-white z-50 transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,1,1)] overflow-y-auto scroll-auto ${visible ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* header */}
        <div className="flex flex-col gap-1.5 p-4 font-semibold">
          <h2 className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5 text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <span className="text-sm">Edit Profile</span>
          </h2>
          <p className="text-sm text-clr-secondary font-normal break-words">
            Update your personal information.
          </p>
        </div>
        {/* form container */}
        <div className="mt-5 pb-5">
          {/* form */}
          <form className="space-y-8">
            {/* Account (Read-Only) */}
            <div className="space-y-4">
              <div className="space-y-3 border border-[#e5e7eb] rounded-lg p-4 bg-gray-50">
                {/* form header */}
                <h3 className="text-clr-primary text-sm font-medium flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                  Account (Read-Only)
                </h3>
                {/* first name */}
                <div className="space-y-3">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="font-medium text-sm text-gray-600"
                    >
                      First Name
                    </label>
                    <div className="bg-white txt-clr-primary p-2 rounded border border-[#e5e7eb] text-sm capitalize cursor-not-allowed mt-1">
                      Pabicamz
                    </div>
                  </div>
                </div>
                {/* last name */}
                <div className="space-y-3">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="font-medium text-sm text-gray-600"
                    >
                      Last Name
                    </label>
                    <div className="bg-white txt-clr-primary p-2 rounded border border-[#e5e7eb] text-sm capitalize cursor-not-allowed mt-1">
                      Not provided
                    </div>
                  </div>
                </div>
                {/* email */}
                <div className="space-y-3">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="font-medium text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <div className="bg-white txt-clr-primary p-2 rounded border border-[#e5e7eb] text-sm lowercase cursor-not-allowed mt-1 break-words">
                      Pabicamz@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information (Editable) */}
            <div className="space-y-4">
              <div className="space-y-3 border border-[#e5e7eb] rounded-lg p-4 bg-white">
                {/* form header */}
                <h3 className="text-sm font-medium flex items-center break-words">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Additional Information (Editable)
                </h3>
                {/* first name */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-clr-primary text-sm font-medium flex items-center gap-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                      <span>First Name (override)</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      className="w-full p-2 placeholder:text-sm border border-[#e5e7eb] rounded shadow-xs capitalize bg-transparent outline-none focus:border-gray-900"
                      autoComplete="new-firstName"
                    />
                    <p className="text-xs text-clr-secondary mt-1">
                      Override first name for display
                    </p>
                  </div>
                </div>
                {/* last name */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-clr-primary text-sm font-medium flex items-center gap-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                      <span>Last Name (override)</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      className="text-clr-primary w-full p-2 placeholder:text-sm border border-[#e5e7eb] rounded shadow-xs capitalize bg-transparent outline-none focus:border-gray-900"
                      autoComplete="new-lastName"
                    />
                    <p className="text-xs text-clr-secondary mt-1">
                      Override last name for display
                    </p>
                  </div>
                </div>
                {/* phone number */}
                {/* <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="phoneNumber"
                      className="text-sm font-medium flex items-center gap-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
                      <span>Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Enter phone number"
                      className="w-full p-2 placeholder:text-sm border border-[#e5e7eb] rounded shadow-xs bg-transparent"
                      autoComplete="new-phoneNumber"
                    />
                  </div>
                </div> */}
              </div>
            </div>

            {/* Add Address */}
            <div className="space-y-4">
              {/* header */}
              <div className="flex flex-col gap-1.5 p-4 font-semibold">
                <h2 className="text-clr-primary text-sm font-medium flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5 tetx-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <span className="text-sm">Add Address</span>
                </h2>
                <p className="text-sm text-clr-secondary font-normal break-words">
                  Add address to your account.
                </p>
              </div>
              <div className="bg-red-0 space-y-3 border border-[#e5e7eb] rounded-lg p-4 bg-white">
                {/* address */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="address"
                      className="text-clr-primary text-sm font-medium"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="e.g., Brikama, Farato, Banjul "
                      className="w-full p-2 placeholder:text-sm border border-[#e5e7eb] outline-none focus:border-gray-900 rounded shadow-xs bg-transparent mt-1"
                      autoComplete="new-address"
                    />
                  </div>
                </div>
                {/* phone number */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="phoneNumber"
                      className="text-sm font-medium"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Enter phone number"
                      className="w-full p-2 placeholder:text-sm border border-[#e5e7eb] outline-none focus:border-gray-900 rounded shadow-xs bg-transparent mt-1"
                      autoComplete="new-phoneNumber"
                    />
                  </div>
                </div>
                {/* street address */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="streetAddress"
                      className="text-clr-primary text-sm font-medium"
                    >
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter your street address (street name)"
                      className="w-full p-2 placeholder:text-sm border border-[#e5e7eb] outline-none focus:border-gray-900 rounded shadow-xs bg-transparent break-words mt-1"
                      autoComplete="new-streetAddress"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Save changes button */}
            <div className="bg-red-0 pt-6 border-t border-t-[#e5e7eb] px-1">
              <button className="inline-flex items-center justify-center gap-2 bg-black w-full text-white text-sm hover:opacity-85 transition-all duration-200 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="size-4"
                  aria-hidden="true"
                >
                  <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                  <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                  <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                </svg>
                <span className="font-normal">Save Changes</span>
              </button>
            </div>
          </form>
        </div>

        {/* close edit form */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="size-5 absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-900 transition-all duration-200"
            onClick={handleClose}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
