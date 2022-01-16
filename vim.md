## Basic Vim Commands
```
:e filename	Open filename for edition
:w	Save file
:q	Exit Vim
:q!	Quit without saving
:x	Write file (if changes has been made) and exit
:sav filename	Saves file as filename
.	Repeats the last change made in normal mode
```

## Moving in the File
```
k or Up Arrow	move the cursor position up one line
j or Down Arrow	move the cursor down one line
e	move the cursor to the end of the word
b	move the cursor to the begining of the word
0	move the cursor to the begining of the line
G	move the cursor to the end of the file
gg	move the cursor to the begining of the file
L	move the cursor to the bottom of the screen
:59	move cursor to line number 59. Replace 59 by the desired line number.
%	Move cursor to matching parenthesis
[[	Jump to function start
[{	Jump to block start
```

## Cut, Copy & Paste
```
y	Copy the selected text to clipboard
p	Paste clipboard contents
dd	Cut current line
yy	Copy current line
y$	Copy to end of line
D	Cut to end of line
```

## Search
```
/word	Search word from top to bottom
?word	Search word from bottom to top
*	Search the word under cursor
/\cstring	Search STRING or string, case insensitive
/jo[ha]n	Search john or joan
/\< the	Search the, theatre or then
/the\>	Search the or breathe
/fred\|joe	Search fred or joe
/\<\d\d\d\d\>	Search exactly 4 digits
/^\n\{3}	Find 3 empty lines
:bufdo /searchstr/	Search in all open files
bufdo %s/something/somethingelse/g	Search something in all the open buffers and replace it with somethingelse
```

## Replace
```
:%s/old/new/g	Replace all occurences of old by new in file
:%s/onward/forward/gi	Replace onward by forward, case unsensitive
:%s/old/new/gc	Replace all occurences with confirmation
:%s/^/hello/g	Replace the begining of each line by hello
:%s/$/Harry/g	Replace the end of each line by Harry
:%s/onward/forward/gi	Replace onward by forward, case unsensitive
:%s/ *$//g	Delete all white spaces
:g/string/d	Delete all lines containing string
:v/string/d	Delete all lines containing which didn’t contain string
:s/Bill/Steve/	Replace the first occurence of Bill by Steve in current line
:s/Bill/Steve/g	Replace Bill by Steve in current line
:%s/Bill/Steve/g	Replace Bill by Steve in all the file
:%s/^M//g	Delete DOS carriage returns (^M)
:%s/\r/\r/g	Transform DOS carriage returns in returns
:%s#<[^>]\+>##g	Delete HTML tags but keeps text
:%s/^\(.*\)\n\1$/\1/	Delete lines which appears twice
Ctrl+a	Increment number under the cursor
Ctrl+x	Decrement number under cursor
ggVGg?	Change text to Rot13
```

## Case
```
Vu	Lowercase line
VU	Uppercase line
g~~	Invert case
vEU	Switch word to uppercase
vE~	Modify word case
ggguG	Set all text to lowercase
gggUG	Set all text to uppercase
:set ignorecase	Ignore case in searches
:set smartcase	Ignore case in searches excepted if an uppercase letter is used
:%s/\<./\u&/g	Sets first letter of each word to uppercase
:%s/\<./\l&/g	Sets first letter of each word to lowercase
:%s/.*/\u&	Sets first letter of each line to uppercase
:%s/.*/\l&	Sets first letter of each line to lowercase
```

## Read and Write Files
```
:1,10 w outfile	Saves lines 1 to 10 in outfile
:1,10 w >> outfile	Appends lines 1 to 10 to outfile
:r infile	Insert the content of infile
:23r infile	Insert the content of infile under line 23
```

## File Explorer
```
:e .	Open integrated file explorer
:Sex	Split window and open integrated file explorer
:Sex!	Same as :Sex but split window vertically
:browse e	Graphical file explorer
:ls	List buffers
:cd ..	Move to parent directory
:args	List files
:args *.php	Open file list
:grep expression *.php	Returns a list of .php files contening expression
gf	Open file name under cursor
```

##
```
```

##
```
```

## Text Entry Commands
```
Text Entry Commands (Used to start text entry)
a Append text following current cursor position
A Append text to the end of current line
i Insert text before the current cursor position
I Insert text at the beginning of the cursor line
o Open up a new line following the current line and add text there
O Open up a new line in front of the current line and add text there
The following commands are used only in the commands mode.
```

## Cursor Movement Commands
```
h Moves the cursor one character to the left
l Moves the cursor one character to the right
k Moves the cursor up one line
j Moves the cursor down one line
nG or :n Cursor goes to the specified (n) line
(ex. 10G goes to line 10)
^F (CTRl F) Forward screenful
^B Backward screenful
^f One page forward
^b One page backward
^U Up half screenful
^D Down half screenful
$ Move cursor to the end of current line
0 (zero) Move cursor to the beginning of current line
w Forward one word
b Backward one word
```

## Exit Commands
```
:wq Write file to disk and quit the editor
:q! Quit (no warning)
:q Quit (a warning is printed if a modified file has not been saved)
ZZ Save workspace and quit the editor (same as :wq)
: 10,25 w temp
write lines 10 through 25 into file named temp. Of course, other line
numbers can be used. (Use :f to find out the line numbers you want.
```

## Text Deletion Commands
```
x Delete character
dw Delete word from cursor on
db Delete word backward
dd Delete line
d$ Delete to end of line
d^ (d caret, not CTRL d) Delete to beginning of line
```

## Yank (has most of the options of delete)-- VI's copy commmand
```
yy yank current line
y$ yank to end of current line from cursor
yw yank from cursor to end of current word
5yy yank, for example, 5 lines
```

## Paste (used after delete or yank to recover lines.)
```
p paste below cursor
P paste above cursor
"2p paste from buffer 2 (there are 9)
u Undo last change
U Restore line
J Join next line down to the end of the current line
```

## File Manipulation Commands
```
:w Write workspace to original file
:w file Write workspace to named file
:e file Start editing a new file
:r file Read contents of a file to the workspace
To create a page break, while in the insert mode, press the CTRL key
And l. ^L will appear in your text and will cause the printer to start
A new page.
```

## Other Useful Commands
```
Most commands can be repeated n times by typing a number, n, before
the command. For example 10dd means delete 10 lines.
. Repeat last command
cw Change current word to a new word
r Replace one character at the cursor position
R Begin overstrike or replace mode � use ESC key to exit
:/ pattern Search forward for the pattern
:? pattern Search backward for the pattern
n (used after either of the 2 search commands above to
continue to find next occurrence of the pattern.
:g/pat1/s//pat2/g replace every occurrence of pattern1 (pat1) with
```

## Example :g/tIO/s//Ada.Text_IO/g
```
This will find and replace tIO by Ada.text_IO everywhere in the file.
:g/a/s// /g replace the letter a, by blank
:g/a/s///g replace a by nothing
note: Even this command be undone by u
```
