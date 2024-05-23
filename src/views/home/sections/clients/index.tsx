import "./clients.css";

export const Clients: React.FunctionComponent = () => {
  const clientList1 = [
    "AMMSA",
    "Cash Back Real Estate Ltd.",
    "City of Airdrie",
    "Curling Alberta",
    "Gas Alberta Inc.",
    "Hurricane Pipe & Supply LLC",
    "JOEY Restaurant Group",
  ];

  const clientList2 = [
    "Lincoln County Oilfield Services",
    "Marr & Company",
    "Native Delights",
    "Curling Alberta",
    "Northwestern Polytechnic",
    "myowngreenhouse.ca",
    "SummersDirect",
    "University of Alberta",
    "Western Varieties Wholesale",
  ];

  return (
    <div className="card px-5 md:px-44 text-left">
      <h1 className="text-left">we are proud to collaborate with:</h1>
      <div className="md:columns-2 text-xl md:text-2xl mt-10">
        <ul className="list-none">
          {clientList1?.map((client) => <li>{client}</li>)}
        </ul>
        <ul className="list-none">
          {clientList2?.map((client) => <li>{client}</li>)}
        </ul>
      </div>
    </div>
  );
};
