const hero = {
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    },
    {
      name: "url",
      title: "Button URL",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};

export default hero;
