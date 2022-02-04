import { getTheBestPromotionForDate } from '../getTheBestPromotionForDate';

const promotions = [
  {
    id: '1',
    name: 'Świąteczna promocja',
    description: 'Świąteczna promocja 25% zniżki na wszystkie produkty!',
    discount: { code: 'ŚWIĄTECZNA_PROMOCJA', percentage: 25 },
    dateStart: new Date('2022-12-10'),
    dateEnd: new Date('2022-12-31'),
  },

  {
    id: '2',
    name: 'Całoroczna promocja',
    description: 'Zamów z kodem rabatowym -10%',
    discount: { code: 'ALE_RABAT', percentage: 10 },
    dateStart: new Date('2022-01-01'),
    dateEnd: new Date('2022-12-31'),
  },
  {
    id: '3',
    name: 'Dzień dziecka',
    description:
      'Z okazji dnia dziecka mamy dla Ciebie kod rabatowy! Użyj kodu rabatowego i skorzystaj z -45% na wszystkie produkty!',
    discount: { code: 'DZIEN_DZIECKA_2021', percentage: 45 },
    dateStart: new Date('2022-06-01'),
    dateEnd: new Date('2022-06-25 24:00'),
  },
];

describe('getTheBestPromotionForDate', () => {
  it.each`
    date                      | promotionList | theBestPromotion
    ${new Date('2022-03-17')} | ${promotions} | ${promotions[1]}
    ${new Date('2022-06-01')} | ${promotions} | ${promotions[2]}
    ${new Date('2022-12-31')} | ${promotions} | ${promotions[0]}
    ${new Date('2022-11-24')} | ${[]}         | ${null}
    ${new Date('2025-11-24')} | ${promotions} | ${null}
  `('should return the best promotion - for $date', ({ date, promotionList, theBestPromotion }) => {
    const promotion = getTheBestPromotionForDate(date, promotionList);
    expect(promotion).toBe(theBestPromotion);
  });
});
