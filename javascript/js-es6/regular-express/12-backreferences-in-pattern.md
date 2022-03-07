- Ta có thể dùng contents của capturing groups (...) ko chỉ trong result hoặc replacement string, mà còn trong pattern.
# ================================= Backreference by number: \N ==========================
- 1 group có thể được tham chiếu trong pattern sử dụng \N , N là số thứ tự group.
- Ví dụ : ta cần tìm quote trong string '' và ""
- Ta có thể tìm như sau : ['"](.*?)['"]
- nhưng nó sẽ tìm nhầm các mixed như : '..." hoặc "...', "She's the one!"

> let str = `He said: "She's the one!".`;
> let regexp = /['"](.*?)['"]/g;
> // The result is not what we'd like to have
> alert( str.match(regexp) ); // "She'

- Ta sẽ dùng pattern sau để fixed : (['"])(.*?)\1

> let str = `He said: "She's the one!".`;
> let regexp = /(['"])(.*?)\1/g;
> alert( str.match(regexp) ); // "She's the one!"


- \1 có nghĩa là tìm text như là ở group đầu tiên.
- NOTE : ?: nếu có trong group thì ta ko thể tham chiếu nó. do ko đc engine ghi nhớ.




# ================================= Backreference by name: \k<name> ==========================
- Với parentheses name ta sẽ dùng : \k<name>

> let str = `He said: "She's the one!".`;
> let regexp = /(?<quote>['"])(.*?)\k<quote>/g;
> alert( str.match(regexp) ); // "She's the one!"
