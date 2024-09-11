name = 'ssharifBek'
age = 30
job = 'student'

print(name)


name_cap = name.capitalize()
print(name_cap)


name_case_f = name.casefold()
print(name_case_f)


name_center = name.center(30, '*')
print(name_center)


nama_count_caracter = name.count('s', 0, 2)
print(nama_count_caracter)


name_encode = name.encode()
print(name_encode)
print(type(name_encode))
print(type(name))


name_end_special = name.endswith("k")
print(name_end_special)


s = "hello\tworld"
print(s.expandtabs(14))


s = "hello world"
print(s.find('o'))


s = "Hello, {}!"
print(s.format("John"))


s = "Hello, {name}!"
print(s.format_map({'name': 'John'}))


s = "hello world"
print(s.index('o'))  # Output: 4


s = "hello123"
print(s.isalnum())  # Output: True


s = "hello"
print(s.isalpha())  # Output: True


s = "hello"
print(s.isascii())  # Output: True


s = "123"
print(s.isdecimal())  # Output: True


s = "123"
print(s.isdigit())  # Output: True


s = "var_1"
print(s.isidentifier())  # Output: True


s = "hello"
print(s.islower())  # Output: True


s = "123"
print(s.isnumeric())  # Output: True


s = "hello"
print(s.isprintable())  # Output: True


s = "  1  "
print(s.isspace())  # Output: False


s = "Hello World"
print(s.istitle())  # Output: True


s = "HELLO"
print(s.isupper())  # Output: True


s = "-"
print(s.join(["a", "b", "c"]))  # Output: "a-b-c"


s = "hello"
print(s.ljust(10, '-'))  # Output: "hello-----"


s = "HELLO"
print(s.lower())  # Output: "hello"


s = "  hello"
print(s.lstrip())  # Output: "hello"


table = str.maketrans("abc", "123")
s = "abc"
print(s.translate(table))  # Output: "123"


s = "hello world"
print(s.partition(" "))  # Output: ('hello', ' ', 'world')


s = "prefix_example"
print(s.removeprefix("prefix_"))  # Output: "example"
print(name.removeprefix("s"))


s = "example_suffix"
print(s.removesuffix("_suffix"))  # Output: "example"


s = "hello world"
print(s.replace("world", "there"))  # Output: "hello there"


s = "hello world"
print(s.rfind('o'))  # Output: 7


s = "hello world"
print(s.rindex('o'))  # Output: 7


s = "hello"
print(s.rjust(10, '-'))  # Output: "-----hello"


s = "hello world"
print(s.rpartition(" "))  # Output: ('hello', ' ', 'world')


s = "apple,banana,cherry"
print(s.rsplit("1", 1))  # Output: ['apple,banana', 'cherry']


s = "hello   "
print(s.rstrip())  # Output: "hello"


s = "apple banana cherry"
print(s.split())  # Output: ['apple', 'banana', 'cherry']


s = "hello\nworld"
print(s.splitlines())  # Output: ['hello', 'world']


s = "hello world"
print(s.startswith("hello"))  # Output: True


s = "   hello   "
print(s.strip())  # Output: "hello"


s = "Hello World"
print(s.swapcase())  # Output: "hELLO wORLD"


s = "hello world"
print(s.title())  # Output: "Hello World"


credit_num = "1234 5345 7476 2345"
print(credit_num[0: 4])
print(credit_num[5: 9])
print(credit_num[::3])  # every 3rd num
