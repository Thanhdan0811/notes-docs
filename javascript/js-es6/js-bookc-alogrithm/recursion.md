- recursion cần thỏa mãn các qui tắc để nó ko bị stackoverflow.
# Base Case.
- Trong recursion phải có 1 base case hay case hủy recursion, nếu ko có sẽ gây ra stackoverflow. 
- Trong base case sẽ ko có recursion function call.
# Divide-and-Conquer Method.
- Phương pháp divide-and-conquer là cách được dùng khi 1 problem được giải quyết bằng cách giải quyết tất cả các phần nhỏ hơn của nó.

# VD : chuỗi fibonacci.
- Chuỗi fibonacci là chuổi vô tận các số, mà trong đó số bất kỳ là tổng của 2 số trước đó.
- Chuối như sau : 1 1 2 3 5 8 13 21......
- Cách thông thường :

    + function getNthFibo(n) {
       if ( n <= 1) return n;
       var sum = 0,
       firstLast = 1,
       seconLast = 0;   
       for (var i = 1; i < n; i++) {
           sum = seconLast + firstLast;
           seconLast = firstLast;
           firstLast = sum;
       }
       return sum;
     }


- Sử dụng recursion :

    + function getNthFibo(n) {
        if (n <= 1) {
            return n;
        } else {
            return getNthFibo(n - 1) + getNthFibo(n - 2);
        }
      }

=> Tuy nhiên cách này lại có time complex là o(2^n);

# Chuỗi Fibonacci : Tail Recursion.
- 1 tail recursion function là hàm recursion được thực thi cuối cùng trong function.
- Xem lại cách sử dụng vòng lặp : dựa vào (seconLast, firstLast) = (firstLast, secondLast) ta có thể viết lại như sau :

    + function getNthFiboBetter(n, seconLast, firstLast) {
         if (n == 0) {
            return seconLast;
         }
         if (n == 1) {
            return firstLast;
         }
         return getNthFiboBetter(n-1, last, seconLast + firstLast);
      }

      vd : n = 3 => output là 2.
      n=3 => seconLast = 0, firstLast = 1.
      n=2 => seconLast = 1, firstLast = 1.
      n=1 => seconLast = 1, firstLast = 2.  => return 2;

=> O(n) : Vì chỉ có 1 lần gọi recursion.
=> Space complexity : O(n) => do the stack được dùng cho việc gọi function này.



# pascal's Triangle.


