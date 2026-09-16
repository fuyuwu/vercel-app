import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('reveals Hero content after the intro coin animation', async ({ page }) => {
    await page.goto('/');

    // The intro overlay covers the page for ~2s before the coin-flip finishes.
    await expect(page.getByRole('heading', { name: 'FuFu Wu' })).toBeVisible({ timeout: 6000 });
    await expect(page.getByText('Where ideas become interfaces.')).toBeVisible();
    await expect(page.getByRole('link', { name: 'fuyuwu041000@gmail.com' })).toBeVisible();
  });

  test('nav links scroll to their sections', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'FuFu Wu' })).toBeVisible({ timeout: 6000 });

    await page.getByRole('link', { name: 'Experience' }).click();
    await expect(page.locator('#experience')).toBeInViewport();

    await page.getByRole('link', { name: 'Skills' }).click();
    await expect(page.locator('#skills')).toBeInViewport();
  });

  test('renders the Portfolio, Experience, and Skills sections', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('#portfolio')).toBeAttached();
    await expect(page.getByRole('heading', { name: 'QA Hub' })).toBeAttached();
    await expect(page.locator('#experience')).toBeAttached();
    await expect(page.getByRole('heading', { name: 'Experience' })).toBeAttached();
    await expect(page.locator('#skills')).toBeAttached();
    await expect(page.getByRole('heading', { name: 'Skills' })).toBeAttached();
  });
});
