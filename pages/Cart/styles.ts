const mainContainerClasses = [
  "select-none",
  "flex",
  "flex-col",
  "md:flex-row",
  

  "items-center",
  " h-auto",
  "min-h-[90vh]",
  " w-screen",
  "bg-[#181b23]",
  "text-white",
].join(" ");

const divClasses = ["flex", "justify-around", "items-center", " w-2/3"].join(
  " ",
);

const secDivClasses = ["m-6", "items-center", "min-w-[550px]"].join(" ");

const thirDivClasses = ["h-6", "text-2xl", "min-w-[768px]", "m-4"].join(" ");

export { mainContainerClasses, divClasses, secDivClasses, thirDivClasses };
