import {
  similarWebsites,
  downloadableWebsites,
  technicalWebsites,
  htmlRequirements,
  cssRequirements,
  formRequirements,
  tableRequirements,
  mediaRequirements,
  javascriptRequirements,
  responsiveRequirements,
  ctaRequirements,
  projectDocumentation,
} from "./Requirements";

import { RequirementsList } from "../../components/RequirementsList";

export const CrossReference: React.FunctionComponent = () => {
  return (
    <>
      <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
        Cross Reference Page
      </h1>
      <RequirementsList requirements={similarWebsites}></RequirementsList>
      <RequirementsList requirements={downloadableWebsites}></RequirementsList>
      <RequirementsList requirements={technicalWebsites}></RequirementsList>
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
      <RequirementsList requirements={projectDocumentation}></RequirementsList>
    </>
  );
};
