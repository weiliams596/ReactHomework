// Week 26 Homework
import HomeWork1 from './Week26/D1_W26_HW/HomeWork/Homework';
import HomeWork2 from './Week26/D2_W26_HW/HomeWork/HomeWork';
import HomeWork3 from './Week26/D3_W26_HW/Homework/Homework';
import HomeWork4 from './Week26/D3_W26_HW/Homework/Homework';

//  Week 27 Homework
import HomeWork2_1 from './Week27/D1_W27_HW/Homework/Homework';
import HomeWork2_2 from './Week27/D2_W27_HW/Homework/Homework';
import HomeWork2_3 from './Week27/D3_W27_HW/Homework/Homework';

//  Week 28 Homework
//  Router
import Homework3_1 from './Week28/D2_W28_HW/Homework/Homework';
//  Router chilldren
import HW3_1Child1 from './Week28/D2_W28_HW/Homework/Pages/Profile';
import HW3_1Child2 from './Week28/D2_W28_HW/Homework/Pages/Project';
import HW3_1Child3 from './Week28/D2_W28_HW/Homework/Pages/About';


const routes = [
    {
        week: 26,
        homework: [
            {
                id: 1,
                name:'React & JSX',
                path: '/HW1',
                component: HomeWork1
            }, {
                id: 2,
                name:'Components & Props',
                path: '/HW2',
                component: HomeWork2
            }, {
                id: 3,
                name:'Eventhandle & User Interaction',
                path: '/HW3',
                component: HomeWork3
            }, {
                id: 4,
                name:'Mini-Project:Static Blog Page',
                path: '/HW4',
                component: HomeWork4
            }
        ]
    },
    {
        week: 27,
        homework: [
            {
                id: 5,
                name:'State with useState',
                path: '/HW5',
                component: HomeWork2_1
            }, {
                id: 6,
                name:'Delete Tasks & Filter Tasks',
                path: '/HW6',
                component: HomeWork2_2
            }, {
                id: 7,
                name:'Persist Tasks with Local storage',
                path: '/HW7',
                component: HomeWork2_3
            }
        ]        
    },{
        week: 28,
        homework: [
            {
                id: 8,
                name:'React Router',
                path: '/HW8',
                component: Homework3_1,
                chilldren:[
                    {id:8001, path: '/HW8/profile', component: HW3_1Child1 },
                    {id:8002, path: '/HW8/project', component:HW3_1Child2 },
                    {id:8003, path: '/HW8/about', component: HW3_1Child3},
                  ]
            },
            // {
            //     id: 9,
            //     name:'Dynamic Routing & URL Par ameters',
            //     path:'/HW9',
            //     component:null,
            //     chilldren:[
            //         {id:9001, path:'/HW9/home' ,component:null},
            //     ]
            // }
        ]
        }
];

export default routes;