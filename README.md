# Software Quality Assurance

Coursework repository for software quality assurance labs and practical Python projects.
It includes hands-on exercises, automated tests with Pytest, and CI validation with
GitHub Actions.

## Repository Structure

- `labs/` — guided lab exercises
- `projects/` — practical project work
- `tests/` — automated test suite
- `quality_metrics.py` — example project module used by tests

## Getting Started

1. Use Python 3.11+.
2. Install test dependency:

   ```bash
   pip install pytest
   ```

3. Run tests:

   ```bash
   pytest
   ```

## Continuous Integration

GitHub Actions runs the test suite automatically on every push and pull request
using `.github/workflows/ci.yml`.