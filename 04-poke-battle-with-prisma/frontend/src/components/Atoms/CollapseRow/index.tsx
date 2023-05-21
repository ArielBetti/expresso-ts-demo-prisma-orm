import { useRef, useState } from "react";
import { TCollapseProps } from "../Collapse/types";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import clsx from "clsx";

const CollapseRow = ({
  isDraw,
  log,
  loserName,
  playerId,
  pokemon1,
  pokemon2,
  userName,
  winner,
  winnerName,
  id,
}: TCollapseProps) => {
  const [collapseToggle, setCollapseToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setCollapseToggle(false));

  return (
    <div
      ref={ref}
      className={clsx(
        "transition-colors border-l-2 hover:bg-base-300 bg-base-100 w-full border-t py-1 border-t-base-300 text-base-content flex flex-col justify-start items-start overflow-hidden",
        winner ? "border-l-success" : "border-l-error",
        collapseToggle && "bg-base-300",
      )}
    >
      <div
        tabIndex={0}
        onClick={() => setCollapseToggle(!collapseToggle)}
        className={clsx(
          "cursor-pointer w-full flex items-start justify-between",
        )}
      >
        <div className="flex gap-2 px-2 flex-col items-start justify-start">
          <p className="font-semibold">
            <span className="capitalize text-bol">{pokemon1.name}</span>{" "}
            <span className="text-lg">VS</span>{" "}
            <span className="capitalize">{pokemon2.name}</span>
          </p>
          <div className="flex items-start justify-start gap-2">
            <img
              className={clsx(
                "h-14 w-14 rounded-md shadow-sm",
                winner ? "bg-success" : "bg-error",
              )}
              src={pokemon1.sprites[0 || 1 || 2]}
              alt={pokemon1.name}
            />
            <img
              className={clsx(
                "h-14 w-14 rounded-md shadow-sm",
                !winner ? "bg-success" : "bg-error",
              )}
              src={pokemon2.sprites[0 || 1 || 2]}
              alt={pokemon2.name}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 px-2 font-thin text-sm">
          <p
            className={clsx(
              "p-1 rounded-sm",
              winner
                ? "bg-success text-success-content"
                : "bg-error text-error-content",
            )}
          >
            {winner ? "Winner" : "Defeat"}
          </p>
          <p>Turns: {Math.floor((log.length + 1) / 2)}</p>
        </div>
      </div>
      <div
        className={clsx(
          "mt-2 transition-all w-full overflow-auto",
          collapseToggle ? "h-96 bg-base-200" : "h-0",
        )}
      >
        <div className="p-2 flex flex-col w-full gap-2">
          {log.map((log) => (
            <div className="border-t border-t-base-300 flex flex-col justify-center items-start p-2 text-base-content w-full">
              <p className="font-thin">Turn: {log.turn}</p>
              <p>{`${log.attacker} used ${log.attack}`}</p>
              <p>{`${log.defender} received ${log.damage} damage!`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollapseRow;
