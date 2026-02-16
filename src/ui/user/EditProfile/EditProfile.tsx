import React, { useEffect, useState } from 'react';
import { getFullProfile, updateProfile } from '@/services/api';
import { FullProfile } from '@/types/user/user.profile';
import handleAuthError from '@/lib/handleAuthError';
import Image from 'next/image';
import { toast } from 'react-toastify';

// interface EditProfileProps {
//   onClose: () => void;
// }

export function EditProfile({ onClose }: {onClose: () => void}) {
  const [profile, setProfile] = useState<FullProfile | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [visible, setVisible] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [upload, setUpload] = useState(false);

  async function fetchFullProfile() {
    try {
      const res = await getFullProfile();
      setProfile(res);
    } catch (err) {
      handleAuthError(err);
      console.error(err);
    }
  }

  useEffect(() => {
    setVisible(true);

    fetchFullProfile();
  }, []);

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    if (!profile) return;
    const fd = new FormData();
    fd.append('first_name', profile.first_name);
    fd.append('last_name', profile.last_name);
    fd.append('address', profile.address || '');
    fd.append('phone_number', profile.phone_number || '');
    fd.append('street_address', profile.street_address || '');

    if (imageFile) {
      fd.append('image', imageFile);
    }

    try {
      const res = await updateProfile(fd);
      toast.success(res.message);
      fetchFullProfile();
      setSaving(false);
    } catch (err) {
      handleAuthError(err);
      console.error(err);
    }
  };

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
        <div className="flex flex-col gap-1.5 p-4">
          <h2 className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <span className="text-sm font-semibold">Edit Profile</span>
          </h2>
          <p className="text-sm text-clr-secondary font-normal break-words">
            Update your personal information.
          </p>
        </div>
        {/* form container */}
        <div className="mt-5 pb-5">
          {/* form */}
          <form className="space-y-8" onSubmit={handleSave}>
            {/* Account (Read-Only) */}
            <div className="space-y-4">
              <div className="space-y-3 border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-xs">
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
                    <div className="bg-white text-clr-primary p-2 rounded border border-[#e5e7eb] text-sm capitalize cursor-not-allowed mt-1">
                      {profile?.first_name || ''}
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
                    <div className="bg-white text-clr-primary p-2 rounded border border-[#e5e7eb] text-sm capitalize cursor-not-allowed mt-1">
                      {profile?.last_name || ''}
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
                    <div className="bg-white text-clr-primary p-2 rounded border border-[#e5e7eb] text-sm lowercase cursor-not-allowed mt-1 break-words">
                      {profile?.email || ''}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information (Editable) */}
            {/* upload profile image */}
            <div className="">
              <div className="bg-gray-50 border border-gray-200 flex items-center p-4 space-x-4">
                <Image
                  src={profile?.image || '/images/avatar.gif'}
                  alt="profile image"
                  width={100}
                  height={100}
                  className="object-cover rounded-full h-10 w-10  cursor-zoom-in"
                />
                <div className="space-y-2 bg-amber-00">
                  {!upload && (
                    <button
                      onClick={() => setUpload(true)}
                      className="text-sm text-clr-primary font-normal px-3 py-2 border border-gray-200 shadow-xs hover:bg-white transition-all duration-200 cursor-pointer"
                    >
                      Upload new picture
                    </button>
                  )}
                  {upload && (
                    <fieldset className="flex flex-col space-y-2">
                      <input
                        type="file"
                        name="image"
                        className="text-sm"
                        accept="image/*"
                        onChange={handleImgChange}
                      />
                      <span className="text-xs text-clr-secondary">
                        PG, GIF or PNG. Max size of 800K
                      </span>
                    </fieldset>
                  )}

                  {upload && (
                    <button
                      onClick={() => setUpload(false)}
                      className="text-xs text-clr-secondary py-1 px-3 font-medium rounded border border-gray-200 hover:bg-white transition-all duration-200 shadow-xs cursor-pointer"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Add frst_name, last_name */}
            <div className="space-y-4">
              <div className="space-y-3 border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-xs">
                {/* form header */}
                <h3 className="text-sm font-medium flex items-center break-words">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Additional Info (Editable)
                </h3>
                {/* first name */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
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
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                      <span>First Name (override)</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={profile?.first_name || ''}
                      placeholder="Enter first name"
                      className="w-full px-3 py-2 text-sm placeholder:text-sm placeholder:text-gray-500 border border-gray-200 rounded shadow-xs capitalize bg-transparent outline-none focus:border-gray-900"
                      autoComplete="new-firstName"
                      onChange={(e) =>
                        setProfile((prev) =>
                          prev ? { ...prev, first_name: e.target.value } : prev,
                        )
                      }
                    />
                    <p className="text-xs text-clr-secondary mt-">
                      Override first name for display
                    </p>
                  </div>
                </div>
                {/* last name */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
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
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                      <span>Last Name (override)</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={profile?.last_name || ''}
                      placeholder="Enter last name"
                      className="w-full px-3 py-2 text-sm placeholder:text-sm placeholder:text-gray-500 border border-gray-200 rounded shadow-xs capitalize bg-transparent outline-none focus:border-gray-900"
                      autoComplete="new-lastName"
                      onChange={(e) =>
                        setProfile((prev) =>
                          prev ? { ...prev, last_name: e.target.value } : prev,
                        )
                      }
                    />
                    <p className="text-xs text-clr-secondary">
                      Override last name for display
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Add Address */}
            <div className="space-y-2 border border-gray-200 rounded-lg bg-gray-50 shadow-xs">
              {/* header */}
              <div className="flex flex-col gap-1.5 px-4 pt-4 font-semibold">
                <h2 className="text-sm font-medium flex items-center space-x-1">
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
              <div className="space-y-3 g px-4 pb-4 bg-red-00">
                {/* address */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-medium">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={profile?.address || ''}
                      placeholder="e.g., Brikama, Farato, Banjul "
                      className="w-full px-3 py-2 text-sm placeholder:text-sm border placeholder:text-gray-500 border-gray-200 outline-none focus:border-gray-900 rounded shadow-xs bg-transparent mt-1"
                      autoComplete="new-address"
                      onChange={(e) =>
                        setProfile((prev) =>
                          prev ? { ...prev, address: e.target.value } : prev,
                        )
                      }
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
                      value={profile?.phone_number || ''}
                      placeholder="Enter phone number"
                      className="w-full px-3 py-2 text-sm placeholder:text-sm border placeholder:text-gray-500 border-gray-200 outline-none focus:border-gray-900 rounded shadow-xs bg-transparent mt-1"
                      autoComplete="new-phoneNumber"
                      onChange={(e) =>
                        setProfile((prev) =>
                          prev
                            ? { ...prev, phone_number: e.target.value }
                            : prev,
                        )
                      }
                    />
                  </div>
                </div>
                {/* street address */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="streetAddress"
                      className="text-sm font-medium"
                    >
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={profile?.street_address || ''}
                      placeholder="Enter your street address (street name)"
                      className="w-full px-3 py-2 text-sm placeholder:text-sm placeholder:text-gray-500 border border-gray-200 outline-none focus:border-gray-900 rounded shadow-xs bg-transparent break-words mt-1"
                      autoComplete="new-streetAddress"
                      onChange={(e) =>
                        setProfile((prev) =>
                          prev
                            ? { ...prev, street_address: e.target.value }
                            : prev,
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Save changes button */}
            <div className="bg-red-0 pt-6 border-t border-t-gray-200 px-1">
              <button
                className="inline-flex items-center justify-center py-2 rounded gap-2 bg-black w-full text-white text-sm hover:opacity-90 transition-all duration-500 cursor-pointer"
                type="submit"
              >
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
                <span className="font-normal">
                  {' '}
                  {saving ? 'Saving Changes...' : 'Save Changes'}{' '}
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* btn close form */}
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
