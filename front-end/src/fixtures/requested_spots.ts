import {SpotStatus} from '@app/models/spot';

export default [
  {
    name: 'Spot 1',
    driver: {name: 'Motorista 1'},
    status: SpotStatus.AWAITING,
    passenger: {name: 'Passageiro 1'},
  },
  {
    name: 'Spot 2',
    driver: {name: 'Motorista 2'},
    status: SpotStatus.APPROVED,
    passenger: {name: 'Passageiro 2'},
  },
  {
    name: 'Spot 3',
    driver: {name: 'Motorista 3'},
    status: SpotStatus.DENIED,
    passenger: {name: 'Passageiro 3'},
  },
];
