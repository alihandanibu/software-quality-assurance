def hire_status(age):
    """Return "NO", "PART" or "FULL" for an applicant's age (0-99)."""
    if age < 0 or age > 99:
        raise ValueError("age must be between 0 and 99")
    if age <= 15:
        return "NO"
    if age <= 17:
        return "PART"
    if age <= 54:
        return "FULL"
    return "NO"