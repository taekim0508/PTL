type Props = {
  heading: string;
  caption?: string;
  note?: string;
  rows: { time: string; activity: string }[];
};

export default function ScheduleTable({ heading, caption, note, rows }: Props) {
  return (
    <div className="overflow-hidden rounded-soft border border-forest/10 bg-white shadow-sm">
      <div className="border-b border-forest/10 bg-cream-soft px-5 py-4 sm:px-6">
        <h3 className="font-display text-xl font-semibold text-forest">{heading}</h3>
        {caption ? (
          <p className="mt-0.5 text-sm font-semibold text-gold-dark">{caption}</p>
        ) : null}
      </div>

      <table className="w-full border-collapse text-left">
        <caption className="sr-only">{heading}</caption>
        <thead className="sr-only">
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Activity</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ time, activity }) => (
            <tr key={`${time}-${activity}`} className="border-b border-forest/8 last:border-0">
              <th
                scope="row"
                className="w-28 px-4 py-3 align-top text-sm font-semibold text-forest sm:w-44 sm:whitespace-nowrap sm:px-6 sm:text-base"
              >
                {time}
              </th>
              <td className="px-4 py-3 align-top text-base leading-relaxed text-charcoal/75 sm:px-6">
                {activity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {note ? (
        <p className="border-t border-forest/10 px-5 py-3 text-sm text-charcoal/75 sm:px-6">
          {note}
        </p>
      ) : null}
    </div>
  );
}
