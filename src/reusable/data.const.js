export const plantData = [
  {
    name: "Maize",
  },
  {
    name: "Tomatoes",
  },
  {
    name: "Potatoes",
  },
];

export const pestData = [
  "White flies ",
  ,
  "Tuta Absoluta",
  "Thrips",
  "Aphids",
  "Nematodes",
  "Fall army worm",
];
export const PesticideData = [
  {
    pest: "Nematodes",
    plant: ["Tomatoes", "Potatoes"],
    activeIngredient: "",
    pesticides: "Velum",
    preHarvestInterval: 0,
    rate: "8-20 ml /ha",
    modeOfAction: "Contact",
  },
  {
    pest: "Cut Worms",
    plant: ["Tomatoes", "Potatoes", "Maize"],
    activeIngredient: "lambdacyhalothrin",
    pesticides: "Voltage",
    preHarvestInterval: 4,
    rate: "350ml/ha ",
    modeOfAction: "Contact",
  },
  {
    pest: "Tuta absoluta",
    plant: ["Tomatoes", "Potatoes"],
    activeIngredient: "azadiractin",
    pesticides: "Nimbecidine ",
    preHarvestInterval: 2,
    rate: "2.5l /ha",
    modeOfAction: "Systemic",
  },
  {
    pest: "",
    plant: ["Tomatoes", "Potatoes"],
    activeIngredient: "flubendiamide",
    pesticides: "Belt",
    preHarvestInterval: 4,
    rate: "5ml /20ha",
    modeOfAction: "Larvicidal",
  },
  {
    pest: "",
    plant: ["Tomatoes", "Potatoes"],
    activeIngredient: "Indoxicab",
    pesticides: "Indox",
    preHarvestInterval: 4,
    rate: "0.25l /ha",
    modeOfAction: "Contact",
  },
  {
    pest: "",
    plant: ["Tomatoes", "Potatoes"],
    activeIngredient: "Amamectin benzoate",
    pesticides: "Escort",
    preHarvestInterval: 8,
    rate: "0.4l /ha",
    modeOfAction: "Systemic",
  },
  {
    pest: "Fall Army worm",
    plant: ["Maize"],
    activeIngredient: "betacyfluthrin",
    pesticides: "Thurderstorm ",
    preHarvestInterval: 42,
    rate: "30 days",
    modeOfAction: "Contact",
  },
  {
    pest: "American boll worm",
    plant: ["Maize"],
    activeIngredient: "betacyfluthrin",
    pesticides: "tremor ",
    preHarvestInterval: 42,
    rate: "6kg/ha",
    modeOfAction: "Contact",
  },
];

export const FungicidesData = [
  {
    disease: "Blights Early/late",
    plant: ["Tomatoes", "Potatoes"],
    activeIngredient: "Metalaxyl+mancozeb",
    fungicides: "tremor ",
    preHarvestInterval: 15,
    rate: "2.5l /ha",
    modeOfAction: "Curative",
  },
  {
    disease: "",
    plant: ["Tomatoes", "Potatoes"],
    activeIngredient: "dimethomorph",
    fungicides: "Bigo",
    preHarvestInterval: 8,
    rate: "0.75l /ha",
    modeOfAction: "Curative",
  },
  {
    disease: "",
    plant: ["Tomatoes", "Potatoes"],
    activeIngredient: "chlorothalonil",
    fungicides: "Daconil",
    preHarvestInterval: 15,
    rate: "1l /ha",
    modeOfAction: "Preventative",
  },
  {
    disease: "",
    plant: ["Tomatoes", "Potatoes"],
    activeIngredient: "Famaxadone+cymoxanil",
    fungicides: "Equation pro",
    preHarvestInterval: 4,
    rate: "0.4kg /ha",
    modeOfAction: "Preventative",
  },
  {
    disease: "",
    plant: ["Tomatoes", "Potatoes"],
    activeIngredient: "propineb",
    fungicides: "Miraz ",
    preHarvestInterval: 15,
    rate: "2kg /ha",
    modeOfAction: "Curative",
  },
];

export const fertlizerData = [
  {
    fertilizer: "D.A.P",
    composition: {
      n: 18,
      p: 46,
      k: 0,
    },
    aplicationTime: "During planting",
    typeOfApplication: "On Ground",
    plant: ["Tomatoes", "Potatoes", "Maize"],
  },
  {
    fertilizer: "Multi-n",
    composition: {
      n: 40,
      p: 0,
      k: 0,
    },
    aplicationTime: "After emergence/ 4 weeks after transplant ",
    typeOfApplication: "Foliar spray",
    plant: ["Tomatoes", "Potatoes"],
  },
  {
    fertilizer: "C.A.N ",
    composition: {
      n: 26,
      p: 0,
      k: 0,
    },
    aplicationTime: "First top dress",
    typeOfApplication: "Ground",
    plant: ["Tomatoes", "Potatoes", "Maize"],
  },
  {
    fertilizer: "N.P.K ",
    composition: {
      n: 17,
      p: 7,
      k: 17,
    },
    aplicationTime: "First top dress",
    typeOfApplication: "Ground",
    plant: ["Tomatoes", "Potatoes", "Maize"],
  },
  {
    fertilizer: "Amco green ",
    composition: {
      n: 5,
      p: 0,
      k: 60,
    },
    aplicationTime: "During flowering",
    typeOfApplication: "Foliar spray",
    plant: ["Tomatoes", "Potatoes", "Maize"],
  },
  {
    fertilizer: "M.K.P",
    composition: {
      n: 0,
      p: 52,
      k: 28,
    },
    aplicationTime: "During flowering",
    typeOfApplication: "Ground",
    plant: ["Tomatoes", "Potatoes", "Maize"],
  },
  {
    fertilizer: "Cano3",
    composition: {
      n: 15,
      cao: 26,
    },
    aplicationTime: "Vegetative growth",
    typeOfApplication: "Ground",
    plant: ["Tomatoes", "Potatoes", "Maize"],
  },
  {
    fertilizer: "Wuxal ",
    composition: {
      n: 24,
      p: 24,
      k: 18,
    },
    aplicationTime: "Vegetative growth",
    typeOfApplication: "Foliar spray",
    plant: ["Tomatoes", "Potatoes"],
  },
];
