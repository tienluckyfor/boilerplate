# Python Interpreter

exit()
# Inheritance
from Chef import Chef
from ChineseChef import ChineseChef

myChef = Chef()
myChef.make_special_dish()
myChineseChef = ChineseChef()
myChineseChef.make_special_dish()
exit()
# Object function
from Student import Student

student1 = Student("Oscar", "Accounting", 3.1, False)
student2 = Student("Phyllis", "Business", 3.8, True)
print(student1.on_honor_roll())
print(student2.on_honor_roll())
exit()
# Building a Multiple Choice Quiz
from Question import Question

question_prompts = [
    "What color are apples?\n(a) Red/Green\n(b) Purple\n(c) Orange\n\n",
    "What color are Bananas?\n(a) Teal\n(b) Magenta\n(c) Yellow\n\n",
    "What color are strawberries?\n(a) Yellow\n(b) Red\n(c) Blue\n\n",
]
questions = [
    Question(question_prompts[0], "a"),
    Question(question_prompts[1], "c"),
    Question(question_prompts[2], "b"),
]


def run_test(questions):
    score = 0
    for question in questions:
        answer = input(question.prompt)
        if answer == question.answer:
            score += 1
    print("You got " + str(score) + "/" + str(len(questions)) + " correct")


run_test(questions)
exit()
# Classes & Objects
from Student import Student

student1 = Student("Jim", "Business", 3.1, False)
student2 = Student("Pam", "Art", 2.5, True)
print(student1.name)
print(student2.gpa)
exit()
# Modules and Pip
'''
https://docs.python.org/3.7/py-modindex.html
// store at : venv/lib
pip install python-docx
// store at : venv/lib/python3.7/site-packages
pip uninstall python-docx
'''
import useful_tools

print(useful_tools.roll_dice(10))
print(useful_tools.beatles)
exit()
# Writing to files
employee_file = open("employees1.txt", "w")
employee_file.write("\nToby - Human Resources")
employee_file.close()
employee_file = open("employees.txt", "a")
employee_file.write("Toby - Human Resources")
employee_file.write("\nKelly - Customer Service")
employee_file.close()
exit()
# Reading files
employee_file = open("employees.txt", "r")
print(employee_file.read())
print("---")
for employee in employee_file.readlines():
    print(employee)
print("---")
print(employee_file.readline())
print(employee_file.readline())
print("---")
print(employee_file.read())
print(employee_file.readable())
employee_file.close()
exit()
# Try Except
try:
    value = 10 / 0
    number = int(input("Enter a number: "))
    print(number)
except ZeroDivisionError as err:
    print(err)
    print("Divided by zero")
except ValueError:
    print("Invalid Input")
exit()
# Comments
'''
Comments multiple line
at here
'''
# This prints out a string
print("Comments are fun")
exit()


# Build a translator
def translate(phrase):
    translation = ""
    for letter in phrase:
        if letter.lower() in "aeiou":
            if letter.isupper():
                translation = translation + "G"
            else:
                translation = translation + "g"
        else:
            translation = translation + letter
    return translation


print(translate(input("Enter a phrase: ")))
exit()
# 2D lists & nested loops
number_grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
]
print(number_grid[0][0])
for row in number_grid:
    for col in row:
        print(col)
exit()


# exponent function
def raise_to_power(base_num, pow_num):
    result = 1
    for index in range(pow_num):
        result = result * base_num
    return result


print(raise_to_power(3, 2))
exit()
# for
for index in range(3, 10):
    print(index)
friends = ["Kevin", "Karen", "Jim", "Jim", "Oscar", "Toby"]
for index in range(len(friends)):
    print(friends[index])
for friend in friends:
    print(friend)
for letter in "Giraffe Academy":
    print(letter)
exit()
# while & if
secret_word = "graffy"
guess = ""
guess_count = 0
guess_limit = 3
out_of_guesses = False
while guess != secret_word and not (out_of_guesses):
    if guess_count < guess_limit:
        guess = input("Enter guess: ")
        guess_count += 1
    else:
        out_of_guesses = True
if out_of_guesses:
    print("Out of Guesses, YOU LOSE!")
else:
    print("You win!")
exit()
# loop
i = 1
while i <= 10:
    print(i)
    i += 1
print("Done with loop")
exit()
# dictionnary
monthConversions = {
    1: "January",
    10: "February",
    "Mar": "March",
    "Apr": "April",
    "May": "May",
    "Jun": "June",
    "Jul": "July",
    "Aug": "August",
    "Sep": "September",
    "Oct": "October",
    "Nov": "November",
    "Dec": "December",
}
print(monthConversions.get("May1", "Not a valid key"))
print(monthConversions.get("May", "Not a valid key"))
print(monthConversions['Apr'])
exit()
# if
is_male = False
is_tall = False
if is_male and is_tall:
    print("You are a tall male")
elif is_male and not (is_tall):
    print("You are a shot male")
elif not (is_male) and is_tall:
    print("You are not a male but are tall")
else:
    print("You are not a male and not tall")
exit()


# functions
def say_hi(name, age):
    print("Hello " + name + ", you are " + age)
    return age


print(say_hi("Mike", "35"))
say_hi("Steve", "70")
exit()
# tupel can't change value by key
coordinates = (4, 5)
# coordinates[1] = 10
print(coordinates[1])
exit()
# list
lucky_numbers = [42, 8, 15, 16, 23]
friends = ["Kevin", "Karen", "Jim", "Jim", "Oscar", "Toby"]
friends2 = friends.copy()
print(friends2)
lucky_numbers.reverse()
print(lucky_numbers)
lucky_numbers.sort()
print(lucky_numbers)
friends.sort()
print(friends)
print(friends.index("Jim"))
print(friends.index("Oscar"))
friends.clear()
print(friends)
if "Jim" in friends:
    friends.remove("Jim")
print(friends)
friends.insert(1, "Kelly")
print(friends)
friends.append("Creed")
print(friends)
friends.extend(lucky_numbers)
print(friends)
exit()
friends[1] = "Mike"
print(friends[1:3])
print(friends[1:])
print(friends[1])
print(friends)
exit()

# calcuter
num1 = input("Enter a number:")
num2 = input("Enter another number:")
result = float(num1) + float(num2)
print(result)
exit()

# input
name = input("Enter your name: ")
age = input("Enter your age: ")
print("Hello " + name + "! You are " + age)
exit()
# working with number
from math import *

print(sqrt(36))  # 6
print(ceil(10.6))  # 11
print(floor(10.6))  # 10
print(round(10.6))  # 10
print(max(3, 2, 1, 5))  # 5
print(min(3, 2, 1, 5))  # 1
print(pow(3, 2))  # 3^2
my_num = -5
print(abs(my_num))
print(str(my_num) + " is my favorite number")
exit()

# working with string
phrase = "Giraffe Academy"
print(phrase.replace("Giraffe", "Elephant"))
print(phrase.index("Acad"))
print(phrase[0])
print(len(phrase))
print(phrase.isupper())
print(phrase.upper().isupper())
print(phrase.upper())
print(phrase.lower())
print(phrase + " is cool")
print("Giraffe\Academy")
print("Giraffe\"Academy")
print("Giraffe\nAcademy")
exit()

# variables
character_name = "TOm"
character_age = 135
isMale = True
print("There once was a man named " + character_name + ", ")
print("he was " + str(character_age) + " years old.")
character_name = "Mike"
print("He really liked the name " + character_name + ", ")
print("but didn't like being " + str(character_age) + ".")
