const mainFeaturesScheam = {
  name: "mainFeatures",
  title: "Main Features",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};

export default mainFeaturesScheam;
