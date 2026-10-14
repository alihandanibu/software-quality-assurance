import pytest
from hiring import hire_status

@pytest.mark.parametrize("age, expected", [
    (10, "NO"),
    (16, "PART"),
    (20, "FULL"),
    (60, "NO"),
])

def test_one_age_per_class(age, expected):
    assert hire_status(age) == expected

@pytest.mark.parametrize("age", [
    -1,
    100,
])

def test_invalid_age_is_rejected(age):
    with pytest.raises(ValueError):
        hire_status(age)

@pytest.mark.parametrize("age, expected", [
    (0, "NO"),
    (1, "NO"),
    (15, "NO"),
    (16, "PART"),
    (17, "PART"),
    (18, "FULL"),
    (54, "FULL"),
    (55, "NO"),
    (98, "NO"),
    (99, "NO"),
])

def test_boundaries(age, expected):
    assert hire_status(age) == expected