import pytest

from quality_metrics import defect_density


def test_defect_density_calculation():
    assert defect_density(5, 2500) == pytest.approx(2.0)


@pytest.mark.parametrize(
    ("defects", "lines_of_code"),
    [(-1, 1000), (1, 0), (1, -100)],
)
def test_defect_density_invalid_inputs(defects, lines_of_code):
    with pytest.raises(ValueError):
        defect_density(defects, lines_of_code)
