import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../test-utils/testing-library-utils';
import Options from '../Options';

test('update scoop subtotal when scoops change', async () => {
  render(<Options optionType="scoops" />);

  // make sure total starts out $0.00
  const scoopsTotal = screen.getByText('Scoops total: $', { exact: false });
  expect(scoopsTotal).toHaveTextContent('0.00');

  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');
  expect(scoopsTotal).toHaveTextContent('2.00');

  // update chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');
  expect(scoopsTotal).toHaveTextContent('6.00');
});

test('update topping subtotal when toppings change', async () => {
  render(<Options optionType="toppings" />);

  // make sure total starts out $0.00
  const toppingsTotal = screen.getByText('Toppings total: $', { exact: false });
  expect(toppingsTotal).toHaveTextContent('0.00');

  // add cherrie toppings to 1 and check the subtotal
  const cherriesInput = await screen.findByRole('checkbox', { name: 'Cherries' });
  userEvent.click(cherriesInput);
  expect(toppingsTotal).toHaveTextContent('1.50');

  // add Hot fudge and check subtotal
  const hotFudgeInput = await screen.findByRole('checkbox', { name: 'Hot fudge' });
  userEvent.click(hotFudgeInput);
  expect(toppingsTotal).toHaveTextContent('3.00');

  // remove Hot fudge and check subtotal
  userEvent.click(hotFudgeInput);
  expect(toppingsTotal).toHaveTextContent('1.50');
});
