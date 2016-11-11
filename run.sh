echo "bubble"; node sort/bubblesort.js
echo "insertion"; node sort/insertionsort.js
echo "merge"; node sort/mergesort.js
echo "quick"; node sort/quicksort.js
echo "selection"; node sort/selectionsort.js

echo "bogo"; node --harmony sort/bogosort.js // --harmony required because of tail call recursion

# TODO: 
#    * use immutable.js https://facebook.github.io/immutable-js/docs/#/List
#    * or lodash https://github.com/lodash/lodash/wiki/FP-Guide
#    * add Optional stuff (to enable a.b.c without errors even when a.b is undefined)
#    * eslint
