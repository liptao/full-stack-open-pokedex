const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:8080/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  }),
  test('ivysaur page displays Clorophyl', async ({ page }) => {
    await page.goto('http://localhost:8080/')
    await page.getByText('ivysaur').click()
    await expect(page.getByText('Chlorophyll')).toBeVisible()
  })
})