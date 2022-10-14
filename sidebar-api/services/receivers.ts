const receivers = [
  {
    id: 61,
    name: 'Pisces',
    rolecode: 27,
  },
  {
    id: 284,
    name: 'Aries',
    rolecode: 27,
  },
  {
    id: 7180,
    name: 'Cancer',
    rolecode: 22,
  },
  {
    id: 49,
    name: 'Sagitarius',
    rolecode: 27,
  },
];

export const getAll = () => {
  return receivers;
};

export const getByRoleCode = (rolecode: number, peopleid: number) => {
  return receivers.filter((item) => {
    return item.rolecode == rolecode && item.id != peopleid;
  });
};
