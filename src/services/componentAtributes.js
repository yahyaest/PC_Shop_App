import axios from "axios";

export const componentAttribute = {
  cpu: [
    { title: "name", label: "Name" },
    { title: "price", label: "Price" },
    { title: "frequency", label: "Frequency" },
    { title: "cache", label: "Cache" },
    { title: "cores", label: "Cores" },
  ],
  gpu: [
    { title: "name", label: "Name" },
    { title: "price", label: "Price" },
    { title: "frequency", label: "Frequency" },
    { title: "memory", label: "Memory" },
  ],
  ram: [
    { title: "name", label: "Name" },
    { title: "price", label: "Price" },
    { title: "frequency", label: "Frequency" },
    { title: "capacity", label: "Capacity" },
  ],
  monitor: [
    { title: "name", label: "Name" },
    { title: "price", label: "Price" },
    { title: "resolution", label: "Resolution" },
    { title: "size", label: "Size" },
    { title: "refresh_rate", label: "Refresh Rate" },
  ],
  laptop: [
    { title: "name", label: "Name" },
    { title: "price", label: "Price" },
    { title: "cpu", label: "CPU" },
    { title: "gpu", label: "GPU" },
    { title: "ram", label: "RAM" },
    { title: "hard_disk", label: "Hard Disk" },
    { title: "screen_size", label: "Screen Size" },
  ],

  pcGamer: [
    { title: "name", label: "Name" },
    { title: "price", label: "Price" },
    { title: "cpu", label: "CPU" },
    { title: "gpu", label: "GPU" },
    { title: "ram", label: "RAM" },
    { title: "hard_disk", label: "Hard Disk" },
    { title: "power", label: "Power" },
    { title: "mother_board", label: "Mother Board" },
    { title: "pc_case", label: "PC Case" },
  ],
};

export const componentAttributeInfo = [
  //{ title: "name", label: "Name", unit: "" },
  { title: "price", label: "Price", unit: "TND" },
  { title: "capacity", label: "Capacity", unit: "Go" },
  { title: "frequency", label: "Frequency", unit: "" },
  { title: "cache", label: "Cache", unit: "Mo" },
  { title: "cores", label: "Cores", unit: "" },
  { title: "memory", label: "Memory", unit: "Go" },
  { title: "resolution", label: "Resolution", unit: "" },
  { title: "size", label: "Size", unit: "Inch" },
  { title: "refresh_rate", label: "Refresh Rate", unit: "Hz" },
  { title: "cpu", label: "CPU", unit: "" },
  { title: "gpu", label: "GPU", unit: "" },
  { title: "ram", label: "RAM", unit: "Go" },
  { title: "hard_disk", label: "Hard Disk", unit: "" },
  { title: "power", label: "Power", unit: "" },
  { title: "mother_board", label: "Mother Board", unit: "" },
  { title: "pc_case", label: "PC Case", unit: "" },
  { title: "screen_size", label: "Screen Size", unit: "Inch" },
];

export const getAllComponents = async () => {
  let allComponents = [];
  const componentVariants = Object.keys(componentAttribute);

  for (let variant of componentVariants) {
    const result = await axios.get(`http://127.0.0.1:8000/api/${variant}/`);

    for (let component of result.data) {
      allComponents.push(component);
    }
  }

  return allComponents;
};
