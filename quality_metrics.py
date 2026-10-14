"""Simple quality metrics helpers for SQA practical exercises."""


def defect_density(defects: int, lines_of_code: int) -> float:
    """Calculate defect density as defects per 1,000 lines of code."""
    if defects < 0 or lines_of_code <= 0:
        raise ValueError("defects must be >= 0 and lines_of_code must be > 0")

    return defects / (lines_of_code / 1000)
