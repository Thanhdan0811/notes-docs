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

##9.2.3 : Một số permission đặc biệt.

- Thường thì ta sẽ thấy octal permission mask dưới dạng 3 digit number. Nhưng nó sẽ đúng hơn khi sử dụng dưới dạng 4 digits. Vì ngoài read, write và execute permission, còn có 1 số khác, ít dùng.
- Một trong số đó là setuid bit (octal 4000). khi ta áp dụng với executable file, nó set ....
- Cái thứ hai less-used là setgid bit (octal 2000), 
- Cái thứ 3 less-used là sticky bit (octal 1000), 


## 9.2.4 : Thay đổi Identities

- Ta có thể thay đổi thành 1 user khác để thực hiện 1 số quyền mà user đó có. Có 3 cách để thay đổi.

	+ Log out và đăng nhập lại.
	+ dùng su command.
	+ dùng sudo command. 
	
- su command cho phép ta giả lập identity của another user và có thể start 1 new shell session với user'ID hoặc thực hiện 1 single command dưới tư cách là user đó.
- sudo command cho phép 1 administrator được set up 1 configuration file được gọi là /etc/sudoers và define 1 số commands cụ thể mà 1 particular user bị từ chối khi thực thi dưới 1 identity giả lập.

###9.2.4.1 : su - Run a shell with substitute User and Group IDs.
- su command được dùng để bắt đầu 1 shell như là 1 another user. syntax :

	+ su [-[l]] [user]
	
- nếu -l option được thêm vào, resulting shell session là 1 login shell cho specified user. Điều này có nghĩa là user's enviroment được load và working directory bị thay đổi đến user's home directory. 
- Nếu user không được đề cập, superuser sẽ được hiểu ngầm. 
__NOTE__ -l option có thể được viết gọn lại thành -.

	+ su - => start a shell cho superuser.
	
- Sau khi kết thúc ta có thể enter exit để thoát khỏi shell.
- Ta có thể thực hiện như sau :

	+ su -c 'command'
	+ su -c 'ls -l /root/*'
	
- Cho phép ta chỉ thực hiện 1 command mà không cần phải mở shell. lưu ý phải để command bên trong quotes để không có expansion ở shell hiện tại mà ở shell của user.

	
###9.2.4.2 : sudo - Execute a Command as Another User.
- The adminnistrator có thể configure sudo cho phép 1 ordinary user được execute commands như là 1 user khác (thường là superuser) 1 cách có kiểm soát. Cụ thể là 1 user có thể bị giới hạn với 1 hoặc 1 số specific commands. 
- 1 điểm quan trọng khác nữa là sudo sẽ không yêu cầu password của superuser mà sẽ yêu cầu user's own password. 
- Khác với su, sudo không start mới 1 shell, hoặc load another user's enviroment. do đó commands không cần phải quoted. Nhưng sự khác biệt này có thể bị overriden bằng cách sử dụng option như -i , xem thêm ở man page.

## 9.2.5 : chown - Change File Owner and Group.
- chown thường được dùng để thay đổi owner và group owner của file hoặc directory. Superuser privileges là bắt buộc khi use this command. Syntax :

	chown [owner][:[group]] file...
	
- chown có thể thay đổi file owner hoặc file group owner tùy thuộc vào first argument của command. Ví dụ :

	+ bob => thay đổi ownership của file từ current owner đến user bob
	+ bob:users => thay đổi ownership của file từ its current owner đến user bob và thay đổi file group owner thành group users.
	+ :admins => thay đổi group owner thành group admins. file owner không thay đổi.
	+ bob: => thay đổi file owner thành bob và group owner thành the login group của user bob.
	
- Ví dụ, ta có 2 user là janet là ng có quyền superuser và tony thì ko có. Janet muốn copy file từ home directory của cô đến hom directory của user tony. Vì Janet muốn tony có thể edit file, Janet sẽ thay đổi ownership của bản copied từ janet thành tony.

	+ sudo cp myfile.txt ~tony ; từ janet
	+ sudo ls -l ~tony/myfile.txt
	=> -rw-r--r-- 1 root root root 2018-03-20 14:30 /home/tony/myfile.txt
	+ sudo chown tony: ~tony/myfile.txt
	+ sudo ls -l ~tony/myfile.txt
	=>-rw-r--r-- 1 tony tony tony 2018-03-20 14:30 /home/tony/myfile.txt
	
	
- Ở đây, Janet copy file từ directory của cố ấy đến home directory của user tony. Sau đó janet thay đổi ownership của file từ root thành tony đồng thời cũng thay đổi quyền group ownership của file thành login group của tony.
## 9.2.6 : chgrp - Change Group Ownership
- Ở Unix cữ, chown command chỉ thay đổi file ownership, không có group. Do đó 1 command riêng được dùng là chgrp. nó hoạt động giống như chown nhưng bị limited nhiều thứ.

- Xem thêm exercising .

## 9.3 : Changing Your Password.
- Để thay đổi password ta dùng command passwd. 

	+ passwd [user]
	
- Để thay đổi password của bạn, ta chỉ cần enter passwd command, ta sẽ được nhắc điền password cũ và new .
- Nếu ta có superuser privileges, ta có thể xác định cụ thể username là argument cho passwd command để set password cho another user.
- Xem passwd man page để biết thêm về superuser privileges.
 
	
	
	
	
	
