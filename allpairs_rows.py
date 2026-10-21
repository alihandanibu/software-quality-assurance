from allpairspy import AllPairs

parameters = [
    ["standard_user", "problem_user", "visual_user"],
    ["Backpack", "Fleece Jacket", "Onesie"],
    ["az", "za", "lohi", "hilo"],
    ["chromium", "firefox"],
]

for i, row in enumerate(AllPairs(parameters), start=1):
    print(i, row)