'use client';

interface Props {
  onChange: (type: string) => void;
}

export default function ChartTypeSelector({ onChange }: Props) {
  return (
    <div className="flex gap-2 my-4">
      <button onClick={() => onChange("bar")} className="px-3 py-1 bg-blue-500 text-white rounded">Bar</button>
      <button onClick={() => onChange("line")} className="px-3 py-1 bg-green-500 text-white rounded">Line</button>
      <button onClick={() => onChange("pie")} className="px-3 py-1 bg-purple-500 text-white rounded">Pie</button>
    </div>
  );
}
