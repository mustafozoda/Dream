import random
# --------------------- _ 1 _ ---------------------

# while True:
#     try:
#         num = int(input().strip())

#         if num % 2 == 0:
#             print("Even")
#         elif num % 2 == 1:
#             print("Odd")
#     except ValueError:
#         print("Not number")
#         break
#         # continue

# --------------------- _ 2 _ ---------------------

# def function(a, b):
#     print(a + b)
#     print(a - b)
#     print(a * b)


# a = int(input("Please provide first number: ").strip())
# b = int(input("Please provide second number: ").strip())

# function(a, b)

# --------------------- _ 3 _ ---------------------

# def is_leap(year):
#     if year % 400 == 0:
#         return True
#     elif year % 100 == 0:
#         return False
#     elif year % 4 == 0:
#         return True
#     else:
#         return False

# year = int(input("Please provide a year: ").strip())

# if is_leap(year):
#     print(f"{year} is a leap year!")
# else:
#     print(f"{year} is not a leap year :(")

# --------------------- _ 4 _ ---------------------

# def game(string, length):
#     result = []
#     if len(string) % length == 0:
#         for i in range(0, len(string), length):
#             print(i)
#             chunk_kusok = string[i:i+length]
#             chunk = []
#             seen = set()
#             for char in chunk_kusok:
#                 if char not in seen:
#                     chunk.append(char)
#                     seen.add(char)
#             result.append(''.join(chunk))
#     return result


# string = str(input("Please Provide any Word!  ").strip())
# length = int(input("Please provide variable of 'k'!  ").strip())

# substrings = game(string, length)

# for i in substrings:
#     print(i)

# -----

# def seperating(word, k=3):
#     result = []
#     if len(word) % k == 0:
#         for i in range(0, len(word), k):
#             result.append(word[i:i+k])
#     else:
#         print("Please provide a word that is evenly divisible by k!")
#     return result


# def choosing(res1):
#     final_result = []
#     for chunk in res1:
#         seen = set()
#         unique_chars = []
#         for char in chunk:
#             if char not in seen:
#                 seen.add(char)
#                 unique_chars.append(char)
#         final_result.append(''.join(unique_chars))
#     return final_result


# word = str(input("Please provide a word: ").strip())
# k = int(input("Please provide the length of each chunk: ").strip())
# res1 = seperating(word, k)
# finall = choosing(res1)

# for i in finall:
#     print(i)

# --------------------- _ 5 _ ---------------------

# def isVovel(word):
#     cnt_for_al = 0
#     cnt_for_dig = 0

#     for char in word:
#         if char.isalpha():
#             cnt_for_al += 1
#         elif char.isdigit():
#             cnt_for_dig += 1
#     return cnt_for_al, cnt_for_dig


# word = str(input("Please write anything you would like to!  ").strip())
# result = isVovel(word)
# print(f"There are {result[0]} Alphabet and {result[1]} Digit")

# --------------------- _ 6 _ ---------------------


import random


def happy(num):
    setA = {1, 5, 8, 9, 4}
    setB = {2, 3, 7, 10, 15}

    A = sum(1 for x in setA if x == num)
    B = sum(1 for x in setB if x == num)

    return A, B


for i in range(15):
    num = random.randint(1, 15)
    A_count, B_count = happy(num)
    print(f"Number: {num}, In setA: {A_count}, In setB: {B_count}")
