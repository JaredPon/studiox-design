import {
  htmlRequirements,
  cssRequirements,
  formRequirements,
  tableRequirements,
  mediaRequirements,
  javascriptRequirements,
  responsiveRequirements,
  ctaRequirements,
} from "./requirements";

import { RequirementsList } from "../../components/requirements_list";

export const CrossReference: React.FunctionComponent = () => {
  return (
    <>
      <RequirementsList requirements={htmlRequirements}></RequirementsList>
      <RequirementsList requirements={cssRequirements}></RequirementsList>
      <RequirementsList requirements={formRequirements}></RequirementsList>
      <RequirementsList requirements={tableRequirements}></RequirementsList>
      <RequirementsList requirements={mediaRequirements}></RequirementsList>
      <RequirementsList
        requirements={javascriptRequirements}
      ></RequirementsList>
      <RequirementsList
        requirements={responsiveRequirements}
      ></RequirementsList>
      <RequirementsList requirements={ctaRequirements}></RequirementsList>
    </>
  );
};
