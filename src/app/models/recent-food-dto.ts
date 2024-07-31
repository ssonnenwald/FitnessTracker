export interface RecentFoodDTO {
  accessLevel: string;
  amount: number;
  brand: string;
  calories: number;
  dateLastEaten: string;
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
}
