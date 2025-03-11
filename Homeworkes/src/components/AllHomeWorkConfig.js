import HomeWork1 from './Week26/D1_W26_HW/HomeWork/Homework';
import HomeWork2 from './Week26/D2_W26_HW/HomeWork/HomeWork';
import HomeWork3 from './Week26/D3_W26_HW/Homework/Homework';
import HomeWork4 from './Week26/D3_W26_HW/Homework/Homework';

import HomeWork2_1 from './Week27/D1_W27_HW/Homework/Homework';
import HomeWork2_2 from './Week27/D2_W27_HW/Homework/Homework';

const routes = [
    {
        week: 26,
        homework: [
            {
                id: 1,
                path: '/HW1',
                component: HomeWork1
            }, {
                id: 2,
                path: '/HW2',
                component: HomeWork2
            }, {
                id: 3,
                path: '/HW3',
                component: HomeWork3
            },{
                id:4,
                path: '/HW4',
                component: HomeWork4
            }
        ]
    }, {
        week: 27,
        homework: [
            {
                id: 5,
                path: '/HW5',
                component: HomeWork2_1
            },{
                id: 6,
                path: '/HW6',
                component: HomeWork2_2
            }
        ]
    }
];

export default routes;