
import { content } from "./text"

export const navList =
[
    {title : 'Home' , id : '/' , active : true},
    {title : 'Products' , id : '/product', active : false},
    {title : 'My orders' , id : '/orders', active : false}
]


export const services = 
[
    {
        title :  content.title1.title.eng ,
        dis :  {
            arb :  content.title1.desc.arb ,
            ubr : content.title1.desc.ubr
        }
        
       
    },
    {
        title :  content.title2.title.eng,
        dis :  {
            arb :  content.title2.desc.arb ,
            ubr : content.title2.desc.ubr
        }
    },
    {
        title :  content.title3.title.eng,
        dis :  {
            arb :  content.title3.desc.arb ,
            ubr : content.title3.desc.ubr
        }
    }
]