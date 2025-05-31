export interface StateData {
    name: string;
    center: [number, number];
    zoom: number;
    description?: string;
  }
  
  export const stateData: { [key: string]: StateData } = {
    "Andhra Pradesh": {
      name: "Andhra Pradesh",
      center: [79.7400, 15.9129],
      zoom: 2000,
    },
    "Arunachal Pradesh": {
      name: "Arunachal Pradesh",
      center: [94.7278, 28.2180],
      zoom: 2500,
    },
    "Assam": {
      name: "Assam",
      center: [92.9376, 26.2006],
      zoom: 2500,
    },
    "Bihar": {
      name: "Bihar",
      center: [85.3131, 25.0961],
      zoom: 2500,
    },
    "Chhattisgarh": {
      name: "Chhattisgarh",
      center: [81.8661, 21.2787],
      zoom: 2200,
    },
    "Goa": {
      name: "Goa",
      center: [74.1240, 15.2993],
      zoom: 4000,
    },
    "Gujarat": {
      name: "Gujarat",
      center: [71.1924, 22.2587],
      zoom: 2000,
    },
    "Haryana": {
      name: "Haryana",
      center: [76.0856, 29.0588],
      zoom: 3000,
    },
    "Himachal Pradesh": {
      name: "Himachal Pradesh",
      center: [77.1734, 31.1048],
      zoom: 3000,
    },
    "Jharkhand": {
      name: "Jharkhand",
      center: [85.2799, 23.6102],
      zoom: 2500,
    },
    "Karnataka": {
      name: "Karnataka",
      center: [75.7139, 15.3173],
      zoom: 2000,
    },
    "Kerala": {
      name: "Kerala",
      center: [76.2711, 10.8505],
      zoom: 2500,
    },
    "Madhya Pradesh": {
      name: "Madhya Pradesh",
      center: [78.6569, 22.9734],
      zoom: 1800,
    },
    "Maharashtra": {
      name: "Maharashtra",
      center: [75.7139, 19.7515],
      zoom: 1800,
    },
    "Manipur": {
      name: "Manipur",
      center: [93.9063, 24.6637],
      zoom: 3000,
    },
    "Meghalaya": {
      name: "Meghalaya",
      center: [91.3662, 25.4670],
      zoom: 3000,
    },
    "Mizoram": {
      name: "Mizoram",
      center: [92.9376, 23.1645],
      zoom: 3000,
    },
    "Nagaland": {
      name: "Nagaland",
      center: [94.5624, 26.1584],
      zoom: 3000,
    },
    "Odisha": {
      name: "Odisha",
      center: [85.0985, 20.9517],
      zoom: 2200,
    },
    "Punjab": {
      name: "Punjab",
      center: [75.3412, 31.1471],
      zoom: 2500,
    },
    "Rajasthan": {
      name: "Rajasthan",
      center: [74.2179, 27.0238],
      zoom: 1800,
    },
    "Sikkim": {
      name: "Sikkim",
      center: [88.5122, 27.5330],
      zoom: 4000,
    },
    "Tamil Nadu": {
      name: "Tamil Nadu",
      center: [78.6569, 11.1271],
      zoom: 2000,
    },
    "Telangana": {
      name: "Telangana",
      center: [79.0193, 17.1231],
      zoom: 2200,
    },
    "Tripura": {
      name: "Tripura",
      center: [91.9882, 23.9408],
      zoom: 3000,
    },
    "Uttar Pradesh": {
      name: "Uttar Pradesh",
      center: [80.9462, 26.8467],
      zoom: 1800,
    },
    "Uttarakhand": {
      name: "Uttarakhand",
      center: [79.0193, 30.0668],
      zoom: 2500,
    },
    "West Bengal": {
      name: "West Bengal",
      center: [87.8550, 22.9868],
      zoom: 2200,
    }
  };