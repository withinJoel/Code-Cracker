let questions = [
	///////////////////////////////////////////////////////////HTML
	{
		question: "What is the purpose of the 'head' section in HTML?",
		answer: "The 'head' section is used to contain metadata about the document, including the title, author, and keywords.",
		options: [
			"The 'head' section is used to contain metadata about the document, including the title, author, and keywords.",
			"The 'head' section is used to contain the main content of the document.",
			"The 'head' section is used to define the styling for the document.",
			"The 'head' section is used to define the scripts used in the document."
		]
	},
	{
		question: "What does HTML stand for?",
		answer: "Hyper Text Markup Language",
		options: [
			"Hyper Text Preprocessor",
			"Hyper Text Markup Language",
			"Hyper Text Multiple Language",
			"Hyper Tool Multi Language"
		]
	},
	{
		question: "What does the 'alt' attribute in an HTML image tag do?",
		answer: "The 'alt' attribute provides alternative text for an image, which is displayed if the image cannot be loaded or if the user is using a screen reader.",
		options: [
			"The 'alt' attribute specifies the URL of the image to be displayed.",
			"The 'alt' attribute defines the width and height of the image in pixels.",
			"The 'alt' attribute provides alternative text for an image, which is displayed if the image cannot be loaded or if the user is using a screen reader.",
			"The 'alt' attribute sets the background color of the image."
		]
	},
	{
		question: `What is the purpose of the 'href' attribute in an HTML link tag?`,
		answer: `The 'href' attribute specifies the URL of the page or file to which the link goes.`,
		options: [
			`The 'href' attribute sets the color of the link.`,
			`The 'href' attribute defines the size of the link.`,
			`The 'href' attribute specifies the alignment of the link.`,
			`The 'href' attribute specifies the URL of the page or file to which the link goes.`
		]
	},
	{
		question: "What is the correct way to add an external CSS file to an HTML document?",
		answer: "The correct way to add an external CSS file to an HTML document is to use the link tag with the 'rel' attribute set to 'stylesheet' and the 'href' attribute set to the URL of the CSS file.",
		options: [
			"Use the style tag with the 'src' attribute set to the URL of the CSS file.",
			"The correct way to add an external CSS file to an HTML document is to use the link tag with the 'rel' attribute set to 'stylesheet' and the 'href' attribute set to the URL of the CSS file.",
			"Use the script tag with the 'src' attribute set to the URL of the CSS file.",
			"Use the style tag with the 'href' attribute set to the URL of the CSS file."
		]
	},
	{
		question: "What is the difference between the 'id' and 'class' attributes in HTML?",
		answer: "The 'id' attribute is used to uniquely identify an element, while the 'class' attribute is used to group elements with similar properties.",
		options: [
			"The 'id' attribute is used to group elements with similar properties, while the 'class' attribute is used to uniquely identify an element.",
			"The 'id' attribute is used to set the color of an element, while the 'class' attribute is used to set the font size of an element.",
			"The 'id' attribute is used to specify the URL of an element, while the 'class' attribute is used to specify the width of an element.",
			"The 'id' attribute is used to uniquely identify an element, while the 'class' attribute is used to group elements with similar properties."
		]
	},
	{
		question: "What is the purpose of the 'meta' tag in HTML?",
		answer: "The 'meta' tag provides metadata about an HTML document, such as the author, description, and keywords.",
		options: [
			"The 'meta' tag specifies the location of the HTML document.",
			"The 'meta' tag sets the background color of the HTML document.",
			"The 'meta' tag defines the size of the HTML document.",
			"The 'meta' tag provides metadata about an HTML document, such as the author, description, and keywords."
		]
	},
	{
		question: "What is the difference between a div and a span in HTML?",
		answer: "A div is a block-level element that is used to group content, while a span is an inline element that is used to apply styles to a specific portion of text.",
		options: [
			"A div is an inline element that is used to apply styles to a specific portion of text, while a span is a block-level element that is used to group content.",
			"A div is a way of positioning elements on a web page using coordinates, while a span is a way of defining the color scheme for a web page.",
			"A div is a block-level element that is used to group content, while a span is a way of defining the width of an element.",
			"A div is a block-level element that is used to group content, while a span is an inline element that is used to apply styles to a specific portion of text."
		]
	},
	///////////////////////////////////////////////////////////CSS
	{
		question: "What is the difference between 'display: block;' and 'display: inline;' in CSS?",
		answer: "'display: block;' will make an element take up the full width of its parent container, while 'display: inline;' will make an element take up only as much width as necessary.",
		options: [
			"'display: block;' will make an element take up the full width of its parent container, while 'display: inline;' will make an element take up only as much width as necessary.",
			"'display: block;' will make an element align vertically with other block-level elements, while 'display: inline;' will make an element align horizontally with other inline-level elements.",
			"'display: block;' will make an element stack vertically with other block-level elements, while 'display: inline;' will make an element stack horizontally with other inline-level elements.",
			"'display: block;' and 'display: inline;' are used to achieve the same effect in different contexts, and there is no inherent difference between them."
		]
	},
	{
		question: "What is the problem with the following CSS code? p { font-size: 14px; color: black; margin-top: 10px; }",
		answer: "There is no problem with the CSS code.",
		options: [
			"The font-size property should be defined in em instead of px.",
			"The color property should be defined using a hex code instead of a named color.",
			"The margin-top property should be defined in percent instead of px.",
			"There is no problem with the CSS code."
		]
	},
	{
		question: `What is the problem with the following CSS code? .box { background-color: red; height: 100px; width: 50%; }`,
		answer: `The width property is not defined correctly.`,
		options: [
			`The background-color property should be defined using a hex code instead of a named color.`,
			`The height property is not defined correctly.`,
			`The width property is not defined correctly.`,
			`There is no problem with the CSS code.`
		]
	},
	{
		question: "What is the problem with the following CSS code? #nav ul li { display: inline-block; }",
		answer: "The ID 'nav' is not defined in the HTML code.",
		options: [
			"The class 'nav' should be defined instead of the ID 'nav'.",
			"The display property should be defined using flexbox instead of inline-block.",
			"The ID 'nav' is not defined in the HTML code.",
			"There is no problem with the CSS code."
		]
	},
	{
		question: "What is the problem with the following CSS code? h1 { font-family: Arial, Helvetica, sans-serif; }",
		answer: "There is no problem with the CSS code.",
		options: [
			"The font-family property should only include web-safe fonts.",
			"The font-family property should only include Google fonts.",
			"The font-family property should only include system fonts.",
			"There is no problem with the CSS code."
		]
	},
	{
		question: "What is a CSS selector?",
		answer: "A CSS selector is a pattern that is used to select and style HTML elements based on their attributes, classes, or IDs.",
		options: [
			"A CSS selector is a function that is used to manipulate the styling of HTML elements.",
			"A CSS selector is a variable that is used to store styling information.",
			"A CSS selector is a keyword that is used to define a new CSS rule.",
			"A CSS selector is a pattern that is used to select and style HTML elements based on their attributes, classes, or IDs."
		]
	},
	{
		question: "What is the difference between the 'margin' and 'padding' CSS properties?",
		answer: "The 'padding' property adds space within an element, while the 'margin' property adds space outside an element.",
		options: [
			"The 'padding' property adds space outside an element, while the 'margin' property adds space within an element.",
			"The 'margin' property adds color to an element, while the 'padding' property adds space within an element.",
			"The 'margin' property defines the width of an element, while the 'padding' property defines the height of an element.",
			"The 'padding' property adds space within an element, while the 'margin' property adds space outside an element."
		]
	},
	{
		question: "What is the box model in CSS?",
		answer: "The box model is a design concept in CSS that describes the layout of an element as a rectangular box with content, padding, borders, and margins.",
		options: [
			"The box model is a way of positioning elements on a web page using coordinates.",
			"The box model is a way of defining the color scheme for a web page.",
			"The box model is a way of animating elements on a web page.",
			"The box model is a design concept in CSS that describes the layout of an element as a rectangular box with content, padding, borders, and margins."
		]
	},
	{
		question: "What is a CSS selector?",
		answer: "A CSS selector is a pattern that matches one or more elements on a web page, based on their tag name, class, ID, or other attributes.",
		options: [
			"A CSS selector is a way of defining the width of an element.",
			"A CSS selector is a way of positioning elements on a web page using coordinates.",
			"A CSS selector is a way of defining the color scheme for a web page.",
			"A CSS selector is a pattern that matches one or more elements on a web page, based on their tag name, class, ID, or other attributes."
		]
	},
	{
		question: "What is a media query in CSS?",
		answer: "A media query is a CSS technique that allows different styles to be applied to a web page based on the characteristics of the device or browser being used to view it, such as screen size or orientation.",
		options: [
			"A media query is a way of positioning elements on a web page using coordinates.",
			"A media query is a way of defining the color scheme for a web page.",
			"A media query is a way of defining the width of an element.",
			"A media query is a CSS technique that allows different styles to be applied to a web page based on the characteristics of the device or browser being used to view it, such as screen size or orientation."
		]
	},
	{
		question: "What is the problem with the following CSS code? .box { width: 100%; height: 100%; background-color: #f00; margin: auto; }",
		answer: "The height property will not work because the parent element needs a defined height.",
		options: [
			"The background-color property is not defined correctly.",
			"The margin property is not defined correctly.",
			"The width property is not defined correctly.",
			"The height property will not work because the parent element needs a defined height."
		]
	},
	{
		question: "What is the problem with the following CSS code? h1 { font-size: 24px; } h2 { font-size: 18px; } h3 { font-size: 14px; }",
		answer: "The selector for the h3 element is not defined correctly.",
		options: [
			"The font-size property is not defined correctly.",
			"The selector for the h1 element is not defined correctly.",
			"The selector for the h2 element is not defined correctly.",
			"The selector for the h3 element is not defined correctly."
		]
	},
	{
		question: "What is the problem with the following CSS code? .box { width: 200px; height: 200px; background-color: #f00; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }",
		answer: "The parent element needs a relative or absolute positioning for the absolute positioning of the child element to work.",
		options: [
			"The width property is not defined correctly.",
			"The height property is not defined correctly.",
			"The background-color property is not defined correctly.",
			"The parent element needs a relative or absolute positioning for the absolute positioning of the child element to work."
		]
	},
	{
		question: "What is the problem with the following CSS code? .box { width: 200px; height: 200px; background-color: #f00; margin: auto; }",
		answer: "The parent element needs a defined width for the margin auto to work.",
		options: [
			"The width property is not defined correctly.",
			"The height property is not defined correctly.",
			"The background-color property is not defined correctly.",
			"The parent element needs a defined width for the margin auto to work."
		]
	},
	///////////////////////////////////////////////////////////Java
	{
		question: "What is the difference between a class and an object in Java?",
		answer: "A class is a blueprint or template for creating objects, while an object is an instance of a class.",
		options: [
			"A class is an instance of an object, while an object is a template for creating classes.",
			"A class is a keyword in Java, while an object is a data type.",
			"A class is a data structure, while an object is a method.",
			"A class is a blueprint or template for creating objects, while an object is an instance of a class."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { for (int i = 0; i < 5; i++) { System.out.println(i); } System.out.println(i); } }",
		answer: "This code will result in a compilation error because the variable i is not defined outside the for loop.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the numbers 0 through 4 followed by a runtime error.",
			"This code will result in a compilation error because the variable i is not defined outside the for loop.",
			"This code will output an error message, but will not result in a runtime error."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3}; System.out.println(arr[3]); } }",
		answer: "This code will throw an ArrayIndexOutOfBoundsException because the array arr only has 3 elements and the index 3 is out of bounds.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will throw an ArrayIndexOutOfBoundsException because the array arr only has 3 elements and the index 3 is out of bounds.",
			"This code will result in a compilation error because the index operator is used incorrectly.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String s = \"Hello\"; if (s == \"Hello\") { System.out.println(\"Hello, world!\"); } } }",
		answer: `This code will output the message \"Hello, world!\".`,
		options: [
			"This code will compile without error, but will not output anything.",
			`This code will output the message \"Hello, world!\".`,
			"This code will result in a compilation error because the variable s is not initialized.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int i = 0; while (i < 5) { System.out.println(i); i++; } System.out.println(i); } }",
		answer: "This code will output the numbers 0 through 4 followed by the number 5.",
		options: [
			"This code will output the numbers 0 through 4 followed by the number 5.",
			"This code will compile without error, but will not output anything.",
			"This code will output the numbers 1 through 5.",
			"This code will output an error message, but will not result in a runtime error."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String s = null; if (s.equals(\"Hello\")) { System.out.println(\"Hello, world!\"); } } }",
		answer: "This code will throw a NullPointerException because the variable s is null and the equals() method cannot be called on a null object.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the message \"Hello, world!\".",
			"This code will result in a compilation error because the variable s is not initialized.",
			"This code will throw a NullPointerException because the variable s is null and the equals() method cannot be called on a null object."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 0; int z = x / y; System.out.println(z); } }",
		answer: "This code will throw an ArithmeticException because division by zero is not allowed.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the value 0.",
			"This code will result in a compilation error because the variable y is initialized to zero.",
			"This code will throw an ArithmeticException because division by zero is not allowed."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = new int[3]; arr[3] = 10; System.out.println(arr[3]); } }",
		answer: "This code will throw an ArrayIndexOutOfBoundsException because the array arr only has 3 elements and the index 3 is out of bounds.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will throw an ArrayIndexOutOfBoundsException because the array arr only has 3 elements and the index 3 is out of bounds.",
			"This code will result in a compilation error because the index operator is used incorrectly.",
			"This code will throw an ArithmeticException because division by zero is not allowed."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 2; int z = x % y; System.out.println(z); } }",
		answer: "This code will output the value 1.",
		options: [
			"This code will result in a compilation error because the modulo operator cannot be used with integers.",
			"This code will compile without error, but will not output anything.",
			"This code will output the value 2.",
			"This code will output the value 1."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String s = \"hello world\"; s.toUpperCase(); System.out.println(s); } }",
		answer: "This code will output the string \"hello world\" in lowercase because the toUpperCase() method returns a new string in uppercase, but does not modify the original string s.",
		options: [
			"This code will output the string \"hello world\" in lowercase because the toUpperCase() method returns a new string in uppercase, but does not modify the original string s.",
			"This code will output the string \"HELLO WORLD\".",
			"This code will result in a compilation error because the toUpperCase() method cannot be used with strings.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int i = 0; for (; i < 5; i++) { System.out.println(i); } System.out.println(i); } }",
		answer: "This code will output the numbers 0 through 4 followed by the number 5.",
		options: [
			"This code will result in a compilation error because the variable i is not defined outside the for loop.",
			"This code will output the numbers 0 through 4 followed by the number 5.",
			"This code will output the numbers 1 through 5.",
			"This code will output an error message, but will not result in a runtime error."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3}; for (int i = 0; i <= arr.length; i++) { System.out.println(arr[i]); } } }",
		answer: "This code will throw an ArrayIndexOutOfBoundsException because the loop variable i exceeds the length of the array arr.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the values 1, 2, and 3.",
			"This code will result in a compilation error because the index operator is used incorrectly.",
			"This code will throw an ArrayIndexOutOfBoundsException because the loop variable i exceeds the length of the array arr."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 2; double z = x / y; System.out.println(z); } }",
		answer: "This code will output the value 2.0 because integer division is performed before the result is converted to a double.",
		options: [
			"This code will result in a compilation error because the division operator cannot be used with integers.",
			"This code will output the value 2.0 because integer division is performed before the result is converted to a double.",
			"This code will output the value 2.5.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int i = 0; while (i < 5) { System.out.println(i); i = i++; } System.out.println(i); } }",
		answer: "This code will output the numbers 0 through 4 followed by the number 0, because the post-increment operator i++ will increment the value of i after it has been evaluated, so i will always be assigned the value 0 in each iteration of the loop.",
		options: [
			"This code will output the numbers 0 through 4 followed by the number 0, because the post-increment operator i++ will increment the value of i after it has been evaluated, so i will always be assigned the value 0 in each iteration of the loop.",
			"This code will compile without error, but will not output anything.",
			"This code will output the numbers 1 through 5.",
			"This code will output an error message, but will not result in a runtime error."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String s = \"hello\"; String t = s; s = s.concat(\" world\"); System.out.println(t); } }",
		answer: "This code will output the string \"hello\" because the concat() method returns a new string with the concatenated values, but does not modify the original string s.",
		options: [
			`This code will output the string \"hello\" because the concat() method returns a new string with the concatenated values, but does not modify the original string s.`,
			`This code will output the string \"hello world\".`,
			`This code will result in a compilation error because the concat() method cannot be used with strings.`,
			`This code will output an error message, but will not throw an exception.`
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3}; for (int i = 0; i < arr.length; i++) { if (arr[i] == 2) continue; System.out.println(arr[i]); } } }",
		answer: "This code will output the values 1 and 3, because the continue statement will skip over the value 2 in the array.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the values 1 and 2.",
			"This code will result in a compilation error because the continue statement cannot be used in a for loop.",
			"This code will output the values 1 and 3, because the continue statement will skip over the value 2 in the array."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 10; System.out.println(\"x + y = \" + x + y); } }",
		answer: `This code will output the string \"x + y = 510\"`,
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the string \"x + y = 15\".",
			`This code will output the string \"x + y = 510\"`,
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int i = 0; while (i < 10) { if (i % 2 == 0) continue; System.out.println(i); i++; } } }",
		answer: "This code will result in an infinite loop because the increment statement i++ is not executed if the continue statement is executed.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will result in an infinite loop because the increment statement i++ is not executed if the continue statement is executed.",
			"This code will result in a compilation error because the continue statement cannot be used in a while loop.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int i = 0; while (i < 10) { System.out.println(i); i += 2; } } }",
		answer: "This code will output the even numbers from 0 to 8 because the statement i += 2 will add 2 to i in each iteration of the loop.",
		options: [
			"This code will output the even numbers from 0 to 8 because the statement i += 2 will add 2 to i in each iteration of the loop.",
			"This code will output the odd numbers from 1 to 9.",
			"This code will result in a compilation error because the i variable is not defined.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int i = 0; do { System.out.println(i); i++; } while (i < 10); } }",
		answer: "This code will output the numbers from 0 to 9 because the do-while loop will execute at least once, even if the condition i < 10 is false.",
		options: [
			"This code will output the numbers from 0 to 9 because the do-while loop will execute at least once, even if the condition i < 10 is false.",
			"This code will output the numbers from 1 to 10.",
			"This code will result in a compilation error because the do-while loop requires a break statement.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int i = 0; for (i = 0; i < 10; i++) { System.out.println(i); } } }",
		answer: "This code will output the numbers from 0 to 9 because the for loop will execute while i is less than 10.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the numbers from 1 to 10.",
			"This code will output the numbers from 0 to 9 because the for loop will execute while i is less than 10.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is the problem with the following Java code? int x = 5; int y = x + 5;",
		answer: "There is no problem with the Java code.",
		options: [
			"The variable x should be initialized with a final keyword.",
			"The variable y should be initialized with a final keyword.",
			"The variable y should be initialized with a value of x * 5 instead of x + 5.",
			"There is no problem with the Java code."
		]
	},
	{
		question: "What is the problem with the following Java code? int[] arr = new int[5]; arr[5] = 10;",
		answer: "The index of the array is out of bounds.",
		options: [
			"The size of the array should be defined using an ArrayList instead.",
			"The value assigned to the array should be defined using a string instead.",
			"The index of the array is out of bounds.",
			"There is no problem with the Java code."
		]
	},
	{
		question: "What is the problem with the following Java code? String str = null; str.length();",
		answer: "A NullPointerException will be thrown.",
		options: [
			"The String variable should be initialized with an empty string instead of null.",
			"The length property should be defined using a different data type.",
			"A NullPointerException will be thrown.",
			"There is no problem with the Java code."
		]
	},
	{
		question: "What is the problem with the following Java code? for (int i = 0; i < 10; i++) { System.out.println(i); }",
		answer: "There is no problem with the Java code.",
		options: [
			"The for loop should be replaced with a while loop.",
			"The println method should be replaced with a print method.",
			"The for loop should have a different condition.",
			"There is no problem with the Java code."
		]
	},
	{
		question: "What is the problem with the following Java code? int num = 10; System.out.println(num / 0);",
		answer: "An ArithmeticException will be thrown.",
		options: [
			"The value assigned to num should be a double instead of an integer.",
			"The println method should be replaced with a print method.",
			"An ArithmeticException will be thrown.",
			"There is no problem with the Java code."
		]
	},
	{
		question: "What is the problem with the following Java code? int[] arr = {1, 2, 3}; System.out.println(arr[3]);",
		answer: "An ArrayIndexOutOfBoundsException will be thrown.",
		options: [
			"The value assigned to arr should be defined using a string instead.",
			"The println method should be replaced with a print method.",
			"An ArrayIndexOutOfBoundsException will be thrown.",
			"There is no problem with the Java code."
		]
	},
	{
		question: "What is the problem with the following Java code? String str = \"hello\"; int num = Integer.parseInt(str);",
		answer: "A NumberFormatException will be thrown.",
		options: [
			"The value assigned to str should be an integer instead of a string.",
			"The parseInt method should be replaced with a different method.",
			"A NumberFormatException will be thrown.",
			"There is no problem with the Java code."
		]
	},
	{
		question: "What is the problem with the following Java code? int x = 5; if (x = 10) { System.out.println(\"x is 10\"); }",
		answer: "The if statement should use a double equals sign instead of a single equals sign.",
		options: [
			"The value assigned to x should be a string instead of an integer.",
			"The println method should be replaced with a print method.",
			"The if statement should use a double equals sign instead of a single equals sign.",
			"There is no problem with the Java code."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3, 4, 5}; for (int i = 0; i < 5; i++) { System.out.println(arr[i]); } } }",
		answer: "This code will output the elements of the arr array from index 0 to 4, inclusive.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the elements of the arr array from index 1 to 5, inclusive.",
			"This code will output the elements of the arr array from index 0 to 4, inclusive.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int num = 7; if (num % 2 == 0) { System.out.println(num + \" is even\"); } else { System.out.println(num + \" is odd\"); } } }",
		answer: `This code will output \"7 is odd\"`,
		options: [
			`This code will output \"7 is odd\"`,
			`This code will output \"7 is even\"`,
			"This code will result in a compilation error because the modulo operator is not defined for integers.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 10; int y = 5; if (x > y) { System.out.println(\"x is greater than y\"); } else { System.out.println(\"y is greater than x\"); } } }",
		answer: `This code will output \"x is greater than y\"`,
		options: [
			`This code will output \"x is greater than y\"`,
			`This code will output \"y is greater than x\"`,
			"This code will result in a compilation error because the x and y variables are not initialized.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String str = \"Hello, World!\"; int length = str.length(); for (int i = 0; i <= length; i++) { System.out.println(str.charAt(i)); } } }",
		answer: "This code will throw an IndexOutOfBoundsException because the loop tries to access the character at index equal to the length of the string, which is not a valid index.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the characters of the str string from index 0 to length - 1, inclusive.",
			"This code will throw an IndexOutOfBoundsException because the loop tries to access the character at index equal to the length of the string, which is not a valid index.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = new int[5]; for (int i = 1; i <= arr.length; i++) { arr[i] = i; } } }",
		answer: "This code will throw an IndexOutOfBoundsException because the loop tries to access the element at index 5 of the arr array, which is out of bounds.",
		options: [
			"This code will throw an IndexOutOfBoundsException because the loop tries to access the element at index 5 of the arr array, which is out of bounds.",
			"This code will fill the arr array with the values 1 to 5, inclusive.",
			"This code will result in a compilation error because the arr array is not initialized with any values.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3, 4, 5}; for (int i = 0; i < arr.length; i++) { if (arr[i] == 3) { continue; } System.out.println(arr[i]); } } }",
		answer: "This code will output the elements of the arr array from index 0 to 4.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the elements of the arr array from index 0 to 4.",
			"This code will result in a compilation error because the continue statement is not valid in a for loop.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; while (x > 0) { System.out.println(x); x--; } } }",
		answer: "This code will output the values 5, 4, 3, 2, 1, in that order",
		options: [
			"This code will output the values 5, 4, 3, 2, 1, in that order",
			"This code will output the values 0, -1, -2, -3, -4.",
			"This code will result in a compilation error because the while loop condition is not valid.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3, 4, 5}; for (int i = 0; i < arr.length; i++) { if (arr[i] == 3) { break; } System.out.println(arr[i]); } } }",
		answer: "This code will output the elements of the arr array from index 0 to 1",
		options: [
			"This code will output the elements of the arr array from index 0 to 1",
			"This code will output the elements of the arr array from index 0 to 2",
			"This code will result in a compilation error because the break statement is not valid in a for loop.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3, 4, 5}; for (int i = 0; i < arr.length; i++) { if (arr[i] == 3) { return; } System.out.println(arr[i]); } } }",
		answer: "This code will output the elements of the arr array from index 0 to 2",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the elements of the arr array from index 0 to 4",
			"This code will result in a compilation error because the return statement is not valid in a for loop.",
			"This code will output the elements of the arr array from index 0 to 2",
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = new int[5]; for (int i = 1; i <= 5; i++) { arr[i] = i; } } }",
		answer: "This code will throw an ArrayIndexOutOfBoundsException because the loop condition is checking for i <= 5, which means the loop will try to access arr[5], which is beyond the bounds of the array.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the values 1, 2, 3, 4, 5 to the console.",
			"This code will result in a compilation error because the loop condition is not valid.",
			"This code will throw an ArrayIndexOutOfBoundsException because the loop condition is checking for i <= 5, which means the loop will try to access arr[5], which is beyond the bounds of the array.",
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String str = null; if (str.equals('foo')) { System.out.println('Match!'); } else { System.out.println('No match.'); } } }",
		answer: "This code will throw a NullPointerException because the variable str is null and the equals() method is being called on it.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the text 'Match!' to the console.",
			"This code will output the text 'No match.' to the console.",
			"This code will throw a NullPointerException because the variable str is null and the equals() method is being called on it."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = ++x * 2; System.out.println(y); } }",
		answer: "This code will output the value 12 because the ++x operator increments the value of x before the multiplication operation is performed, resulting in (6 * 2) = 12.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the value 10 to the console.",
			"This code will result in a compilation error because the ++ operator is not valid in this context.",
			"This code will output the value 12 because the ++x operator increments the value of x before the multiplication operation is performed, resulting in (6 * 2) = 12."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; while (x > 0) { System.out.println(x); x--; } } }",
		answer: "This code will output the numbers 5, 4, 3, 2, 1 to the console because the while loop will execute as long as x is greater than 0 and will decrement x by 1 with each iteration.",
		options: [
			"This code will output the numbers 5, 4, 3, 2, 1 to the console because the while loop will execute as long as x is greater than 0 and will decrement x by 1 with each iteration.",
			"This code will output the number 5 to the console.",
			"This code will result in a compilation error because the while loop condition is not valid.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; if (x < 0) { System.out.println('Negative'); } else if (x == 0) { System.out.println('Zero'); } else { System.out.println('Positive'); } } }",
		answer: "This code will output the text 'Positive' to the console because x is greater than 0 and does not equal 0.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the text 'Negative' to the console.",
			"This code will output the text 'Zero' to the console.",
			"This code will output the text 'Positive' to the console because x is greater than 0 and does not equal 0."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3, 4, 5}; for (int i = 0; i < arr.length; i++) { System.out.println(arr[i]); } } }",
		answer: "This code will output the numbers 1, 2, 3, 4, 5 to the console because it is correctly accessing each element of the array using a for loop.",
		options: [
			"This code will output the numbers 1, 2, 3, 4, 5 to the console because it is correctly accessing each element of the array using a for loop.",
			"This code will output the text '12345' to the console.",
			"This code will result in a compilation error because the for loop condition is not valid.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String[] arr = {'apple', 'banana', 'cherry'}; for (String s : arr) { System.out.println(s); } } }",
		answer: "This code will result in a compilation error",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the text 'apple', 'banana', 'cherry' to the console.",
			"This code will result in a runtime error because the loop variable 's' is not properly declared.",
			"This code will result in a compilation error"
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = {1, 2, 3, 4, 5}; for (int i = 0; i <= arr.length; i++) { System.out.println(arr[i]); } } }",
		answer: "This code will result in an ArrayIndexOutOfBoundsException.",
		options: [
			"This code will result in an ArrayIndexOutOfBoundsException.",
			"This code will output the numbers 1, 2, 3, 4, 5 to the console.",
			"This code will result in a compilation error because the for loop condition is not valid.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 2; double result = x / y; System.out.println(result); } }",
		answer: "This code will output the number 2.0 to the console.",
		options: [
			"This code will output the number 2.0 to the console.",
			"This code will output the number 2.5 to the console.",
			"This code will result in a compilation error because the variable types are not compatible.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 10; int y = 2; int z = x % y; System.out.println(z); } }",
		answer: "This code will output the number 0 to the console.",
		options: [
			"This code will output the number 0 to the console.",
			"This code will output the number 5 to the console.",
			"This code will result in a compilation error because the variable types are not compatible.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String s1 = 'Hello'; String s2 = 'World'; String s3 = s1 + s2; System.out.println(s3); } }",
		answer: "This code will result in a compilation error.",
		options: [
			"This code will result in a compilation error.",
			"This code will output the text 'HelloWorld' to the console.",
			"This code will result in a runtime error because the string concatenation operator is not properly used.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] nums = {1, 2, 3, 4, 5}; for (int i = 1; i <= nums.length; i++) { System.out.println(nums[i]); } } }",
		answer: "This code will result in an ArrayIndexOutOfBoundsException.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the numbers 1, 2, 3, 4, 5 to the console.",
			"This code will result in a compilation error because the variable types are not compatible.",
			"This code will result in an ArrayIndexOutOfBoundsException."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 10; int z = y / x; System.out.println(z); } }",
		answer: "This code will output the number 2 to the console.",
		options: [
			"This code will output the number 2 to the console.",
			"This code will output the number 0.5 to the console.",
			"This code will result in a runtime error because the variables are not initialized.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String s1 = 'Hello'; String s2 = 'World'; String s3 = s1.concat(s2); System.out.println(s3); } }",
		answer: `This code will compile without error, but will not output anything.`,
		options: [
			"This code will output the text 'HelloWorld' to the console.",
			"This code will result in a runtime error because the string concatenation method is not properly used.",
			"This code will result in a compilation error because the variable types are not compatible.",
			`This code will compile without error, but will not output anything.`
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String s1 = 'Hello'; String s2 = 'World'; String s3 = s1 + s2; System.out.println(s3); } }",
		answer: "This code will result in a compilation error.",
		options: [
			"This code will output the text 'HelloWorld' to the console.",
			"This code will result in a runtime error because the string concatenation operator is not properly used.",
			"This code will compile without error, but will not output anything.",
			"This code will result in a compilation error."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] nums = new int[5]; for (int i = 0; i < nums.length; i++) { nums[i] = i + 1; } System.out.println(nums[5]); } }",
		answer: "This code will result in an ArrayIndexOutOfBoundsException.",
		options: [
			"This code will output the number 5 to the console.",
			"This code will output the numbers 1, 2, 3, 4, 5 to the console.",
			"This code will result in a compilation error because the variable types are not compatible.",
			"This code will result in an ArrayIndexOutOfBoundsException."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 10; double z = y / x; System.out.println(z); } }",
		answer: "This code will output the number 2.0 to the console.",
		options: [
			"This code will output the number 0.5 to the console.",
			"This code will compile without error, but will not output anything.",
			"This code will result in a runtime error because the variables are not initialized.",
			"This code will output the number 2.0 to the console.",
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] nums = {1, 2, 3, 4, 5}; for (int i = 0; i <= nums.length; i++) { System.out.println(nums[i]); } } }",
		answer: "This code will result in an ArrayIndexOutOfBoundsException.",
		options: [
			"This code will output the numbers 1, 2, 3, 4, 5, and then an error message.",
			"This code will output the numbers 1, 2, 3, 4, 5, and then continue running without errors.",
			"This code will result in a compilation error because the variable types are not compatible.",
			"This code will result in an ArrayIndexOutOfBoundsException."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 10; if (x == 5) { int z = y / x; System.out.println(z); } System.out.println(z); } }",
		answer: "This code will result in a compilation error.",
		options: [
			"This code will output the number 2 to the console.",
			"This code will result in a compilation error.",
			"This code will compile without error, but will not output anything.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5; int y = 10; if (x == 5) { double z = (double)y / x; System.out.println(z); } } }",
		answer: "This code will output the number 2.0 to the console.",
		options: [
			"This code will output the number 2.0 to the console.",
			"This code will output the number 0.5 to the console.",
			"This code will result in a runtime error because the variables are not initialized.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int i = 0; while (i < 5) { System.out.println(i); i--; } } }",
		answer: "This code will result in an infinite loop because i is always less than 5.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the numbers 0, -1, -2, -3, and -4.",
			"This code will result in an infinite loop because i is always less than 5.",
			"This code will output an error message, but will not result in an infinite loop."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int x = 5, y = 10; if (x = y) { System.out.println(\"Equal\"); } else { System.out.println(\"Not equal\"); } } }",
		answer: "This code will result in a compilation error.",
		options: [
			"This code will compile without error, but will output the message \"Not equal\".",
			"This code will compile without error, but will output the message \"Equal\".",
			"This code will result in a runtime error because the variable x is not initialized.",
			"This code will result in a compilation error."
		]
	},
	{
		question: `What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { List<String> list = new ArrayList<>(); list.add(\"Hello\"); list.add(\"World\"); for (int i = 0; i < list.size(); i++) { if (list.get(i) == \"World\") { list.remove(i); } } System.out.println(list); } }`,
		answer: `This code will not remove the element \"World\" from the list.`,
		options: [
			`This code will compile without error, but will not output anything.`,
			`This code will output the list [\"Hello\"] after removing the element \"World\".`,
			`This code will output the list [\"Hello\", \"World\"] without removing any elements.`,
			`This code will not remove the element \"World\" from the list.`,
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = new int[5]; for (int i = 0; i <= arr.length; i++) { arr[i] = i; } } }",
		answer: "This code will throw an ArrayIndexOutOfBoundsException.",
		options: [
			"This code will throw an ArrayIndexOutOfBoundsException.",
			"This code will output the values 0, 1, 2, 3, 4, and 5.",
			"This code will result in a compilation error because the index operator is used incorrectly.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { String s = null; if (s.equals(\"Hello\")) { System.out.println(\"Hello, world!\"); } } }",
		answer: "This code will throw a NullPointerException.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the message \"Hello, world!\".",
			"This code will result in a compilation error because the variable s is not initialized.",
			"This code will throw a NullPointerException."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = new int[5]; for (int i = 0; i < arr.length; i++) { arr[i] = i; } System.out.println(Arrays.toString(arr)); } }",
		answer: "This code will output the array [0, 1, 2, 3, 4].",
		options: [
			"This code will output the array [0, 1, 2, 3, 4].",
			"This code will output the sorted array [0, 1, 2, 3, 4].",
			"This code will result in a compilation error because the method Arrays.toString() is not used correctly.",
			"This code will output an error message, but will not result in a runtime error."
		]
	},
	{
		question: "What is the difference between an interface and an abstract class in Java?",
		answer: "An interface defines a set of methods that a class must implement, while an abstract class can provide method implementations and fields, but cannot be instantiated.",
		options: [
			"An interface is a class that can be instantiated, while an abstract class is a keyword in Java.",
			"An interface can provide method implementations and fields, while an abstract class cannot.",
			"An interface can extend multiple classes, while an abstract class can only extend one class.",
			"An interface defines a set of methods that a class must implement, while an abstract class can provide method implementations and fields, but cannot be instantiated."
		]
	},
	{
		question: `What is the difference between the "==" and "===" operators in Java?`,
		answer: `The "==" operator checks if two objects have the same value, while the "===" operator checks if two objects have the same value and type.`,
		options: [
			`The "==" operator checks if two objects have the same type, while the "===" operator checks if two objects have the same value.`,
			`The "==" operator checks if two objects have the same reference, while the "===" operator checks if two objects have the same value.`,
			`The "==" operator checks if two objects have the same value, while the "===" operator checks if two objects have the same value and type.`,
			`The "==" operator checks if two objects have the same value and type, while the "===" operator checks if two objects have the same reference.`
		]
	},
	{
		question: "What is wrong with the following Java code? int x = 5 / 0;",
		answer: "This code will throw an ArithmeticException because division by zero is not allowed.",
		options: [
			"This code will throw an ArithmeticException because division by zero is not allowed.",
			"This code will result in a compilation error because division by zero is not allowed.",
			"This code will set the value of x to 0.",
			"This code will set the value of x to infinity."
		]
	},
	{
		question: "What is wrong with the following Java code? String s = null; if (s.equals(\"hello\")) { System.out.println(\"Hello world!\"); }",
		answer: "This code will throw a NullPointerException because the variable s is null.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the string \"Hello world!\".",
			"This code will result in a compilation error because the variable s is not initialized.",
			"This code will throw a NullPointerException because the variable s is null."
		]
	},
	{
		question: "What is wrong with the following Java code? public static void main(String[] args) { System.out.println(args[1]); }",
		answer: "This code will throw an ArrayIndexOutOfBoundsException.",
		options: [
			"This code will throw an ArrayIndexOutOfBoundsException.",
			"This code will output the second element of the args array.",
			"This code will result in a compilation error because the main method must have a return type.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is the difference between an inner class and a nested class in Java?",
		answer: "An inner class is a non-static nested class that has access to the members of its enclosing class, while a nested class is a static nested class that does not have access to the members of its enclosing class.",
		options: [
			"An inner class is a static nested class that has access to the members of its enclosing class, while a nested class is a non-static nested class that does not have access to the members of its enclosing class.",
			"An inner class is a class that is defined inside another class, while a nested class is a class that is defined inside a method.",
			"An inner class is a non-static nested class that has access to the members of its enclosing class, while a nested class is a static nested class that does not have access to the members of its enclosing class.",
			"An inner class can only access the static members of its enclosing class, while a nested class can access both the static and non-static members of its enclosing class."
		]
	},
	{
		question: `What is the difference between the "throw" and "throws" keywords in Java?`,
		answer: `The "throw" keyword is used to throw an exception from a method or block, while the "throws" keyword is used to declare the exceptions that a method or constructor can throw.`,
		options: [
			`The "throw" keyword is used to catch an exception, while the "throws" keyword is used to rethrow an exception.`,
			`The "throw" keyword is used to create a new exception object, while the "throws" keyword is used to handle an existing exception.`,
			`The "throw" keyword is used to declare a checked exception, while the "throws" keyword is used to declare an unchecked exception.`,
			`The "throw" keyword is used to throw an exception from a method or block, while the "throws" keyword is used to declare the exceptions that a method or constructor can throw.`
		]
	},
	{
		question: "What is wrong with the following Java code? public class Person { private final String name; public Person(String name) { this.name = name; } }",
		answer: "This code is correct and will compile without error.",
		options: [
			"This code will result in a compilation error because the variable name is not initialized.",
			"This code will result in a compilation error because the constructor does not have a return type.",
			"This code will result in a compilation error because the variable name is not declared as final.",
			"This code is correct and will compile without error."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { int[] arr = new int[5]; arr[5] = 10; } }",
		answer: "This code will throw an ArrayIndexOutOfBoundsException.",
		options: [
			"This code will compile without error, but will not output anything.",
			"This code will output the value 10.",
			"This code will result in a compilation error because the index operator is not used correctly.",
			"This code will throw an ArrayIndexOutOfBoundsException."
		]
	},
	{
		question: "What is wrong with the following Java code? public class MyClass { public static void main(String[] args) { List<String> list = new ArrayList<>(); list.add(\"Hello\"); list.add(1); System.out.println(list.get(1)); } }",
		answer: "This code will throw a ClassCastException.",
		options: [
			"This code will throw a ClassCastException.",
			"This code will output the value 1.",
			"This code will result in a compilation error because the list is not typed.",
			"This code will output an error message, but will not throw an exception."
		]
	},
	{
		question: "What is the difference between a HashSet and a TreeSet in Java?",
		answer: "A HashSet is an unordered collection of unique elements, while a TreeSet is a sorted collection of unique elements.",
		options: [
			"A HashSet is a sorted collection of unique elements, while a TreeSet is an unordered collection of unique elements.",
			"A HashSet is an unordered collection of unique elements, while a TreeSet is a sorted collection of unique elements.",
			"A HashSet uses a red-black tree for internal storage, while a TreeSet uses a hash table for internal storage.",
			"A HashSet uses a hash table for internal storage, while a TreeSet uses a binary search tree for internal storage."
		]
	},
	///////////////////////////////////////////////////////////Javascript
	{
		question: `What is the difference between the '== ' and '=== ' operators in JavaScript?`,
		answer: `The '== ' operator checks for value equality, while the '=== ' operator checks for both value and type equality.`,
		options: [
			`The '== ' operator checks for both value and type equality, while the '=== ' operator checks for value equality only.`,
			`The '== ' operator is used to assign values to variables, while the '=== ' operator is used for comparison.`,
			`The '== ' operator checks for strict equality, while the '=== ' operator checks for loose equality.`,
			`The '== ' operator checks for value equality, while the '=== ' operator checks for both value and type equality.`,
		]
	},
	{
		question: "What is the problem with the following JavaScript code? const x = 5; const y = 6; const z = x + y; console.log('The sum of ' + x + ' and ' + y + ' is ' + z);",
		answer: "There is no problem with this code.",
		options: [
			"The variables x and y are not declared.",
			"The variable z is not declared.",
			"There is a syntax error in the console.log statement.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? function reverseString(str) { let reversedStr = ''; for (let i = str.length - 1; i >= 0; i--) { reversedStr += str[i]; } return reversedStr; } console.log(reverseString('hello'));",
		answer: "The function is missing a return statement.",
		options: [
			"The function is not defined correctly.",
			"The for loop is not correct.",
			"The function is missing a return statement.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? const arr = [1, 2, 3, 4, 5]; const doubledArr = arr.map(num => { num * 2; }); console.log(doubledArr);",
		answer: "The function passed to the map method does not return a value.",
		options: [
			"The map method is not used correctly.",
			"The array arr is not defined.",
			"The function passed to the map method does not return a value.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? const myObj = { name: 'John', age: 30, occupation: 'Software Engineer' }; for (let prop in myObj) { if (myObj.hasOwnProperty(prop)) { console.log(prop + ': ' + myObj.prop); } }",
		answer: "The property is accessed incorrectly, it should be accessed using bracket notation myObj[prop] instead of myObj.prop.",
		options: [
			"The object myObj is not defined.",
			"The for...in loop is not used correctly.",
			"The property is accessed incorrectly, it should be accessed using bracket notation myObj[prop] instead of myObj.prop.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? const x = 5; if (x === 5) { let y = 10; } console.log(y);",
		answer: "The variable y is not defined outside of the if block.",
		options: [
			"The variable x is not declared.",
			"The variable y is not defined inside the if block.",
			"The variable y is not defined outside of the if block.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? const myArray = [1, 2, 3, 4, 5]; myArray.forEach(function(element) { console.log(element); });",
		answer: "There is no problem with this code.",
		options: [
			"The forEach method is not used correctly.",
			"The array myArray is not defined.",
			"There is a syntax error in the console.log statement.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? function multiply(x, y) { return x * y; } const result = multiply(2); console.log(result);",
		answer: "The function is not called with the correct number of arguments.",
		options: [
			"The function is not defined correctly.",
			"The variable result is not defined.",
			"The function is not called with the correct number of arguments.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? const myString = 'hello'; console.log(myString.reverse());",
		answer: "The string prototype method reverse() does not exist.",
		options: [
			"The string myString is not defined.",
			"There is a syntax error in the console.log statement.",
			"The string prototype method reverse() does not exist.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? const x = 5; const y = 10; const z = x + y; console.log(Z);",
		answer: "The variable Z is not defined. JavaScript is case-sensitive, so it should be lowercase z.",
		options: [
			"The variable Z is not defined. JavaScript is case-sensitive, so it should be lowercase z.",
			"The variable z is not defined.",
			"There is a syntax error in the code.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? function add(x, y) { return x + y; } const result = add('2', 3); console.log(result);",
		answer: "The arguments passed to the function are of different data types and cannot be added together.",
		options: [
			"The function is not defined correctly.",
			"The variable result is not defined.",
			"The arguments passed to the function are of different data types and cannot be added together.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? const myObject = { name: 'John', age: 30 }; console.log(myObject.height);",
		answer: "The property 'height' does not exist in the object.",
		options: [
			"The object myObject is not defined.",
			"The property 'height' does not exist in the object.",
			"There is a syntax error in the code.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? const myArray = [1, 2, 3, 4, 5]; const result = myArray.reduce(function(sum, element) { return sum + element; }, 0); console.log(result);",
		answer: "There is no problem with this code.",
		options: [
			"The reduce method is not used correctly.",
			"The array myArray is not defined.",
			"There is a syntax error in the console.log statement.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? let x = 5; x = 10; console.log(X);",
		answer: "The variable X is not defined. JavaScript is case-sensitive, so it should be lowercase x.",
		options: [
			"The variable X is not defined. JavaScript is case-sensitive, so it should be lowercase x.",
			"The variable x is not defined.",
			"There is a syntax error in the code.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? const myArray = [1, 2, 3, 4, 5]; const newArray = myArray.map(function(element) { return element * 2; }) console.log(newArray);",
		answer: "There is no problem with this code.",
		options: [
			"The map method is not used correctly.",
			"The array myArray is not defined.",
			"There is a syntax error in the console.log statement.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? const myFunction = function() { console.log('Hello, world!'); } myFunction(); console.log(myFunction);",
		answer: "The console.log statement will output the function code instead of executing the function.",
		options: [
			"The function myFunction is not defined.",
			"There is a syntax error in the code.",
			"The console.log statement will output the function code instead of executing the function.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? const myString = 'hello'; console.log(myString.toUpperCase()); console.log(myString);",
		answer: "The toUpperCase() method returns a new string and does not modify the original string.",
		options: [
			"The string myString is not defined.",
			"There is a syntax error in the console.log statement.",
			"The toUpperCase() method returns a new string and does not modify the original string.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? const myArray = [1, 2, 3, 4, 5]; myArray.forEach(function(element, index, arr) { console.log('Element: ' + element + ', Index: ' + index + ', Array: ' + arr); });",
		answer: "There is no problem with this code.",
		options: [
			"The forEach method is not used correctly.",
			"The array myArray is not defined.",
			"There is a syntax error in the console.log statement.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? const myFunction = () => { console.log(this); } myFunction();",
		answer: "Arrow functions do not have their own this context.",
		options: [
			"The function myFunction is not defined.",
			"There is a syntax error in the code.",
			"Arrow functions do not have their own this context.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following JavaScript code? const myObject = { name: 'John', age: 30 }; console.log(myObject.gender);",
		answer: "The property gender does not exist on the object myObject.",
		options: [
			"The object myObject is not defined.",
			"There is a syntax error in the code.",
			"The property gender does not exist on the object myObject.",
			"There is no problem with this code."
		]
	},
	{
		question: "Why is the following JavaScript code not working as expected? const myArray = [1, 2, 3, 4, 5]; const sum = myArray.reduce(function(total, element) { return total + element; }); console.log(sum);",
		answer: "There is no initial value provided for the reduce method.",
		options: [
			"The reduce method is not used correctly.",
			"The array myArray is not defined.",
			"There is a syntax error in the console.log statement.",
			"There is no initial value provided for the reduce method."
		]
	},
	///////////////////////////////////////////////////////////C
	{
		question: "What is the difference between a pointer and a reference in C?",
		answer: "A pointer can be re-assigned, while a reference cannot be re-assigned.",
		options: [
			"A pointer can be re-assigned, while a reference cannot be re-assigned.",
			"A reference can be used without being dereferenced, while a pointer cannot be used without being dereferenced.",
			"A reference is a type of pointer, while a pointer is not a type of reference.",
			"A pointer is a type of reference, while a reference is not a type of pointer."
		]
	},
	{
		question: "In C, Which of the two is faster? 0==1 or 0==2",
		answer: "Both are equal",
		options: [
			"0==2",
			"0==8",
			"0==20",
			"Both are equal"
		]
	},
	{
		question: "What is the problem with the following C code? int main() { int x = 5, y = 0, z; z = x / y; printf('Result: %d', z); return 0; }",
		answer: "Division by zero error.",
		options: [
			"The printf statement is not formatted correctly.",
			"The variables x and y are not defined.",
			"The compiler will throw a syntax error.",
			"Division by zero error."
		]
	},
	{
		question: "What is the problem with the following C code? int main() { char str[] = 'Hello, world!'; printf('String length: %d', strlen(str)); return 0; }",
		answer: "The string should be defined with double quotes instead of single quotes.",
		options: [
			"The printf statement is not formatted correctly.",
			"The strlen function is not defined.",
			"The string should be defined with double quotes instead of single quotes.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following C code? int main() { char str[] = 'Hello, world!'; printf('String length: %d', strlen(str)); return 0; }",
		answer: "The string should be defined with double quotes instead of single quotes.",
		options: [
			"The printf statement is not formatted correctly.",
			"The strlen function is not defined.",
			"The string should be defined with double quotes instead of single quotes.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following C code? int main() { int arr[5] = {1, 2, 3, 4, 5}; printf('Array element: %d', arr[5]); return 0; }",
		answer: "The array index is out of bounds.",
		options: [
			"The printf statement is not formatted correctly.",
			"The array arr is not defined.",
			"The array index is out of bounds.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following C code? int main() { int i; for (i = 0; i < 10; i++); printf('Value of i: %d', i); return 0; }",
		answer: "The semicolon at the end of the for loop statement is causing the loop to run without any instructions.",
		options: [
			"The printf statement is not formatted correctly.",
			"The for loop is not defined correctly.",
			"The variable i is not defined.",
			"The semicolon at the end of the for loop statement is causing the loop to run without any instructions."
		]
	},
	{
		question: "Inline keyword is used to define a function whose contents will be placed at the point, the c function is called. It has another use. What is it?",
		answer: "Change linkage behaviour",
		options: [
			"Change linkage behaviour",
			"Remove dependencies",
			"Optimize code performance",
			"Make code portable"
		]
	},
	{
		question: "C and C++ are, often, considered to be similar. What is the major difference between the two programming languages?",
		answer: "C++ is OOP, C is not",
		options: [
			"C++ is OOP, C is not",
			"C++ has garbage collection",
			"C++ is faster",
			"C++ has more optimizations"
		]
	},
	{
		question: "C is not OOP but struct and union allows one to design class like design. What is the major difference between struct and union features in C?",
		answer: "Union saves all its variables in same location",
		options: [
			"Union saves all its variables in same location",
			"Union is more space efficient",
			"Struct supports different data types",
			"Struct supports pointer"
		]
	},
	{
		question: "What is the difference between ++i and i++ in C?",
		answer: "++i increments the value of i and then returns the incremented value, while i++ returns the value of i and then increments it.",
		options: [
			"++i increments the value of i and then returns the incremented value, while i++ returns the value of i and then increments it.",
			"++i and i++ are identical and can be used interchangeably.",
			"++i increments the value of i, while i++ returns the incremented value of i.",
			"++i returns the value of i and then increments it, while i++ increments the value of i and then returns the incremented value."
		]
	},
	{
		question: "What is the difference between a static and a non-static variable in C?",
		answer: "A static variable retains its value between function calls, while a non-static variable does not.",
		options: [
			"A static variable retains its value between function calls, while a non-static variable does not.",
			"A non-static variable can only be accessed within the function it is declared in, while a static variable can be accessed by any function in the program.",
			"A static variable is allocated on the stack, while a non-static variable does not exist.",
			"A static variable gets no call functions."
		]
	},
	{
		question: "What is a typedef in C?",
		answer: "A typedef is a keyword in C that allows you to create a new name for a data type.",
		options: [
			"A typedef is a function that returns a pointer to another function.",
			"A typedef is a variable that stores the address of a function that can be called later in the program.",
			"A typedef is a keyword in C that allows you to create a new name for a data type.",
			"A typedef is a special type of pointer that can be used to dynamically allocate memory for data types."
		]
	},
	{
		question: "What is the difference between a stack and a heap in C?",
		answer: "In C, the stack is used for static memory allocation and dynamic memory allocation is done on the heap. The stack is typically faster than the heap but has less memory available, while the heap has more memory available but is slower than the stack.",
		options: [
			"In C, the stack is used for dynamic memory allocation and static memory allocation is done on the heap. The stack is typically slower than the heap but has more memory available, while the heap has less memory available but is faster than the stack.",
			"In C, both static and dynamic memory allocation are done on the heap. The stack and the heap are the same thing.",
			"In C, the stack is used for static memory allocation and dynamic memory allocation is done on the heap. The stack is typically faster than the heap but has less memory available, while the heap has more memory available but is slower than the stack.",
			"In C, both static and dynamic memory allocation are done on the stack. The heap is not used in C."
		]
	},
	{
		question: "What is a recursive function in C?",
		answer: "A recursive function is a function that calls itself during its execution.",
		options: [
			"A recursive function is a function that executes only once.",
			"A recursive function is a function that calls another function during its execution.",
			"A recursive function is a function that can only be called from another function.",
			"A recursive function is a function that calls itself during its execution."
		]
	},
	{
		question: "What is the difference between a macro and a function in C?",
		answer: "A macro is a preprocessor directive that replaces the text of the macro with its definition during the precompilation stage. A function is a block of code that can be called multiple times during the program's execution.",
		options: [
			"A macro is a block of code that can be called multiple times during the program's execution. A function is a preprocessor directive that replaces the text of the function with its definition during the precompilation stage.",
			"A macro is a preprocessor directive that replaces the text of the macro with its definition during the precompilation stage. A function is a special type of macro that can only be called once.",
			"A macro is a preprocessor directive that replaces the text of the macro with its definition during the precompilation stage. A function is a block of code that can be called multiple times during the program's execution.",
			"A macro is a preprocessor directive that can be used to define variables, while a function is a block of code that performs a specific task."
		]
	},
	{
		question: "What is a double pointer in C?",
		answer: "A double pointer is a pointer that points to another pointer.",
		options: [
			"A double pointer is a pointer that can point to two different memory locations at the same time.",
			"A double pointer is a pointer that is twice the size of a regular pointer.",
			"A double pointer is a special type of pointer that can be used to access elements of a two-dimensional array.",
			"A double pointer is a pointer that points to another pointer."
		]
	},
	{
		question: "What is the difference between a struct and a union in C?",
		answer: "A struct is a collection of variables of different types that are stored at different memory locations, while a union is a collection of variables that share the same memory location.",
		options: [
			"A struct is a collection of variables of different types that are stored at different memory locations, while a union is a collection of variables that share the same memory location.",
			"A struct and a union are the same thing in C.",
			"A struct is a collection of variables of the same type that are stored at different memory locations, while a union is a collection of variables of different types that share the same memory location.",
			"A struct is a collection of variables that share the same memory location, while a union is a collection of variables of different types that are stored at different memory locations."
		]
	},
	{
		question: "What is the difference between static and dynamic memory allocation in C?",
		answer: "Static memory allocation is done at compile-time and allocated memory remains the same throughout the program's execution. Dynamic memory allocation is done at runtime and the allocated memory can be changed during program execution.",
		options: [
			"Static memory allocation is done at runtime and the allocated memory can be changed during program execution. Dynamic memory allocation is done at compile-time and allocated memory remains the same throughout the program's execution.",
			"Static memory allocation is done at compile-time and allocated memory remains the same throughout the program's execution. Dynamic memory allocation is done at runtime and the allocated memory can be changed during program execution.",
			"Static memory allocation is done at runtime and the allocated memory remains the same throughout the program's execution. Dynamic memory allocation is done at compile-time and the allocated memory can be changed during program execution.",
			"Static memory allocation and dynamic memory allocation are the same thing in C."
		]
	},
	{
		question: "What is a function pointer in C?",
		answer: "A function pointer is a variable that stores the address of a function that can be called later in the program.",
		options: [
			"A function pointer is a function that returns a pointer to another function.",
			"A function pointer is a pointer that points to a variable that stores a function.",
			"A function pointer is a variable that stores the address of a function that can be called later in the program.",
			"A function pointer is a special type of pointer that can be used to dynamically allocate memory for functions."
		]
	},
	{
		question: "What is the difference between a structure and a union in C?",
		answer: "A structure is a collection of variables of different data types that are stored in separate memory locations. A union is a special data type that allows storing different data types in the same memory location.",
		options: [
			"A structure is a special data type that allows storing different data types in the same memory location. A union is a collection of variables of different data types that are stored in separate memory locations.",
			"A structure is a collection of variables of different data types that are stored in separate memory locations. A union is a special data type that allows storing different data types in the same memory location.",
			"A structure and a union are the same thing in C.",
			"A structure is a collection of variables of the same data type that are stored in separate memory locations. A union is a special data type that allows storing variables of different data types in the same memory location."
		]
	},
	{
		question: "What is the difference between a stack and a queue in C?",
		answer: "A stack is a last-in-first-out (LIFO) data structure, while a queue is a first-in-first-out (FIFO) data structure.",
		options: [
			"A stack is a last-in-first-out (LIFO) data structure, while a queue is a first-in-first-out (FIFO) data structure.",
			"A stack and a queue are the same thing in C.",
			"A stack is a first-in-first-out (FIFO)",
			"A stack is both (LIFO) and (FIFO)."
		]
	},
	///////////////////////////////////////////////////////////C++
	{
		question: `What is wrong with the following C code?\n\nint main() {\n  int i;\n  for(i = 0; i < 5; i++)\n    int j = i;\n  return 0;\n}`,
		answer: `The variable j is declared inside the for loop and is not accessible outside the loop.`,
		options: [
			`The variable i is not declared before its use in the for loop.`,
			`The variable j is declared outside the for loop and is not accessible inside the loop.`,
			`The variable j is declared inside the for loop and is not accessible outside the loop.`,
			`There is nothing wrong with the code.`
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int x; cout << 'Enter a number: '; cin >> x cout << 'The number is: ' << x; return 0; }",
		answer: "There is a missing semicolon after the cin statement.",
		options: [
			"The cout statement is not formatted correctly.",
			"The variable x is not defined.",
			"The cin statement is not defined correctly.",
			"There is a missing semicolon after the cin statement."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int x = 10; if (x == 10); cout << 'The value of x is 10.'; return 0; }",
		answer: "The semicolon after the if statement is causing the code inside the if statement to run without any conditions.",
		options: [
			"The cout statement is not formatted correctly.",
			"The variable x is not defined.",
			"The if statement is not defined correctly.",
			"The semicolon after the if statement is causing the code inside the if statement to run without any conditions."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int arr[] = {1, 2, 3, 4, 5}; cout << 'Array element: ' << arr[5]; return 0; }",
		answer: "The array index is out of bounds.",
		options: [
			"The cout statement is not formatted correctly.",
			"The array arr is not defined.",
			"The array index is out of bounds.",
			"There is no problem with this code."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { for (int i = 0; i < 5; i++) cout << i << endl; cout << 'The value of i is: ' << i; return 0; }",
		answer: "The variable i is out of scope outside the for loop.",
		options: [
			"The cout statement is not formatted correctly.",
			"The for loop is not defined correctly.",
			"The variable i is not defined.",
			"The variable i is out of scope outside the for loop."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int num = 5; while (num > 0) { cout << num << endl; num--; } cout << 'Blastoff!'; return 0; }",
		answer: "The 'Blastoff!' string should be enclosed in double quotes.",
		options: [
			"The cout statement is not formatted correctly.",
			"The while loop is not defined correctly.",
			"The variable num is not defined.",
			"The 'Blastoff!' string should be enclosed in double quotes."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int arr[5] = {1, 2, 3, 4, 5}; int sum = 0; for (int i = 0; i < 5; i++) { sum += arr[i] } cout << 'The sum of the array elements is: ' << sum; return 0; }",
		answer: "There is a missing semicolon after the sum += arr[i] statement.",
		options: [
			"The cout statement is not formatted correctly.",
			"The array arr is not defined.",
			"The for loop is not defined correctly.",
			"There is a missing semicolon after the sum += arr[i] statement."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int x = 5; if (x > 3) { int y = 10; } cout << 'The value of y is: ' << y; return 0; }",
		answer: "The variable y is out of scope outside the if statement.",
		options: [
			"The cout statement is not formatted correctly.",
			"The variable x is not defined.",
			"The if statement is not defined correctly.",
			"The variable y is out of scope outside the if statement."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int num; cin >> num; switch (num) { case 1: cout << 'One'; break; case 2: cout << 'Two'; break; case 3: cout << 'Three'; break; default: cout << 'Invalid number'; } return 0; }",
		answer: "The cout statements inside the switch statement should be enclosed in double quotes.",
		options: [
			"The cin statement is not defined correctly.",
			"The switch statement is not defined correctly.",
			"The variable num is not defined.",
			"The cout statements inside the switch statement should be enclosed in double quotes."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int num = 5; if (num = 10) { cout << 'The number is equal to 10.'; } else { cout << 'The number is not equal to 10.'; } return 0; }",
		answer: "The if statement should have two equal signs for comparison (if (num == 10)).",
		options: [
			"The variable num is not defined.",
			"The else statement is not formatted correctly.",
			"The cout statements are not formatted correctly.",
			"The if statement should have two equal signs for comparison (if (num == 10))."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int arr[5] = {1, 2, 3, 4, 5}; for (int i = 0; i <= 5; i++) { cout << arr[i]; } return 0; }",
		answer: "The for loop is going out of bounds of the array.",
		options: [
			"The array arr is not defined.",
			"The cout statement is not formatted correctly.",
			"The for loop is not defined correctly.",
			"The for loop is going out of bounds of the array."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int num1, num2, sum; cout << 'Enter two numbers: '; cin >> num1, num2; sum = num1 + num2; cout << 'The sum is: ' << sum; return 0; }",
		answer: "The comma operator in the cin statement should be changed to a double arrow operator (cin >> num1 >> num2).",
		options: [
			"The variable sum is not defined.",
			"The cout statement is not formatted correctly.",
			"The cin statement is not defined correctly.",
			"The comma operator in the cin statement should be changed to a double arrow operator (cin >> num1 >> num2)."
		]
	},
	{
		question: "What is the problem with the following C++ code? int main() { int num = 5; if (num = 5) { cout << 'The number is equal to 5.'; } else { cout << 'The number is not equal to 5.'; } return 0; }",
		answer: "The if statement should have two equal signs for comparison (if (num == 5)).",
		options: [
			"The variable num is not defined.",
			"The else statement is not formatted correctly.",
			"The cout statements are not formatted correctly.",
			"The if statement should have two equal signs for comparison (if (num == 5))."
		]
	},
	{
		question: `What is wrong with the following C code?\n\nint main() {\n  char s[10];\n  s = \"hello\";\n  return 0;\n}`,
		answer: `The array s is being assigned a string literal, which is not allowed in C.`,
		options: [
			`The array s is not declared before its use.`,
			`The array s is being assigned an integer value, which is not allowed in C.`,
			`The array s is being assigned a character value, which is not allowed in C.`,
			`The array s is being assigned a string literal, which is not allowed in C.`
		]
	},
	{
		question: `What is wrong with the following C code?\n\nint main() {\n  int i = 0;\n  while(i < 5);\n    i++;\n  return 0;\n}`,
		answer: `The semicolon at the end of the while loop is causing an infinite loop.`,
		options: [
			`The variable i is not declared before its use.`,
			`The while loop is missing its condition.`,
			`The variable i is not being incremented inside the while loop.`,
			`The semicolon at the end of the while loop is causing an infinite loop.`
		]
	},
	{
		question: "What is wrong with the following c code?\n\nint main() {\n    char str[5] = {'h', 'e', 'l', 'l', 'o'};\n    printf(\"%s\", str);\n    return 0;\n}",
		answer: "The string 'hello' in the char array str is not null-terminated, so the printf function will continue printing characters until it finds a null character in memory. This can cause unexpected behavior or a segmentation fault.",
		options: [
			"The printf function is missing a format specifier for the char array str.",
			"The char array str is not declared with the correct size to hold the string 'hello'.",
			"The string 'hello' in the char array str is not null-terminated, so the printf function will continue printing characters until it finds a null character in memory. This can cause unexpected behavior or a segmentation fault.",
			"The main function is missing a return statement."
		]
	},
	{
		question: "What is wrong with the following c code?\n\nint main() {\n    int a = 5;\n    int b = 0;\n    int c = a / b;\n    printf(\"%d\", c);\n    return 0;\n}",
		answer: "The code attempts to divide by zero, which is not allowed and will result in a runtime error.",
		options: [
			"The printf function is missing a format specifier for the variable c.",
			"The variable b is not initialized.",
			"The code attempts to divide by zero, which is not allowed and will result in a runtime error.",
			"The main function is missing a return statement."
		]
	},
	{
		question: "What is wrong with the following c code?\n\n#include <stdio.h>\n\nint main() {\n    int arr[3] = {1, 2, 3};\n    int i;\n    for (i = 0; i <= 3; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    return 0;\n}",
		answer: "The for loop in the code attempts to access an element of the array that is out of bounds (arr[3]), which can cause unexpected behavior or a segmentation fault.",
		options: [
			"The printf function is missing a format specifier for the variable i.",
			"The variable i should be initialized inside the for loop.",
			"The for loop in the code attempts to access an element of the array that is out of bounds (arr[3]), which can cause unexpected behavior or a segmentation fault.",
			"The main function is missing a return statement."
		]
	},
	{
		question: "What is the difference between a const pointer and a pointer to const in C++?",
		answer: "A const pointer is a pointer whose value cannot be changed, whereas a pointer to const is a pointer that points to a constant object whose value cannot be changed.",
		options: [
			"There is no difference between them; both are pointers to const objects.",
			"A const pointer is a pointer to a constant object whose value cannot be changed, whereas a pointer to const is a pointer whose value cannot be changed.",
			"A const pointer is a pointer whose value and the value it points to cannot be changed, whereas a pointer to const is a pointer that points to a constant object whose value cannot be changed.",
			"A const pointer is a pointer whose value cannot be changed, whereas a pointer to const is a pointer that points to a constant object whose value cannot be changed."
		]
	},
	{
		question: `What is the output of the following c code?\nint main()\n{\n int i = 0;\n for(i = 0; i < 3; i++)\n cout << i << " ";\n return 0;\n}`,
		answer: "0 1 2 ",
		options: [
			"0 1 2 ",
			"1 2 3 ",
			"0 1 2 3 ",
			"1 2 3 4 "
		]
	},
	{
		question: "What is the difference between pass by value and pass by reference in C++?",
		answer: "Pass by value creates a copy of the argument passed to the function, while pass by reference passes the memory address of the argument to the function.",
		options: [
			"Pass by value creates a copy of the argument passed to the function, while pass by reference passes the memory address of the argument to the function.",
			"Pass by value passes the memory address of the argument to the function, while pass by reference creates a copy of the argument passed to the function.",
			"Pass by value and pass by reference are the same thing in C++.",
			"Pass by reference creates a copy of the argument passed to the function, while pass by value passes the memory address of the argument to the function."
		]
	},
	{
		question: "What is a destructor in C++?",
		answer: "A destructor is a special member function of a class that is called when an object of that class is destroyed.",
		options: [
			"A destructor is a special member function of a class that is called when an object of that class is destroyed.",
			"A destructor is a function that is used to allocate memory for an object of a class.",
			"A destructor is a function that is used to deallocate memory for an object of a class.",
			"A destructor is a function that is used to modify the properties of an object of a class."
		]
	},
	{
		question: "What is function overloading in C++?",
		answer: "Function overloading is when multiple functions in a class have the same name but different parameter lists.",
		options: [
			"Function overloading is when multiple functions in a class have the same name but different parameter lists.",
			"Function overloading is when a single function can return multiple values.",
			"Function overloading is when a single function can take multiple arguments.",
			"Function overloading is when a single function can be called from multiple classes."
		]
	},
	{
		question: "What is the output of the following code?\nint main()\n{\n int x = 5;\n cout << (++x) + (x++) << endl;\n return 0;\n}",
		answer: "11",
		options: [
			"10",
			"11",
			"12",
			"undefined behavior"
		]
	},
	{
		question: "What is the difference between ++i and i++ in C++?",
		answer: "++i increments the value of i and then returns it, while i++ returns the value of i and then increments it.",
		options: [
			"Both increment the value of i and then return it.",
			"++i returns the value of i and then increments it, while i++ increments the value of i and then returns it.",
			"++i increments the value of i and then returns it, while i++ returns the value of i and then increments it.",
			"++i and i++ are not valid operators in C++."
		]
	},
	{
		question: "What is a lambda function in C++?",
		answer: "A lambda function is an anonymous function that can be used as a local function object.",
		options: [
			"A function that can only take a single argument.",
			"A function that can be used to allocate memory.",
			"A lambda function is an anonymous function that can be used as a local function object.",
			"An anonymous function that can be used as a local function object."
		]
	},
	{
		question: "What is the difference between a pointer and a reference in C++?",
		answer: "A pointer can be reassigned to point to different memory locations, while a reference cannot be reassigned once it is initialized.",
		options: [
			"A reference can be dereferenced like a pointer, while a pointer cannot be dereferenced.",
			"A pointer and a reference are the same thing in C++.",
			"A pointer is a variable that stores the memory address of another variable, while a reference is an alias for another variable.",
			"A pointer can be reassigned to point to different memory locations, while a reference cannot be reassigned once it is initialized.",
		]
	},
	{
		question: "What is the difference between an abstract class and an interface in C++?",
		answer: "An abstract class can have implementation details and can have data members, while an interface only defines the signatures of its member functions.",
		options: [
			"An abstract class and an interface are the same thing in C++.",
			"An abstract class can only have pure virtual functions, while an interface can have both pure virtual functions and concrete implementations.",
			"An abstract class can be instantiated, while an interface cannot be instantiated.",
			"An abstract class can have implementation details and can have data members, while an interface only defines the signatures of its member functions."
		]
	},
	{
		question: "What is the difference between 'const' and 'constexpr' in C++?",
		answer: "'const' is used to specify that a variable's value cannot be modified, while 'constexpr' is used to specify that a variable's value can be computed at compile time.",
		options: [
			"'const' and 'constexpr' are the same thing in C++.",
			"'const' is used to specify that a variable's type cannot be modified, while 'constexpr' is used to specify that a variable's value cannot be modified.",
			"'const' is used to specify that a variable's value cannot be modified, while 'constexpr' is used to specify that a variable's value can be computed at compile time.",
			"'const' is used to specify that a variable's value cannot be modified, while 'constexpr' is used to specify that a variable's value can be modified at runtime."
		]
	},
	///////////////////////////////////////////////////////////////python
	{
		question: "What is the output of the following python code? \nprint(list(filter(lambda x: x < 5, [1, 2, 3, 4, 5, 6, 7])))",
		answer: "[1, 2, 3, 4]",
		options: [
			"[1, 2, 3, 4]",
			"[5, 6, 7]",
			"[1, 2, 3, 4, 5, 6, 7]",
			"Error"
		]
	},
	{
		question: "What is the problem with the following Python code? x = [1, 2, 3] y = x * 2",
		answer: "The result of y will be [1, 2, 3, 1, 2, 3] instead of [2, 4, 6].",
		options: [
			"The result of y will be [1, 2, 3, 1, 2, 3] instead of [2, 4, 6].",
			"The variable x is not defined.",
			"The syntax for multiplication is incorrect.",
			"The result of y will be [2, 4, 6] instead of [1, 2, 3, 1, 2, 3]."
		]
	},
	{
		question: "What is the problem with the following Python code? def my_func(x, y=2): return x + y z = my_func(1, 3, 5)",
		answer: "The function only takes two arguments, but three were passed.",
		options: [
			"The function only takes one argument, but two were passed.",
			"The function only takes two arguments, but three were passed.",
			"The syntax for defining a function is incorrect.",
			"The syntax for calling a function is incorrect."
		]
	},
	{
		question: "What is the problem with the following Python code? x = 10 y = 5 if x > y print('x is greater than y')",
		answer: "The if statement is not properly indented.",
		options: [
			"The if statement is not properly indented.",
			"The comparison operator should be < instead of >.",
			"The print statement is not defined correctly.",
			"The variables x and y are not defined."
		]
	},
	{
		question: "What is the problem with the following Python code? def my_func(x): return 2 * x y = my_func([1, 2, 3])",
		answer: "The function will raise a TypeError because the argument is a list instead of an integer or float.",
		options: [
			"The function will raise a TypeError because the argument is a list instead of an integer or float.",
			"The function will return [2, 4, 6] instead of 6.",
			"The function will return 6 instead of [2, 4, 6].",
			"The function is defined incorrectly."
		]
	},
	{
		question: "What is the output of the following python code? \nprint(list(map(lambda x: x**2, [1, 2, 3, 4, 5])))",
		answer: "[1, 4, 9, 16, 25]",
		options: [
			"[1, 4, 9, 16, 25]",
			"[2, 4, 6, 8, 10]",
			"[1, 2, 3, 4, 5]",
			"Error"
		]
	},
	{
		question: "What is the output of the following python code? \nprint(2 + 2 * 3)",
		answer: "8",
		options: [
			"6",
			"8",
			"10",
			"12"
		]
	},
	{
		question: "What is the output of the following python code? \nprint('1' + 2)",
		answer: "Error",
		options: [
			"3",
			"'3'",
			"Error",
			"'12'"
		]
	},
	{
		question: "What is the output of the following python code? \ndef my_func(a, b=2, c=3):\n    print(a, b, c)\nmy_func(1, c=5)",
		answer: "1 2 5",
		options: [
			"1 2 3",
			"1 2 5",
			"1 5 2",
			"Error"
		]
	},
	{
		question: "What is the output of the following python code? \nmy_list = [1, 2, 3, 4, 5]\nprint(my_list[1:-1])",
		answer: "[2, 3, 4]",
		options: [
			"[1, 2, 3, 4, 5]",
			"[2, 3, 4]",
			"[2, 3, 4, 5]",
			"Error"
		]
	},
	{
		question: "What is the output of the following code? \ndef add_item(my_list):\n    my_list += [1]\n    return my_list\nlist1 = [1, 2, 3, 4]\nlist2 = add_item(list1)\nprint(list1, list2)",
		answer: "[1, 2, 3, 4, 1] [1, 2, 3, 4, 1]",
		options: [
			"[1, 2, 3, 4] [1, 2, 3, 4]",
			"[1, 2, 3, 4, 1] [1, 2, 3, 4]",
			"[1, 2, 3, 4] [1, 2, 3, 4, 1]",
			"[1, 2, 3, 4, 1] [1, 2, 3, 4, 1]"
		]
	},
	{
		question: "What is the output of the following python code?\n\nx = 10\ny = 5\nx, y = y, x\nprint(x, y)",
		answer: "5 10",
		options: [
			"10 5",
			"5 10",
			"15",
			"Syntax Error"
		]
	},
	{
		question: "What is the result of the following python code?\n\na = [1, 2, 3]\nb = a\na.append(4)\nprint(b)",
		answer: "[1, 2, 3, 4]",
		options: [
			"[1, 2, 3]",
			"[1, 2, 3, 4]",
			"[4, 3, 2, 1]",
			"Syntax Error"
		]
	},
	{
		question: "What is the output of the following python code?\n\nx = 5\ny = 2\nprint(x // y)",
		answer: "2",
		options: [
			"2.5",
			"2.0",
			"3",
			"2"
		]
	},
	{
		question: "What is the output of the following python code?\n\nprint('hello'[::-1])",
		answer: "olleh",
		options: [
			"hello",
			"olleh",
			"h",
			"Syntax Error"
		]
	},
	{
		question: "What is the output of the following python code?\n\nx = [1, 2, 3]\nprint(x[-2])",
		answer: "2",
		options: [
			"1",
			"2",
			"3",
			"Syntax Error"
		]
	},
	{
		question: "What is the output of the following python code?\n\nx = {'a': 1, 'b': 2}\nprint(x.get('c', 3))",
		answer: "3",
		options: [
			"1",
			"2",
			"3",
			"Syntax Error"
		]
	},
	{
		question: "What is the output of the following python code?\n\nx = 'hello'\nprint(x.upper().count('l'))",
		answer: "2",
		options: [
			"1",
			"2",
			"3",
			"Syntax Error"
		]
	},
	{
		question: "What is the output of the following python code?\n\nx = ['a', 'b', 'c']\nx[3:] = ['d']\nprint(x)",
		answer: "['a', 'b', 'c', 'd']",
		options: [
			"['a', 'b', 'c']",
			"['a', 'b', 'c', ' ', 'd']",
			"['a', 'b', 'c', 'd', ' ']",
			"['a', 'b', 'c', 'd']"
		]
	},
	{
		question: "What is the output of the following python code?\n\nx = [1, 2, 3]\nprint(id(x))\nx += [4]\nprint(id(x))",
		answer: "The id of the list changes",
		options: [
			"The id of the list stays the same",
			"Syntax Error",
			"Runtime Error",
			"The id of the list changes"
		]
	},
	{
		question: "What is the output of the following python code?\nprint(''.join(list(map(str, range(5))))[-1])",
		answer: "4",
		options: [
			"0",
			"1",
			"3",
			"4"
		]
	},
	{
		question: "What is the output of the following python code?\nprint(2 + 2 * 2)",
		answer: "6",
		options: [
			"4",
			"6",
			"8",
			"10"
		]
	},
	{
		question: "What is the output of the following python code?\nprint(bool(()))",
		answer: "False",
		options: [
			"True",
			"False",
			"Error",
			"None"
		]
	},
	{
		question: "What is the output of the following python code?\na = [1, 2, 3]\nprint(a[::-1])",
		answer: "[3, 2, 1]",
		options: [
			"[3, 2, 1]",
			"[1, 2, 3]",
			"[2, 1, 0]",
			"[0, 1, 2, 3]"
		]
	},
	{
		question: "What is the output of the following python code?\nimport math\nprint(math.ceil(-5.5))",
		answer: "-5",
		options: [
			"-5",
			"-6",
			"5",
			"6"
		]
	},
	{
		question: "What is the output of the following python code?\ndef test(a, b=[]):\n    b.append(a)\n    return b\nprint(test(1))\nprint(test(2))\nprint(test(3))",
		answer: "[1, 2, 3]",
		options: [
			"[1, 2, 3]",
			"[1, 2]",
			"[1, 3]",
			"[1]"
		]
	},
	{
		question: "What is the output of the following python code?\ndef outer():\n    x = 1\n    def inner():\n        print(x)\n    inner()\nouter()",
		answer: "1",
		options: [
			"0",
			"1",
			"Error",
			"None"
		]
	},
	{
		question: "What is the output of the following python code?\na = [1, 2, 3]\nb = a\nb += [4, 5]\nprint(a)",
		answer: "[1, 2, 3, 4, 5]",
		options: [
			"[1, 2, 3]",
			"[1, 2, 3, 4, 5]",
			"[1, 2, 3, [4, 5]]",
			"[1, 2, 3, [4], [5]]"
		]
	},
	{
		question: "What is the output of the following python code?\ndef foo(a, b, c):\n    print(a, b, c)\nt = (1, 2, 3)\nfoo(*t)",
		answer: "1 2 3",
		options: [
			"1 2 3",
			"1 (2, 3)",
			"1 1 2 3",
			"1 2 2 3"
		]
	},
	{
		question: "What is the difference between a deep copy and a shallow copy in Python?",
		answer: "A shallow copy creates a new object which stores the reference of the original elements. In contrast, a deep copy creates a new object and recursively adds the copies of nested objects as well.",
		options: [
			"A shallow copy creates a new object which stores the reference of the original elements. In contrast, a deep copy creates a new object and copies the values of the original object.",
			"A shallow copy creates a new object and recursively adds the copies of nested objects as well. In contrast, a deep copy creates a new object which stores the reference of the original elements.",
			"A shallow copy creates a new object and copies the values of the original object. In contrast, a deep copy creates a new object and recursively adds the copies of nested objects as well.",
			"A shallow copy creates a new object which stores the reference of the original elements. In contrast, a deep copy creates a new object and recursively adds the copies of nested objects as well.",
		]
	},
	{
		question: "What is a lambda function in Python?",
		answer: "A lambda function is a small, anonymous function in Python that can have any number of arguments, but can only have one expression.",
		options: [
			"A lambda function is a small, anonymous function in Python that can have any number of arguments, but can only have one statement.",
			"A lambda function is a large, named function in Python that can have any number of arguments, but can only have one expression.",
			"A lambda function is a small, anonymous function in Python that can have only one argument, and can only have one expression.",
			"A lambda function is a small, anonymous function in Python that can have any number of arguments, but can only have one expression."
		]
	},
	{
		question: "What is the difference between a tuple and a list in Python?",
		answer: "A tuple is immutable, meaning it cannot be changed once created, whereas a list is mutable and can be changed.",
		options: [
			"A tuple is mutable, meaning it can be changed, whereas a list is immutable and cannot be changed.",
			"A tuple is ordered, meaning it maintains the order of its elements, whereas a list is unordered and does not maintain the order of its elements.",
			"A tuple is immutable, meaning it cannot be changed once created, whereas a list is mutable and can be changed.",
			"A tuple can only store elements of the same data type, whereas a list can store elements of different data types."
		]
	},
	{
		question: "What is a decorator in Python?",
		answer: "A decorator is a design pattern in Python that allows a user to add new functionality to an existing object or function without modifying its structure.",
		options: [
			"A decorator is a function in Python that adds new functionality to an existing object or function by modifying its structure.",
			"A decorator is a design pattern in Python that allows a user to add new functionality to an existing object or function without modifying its structure.",
			"A decorator is a class in Python that adds new functionality to an existing object or function by modifying its structure.",
			"A decorator is a function in Python that replaces an existing object or function with a new one."
		]
	},
	{
		question: "What is the difference between a tuple and a list in Python?",
		answer: "A tuple is immutable, while a list is mutable.",
		options: [
			"A tuple is ordered, while a list is not ordered.",
			"A tuple can contain any type of object, while a list can only contain objects of the same type.",
			"A tuple can be modified after creation, while a list cannot be modified.",
			"A tuple is immutable, while a list is mutable."
		]
	},
	{
		question: "What is the output of the following python code? \nprint(len('Python') + len([1, 2, 3]))",
		answer: "9",
		options: [
			"5",
			"6",
			"7",
			"9"
		]
	},
	{
		question: "What is the output of the following python code? \nprint([x * x for x in range(10) if x % 2 == 0])",
		answer: "[0, 4, 16, 36, 64]",
		options: [
			"[0, 2, 4, 6, 8]",
			"[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]",
			"[1, 3, 5, 7, 9]",
			"[0, 4, 16, 36, 64]"
		]
	},
	{
		question: "What is the output of the following python code? \nprint('Python'[::-1])",
		answer: "nohtyP",
		options: [
			"P",
			"Py",
			"Pth",
			"nohtyP"
		]
	},
	{
		question: "What does the 'pass' keyword do in Python?",
		answer: "It is a null operation that does nothing.",
		options: [
			"It stops the execution of the program.",
			"It raises an exception.",
			"It defines a function.",
			"It is a null operation that does nothing."
		]
	},
	{
		"question": "What is the difference between 'is' and '==' in Python?",
		"answer": "'is' checks if two variables refer to the same object in memory, while '==' checks if two variables have the same value.",
		"options": [
			"'is' checks if two variables have the same value, while '==' checks if two variables refer to the same object in memory.",
			"'is' checks if two variables refer to the same object in memory, while '==' checks if two variables have the same value.",
			"'is' and '==' are both used for type checking in Python.",
			"'is' and '==' are both used to compare two objects in Python."
		]
	},
	{
		"question": "What is the output of the following python code: ' '.join(['1', '2', '3', '4'])?",
		"answer": "'1 2 3 4'",
		"options": [
			"'1234'",
			"'1, 2, 3, 4'",
			"'1\n2\n3\n4'",
			"'1 2 3 4'"
		]
	},
	{
		"question": "What is the difference between a list and a tuple in Python?",
		"answer": "A list is mutable, while a tuple is immutable.",
		"options": [
			"A list is ordered, while a tuple is not ordered.",
			"A list can only contain strings, while a tuple can contain any data type.",
			"A list is faster than a tuple for large data sets.",
			"A list is mutable, while a tuple is immutable."
		]
	},
	{
		"question": "What is the output of the following python code: [x * x for x in range(5)]?",
		"answer": "[0, 1, 4, 9, 16]",
		"options": [
			"[0, 1, 2, 3, 4]",
			"[1, 2, 3, 4, 5]",
			"[0, 2, 4, 6, 8]",
			"[0, 1, 4, 9, 16]"
		]
	},
	{
		"question": "What is the output of the following python code: 'hello world'.split()?",
		"answer": "['hello', 'world']",
		"options": [
			"'hello world'",
			"['hello', 'world']",
			"'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'",
			"'helloworld'"
		]
	},
	{
		"question": "What is the output of the following python code: 10 / 3?",
		"answer": "3.3333333333333335",
		"options": [
			"3",
			"3.0",
			"3.333",
			"3.3333333333333335"
		]
	},
	{
		"question": "What is the difference between 'append' and 'extend' in Python lists?",
		"answer": "'append' adds a single element to the end of a list, while 'extend' adds multiple elements to the end of a list.",
		"options": [
			"'append' adds multiple elements to the end of a list, while 'extend' adds a single element to the end of a list.",
			"'append' and 'extend' are interchangeable and do the same thing.",
			"'append' and 'extend' are used to remove elements from a list.",
			"'append' adds a single element to the end of a list, while 'extend' adds multiple elements to the end of a list."
		]
	},
	{
		question: "What is the output of the following python code? x = [1, 2, 3]\nprint(x[3])",
		answer: "IndexError",
		options: [
			"1",
			"2",
			"3",
			"IndexError"
		]
	},
	{
		question: "What is the output of the following python code? x = 5\nif x == 5:\n print('x is equal to 5')",
		answer: "x is equal to 5",
		options: [
			"x is equal to 5",
			"x",
			"5",
			"None"
		]
	},
	{
		question: "What is the output of the following python code? x = 5\nif x > 10:\n print('x is greater than 10')\nelse:\n print('x is less than or equal to 10')",
		answer: "x is less than or equal to 10",
		options: [
			"x is greater than 10",
			"x is less than or equal to 10",
			"10",
			"None"
		]
	},
	{
		question: "What is the output of the following python code? x = 'hello'\nfor i in x:\n print(i)",
		answer: "h e l l o",
		options: [
			"hello",
			"h e l l o",
			"helloworld",
			"None"
		]
	},
	{
		question: "What is the output of the following python code? x = 10\nwhile x > 0:\n print(x)\n x -= 1",
		answer: "10 9 8 7 6 5 4 3 2 1",
		options: [
			"10",
			"9",
			"8",
			"10 9 8 7 6 5 4 3 2 1"
		]
	}
];

////////To shuffle the the answers
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

//////////To shuffle the questions
let quizarray = [];
for (let i = 0; i < 100; i++) {
	let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
	let shuffledOptions = shuffleArray(randomQuestion.options.slice());
	randomQuestion.options = shuffledOptions;
	quizarray.push(randomQuestion);
}