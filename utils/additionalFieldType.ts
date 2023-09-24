type AdditionalEntityType =
  | "text"
  | "number"
  | "file"
  | "file"
  | "select"
  | "textarea";

const additionalFieldMap = new Map<number, AdditionalEntityType>();

additionalFieldMap.set(1, "text");
additionalFieldMap.set(2, "number");
additionalFieldMap.set(3, "file");
additionalFieldMap.set(4, "file");
additionalFieldMap.set(5, "select");
additionalFieldMap.set(6, "textarea");

export { additionalFieldMap };
