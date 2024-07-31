export interface FoodDTO {
  food: {
    accessLevel: string;
    brand: string;
    calories: number;
    defaultServingSize: number;
    defaultUnit: {
      id: number;
      name: string;
      plural: string;
    };
    foodId: number;
    isGeneric: boolean;
    locale: string;
    name: string;
    servings: {
      multiplier: number;
      servingSize: number;
      unit: {
        id: number;
        name: string;
        plural: string;
      };
      units: number[];
    }[];
  };
}
