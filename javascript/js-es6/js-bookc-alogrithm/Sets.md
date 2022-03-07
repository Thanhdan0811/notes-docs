- Sets là 1 trong những data structure cơ bản nhất. Nó là 1 group các objects xác định và tách biệt.
- Trong program , 1 set là 1 group của các elements độc nhất ko theo thứ tư. 
- Ví dụ 1 set các integers có thể là {1,2,3,4} thì các set con có thể có là :

    +  {}, {1}, {2}, {3}, {4}, {1, 2}, {1, 3}, {1, 4}, {2, 3}, {2, 4}, {3, 4}, {1, 2, 3}, {1, 2, 4}, {1, 3, 4}, and {2, 3, 4}

- Set được hỗ trợ trong js : var ex = new Set();
- Set object chỉ có 1 property duy nhất là size là số element trong set.

# Set operation : 
- set là data structure cho việc kiểm tra uniqueness. ta sẽ xem xét các operations : insert, delere, contains.

## INSERTION :
- Set có thể add item nhưng ko cho phép duplicate.

    + var exSet = new Set();
    + exSet.add(1); => exSet : Set {1};
    + exSet.add(1); => exSet : Set {1};
    + exSet.add(2); => exSet : Set {1,2};

- Time complexity : O(1);

## DELETION
- Set.delete return booleans.

    + var exSet = new Set();
    + exSet.add(1); => exSet : Set {1};
    + exSet.delete(1); => true
    + exSet.add(2); => exSet : Set {2};

- Time complexity : O(1);

## CONTAINS
- Set.has thực hiện O(1) để check tồn tại.

    + var exSet = new Set();
    + exSet.add(1); => exSet : Set {1};
    + exSet.has(1); => true
    + exSet.has(2); => false
    + exSet.add(2); => exSet : Set {2};
    + exSet.has(2); => true

