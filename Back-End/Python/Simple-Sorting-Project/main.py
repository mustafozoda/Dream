import csv

# Read data from 'data.csv'
with open('data.csv', mode='r') as file:
    csv_reader = csv.DictReader(file)
    data = list(csv_reader)

# Sort the data by 'age'
sorted_data = sorted(data, key=lambda row: int(row['age']))

# Print sorted data
for row in sorted_data:
    print(row)

# Write sorted data to 'sorted.csv'
with open('sorted.csv', mode='w', newline='') as file:
    fieldnames = ['name', 'age', 'salary']
    csv_writer = csv.DictWriter(file, fieldnames=fieldnames)

    # Write the header
    csv_writer.writeheader()

    # Write the rows
    csv_writer.writerows(sorted_data)

print("Data has been sorted and written to 'sorted.csv'")
