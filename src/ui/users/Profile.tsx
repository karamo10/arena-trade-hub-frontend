'use client';

import handleAuthError from '@/lib/handleAuthError';
import { getProfile, updateProfile } from '@/services/api';
import { UserProfile } from '@/types/user-profile-type';
import { PlusCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [userProfile, setUserProfile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUserProfile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await getProfile();
        setProfile(res);
      } catch (err) {
        handleAuthError(err);
        console.error(err);
      }
    }
    fetchProfile();
  }, []);

  const handleSave = async () => {
    if (!profile) return;
    setSaving(true);

    const fd = new FormData();
    fd.append('name', profile.name);
    fd.append('address', profile.address || '');
    fd.append('whatsapp_number', profile.whatsapp_number || '');

    if (userProfile) {
      fd.append('image', userProfile);
    }

    try {
      const res = await updateProfile(fd);
      toast.success(res.message);
    } catch (err) {
      handleAuthError(err);
      console.error(err);
    }

    setSaving(false);
  };

  if (!profile) return <p className="font-medium text-xs text-center">please wait your profile loading...</p>;

  return (
    <div className="w-[90%] max-w-[625px] mx-auto py-5 px-10 bg-white border border-slate-300 rounded">
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-1">
          <div className="bg-amber-900 flex items-center justify-center w-[100px] h-[100px] rounded-full overflow-hidden">
            <Image
              src={preview || profile?.image || '/default-avatar.png'}
              width={100}
              height={100}
              className="object-cover w-full h-full cursor-zoom-in"
              alt={'user profile picture'}
            />
            </div>
            <div>
              <label className="text-indigo-950 hover:opacity-90 cursor-pointer">
                <PlusCircleIcon className='w-8 h-8' />
                <input
                type="file"
                accept="image/*"
                onChange={handleImgChange}
                className="hidden"
              />
              </label>
            </div>
          
        </div>
        <div className='grow'>
          <div>
            <label className="font-medium text-sm">username</label>
            <input
              value={profile.name}
              className="block w-full bg-slate-200 text-xl p-3 opacity-80 rounded border border-slate-400 outline-none cursor-not-allowed"
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              readOnly
            />
          </div>

          <div className="mt-3">
            <label className="font-medium text-sm">email</label>
            <input
              value={profile.email}
              className="block w-full bg-slate-200 text-lg opacity-80 p-3 rounded input cursor-not-allowed border border-slate-400 outline-none"
              readOnly
            />
          </div>

          <div className="mt-3">
            <label className="font-medium text-sm">address</label>
            <input
              value={profile.address || ''}
              className="block w-full bg-slate-200 text-lg opacity-80 p-3 rounded border border-slate-400 focus:border-indigo-900 outline-none"
              onChange={(e) =>
                setProfile({ ...profile, address: e.target.value })
              }
            />
          </div>

          <div className="mt-3 relative">
            <label className="font-medium text-sm">whatsapp number</label>
            <input
              value={profile.whatsapp_number || ''}
              className="block w-full bg-slate-200 text-lg opacity-80 py-3 px-13 rounded border border-slate-400 focus:border-indigo-900 outline-none"
              minLength={7}
              onChange={(e) =>
                setProfile({ ...profile, whatsapp_number: e.target.value })
              }
            />
            <p className="absolute top-9 left-2 text-lg opacity-80">+220</p>
          </div>

          <button
            className="bg-indigo-900 w-full text-white px-4 py-2 font-medium rounded hover:opacity-90 cursor-pointer transition-all mt-3"
            onClick={handleSave}
          >
            {' '}
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}
