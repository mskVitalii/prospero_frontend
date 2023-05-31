export const tagTypes = {
  SEARCH_TAG: "SEARCH_TAG",
} as const;

export type TagType = typeof tagTypes[keyof typeof tagTypes];
