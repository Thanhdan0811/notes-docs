# RESOLVING RULES TRONG WEBPACK.

## absolute path 
import '/home/me/file';

import 'C:\\Users\\me\\file';
## relative path 
import '../src/file1';
import './file2';
## module path
import 'module';
import 'module/lib/file';

- Với module path, webpack sẽ tìm trong tất cả directories được xác định trong resolve.modules.