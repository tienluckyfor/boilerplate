echo "Please enter type of fruit"
read fruit

# if [ $fruit = apple ]
#         then echo "Good, I like Apples"
#         else echo "Oh no, I hate Oranges!"
# fi

if [ $fruit = apple ]
        then echo "Good, I like Apples"
elif [ $fruit = pear ]
        then echo "Good, I like Pears"
elif [ $fruit = banana ]
        then echo "Good, I like Bananas"
        else echo "Oh no, I hate Oranges!"
fi