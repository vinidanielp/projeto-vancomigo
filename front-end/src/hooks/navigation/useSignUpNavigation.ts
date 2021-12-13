import AppRoutes from '@app/config/routes';
import {UserType} from '@app/models/user';
import {useNavigation} from '@react-navigation/core';

export type GoToBasicInfoParams = {
  userType: UserType;
};

export type GoToAddressParams = GoToBasicInfoParams;

export type GoToProfilePicture = GoToBasicInfoParams;

const useSignUpNavigation = () => {
  const {navigate} = useNavigation();

  const goTo = (route: string, params?: any) =>
    navigate(route as never, params as never);

  const goToAddress = (params: GoToAddressParams) =>
    goTo(AppRoutes.signUp.address, params);

  const goToBasicInfo = (params: GoToBasicInfoParams) =>
    goTo(AppRoutes.signUp.basicInfo, params);

  const goToProfilePicture = (params: GoToProfilePicture) =>
    goTo(AppRoutes.signUp.profilePicture, params);

  const goToCMTTRegister = () => goTo(AppRoutes.signUp.cmttRegister);

  const goToDriverLicense = () => goTo(AppRoutes.signUp.driverLicense);

  const goToVehicle = () => goTo(AppRoutes.signUp.vehicle);

  return {
    goToAddress,
    goToBasicInfo,
    goToCMTTRegister,
    goToDriverLicense,
    goToProfilePicture,
    goToVehicle,
  };
};

export default useSignUpNavigation;
