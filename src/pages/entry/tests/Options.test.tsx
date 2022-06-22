import { render, screen } from "@testing-library/react"
import Options from "../Options"

test('displays image for each scoop option from server', async () => {
  render(<Options optionType="scoops" />)

  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i })
  expect(scoopImages).toHaveLength(2)

  //@ts-ignore
  const allText = scoopImages.map((element) => element.alt)
  expect(allText).toEqual(['Vanilla scoop', 'Chocolate scoop'])
})

test('displays image for each topping option from server', async () => {
  render(<Options optionType="toppings" />)

  const toppingImages = await screen.findAllByRole('img', { name: /topping$/i })
  expect(toppingImages).toHaveLength(3)

  //@ts-ignore
  const allText = toppingImages.map((element) => element.alt)
  expect(allText).toEqual(['M&Ms topping', 'Hot fudge topping', 'Cherries topping'])
})
