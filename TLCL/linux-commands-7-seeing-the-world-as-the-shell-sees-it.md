## 7.1 Expansion 
- Mỗi khi ta gõ 1 command và press enter key, bash thực hiện 1 số thay thế trên text trước khi nó thực hiện command. Ta đã xem qua 1 số trường hợp của 1 simple character như *, * có thể mang nhiều ý nghĩa với shell.
- Quá trình thực hiện việc này gọi là expansion. Với expansion ta enter vào something và nó sẽ expansion thành somthing else trước khi shell tác động lên nó.
- Ta sẽ xem xét lệnh echo, echo là 1 shell builtin thực hiện task rất đơn giản đó là print text argument ra standard output.

	+ echo this is a test
	=> this ís a test
	

- Bất cứ argument được truyền vào vào echo sẽ được hiển thị ra.

	+ echo *
	=> Desktop Documents ls-output.txt Music Pictutes ....


- Tại sao echo lại không in ra * ??? Ta đều hiểu wildcards * sẽ match mọi characters nhưng ta lại không thấy được cách shell thực hiện nó. Ta có thể hiểu đơn giản là shell expands * thành 1 cái gì đó khác(trong trường hợp này là names của các files trong directory hiện tại) trước khi echo thực thi.
- Khi enter key pressed, shell sẽ tự động expands bất cứ characters đạt điều kiện trong command line trước khi command được thực hiện. vì vậy echo sẽ không bao giờ thấy *, mà nó chỉ thấy expands result. 


