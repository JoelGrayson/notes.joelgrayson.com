---
title: Graph Theory
description: Graph theory
---



### Squaring Adjacency Matrix
Squaring an adjacency matrix gives you the count of whether there is a path of length 2 between two vertices. This is because $A_{ik}$ tells you if there is a path between i and k and $A_{kj}$ tells you if there is a path between k and j and their product is only 1 if both of the subterms are 1. When their product is 1 that means that both length-1 paths exist, meaning there is a length-2 path.
![[squaring-adjacency-matrix.jpg]]