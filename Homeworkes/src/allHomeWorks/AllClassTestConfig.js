// Week 26
import ClassTest1_1 from './Week26/D1_W26_HW/ClassTest/ClassTest';
import ClassTest1_2 from './Week26/D2_W26_HW/ClassTest/ClassTest';
import ClassTest1_3 from './Week26/D3_W26_HW/ClassTest/ClassTest';
import ClassTest1_4 from './Week26/D4_W26_HW/ClassTest/ClassTest';

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

//  Dynamic Routing & URL Par ameters exercose
import ClassTest3_2 from './Week28/D3_W28_HW/ClassTest/ClassTest';

import ClassTest3_3 from './Week28/D3_W28_HW/ClassTest/ClassTest';


import ClassTest4_1 from './Week29/D1_W29_HW/ClassTest/ClassTest';

import CT4_1Child1 from './Week29/D1_W29_HW/ClassTest/Pages/LoginForm';
import CT4_1Child2 from './Week29/D1_W29_HW/ClassTest/Pages/Register';

import ClassTest4_2 from './Week29/D2_W29_Hw/ClassTest/ClassTest';

import ClassTest4_3 from './Week29/D3_W29_HW/ClassTest/ClassTest';

import ClassTest4_4 from './Week29/D4_W29_HW/ClassTest/ClassTesst';
import CT4_4Child1 from './Week29/D4_W29_HW/ClassTest/Pages/Detail';
const routes = [
    {
        week: 26,
        classtest: [
            {
                id: 201,
                name: 'Make some files',
                path: '/CT1',
                component: ClassTest1_1
            }, {
                id: 202,
                name: 'Make some components',
                path: '/CT2',
                component: ClassTest1_2
            }, {
                id: 203,
                name: 'Event exercise',
                path: '/CT3',
                component: ClassTest1_3
            }, {
                id: 204,
                name: 'Blog exercise',
                path: '/CT4',
                component: ClassTest1_4
            }
        ]
    }, {
        week: 27,
        classtest: [
            {
                id: 205,
                name: 'State exercise',
                path: '/CT5',
                component: ClassTest2_1
            }, {
                id: 206,
                name: 'Delete & Filter exercise',
                path: '/CT6',
                component: ClassTest2_2
            }, {
                id: 207,
                name: 'Local Storage exercise',
                path: '/CT7',
                component: ClassTest2_3
            }
        ]
    }, {
        week: 28,
        classtest: [
            {
                id: 208,
                name: 'Router exercise',
                path: '/CT8',
                component: ClassTest3_1,
                chilldren: [
                    {
                        id: 208001,
                        name: 'Home',
                        path: '/CT8/Home',
                        component: CT3_1Child1
                    }, {
                        id: 208002,
                        name: 'Contact',
                        path: '/CT8/Contact',
                        component: CT3_1Child2
                    }, {
                        id: 208003,
                        name: 'Not Found',
                        path: '/CT8/NotFound',
                        component: CT3_1Child3
                    }
                ]
            }, {
                id: 209,
                name: 'Dynamic Routing & URL exercise',
                path: '/CT9',
                component: ClassTest3_2
            }, {
                id: 210,
                name: 'Form exercise',
                path: '/CT10',
                component: ClassTest3_3
            }
        ]
    },
    {
        week: 29,
        classtest: [
            {
                id: 211,
                name: "Form Input and Inputhandle",
                path: '/CT11',
                component: ClassTest4_1,
                chilldren: [
                    {
                        id: 211001,
                        name: "Login Page",
                        path: '/CT11/Login',
                        component: CT4_1Child1
                    },
                    {
                        id: 211002,
                        name: "Register Page",
                        path: '/CT11/Register',
                        component:CT4_1Child2
                    }
                ]
            },{
                id:212,
                name: "Axios exercise",
                path: '/CT12',
                component: ClassTest4_2
            },{
                id:213,
                name: "Axios exercise 2",
                path: '/CT13',
                component: ClassTest4_3,
            },{
                id:214,
                name: "Axios for IMDB Movies API exercise",
                path: '/CT14',
                component: ClassTest4_4,
                chilldren:[
                    {
                        id:214001,
                        name: "Name details",
                        path: '/CT14/Details/:id',
                        component: CT4_4Child1
                    }
                ]
            }
        ]
    }
];

export default routes;