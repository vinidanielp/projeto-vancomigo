class AppRoutes {
  static auth = 'AUTH_ROUTE';

  static signUp = {
    address: 'SIGN_UP_ADDRESS_ROUTE',
    basicInfo: 'SIGN_UP_BASIC_INFO_ROUTE',
    cmttRegister: 'SIGN_UP_CMTT_REGISTER_ROUTE',
    driverLicense: 'SIGN_UP_DRIVER_LICENSE_ROUTE',
    profilePicture: 'SIGN_UP_PROFILE_PICTURE_ROUTE',
    vehicle: 'SIGN_UP_VEHICLE_ROUTE',
  };

  static drawer = {
    index: 'DRAWER',
    map: 'MAP_ROTE',
  };

  static payments = 'PAYMENTS_ROUTE';

  static myVehicle = 'MY_VEHICLE_ROUTE';

  static spots = {
    new: 'REQUEST_SPOT_ROUTE',
    list: 'SPOT_LIST_ROUTE',
  };
}

export default AppRoutes;
