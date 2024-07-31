export interface MealsDTO {
  meals: {
    description: string;
    id: number;
    mealFoods: {
      accessLevel: string;
      amount: number;
      brand: string;
      calories: number;
      foodId: number;
      locale: string;
      mealTypeId: number;
      name: string;
      unit: {
        id: number;
        name: string;
        plural: string;
      };
      units: number[];
    }[];
    name: string;
  }[];
}
