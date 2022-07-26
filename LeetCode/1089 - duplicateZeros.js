/*
approach 2:

example array: [1, 0, 2, 3, 0, 4, 5, 0]
desired array: [1, 0, 0, 2, 3, 0, 0, 4]

each zero should be duplicated but the length should remain the same at all times


first, ask: how many elements will be discarded from the array?

the first zero will result in the last digit being discarded:

example array: [1, 0, 2, 3, 0, 4, 5, 0]
                   o                 x
                   -------------------


the second zero will result in the second-to-last digit being discarded:

example array: [1, 0, 2, 3, 0, 4, 5, 0]
                   o        o     x  x
                   |        -------  |
                   -------------------

the last zero will have no effect, since it will be discarded

possibleDuplicates = number of zeroes that will be duplicated
  in our example array, possibleDuplicates == 2

array.length - possibleDuplicates tells us how many elements from the original will be in the final
8 total elements - 2 possible duplicates = 6 final elements

moving backwards, the final element will be our starting point, and the first zero will wind up being our stopping point

starting/stopping points: [1, 0, 2, 3, 0, 4, 5, 0]
                              o-<---<---<-o  x  x

len starts off as possibleDuplicates (2 in this case)

1. [1, 0, 2, 3, 0, 4, 5, 0] --> the first element is non-zero, so copy it over len places
                    \           then move on to the next element
                     -²-
                        \
2A [1, 0, 2, 3, 0, 4, 5, 4] --> next element is zero, so first copy it over len places
                 \              then shorten len by 1 (len = 2 - 1)
                  -²-             
                     \
2B [1, 0, 2, 3, 0, 4, 0, 4] --> now, copy the zero over len places
                 \              then move on to the next element
                  ¹
                   \
3. [1, 0, 2, 3, 0, 0, 0, 4] --> next element is non-zero, so copy it over len places
              \                 then move on to the next element
               ¹
                \
4. [1, 0, 2, 3, 3, 0, 0, 4] --> next element is non-zero, so copy it over len places
           \                    then move on to the next element
            ¹
             \
5A [1, 0, 2, 2, 3, 0, 0, 4] --> next element is zero, so first copy it over len places
        \                       then shorten len by 1 (len = 1 - 1)
         ¹
          \
5B [1, 0, 0, 2, 3, 0, 0, 4] --> len has reached zero, so stop the iteration
       |
       ⁰
       |
   [1, 0, 0, 2, 3, 0, 0, 4] --> this is the desired array
   
 
FULL METHOD:

iterate forwarad through the array and find the possibleDuplicates
  initial value: i = 0, ending value: n (n = array.length - 1)
  if the current element is zero
    increment possibleDuplicates
    decrement n (disregard an ending element)
    
copyLength = possibleDuplicates

while copyLength is greater than zero,
iterate backward through the array and copy the elements accordingly
  initial value: n (the last valid element), ending value: N/A
  if the current element is not zero
    copy that element over len places (array[n + len] = array[n])
    decrement n (move on to the next element)
  else if the current element is not zero
    copy that element over len places (array[n + len] = array[n])
    decrement len (len-= 1)
    copy that element over len places (array[n + len] = array[n])
    decrement n (move on to the next element)
  when len reaches zero, you've reached the first zero, so break the loop
    

EDGE CASE: 

example array: [8, 4, 5, 0, 0, 0, 0, 7]
if the last element is zero, you won't have space to duplicate it. therefore,

when iterating to find possibleDuplicates,
   if arr[i] is equal to zero but it's the last valid element (i = n), don't count it
   
when copying elements over
   if the first element is 0 (aka the while loop hasn't looped yet)
     treat it like it's not a zero (only copy it once)



*/

