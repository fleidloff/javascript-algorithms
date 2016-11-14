echo "bubble"; node sort/bubblesort.js
echo "insertion"; node sort/insertionsort.js
echo "merge"; node sort/mergesort.js
echo "quick"; node sort/quicksort.js
echo "selection"; node sort/selectionsort.js
echo "radix"; node sort/radixsort.js

echo "bogo"; node --harmony sort/bogosort.js // --harmony required because of tail call recursion

# TODO: 
#    * add Optional stuff (to enable a.b.c without errors even when a.b is undefined)
#    * class properties
#    * extendable immutable
#    * class with sort incl comparator
