import { describe, it, expect } from 'vitest';
import { weatherCode2Type } from './WeatherIcons';

describe('weatherCode2Type', () => {
  it('對應雷雨代碼到 isThunderstorm', () => {
    expect(weatherCode2Type(15)).toBe('isThunderstorm');
    expect(weatherCode2Type(41)).toBe('isThunderstorm');
  });

  it('對應多雲代碼到 isCloudy', () => {
    expect(weatherCode2Type(3)).toBe('isCloudy');
  });

  it('對應下雨代碼到 isRain', () => {
    expect(weatherCode2Type(8)).toBe('isRain');
  });

  it('code 37 同時屬於 isSnowing 和 isRain，物件裡後定義的 isRain 會覆蓋結果', () => {
    expect(weatherCode2Type(37)).toBe('isRain');
  });

  it('對應下雪代碼到 isSnowing', () => {
    expect(weatherCode2Type(23)).toBe('isSnowing');
  });

  it('對應起霧代碼到 isFog', () => {
    expect(weatherCode2Type(24)).toBe('isFog');
  });

  it('找不到對應的代碼時回傳空字串', () => {
    expect(weatherCode2Type(9999)).toBe('');
  });
});
