import csv

# Define the fieldnames for the new CSV
fieldnames = ['name']

# Open the input CSV file for reading
with open('workers.csv', mode='r') as infile:
    reader = csv.DictReader(infile)

    # Open the output CSV file for appending
    with open('new.csv', mode='a', newline='') as outfile:
        writer = csv.DictWriter(outfile, fieldnames=fieldnames)

        # Write header if the file is empty (i.e., not yet written)
        if outfile.tell() == 0:
            writer.writeheader()

        # Iterate over each line in the input file
        for line in reader:
            if len(line['name']) > 6:
                print(line['name'])
                # Write the row to the new CSV file
                writer.writerow({'name': line['name']})
