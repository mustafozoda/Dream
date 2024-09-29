export default function TaskTable({ header, rows }) {
  return (
    <div className="rounded-[10px] border-[2px] border-red-700 border-y-red-700">
      <table className="w-full" border="1" cellSpacing="1" cellPadding="8">
        <thead>
          <tr>
            <th className="">SN</th>
            <th className="border-l border-r border-red-700">{header}</th>
            <th className="">Number</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              className="border-y border-red-700 border-y-red-700"
              key={index}
            >
              <td className="text-center">{index + 1}</td>
              <td className="border border-red-700 text-center">{row.label}</td>
              <td className="text-center">{row.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
