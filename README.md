# Incorrect Null Handling in JavaScript Function

This repository demonstrates a common error in JavaScript related to null handling and provides a solution.

## Problem
The `foo` function uses strict equality (`===`) to check for null values. However, in JavaScript, null and 0 are distinct values. This might lead to unexpected results if you need to handle 0 and null separately. 

## Solution
The solution explicitly checks for both null and undefined values to prevent potential errors.  Also, if your function needs to handle 0 as a special case, the check should be separated to handle that.