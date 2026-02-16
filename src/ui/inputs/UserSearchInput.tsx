'use client';

export default function UserSearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search user by name..."
      className="px-4 py-3 w-[30%] rounded focus:border-gray-400 outline-none border border-[#e2e8f0] transition duration-200"
    />
  );
}
