### Route Groups cho phép bạn tổ chức và quản lý các route trong ứng dụng của mình một cách có cấu trúc và linh hoạt hơn. Điều này giúp bạn tạo ra các tập hợp route mà không cần phải tổ chức lại toàn bộ cấu trúc thư mục hoặc mã nguồn. Đây là một tính năng quan trọng giúp dễ dàng duy trì và mở rộng ứng dụng lớn.

#### Tính Năng Chính
1. Tạo Nhóm Route:
- Sử dụng thư mục nhóm để gom các route liên quan vào một nhóm.
- Ví dụ, bạn có thể nhóm các route quản lý người dùng vào một thư mục riêng.

2. Không Ảnh Hưởng Đến URL:
- Thư mục nhóm không ảnh hưởng đến cấu trúc URL của bạn.
- Ví dụ, nếu bạn có một thư mục nhóm app/(admin)/users, các route bên trong vẫn chỉ ảnh hưởng bởi /users.

3. Nested Route Groups:
- Bạn có thể tổ chức route nhóm trong nhau để quản lý các route phức tạp hơn.
- Điều này giúp dễ dàng quản lý các phân đoạn URL dài và phức tạp.

4. Shared Layouts:
- Route groups có thể chia sẻ layout và các thành phần khác nhau giữa các nhóm route.
- Điều này giúp tái sử dụng mã nguồn và cải thiện cấu trúc mã.

Ví Dụ Cụ Thể
- Cấu Trúc Thư Mục:
```bash
my-nextjs-app/
├── app/
│   ├── (marketing)/
│   │   ├── home/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   ├── (admin)/
│   │   ├── users/
│   │   │   └── page.tsx
│   │   ├── settings/
│   │   │   └── page.tsx
```
- Nội Dung Mã Nguồn
- Marketing Home Page (app/(marketing)/home/page.tsx):
```typescript
// app/(marketing)/home/page.tsx
import React from 'react';

const HomePage: React.FC = () => (
  <div>
    <h1>Marketing Home Page</h1>
    <p>Welcome to our marketing site!</p>
  </div>
);

export default HomePage;
```

- Admin Users Page (app/(admin)/users/page.tsx):
```typescript
// app/(admin)/users/page.tsx
import React from 'react';

const UsersPage: React.FC = () => (
  <div>
    <h1>Admin Users Page</h1>
    <p>Manage users here.</p>
  </div>
);

export default UsersPage;
```
