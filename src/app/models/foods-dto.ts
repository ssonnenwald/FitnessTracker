export interface FoodsDTO {
  foods: {
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
    units: number[];
  }[];
}
