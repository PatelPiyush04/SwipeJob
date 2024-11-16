export type UserAddress = {
  formattedAddress: string;
  zoneId: string;
};

export type UserProfile = {
  address: UserAddress;
  email: string;
  firstName: string;
  lastName: string;
  maxJobDistance: number;
  phoneNumber: string;
  workerId: string;
};
