#!/bin/bash
file='users.txt'
while read -r line; do
count=0;
total=0;
 for i in $(awk '/^F/ {print $3; } END { sum+=3; count ++ }' ) 
    do 
     total=$(echo $total+$i  )
     ((count++))
    done
    echo "Average age of women= $total/$count"
done < $file

while read -r line; do
count=0;
total=0;
 for i in $(awk '/^M/ {print $3; } END { sum+=3; count ++ }' ) 
    do 
     total=$(echo $total+$i  )
     ((count++))
    done
    echo "Average age of men= $total/$count "
done < $file





 