import { HeaderOnly } from '~/components/Layout';

import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';

const publicRoutes = [
          { path: '/', Component: Home },
          { path: '/follow', Component: Following },
          { path: '/profile', Component: Profile },
          { path: '/upload', Component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
