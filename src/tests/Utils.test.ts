import {DateUtil} from '../components/Utils';

test('DateUtil:empty string', () => {
    expect(DateUtil.parseDateFromString('')).toBeNull();
});

test('DateUtil:invalid year', () => {
    expect(DateUtil.parseDateFromString('-02')).toBeNull();
});

test('DateUtil:invalid month', () => {
    expect(DateUtil.parseDateFromString('2019-')).toBeNull();
});

test('DateUtil:date without month', () => {
    expect(DateUtil.parseDateFromString('2019-05')).toEqual(new Date(2019, 4));
});

test('DateUtil:date with month', () => {
    expect(DateUtil.parseDateFromString('2019-05-12')).toEqual(new Date(2019, 4, 12));
});