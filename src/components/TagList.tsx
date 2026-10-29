export function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded border border-line bg-white px-2.5 py-1 text-sm text-navy-800">
          {item}
        </li>
      ))}
    </ul>
  )
}
