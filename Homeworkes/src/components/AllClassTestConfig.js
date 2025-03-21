// Week 26
import ClassTest1 from './Week26/D1_W26_HW/ClassTest/ClassTest';
import ClassTest2 from './Week26/D2_W26_HW/ClassTest/ClassTest';
import ClassTest3 from './Week26/D3_W26_HW/ClassTest/ClassTest';
import ClassTest4 from './Week26/D4_W26_HW/ClassTest/ClassTest';

// Week 27
import ClassTest2_1 from './Week27/D1_W27_HW/ClassTest/ClassTest';
import ClassTest2_2 from './Week27/D2_W27_HW/ClassTest/ClassTest';
import ClassTest2_3 from './Week27/D3_W27_HW/ClassTest/ClassTest';

// Week 28
// Router exercise
import ClassTest3_1 from './Week28/D2_W28_HW/ClassTest/ClassTest'
// Router chilldren
import CT3_1Child1 from './Week28/D2_W28_HW/ClassTest/Pages/Home'
import CT3_1Child2 from './Week28/D2_W28_HW/ClassTest/Pages/Contact'
import CT3_1Child3 from './Week28/D2_W28_HW/ClassTest/Pages/NotFund'

const routes = [
    {
        week: 26,
        classtest: [
                {
                    id: 201,
                    name:'Make some files',
                    path: '/CT1',
                    component: ClassTest1 
                }, {
                    id: 202,
                    name:'Make some components',
                    path: '/CT2',
                    component: ClassTest2
                },{
                    id: 203,
                    name:'Event exercise',
                    path: '/CT3',
                    component: ClassTest3
                },{
                    id: 204,
                    name:'Blog exercise',
                    path: '/CT4',
                    component: ClassTest4
                }
            ]
    },{
        week: 27,
        classtest:[
            {
                id: 205,
                name:'State exercise',
                path: '/CT5',
                component: ClassTest2_1
            }, {
                id: 206,
                name:'Delete & Filter exercise',
                path: '/CT6',
                component: ClassTest2_2
            },{
                id: 207,
                name:'Local Storage exercise',
                path: '/CT7',
                component: ClassTest2_3
            }
        ]
    },{
        week: 28,
        classtest: [
            {
                id: 208,
                name:'Router exercise',
                path: '/CT8',
                component: ClassTest3_1,
                children: [
                    {
                        id: 209,
                        name:'Home',
                        path: '/CT8/Home',
                        component: CT3_1Child1
                    }, {
                        id: 210,
                        name:'Contact',
                        path: '/CT8/Contact',
                        component: CT3_1Child2
                    },{
                        id: 211,
                        name:'Not Found',
                        path: '/CT8/NotFound',
                        component: CT3_1Child3
                    }
                ]
            }
        ]
    }
];

export default routes;