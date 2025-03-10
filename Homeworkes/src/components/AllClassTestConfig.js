import ClassTest1 from './Week26/D1_W26_HW/ClassTest/ClassTest';
import ClassTest2 from './Week26/D2_W26_HW/ClassTest/ClassTest';
import ClassTest3 from './Week26/D3_W26_HW/ClassTest/ClassTest';
import ClassTest4 from './Week26/D4_W26_HW/ClassTest/ClassTest';

import ClassTest2_1 from './Week27/D1_W27_HW/ClassTest/ClassTest';


const routes = [
    {
        week: 26,
        classtest: [
                {
                    id: 201,
                    path: '/CT1',
                    element: ClassTest1 
                }, {
                    id: 202,
                    path: '/CT2',
                    element: ClassTest2
                },{
                    id: 203,
                    path: '/CT3',
                    element: ClassTest3
                },{
                    id: 204,
                    path: '/CT4',
                    element: ClassTest4
                }
            ]
    },{
        week: 27,
        classtest: [
                {
                    id: 205,
                    path: '/CT5',
                    element: ClassTest2_1 
                }
        ]
    }
];

export default routes;