export interface FoodLogDTO {
  foods: {
    isFavorite: boolean;
    logDate: string;
    logId: number;
    loggedFood: {
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
    };
    nutritionalValues: {
      calories: number;
      carbs: number;
      fat: number;
      fiber: number;
      protein: number;
      sodium: number;
    };
  }[];
  goals: {
    calories: number;
  };
  summary: {
    calories: number;
    carbs: number;
    fat: number;
    fiber: number;
    protein: number;
    sodium: number;
    water: number;
  };
}
