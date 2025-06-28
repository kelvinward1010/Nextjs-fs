### Dynamic Route
1. Dynamic Segments
- Dynamic Segments trong URL được biểu thị bằng dấu ngoặc vuông. Ví dụ, pages/posts/[id].js sẽ xử lý các URL như /posts/1, /posts/2, vv.

- Sử dụng: Khi bạn cần các trang có URL dựa trên các tham số động như ID, tên, hoặc các biến khác.

2. Catch-All Segments
- Catch-All Segments được biểu thị bằng dấu ba chấm trong ngoặc vuông, ví dụ pages/posts/[...slug].js.

- Sử dụng: Để xử lý các URL có nhiều phân đoạn và không cố định. Ví dụ, pages/posts/[...slug].js có thể xử lý /posts/2021/10/hello-world, /posts/2022/03/another-post.

3. Optional Catch-All Segments
- Optional Catch-All Segments tương tự như catch-all segments nhưng có thể không có các phần URL. Được biểu thị bằng [...[param]].js.

- Sử dụng: Để tạo các route có thể nhận hoặc không nhận các phân đoạn thêm. Ví dụ, pages/posts/[...slug].js có thể xử lý cả /posts và /posts/2021/10/hello-world.

4. File System Based Routing
- File System Based Routing: Next.js tự động tạo các route dựa trên cấu trúc thư mục trong thư mục pages. Mỗi file trong pages tương ứng với một route.

- Sử dụng: Để thiết lập các route một cách nhanh chóng và dễ dàng dựa trên cấu trúc thư mục.

Ví Dụ Cụ Thể:

Dynamic Segment
- Cấu trúc thư mục:
```bash
app/
└── posts/
    └── [id]/
        └── page.tsx
```
- Mã nguồn:
```javascript
// app/posts/[id]/page.tsx
import { useParams } from 'next/navigation';
import React from 'react';

const Post: React.FC = () => {
  const params = useParams();
  const { id } = params;

  return <p>Post: {id}</p>;
};

export default Post;
```

Catch-All Segment
- Cấu trúc thư mục:
```bash
app/
└── posts/
    └── [...slug]/
        └── page.tsx
```
- Mã nguồn:
```javascript
// app/posts/[...slug]/page.tsx
import { usePathname } from 'next/navigation';
import React from 'react';

const Post: React.FC = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(segment => segment !== 'posts' && segment !== '');

  return <p>Post: {segments.join('/')}</p>;
};

export default Post;
```

Optional Catch-All Segment
- Cấu trúc thư mục:
```bash
app/
└── posts/
    └── [[...slug]]/
        └── page.tsx
```
- Mã nguồn:
```javascript
// app/posts/[[...slug]]/page.tsx
import { usePathname } from 'next/navigation';
import React from 'react';

const Post: React.FC = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(segment => segment !== 'posts' && segment !== '');

  return <p>Post: {segments.length > 0 ? segments.join('/') : 'Home'}</p>;
};

export default Post;
```


#### Catch-All Segments và Optional Catch-All Segments đều cho phép bạn xử lý nhiều phân đoạn của URL trong một route duy nhất, nhưng chúng có những điểm khác biệt chính như sau:

##### Catch-All Segments
- Catch-All Segments ([...param]) sẽ bắt tất cả các phần của URL sau phần đã xác định và yêu cầu ít nhất một phân đoạn.

Ví Dụ
- Cấu trúc thư mục:
```bash
my-nextjs-app/
├── app/
│   └── blog/
│       └── [...slug]/
│           └── page.tsx
```
- Mã nguồn:
```javascript
// app/blog/[...slug]/page.tsx
import { usePathname } from 'next/navigation';
import React from 'react';

const BlogPost: React.FC = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(segment => segment !== 'blog' && segment !== '');

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Full Path: {segments.length > 0 ? segments.join('/') : 'Home'}</p>
    </div>
  );
};

export default BlogPost;
```


##### Optional Catch-All Segments
- Optional Catch-All Segments ([[...param]]) cũng bắt tất cả các phần của URL sau phần đã xác định, nhưng chúng có thể không có phân đoạn nào (có thể bỏ qua).

Ví Dụ
- Cấu trúc thư mục:
```bash
my-nextjs-app/
├── app/
│   ├── pages/
│   │   ├── posts/
│   │   │   └── [[...slug]].js
```
- Mã nguồn:
```javascript
// app/pages/posts/[[...slug]].js
import { usePathname } from 'next/navigation';

const BlogPost = () => {
  const pathname = usePathname();

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Full Path: {pathname}</p>
    </div>
  );
};

export default BlogPost;
```

