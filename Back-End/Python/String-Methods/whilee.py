import random

random_num = random.randint(1, 100)
max_attempts = 3
attemts = 0

while attemts < max_attempts:
    try:
        guess = int(input("Enter a number"))

        attemts += 1

        if guess < 1 or guess > 100:
            print("Please enter a number between 1 and 10.")
            continue

        if guess == random_num:
            print(f"Congratulations! You guessed the correct number {
                  random_num} in {attemts} attempts!")
            break
        elif guess < random_num:
            print("You gueess is too low")
        else:
            print("Your guess is too high")
    except ValueError:
        print("Invalid input! Please enter a valid integer.")
        continue
else:
    print(f"Sorry, you've run out of attempts. The correct number was {
        random_num}.")

print("Thank you for playing!")
