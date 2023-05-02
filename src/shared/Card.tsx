import clsx from "clsx";

type CardProps = {
  /** CSS class applied to the root div */
  className?: string;
  children: React.ReactNode;
};

export function Card(props: CardProps) {
  return (
    <div
      className={clsx(
        props.className,
        "border w-96 border-cyan-600 p-4 max-w-md rounded shadow-md bg-slate-200"
      )}
    >
      {props.children}
    </div>
  );
}
