import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export const deliveryOptions = [
  {
    id: '1',
    deliveryDays: 7,
    priceCents: 0,
  },
  {
    id: '2',
    deliveryDays: 3,
    priceCents: 499,
  },
  {
    id: '3',
    deliveryDays: 1,
    priceCents: 999,
  }
];


function isWeekend(date) {
  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}


export function getDeliveryOption(pDeliveryOptionId){
  let lDeliveryOption;

  deliveryOptions.forEach(option =>
  {
    if (option.id === pDeliveryOptionId)
    {
      lDeliveryOption = option;
    }
  });

  return lDeliveryOption;
  
}

export function calculateDeliveryDate(pDeliveryOption){
  // const today = dayjs();
  // const deliveryDate = today.add(pDeliveryOption.deliveryDays, 'days');
  // const lDateString = deliveryDate.format('dddd, MMMM D');
  // return lDateString;

  let remainingDays = pDeliveryOption.deliveryDays;
  let deliveryDate = dayjs();

  while (remainingDays > 0) {
    deliveryDate = deliveryDate.add(1, 'day');

    if (!isWeekend(deliveryDate)) {
      remainingDays--;
      // This is a shortcut for:
      // remainingDays = remainingDays - 1;
    }
  }

  const dateString = deliveryDate.format(
    'dddd, MMMM D');

  return dateString;
}