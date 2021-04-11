## 6. REDIRECTION
- ký hiệu pipelines là | operator. 
- FILTERS : pipelines thường được dùng thực hiện các chức năng phức tạp trên data. Nó có thể đặt các commands lại với nhau thành 1 pipelines. Các commands thường được dùng kiểu này được gọi là filters. Filters nhận input và thay đổi nó bằng cách nào đó và output nó ra.
- Đầu tiên ta sẽ dùng lệnh sort. nhận 1 list sort nó và hiện ra.

	+ ls /bin /usr/bin | sort | less


### 6.1 : uniq - Báo cáo hoặc loại bỏ lines lặp lại
-  lện uniq thường được dùng kết hợp với sort. uniq nhận 1 sorted list của data từ standard input hoặc 1 single filename argument và mặc định loại bỏ tất cả duplicates khỏi list.
	
	+ ls /bin /usr/bin | sort | uniq | less
	+ ls /bin /usr/bin | sort | uniq -d | less
- Trong ví dụ này, ta dùng uniq để loại bỏ bất cứ duplicates khỏi output của sort command, nếu ta muốn nhận các duplicates thì ta thêm option "-d" vào uniq như lệnh thứ 2, lệnh less sẽ in ra các line duplicates.


### 6.2 : wc - Print Line, Word, and Byte Counts.
- command wc (word count) được dùng để hiển thị số lines, words hay bytes được chứa bên trong file. 

	+ wc ls-output.txt
	=> 7902 64566 503636 ls-output.txt

- Trong ví dụ trên, nó sẽ print ra 3 số : lines, words và bytes chứa bên trong file ls-output.txt. Nếu thực thi không có command line arguments, wc sẽ nhận vào standard input. "-l" option sẽ giới hạn output sẽ chỉ là lines. THêm vào pipeline là cách giúp ta đếm số items mà ta có trong sorted list.

	+ ls /bin /usr/bin | sort | uniq | wc -l
	=> 2728


### 6.3 : grep - Print lines matching a pattern.
- grep là 1 program mạnh mẽ được dùng để tìm text patterns trong file. nó được dùng như sau : 

	+ grep pattern [file...]


- KHi grep gặp 1 pattern trong 1 file, nó sẽ in ra các line chứa nó(pattern). Các pattern mà grep có thể match có thể rất phức tạp, ta sẽ xem xét cơ bản.
- Ví dụ ta muốn tìm tất cả các file trong list các program mà có chứa từ zip trong tên. ta sẽ làm như sau : 

	+ ls /bin /usr/bin | sort | uniq | grep zip
	=> bunzip2
	   bzip2
	   gunzip
	   gzip
	   unzip
	   zip....

	   
- Có 1 số options hữu dụng cho grep :
* -i, grep sẽ bỏ qua chữ thường hay in hoa, thường việc tìm kiếm sẽ là case sensitive
* -v, nói là grep sẽ chỉ in ra các lines không match pattern.


### 6.4 : head/tail - Print First / Last Part của files.
- Đôi lúc ta không muốn tất cả output từ command, Ta chỉ muốn 1 vài line ở đầu hoặc cuối file. 
- head command in ra 10 line đầu tiên của 1 file.
- tail command in ra 10 line cuối của 1 file.
- mặc định cả 2 command sẽ chỉ in ra 10 line, nhưng có thể thay đổi bằng option -n.

	+ head -n 5 ls-output.txt
	+ tail -n 5 ls-output.txt
	+ ls /usr/bin | tail -n 5
	

- tail có 1 option cho phép ta xem files ở real time. Cách dùng này cho phép ta xem quá trình xử lý log files khi chúng được viết. Ví dụ dưới đây, ta sẽ xem xét messages file trong /var/log hoặc /var/log/syslog file. Có thể phải cấp quyền super do có chứa 1 số thông tin bảo mật.

	+ tail -f /var/log/messages
	
- Với "-f" option, tail sẽ tiếp tục theo dõi file, khi có line mới được thêm vào nó sẽ ngay lập tức hiện nó ra.


### 6.5 : tee - Read from Stdin and Output to Stdout and Files.
- Linux cung cấp 1 command được gọi là tee. tee program sẽ đọc standard input và copies nó vào cả standard output (cho phép data tiếp tục đi xuông pipeline) và vào 1 hoặc các files khác. 
- Điều này hữu ích cho việc bắt pipeline content tại các intermidate stage (giai đoạn giữa) của processing. Ví dụ dưới đây sẽ bắt tất cả directory được listing vào file ls.txt trước khi grep filters the pipelines's content.

	+ ls /usr/bin | tee ls.txt | grep zip


- thực hiện và xem file ls.txt thử.








