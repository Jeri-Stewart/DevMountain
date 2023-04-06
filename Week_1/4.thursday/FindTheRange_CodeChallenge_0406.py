arr = [1, 4, 11, 2, 37, -4]

min = 0
max = 0

for num in arr:
  min = arr[0]
  if num < min:
    min = num
  elif num > max:
    max = num
  else:
    pass

print(min,",", max)