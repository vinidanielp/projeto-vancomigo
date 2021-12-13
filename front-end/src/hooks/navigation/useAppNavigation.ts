import AppRoutes from '@app/config/routes';
import {useNavigation} from '@react-navigation/core';
import useSignUpNavigation from './useSignUpNavigation';

const useAppNavigation = () => {
  const {navigate} = useNavigation();
  const signUp = useSignUpNavigation();

  const goTo = (route: string, params?: any) =>
    navigate(route as never, params as never);

  const goToAuth = () => goTo(AppRoutes.auth);

  const goToMap = () => goTo(AppRoutes.drawer.index);

  const goToPayments = () => goTo(AppRoutes.payments);

  const goToRequestSpot = () => goTo(AppRoutes.spots.new);

  return {
    goToAuth,
    goToMap,
    goToPayments,
    goToRequestSpot,
    signUp,
  };
};

export default useAppNavigation;
