# Triangle Tracker
#### This is an application used to determine which type of triangle a user has based on the length value of the triangle's sides, 15th February 2019
#### By **Elizabeth Wanjiku Kimita**

## Description
With this application users input their triangle values and depending on that, the program gives an output to the users stating what kind of a triangle is described. The triangles can either be equilateral, isosceles, scalene or not a triangle.

## Setup/Installation Requirements
* The user requires an Internet connection to log into the website.
* when he/she is ready to input the triangle's values,the user clicks the "Find out here" button.
* There will be a prompt asking the user to enter the values.
* Once all the required values are input, a pop-up informing the user of the Triangle type will appear.
* The process can be repeated as many times as one needs with different values

## Program Specification

  Length value conditions| Input Examples|  Output (Type of triangle)  |
-------------------------|---------------|-----------------------------|
sideA = sideB            |   45          |                             |
sideB = sideC            |   45          |   Equilateral Triangle      |
sideC = sideA            |   45          |                             |
-------------------------|---------------|-----------------------------|
sideA = sideB or         | 20, 20 and 37 |                             |
sideB = sideC or         | 30, 45 and 45 |   Isosceles Triangle        |
sideA = sideC)           | 50, 38 and 50 |                             |
-------------------------|---------------|-----------------------------|
sideA != sideB           |               |                             |
sideB != sideC           |               |                             |
sideC != sideA  and      |               |                             |
sideA + sideB>sideC OR   |               |                             |
sideB + sideC>sideA OR   |    25,48,50   |  Scalene Triangle           |
sideA + sideC>sideB      |               |                             |
-------------------------|---------------|-----------------------------|
sideA + sideB<= sideC    |               |                             |
sideB + sideC<=sideA     |   20, 10, 50  |   This is not a Triangle    |
sideA + sideC<=sideB     |   20, 10, 30  |                             |
-------------------------|---------------|-----------------------------|

## Known Bugs
There are no known bugs in the Tracker.

## Technologies Used
This program has been built using HTML to write the content, CSS for styling purposes, javasript to create the business logic and the user- interface, ensuring that the program works and depending on the user's input, the output given is accurate and Markdown for the README page.

## Support and contact details
For more information, questions,or help using the program, get in touch with me on +254 726 047102 or email: kimita.wanjiku@gmail.com.

### License
Copyright (c) 2019 **Elizabeth Wanjiku Kimita**
