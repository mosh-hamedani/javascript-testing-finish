import { vi, it, expect, describe } from 'vitest'
import { getPriceInCurrency } from '../src/mocking';
import { getExchangeRate } from '../src/libs/currency';

vi.mock('../src/libs/currency');

describe('test suite', () => {
  it('test case', () => {
    // Create a mock for the following function
    const sendText = vi.fn();
    sendText.mockReturnValue('ok');

    // Call the mock function
    const result = sendText('message');
    
    // Assert that the mock function is called 
    expect(sendText).toHaveBeenCalledWith('message');
    // Assert that the result is 'ok'
    expect(result).toBe('ok');
  })
})

describe('getPriceInCurrency', () => {
  it('should return price in target currency', () => {
    vi.mocked(getExchangeRate).mockReturnValue(1.5);

    const price = getPriceInCurrency(10, 'AUD');

    expect(price).toBe(15);
  })
})