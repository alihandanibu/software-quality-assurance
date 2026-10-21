# IT 3006 – Software Quality Assurance
## Lab 03: Black-Box Design II

This repository contains my work for IT 3006 Lab 03, focused on black-box test design techniques using Playwright, TypeScript, and Python.

## Topics

- Pairwise testing
- Orthogonal arrays
- Pairwise generation with `allpairspy`
- Data-driven Playwright tests
- Page Object pattern
- Cross-browser testing with Chromium and Firefox
- State-transition testing
- Domain analysis
- Use-case testing
- Exploratory testing

## Technologies

- Node.js
- TypeScript
- Playwright
- Python
- allpairspy
- Swag Labs

## Progress

### Task 1 – Playwright Setup

Configured Playwright with:

- Chromium
- Firefox
- HTML reports
- Screenshots on failure
- Traces on failure
- `data-test` as the test ID attribute

A smoke test was created to verify that the Swag Labs login page opens correctly.

### Task 2 – Pairwise Testing by Hand

An L9 orthogonal array was used to reduce a configuration space containing:

- 3 delivery options
- 3 payment options
- 3 coupon options
- 2 account types

The full configuration space contains:

`3 × 3 × 3 × 2 = 54 combinations`

The L9 array reduced this to 9 tests while providing pairwise coverage.

### Task 3 – Pairwise Testing With a Tool

Python and `allpairspy` were used to generate pairwise combinations.

Inputs:

- 3 users
- 3 products
- 4 sort orders

Full combinations:

`3 × 3 × 4 = 36`

Pairwise result:

`36 combinations ? 12 tests`

Adding a fourth browser factor with Chromium and Firefox increased the generated pairwise set from 12 to 14 tests instead of doubling it.

### Task 4 – Pairwise Tests in Playwright

A `Shop` Page Object was created to encapsulate common actions such as:

- Login
- Sorting products
- Adding products to the cart
- Opening the cart
- Checkout

The 12 pairwise rows were converted into data-driven Playwright tests.

Because the suite runs in both Chromium and Firefox:

`12 pairwise rows × 2 browsers = 24 test executions`

Current result:

- 24 tests executed
- 16 passed
- 8 failed

The failing tests involve `problem_user` and will be analyzed further as part of Task 4.

## Running the Project

Install Node dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install chromium firefox
```

Run all tests:

```bash
npx playwright test
```

Run only the pairwise tests:

```bash
npx playwright test tests/pairwise.spec.ts
```

Open the Playwright HTML report:

```bash
npx playwright show-report
```

Install the Python pairwise library:

```bash
py -m pip install allpairspy
```

Generate pairwise combinations:

```bash
py allpairs_rows.py
```

## Project Structure

```text
sqa-lab3/
+-- pages/
¦   +-- shop.ts
+-- tests/
¦   +-- smoke.spec.ts
¦   +-- pairwise.spec.ts
+-- allpairs_rows.py
+-- playwright.config.ts
+-- package.json
+-- package-lock.json
+-- .gitignore
+-- README.md
```

## Status

Work in progress.

Tasks 1–3 are complete.

Task 4 implementation and initial test execution are complete, with the failing cases still to be analyzed.

Tasks 5–11 will be added as the lab progresses.