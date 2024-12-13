# TypeScript: Unclear Error with Array and String Function Arguments

This repository demonstrates a common error in TypeScript where an array is passed to a function expecting a string argument.  The resulting error message can be confusing for those new to TypeScript. 

The `bug.ts` file shows the code causing the problem.  The `bugSolution.ts` file provides a corrected version.  The error highlights a subtle but crucial aspect of type checking in TypeScript.

## Problem
The function `greeter` expects a single string as input. When an array is passed instead, TypeScript throws an error, but the error message's helpfulness can vary.  The key is understanding that TypeScript is type checking string vs array types.