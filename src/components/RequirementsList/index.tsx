import { Requirements as RequirementsType } from "../../views/Crossreference/Requirements";

type Props = { requirements: RequirementsType };

export const RequirementsList: React.FunctionComponent<Props> = ({
  requirements: { name, id, tasks },
}) => {
  return (
    <div className="text-left my-3 mx-10">
      <h3 className="font-bold text-xl">
        {name} {id}
      </h3>
      <ul className="list-disc">
        {tasks?.map(({ id, description, src }) => (
          <li>
            <a href={src}>{id}</a> - {description}
          </li>
        ))}
      </ul>
    </div>
  );
};
