type Props = {
  heading: string;
  caption?: string;
  note?: string;
  rows: { time: string; activity: string }[];
};

/**
 * The header used to be cream-soft sitting on a cream-soft section, which put
 * the title of the schedule at the same value as the page behind it. It is
 * now forest: the header of a table is a different kind of thing from its
 * rows, and it should not take a second look to tell which is which.
 */
export default function ScheduleTable({ heading, caption, note, rows }: Props) {
  return (
    <div className="overflow-hidden rounded-soft border border-forest/12 bg-white shadow-sm">
      <div className="bg-forest px-5 py-4 sm:px-6">
        <h3 className="font-display text-xl font-semibold text-cream">{heading}</h3>
        {caption ? (
          <p className="mt-0.5 text-sm font-semibold text-gold-soft">{caption}</p>
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
          {rows.map(({ time, activity }, index) => (
            <tr
              key={`${time}-${activity}`}
              /* Banding beats hairlines on a table this tall: the eye tracks a
                 row across to its activity without losing the line. */
              className={index % 2 === 1 ? "bg-cream/60" : ""}
            >
              <th
                scope="row"
                className="w-28 px-4 py-3 align-top text-sm font-semibold text-forest sm:w-44 sm:whitespace-nowrap sm:px-6 sm:text-base"
              >
                {time}
              </th>
              <td className="px-4 py-3 align-top text-base leading-relaxed text-charcoal/80 sm:px-6">
                {activity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {note ? (
        <p className="border-t border-forest/12 bg-cream-soft px-5 py-3 text-sm text-charcoal/75 sm:px-6">
          {note}
        </p>
      ) : null}
    </div>
  );
}
