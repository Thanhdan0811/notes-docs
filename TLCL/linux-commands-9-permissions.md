- Hoạt động hệ thống trong unix tradition khác so với MS-DOS tradition, không chỉ là hệ thống đa tác vụ - multitasking systems mà còn là hệ thống đa người dùng multi-user systems.
- Điều đó có nghĩa là nhiều người có thể sử dụng máy tính tại cùng 1 thời điểm. Ví dụ như computer kết nối với network, remote user có thể log in thông qua ssh và thao tác với máy tính.
- Khả năng multiuser của Linux không phải là 1 sự đổi mới gần đây mà được xem là 1 feature đã được deeply embedded vào thiết kế của operating system.
- english : devised - phát minh, nghĩ ra
- Do đó cần bảo vệ người dùng với nhau, các file của người này không thể bị thao tác bởi ng kia nếu ko cho phép.


#9.1 : Owners, Group Members, and Everybody Else.
- Trong mô hình Unix security, 1 user có thể sở hữu files và directories. KHi 1 user sở hữu 1 file hoặc directory, user sẽ có thể control việc truy cập nó.Những User có thể thuộc về 1 group bao gồm 1 hoặc nhiều users là những người có thể được trao quyền access đến files và directories bới người sở hữu của chúng.
- Ngoài việc cấp quyền access cho 1 group, owner còn có thể cấp 1 số quyền access cho everybody, điều này trong UNIX được gọi hay được hiểu là world. 
- Để tìm ra thông tin về identity ta dùng command id

	+ id 
	=> uid=1000(just-a-red) gid=1000(just-a-red) groups=1000(just-a-red)
	
	
- Khi user accounts được tạo, users sẽ được gán 1 number được gọi là user ID => uid sau đó được map đến tên username. 
- user được gán vào 1 primary group ID (gid) và có thể thuộc về các nhóm bổ sung froups.
- Vậy những thông tin này đến từ đâu, giống với những thứ khác trong linux, nó đến từ 1 số file text. User accounts được định nghĩa trong /etc/passwd file và groups được định nghĩa trong /etc/group file.
- Khi user accounts và groups được tạo, những file này được điều chỉnh(modified)  cùng với /etc/shadow là nơi giữ thông tin về user's password. 
- Với mỗi user account, /etc/passwd file định nghĩa user (login) name, uid, gid, account's real name, home directory và login shell. 
- Nếu ta kiểm tra nội dung của /etc/passwd và /etc/group, ta sẽ thấy rằng bên cạnh các regular user accounts còn có accounts cho superuser (uid 0) và users hệ thống khác.


#9.2 : Reading, Writing and Executing.
- Quyền access đến files và directories được định nghĩa theo dạng read access, write access và execution access. 

	+ ls -l foo.txt
	=> -rw-r--r-- 1 just-a-red just-a-red 0 Apr 11 20:12 foo.txt
	

- 10 ký tự đầu tiên là file attributes. ký tự đầu tiên là chỉ loại file(file type). 
- Các lọai file thường gặp : 
	+ - : là regular file; 
	+ d : directory; 
	+ l : là symbolic link, với symbolic links thì các attribute còn lại sẽ luôn là "rwxrwxrwx" và là dummy values. giá trị attribute thật là của file mà symbolic trỏ đến.
	+ c : A character special file. Loại file này đề cập đến 1 device mà tại đó nó lưu giữ data như 1 luồng bytes như terminal hay /dev/null.
	+ b : A block special file. loại file này đề cập đến 1 device mà tại đó nó lưu giữ data trong block như hard drive hay DVD drive.
	
- 9 ký tự còn lại của file attributes được gọi là file mode, tượng trưng cho read, write và execute permissions của file's owner, the file's group owner và everybody else.

	| Owner | Group | World |
	| rwx   | rwx   | rwx   |
	
- Permisstion Attributes

* r :
	+ Files : cho phép file được open và read.
	+ Directories : cho phép các nội dung của 1 directory được listed nếu execute attribute cũng đc set.
	
* w : 	
	+ Files : cho phép file bị ghi đè ghi thêm hoặc cắt ngắn, tuy nhiên this attribute không cho phép files bị renamed hoặc deleted. Khả năng delete và rename file được quyết định bởi directory attributes.
	+ Directories : cho phép file bên trong directory được tạo ra, xóa đi và đổi tên nếu execute attribute cũng được set.
	
* x : 
	+ Files : Cho phép 1 file được xem như là 1 program hay được thực thi (executed). Program files viết trong scripting languages phải được set readable để có thể được executed.
	+ Directories : cho phép directory được entered ví dụ cd directory.
	
- Ví dụ Permission Attributes :

* -rwx- - - - - - : 1 regular file được phép đọc, viết và executable bởi file's owner, không ai khác có thể truy cập.

* -rw- - - - - - - : 1 regular file có thể đọc và viết bởi file's owner. không ai khác có thể access. 

* -rw-r--r-- : 1 regular file có thể đọc và viết bởi file's owner. Members of the file's owner group có thể đọc file và file có thể world-readable.

