'use client';

interface Props {
  onChange: (value: number) => void;
}

export default function YearFilter({ onChange }: Props) {
  return (
    <input
      type="number"
      placeholder="Enter minimum sales"
      className="border p-2 rounded w-full"
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}
