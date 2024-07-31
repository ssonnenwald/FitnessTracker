export interface BadgeDTO {
  badges: {
    badgeGradientEndColor: string;
    badgeGradientStartColor: string;
    badgeType: string;
    category: string;
    cheers: string[];
    dateTime: string;
    description: string;
    earnedMessage: string;
    encodedId: string;
    image100px: string;
    image125px: string;
    image300px: string;
    image50px: string;
    image75px: string;
    marketingDescription: string;
    mobileDescription: string;
    name: string;
    shareImage640px: string;
    shareText: string;
    shortDescription: string;
    shortName: string;
    timesAchieved: number;
    value: number;
  }[];
}
