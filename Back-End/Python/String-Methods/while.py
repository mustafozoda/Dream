import random

# Set the random number to guess
number_to_guess = random.randint(1, 10)
max_attempts = 5
attempts = 0

print("Welcome to the Number Guessing Game!")
print(f"You have {
      max_attempts} attempts to guess the number between 1 and 10.")

while attempts < max_attempts:
    try:
        # Ask the player for their guess
        guess = int(input("Enter your guess: "))

        # Increment the attempt counter
        attempts += 1

        # If guess is not in the valid range, ask for input again
        if guess < 1 or guess > 10:
            print("Please enter a number between 1 and 10.")
            continue  # Skip the rest of the loop and ask for input again

        # Check if the guess is correct
        if guess == number_to_guess:
            print(f"Congratulations! You guessed the correct number {
                  number_to_guess} in {attempts} attempts!")
            break  # Exit the loop since the correct number is guessed
        elif guess < number_to_guess:
            print("Your guess is too low.")
        else:
            print("Your guess is too high.")

        # Print remaining attempts
        print(f"You have {max_attempts - attempts} attempts left.\n")

    except ValueError:
        print("Invalid input! Please enter a valid integer.")
        continue  # Continue the loop in case of non-integer input

# If the loop finishes without a correct guess, execute the else clause
else:
    print(f"Sorry, you've run out of attempts. The correct number was {
          number_to_guess}.")

print("Thank you for playing!")