* -rwxr-xr-x : 1 regular file có thể được đọc, viết và thực thi bởi file's owner. file có thể đucợ đọc và thực thi bởi những ng khác.

* -rw-rw- --- : 1 regular file có thể đọc, viết bởi file's owner và members of the file's group owner only.

* lrwxrwxrwx : 1 symbolic link. tất cả symbolic link có dummy permissions. 

* drwxrwx--- : 1 directory. Owner và members of the owner group có thể enter directory và tạo, đổi tên và remove files trong directory.

* drwxr-x--- : 1 directory. Owner có thể enter directory và create, rename and delete files trong directory. Members of the owner group có thể enter directory nhưng không thể tạo, delete hay rename files.


##9.2.1 : chmod - thay đổi file mode.
- Để thay đổi mode của 1 file or directory, command chmod sẽ được dùng. Ta cần chú ý là chỉ có file's owner hoặc superuser mới có thể thay đổi mode của file hoặc directory.
- chmod hỗ trợ 2 cách khác nhau để xác định mode cần thay đổi : octal number hoặc symbolic. Ta sẽ xem xét octal trước.
- Với octal number ta có thể dùng nó để set các pattern permisstion. vì octal biểu diễn bằng 3 binary digits. ta có map sau :

	+ 0 => 000 => ---
	+ 1 => 001 => --x
	+ 2 => 010 => -w-
	+ 3 => 011 => -wx
	+ 4 => 100 => r--
	+ 5 => 101 => r-x
	+ 6 => 110 => rw-
	+ 7 => 111 => rwx
	
- bằng cách dùng octal digit ta có thể set file mode cho owner, group owner, world.

	+ > foo.txt
	+ ls -l foo.txt
	+ chmod 600 foo.txt
	+ ls -l foo.txt
	

- 600 sẽ set permissions của owner là read và write trong khi remove tất cả permission của group owner và world.

- chmod còn hỗ trợ symbolic notation để xác định mode. Symbolic notation được chia thành 3 phần :

	+ ai sẽ chịu ảnh hưởng bởi sự thay đổi.
	+ operation nào sẽ được thực hiện
	+ permisstion sẽ được set là gì.

- để xác định ai bị ảnh hưởng, 1 tập hợp các characters "u", "g", "o" và "a" được sử dụng. như sau :

	+ u : hiểu là "user" nhưng có nghĩa là file or directory owner.
	+ g : group owner
	+ o : hiểu là "others" nhưng có nghĩa là world.
	+ a : hiểu là "all", là tổng hợp "u", "g", "o".
	
- Nếu không có character thì mặc định sẽ là "all", "+" mô tả 1 permission được thêm vào, "-" mô tả 1 permission bị bỏ đi, "=" mô tả chỉ có specified permission là được applied và tất cả những cái khác sẽ bị loại bỏ.
- Permissions được xác định bằng : "r", "w", "x" 
- Ví dụ :

	+ u+x : add execute permission cho owner
	+ u-x : loại bỏ execute permisstion từ owner.
	+ +x  : add execute permission cho owner, group và world. tương đương với a+x
	+ o-rw : xóa read and write permission khỏi bất cứ ai thuộc owner và group owner.
	+ go=rw : set group owner và bất cứ ai thuộc owner có quyền read và write, nếu 1 trong 2 group owner hoặc workd đã có execute permission, nó sẽ bị loại bỏ.
	+ u+x, go=rx : add execute permission cho owner và set permisstion cho group và others để read và execute. 
	

##9.2.2 : umask - Set Default Permissions.
- command umask điều khiển permissions default của file khi nó được khởi tạo. Sử dụng octal notation để express 1 mask bits sẽ bị loại bỏ khỏi file mode.

	+ umask => 0002
	+ > foo.txt 
	+ ls -l foo.txt
	=> -rw-rw-r-- 1 me me .....
	
- 0002 hoặc 0022 là giá trị của mask ở dạng octal. Ta có thể thấy cả owner và group đều có read và write permission, trong khi everyone else chỉ có read permisstion. lý do là vì mask.

	+ rm foo.txt
	+ umask 0000
	+ > foo.txt
	+ ls -l foo.txt
	=> -rw-rw-rw- 1 me me ....
	
- Khi ta set mask là 0000 (tắt nó), ta thấy file bây giờ là world writable. Ta hiểu như sau :

	+ original file mode : --- rw- rw- rw-
	+ mask : 000 000 000 010
	+ result : --- rw- rw- r--

- Ta thấy ở đâu xuất hiện 1 thì permission ở đó sẽ bị loại bỏ.
- Ta có thể hiểu số 1 xuất hiện ở đâu thì attribute ở đó sẽ bị unset 

	+ original file mode : --- rw- rw- rw-
	+ mask : 000 000 010 010
	+ result : --- rw- r-- r--
	
- Thông thường ta sẽ ko thay đổi umask trừ các trường hợp bảo mật cao.
- 
	
	
	
	
	
	
	
	
	
	
	
