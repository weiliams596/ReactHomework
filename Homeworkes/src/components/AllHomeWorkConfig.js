import HomeworkHomePage from './HomeworkHomePage';

import HomeWork1 from './D1_W26_HW/HomeWork/Homework';
import HomeWork2 from './D2_W26_HW/HomeWork/HomeWork';
import HomeWork3 from './D3_W26_HW/Homework/Homework';

const routes = [
    {
        week: 26,
        homework: [
            {
                path: '/',
                component: HomeworkHomePage
            },
                {
                path: '/HW1',
                component: HomeWork1
            }, {
                path: '/HW2',
                component: HomeWork2
            },{
                path: '/HW3',
                component: HomeWork3
            }
        ]
    }
];

export default routes;