echo "bubble"; node sort/bubblesort.js
echo "insertion"; node sort/insertionsort.js
echo "merge"; node sort/mergesort.js
echo "quick"; node sort/quicksort.js
echo "selection"; node sort/selectionsort.js

echo "bogo"; node --harmony sort/bogosort.js // --harmony required because of tail call recursion