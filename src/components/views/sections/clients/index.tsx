import "./clients.css";

export const Clients: React.FunctionComponent = () => {
  return (
    <div className="card px-5 md:px-44 text-left">
      <h1 className="text-left">we are proud to collaborate with:</h1>
      <div className="md:columns-2 text-xl md:text-2xl mt-10">
        <ul className="list-none">
          <li>AMMSA</li>
          <li>Cash Back Real Estate Ltd.</li>
          <li>City of Airdrie</li>
          <li>Curling Alberta</li>
          <li>Gas Alberta Inc.</li>
          <li>Hurricane Pipe & Supply LLC</li>
          <li>JOEY Restaurant Group</li>
        </ul>
        <ul className="list-none">
          <li>Lincoln County Oilfield Services</li>
          <li>Marr & Company</li>
          <li>Native Delights</li>
          <li>Curling Alberta</li>
          <li>Northwestern Polytechnic</li>
          <li>myowngreenhouse.ca</li>
          <li>SummersDirect</li>
          <li>University of Alberta</li>
          <li>Western Varieties Wholesale</li>
        </ul>
      </div>
    </div>
  );
};