### 7.1.1 : Pathname Expansion
- Cơ chế wildcards làm việc được gọi là pathname expansion. Ta sẽ xem qua 1 số ví dụ :
	+ ls 
	+ echo D*
	+ echo *s
	+ ehco [[:upper]]*
	+ ehco /usr/*/share => /usr/local/share


- NOTE : Như ta biết, filenames bắt đầu với "." hay period character hay dấu chấm sẽ là hidden file. pathname expansion cũng tuân thủ điều này. 1 expansion sẽ không tiết lộ (reveal) hidden files.

	+ echo .* : sẽ hiện các file hidden hoặc chỉ hiện .* (test ở hiện tại)


### 7.1.2 : Tilde Expansion
- Như ta đã biết với lệnh cd, ~ có 1 ý nghĩa đặc biệt. Khi được dùng tại nơi bắt đầu của 1 word, nó expand thành name của home directory của named user hoặc của current user.

	+ echo ~ : => /home/just-a-red
	
	
### 7.1.3 : Arithmetic Expansion
- Shell cho phép các phép toán có thể thực hiện được bởi expansion. 

	+ echo $((2+2)) => 4


- Arithmetic expansion sử dụng theo form sau :

	+ $((expresion))
	
	
- expression là các phép tính gồm số và phép toán.
- arithmetic expansion chỉ hỗ trợ integers (không có thập phân).
- Các operator math : +, -, *, /, %, **
- spaces có ý nghĩa. ta có thể thực hiện lồng.

	+ echo $(($((5**2)) * 3)) => 75
	
	
- 1 dầu ngoặc có thể được sử dụng để group các expessions lại với nhau.

	+ echo $(((5**2) * 3))	=> 75
	+ echo with $((5%2)) left over.
	
	
### 7.1.4 : Brace Expansion
- Ta có thể tạo nhiều text strings từ  pattern trong {} (braces).

	+ echo Front-{A,B,C}-Back 
	=> Front-A-Back Front-B-Back Front-C-Back 
	
	
- Pattern được brace expanded có thể chứa phần dẫn đầu được gọi là preamble và phần theo sau gọi là postscript. 
- Brace expression bản thân nó có thể chứa comma-separated(,) dấu phẩy tức là danh sách các string phần cách bằng dấu phẩy hoặc 1 khoảng của integers or single characters. 


	+ echo Number_{1..5}
	=> Number_1 Number_2 Number_3 Number_4 Number_5
	+ echo {01..15}
	=> 01 02 03 04 05 06 07 08 09 ... 15
	+ echo {001..15}
	=> 001 002 003 ... 015
	+ echo {Z..A}
	=> Z Y X W ... A
	+ echo a{A{1,2},B{3,4}}b
	=>  aA1b aA2b aB3b aB4b
	

- Có thể giúp tạo nhiều folders có các tên theo 1 rule nhất định.


### 7.1.5 : Parameter Expansion
- Đây là tính năng sẽ hữu dụng hơn ở shell script so với command line. Nó có nhiều chức năng như store small chunks của data và cho mỗi chunk 1 name. 
- Rất nhiều chunks hay variables, ví dụ variable USER sẽ chứa username. 
- Để gọi parameter expansion và hiển thị nội dung ta làm như sau :

	
	+ echo $USER
	=> just-a-red
	
	
- Để xem list các variable ta làm như sau :


	+ printenv | less
	
	
- Với các expansion khác, nếu ta gõ sai pattern thì expansion sẽ không thực hiện và echo sẽ hiển thị pattern gõ sai đó. Nhưng với parameter expansion thì khác, nó vẫn sẽ thực hiện nếu biến sai tên nhưng nó sẽ trả về kết quả là empty string.


### 7.1.6 : Command Substitution (Thay thế lệnh)
- Command substitution cho phép ta sử dụng output của 1 command như 1 expansion.


	+ echo $(ls)
	=> Desktop Documents ....

	+ ls -l $(which cp)
	=> -rwxr-xr-x 1 root root 71516 2007-12-05 08:58 /bin/cp
	
	
- Ở đây ta pass result của which cp như là 1 argument đến ls command.


	+ file $(ls -d /usr/bin/* | grep zip)
	
	
- Ở ví dụ này, kết quả của pipeline sẽ trở thành argument list của file command.


	+ ls -l `which cp` : `` sẽ thay thế $() ở older version.
	
	
## 7.2 : QUOTING
- Ta đã thấy được nhiều cách mà shell thực hiện expansion, giờ ta sẽ học cách điều khiển nó.

	+ echo this is a         test
	=> this is a test
	+ echo the total is $100.00
	=> the total is 00.00
	
		
- Ở ví dụ 1, word-splitting bởi shell sẽ loại bỏ khoảng trắng, Ở ví dụ 2 thì parameter expansion thay thế empty string cho $1 vì là variable không có hay undefined variable. 
- Shell cung cấp 1 cơ chế được gọi là quoting để chọn lọc các expansion không mong muốn.


### 7.2.1 : DOUBLE QUOTES
- Đầu tiên ta sẽ xem xét double quote "".
- Nếu ta đặt text bên trong double quote thì tất cả special characters được sử dụng bới shell sẽ mất đi ý nghĩa của nó và sẽ được xem là ký tự bình thường. Ngoại trừ $, \ (backslash) và ``.
- Điều này có nghĩa là word-splitting, pathname expansion, tilde expansion, brace expansion sẽ không có tác dụng, nhưng parameter expansion, arithmetic expansion và command substitution vẫn sẽ hoạt động.
- Ta có thể áp dụng cho filename có khoảng trắng


	+ ls -l two words.txt
	=> cannot access 2 lần do word-splitting
	+ ls -l "two words.txt"
	=> -rw-rw....
	+ mv "two words.txt" two_words.txt
	
	
- nhớ  parameter expansion, arithmetic expansion, and command substitution vẫn sẽ hoạt động.

	+ echo "$USER $((2+2)) $(cal)" 
	=> vẫn sẽ hoạt động
	
	
- Ta sẽ xem xét double cẩn thận hơn với command substitution, ta biết word-splitting sẽ remove extra spaces trong text.
- Mặc định, word-splitting sẽ tìm sự hiện diện của spaces, tabs, newlines (linefeed character) và xem chúng như là delimiters (dấu phân cách) giữa các word. Điều này có nghĩa là unquoted spaces, tabs, newlines sẽ ko được xem như là 1 phần của text. Khi dùng double quote sẽ không xem như là delimiters.
- Sự thật là newlines được xem là delimiter bởi word-splitting sẽ dẫn đến 1 hiệu ứng phụ với command substitution.


	+ echo $(cal)
	+ echo "$(cal)"
	
	
- Ở lệnh đầu tiên, unquoted command substitution kết quả trả về trong command line chứa 38 arguments.
- Ở lệnh thứ 2, kết quả của nó trong command line là 1 argument có chứa cả embedded spaces và newlines.


### 7.2.2 : SINGLE QUOTE
- Nếu ta muốn loại bỏ tất cả expansions, ta sẽ dùng single quote. 


### 7.2.3 : ESCAPING CHARACTERS
- Đôi lúc ta chỉ muốn quote 1 character, ta sẽ dùng \ được gọi là escapse character.


	+ echo "The balance for user $USER is : \$5.00"
	=> The balance for user me is: $5.00


- Ta cungx có thể dùng để loại bỏ ký tự special trong filename như $,!,spaces... 


	+ mv bad\&filname good_filename
	+ \\ sẽ in ra backslash
	
	
- NOTE bên trong single quote thì backslash sẽ mất tác dụng
- echo có 1 option là -e cho phép sử dụng escape sequences.

	+ sleep 10; echo -e "Time's up \a"
	=> sau 10 giây sẽ ngủ và hiện time's up và báo 1 tiếng chuông.
	+ sleep 10; echo "Time's up" $'\a'
	=> tương tự
	
	












	
	
	
	
	
	
	
