s = "hello"
print("{:>10}".format(s))  # Right-align: "     hello"
print("{:<10}".format(s))  # Left-align:  "hello     "
print("{:^10}".format(s))  # Center-align: "  hello   "


num = 42
print("{:d}".format(num))  # Integer format: "42"
print("{:5d}".format(num))  # Pad with spaces to width 5: "   42"
print("{:05d}".format(num))  # Pad with zeros: "00042"


f = 3.14159
print("{:.2f}".format(f))  # Two decimal places: "3.14"
print("{:8.2f}".format(f))  # Width 8, two decimal places: "    3.14"
print("{:+.2f}".format(f))  # Show the sign: "+3.14"


p = 0.12345
print("{:.2%}".format(p))  # Output as percentage: "12.35%"


f = 1234.56789
print("{:.2e}".format(f))  # Exponential notation: "1.23e+03"


num = 255
print("{:x}".format(num))  # Hexadecimal lowercase: "ff"
print("{:X}".format(num))  # Hexadecimal uppercase: "FF"


num = 42
print("{:+5d}".format(num))  # Include sign, width 5: "  +42"
print("{:0>5d}".format(num))  # Zero-pad, width 5: "00042"


s = "hello world"
print("{:.5}".format(s))  # Truncate string to 5 characters: "hello"


name = "Alice"
score = 92.567
# "Name: Alice      Score: 92.57"
print(f"Name: {name:<10} Score: {score:.2f}")
