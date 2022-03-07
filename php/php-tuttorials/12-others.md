$name = "dan";

echo "$name hello";
echo "${name} hello"; => rõ ràng hơn.


# assign by reference.
Sử dụng : =& để gán tham chiếu.
- Lúc này thay đổi 1 sẽ thay đổi luôn cả 2.

>   $first_player_rank = "Beginner";
>   $second_player_rank =& $first_player_rank; 
>   echo $second_player_rank; // Prints: Beginner
>    
>   $first_player_rank = "Intermediate"; // Reassign the value of $first_player_rank
>   echo $second_player_rank; // Prints: Intermediate


# modulo
- kHi dùng modulo thì php sẽ làm tròn số r mới modulo.
- order : () > ** > *, / > +,-

# pass by reference

