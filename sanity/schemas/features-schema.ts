const features = {
  name: "features",
  title: "Features",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Icon",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
      options: { hotspot: true },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default features;
