const data={
    headerMenus:[
        {
            name:"Today's Deal",
            href:'/search?tag=todays-deal'
        },
        {
            name:'New Arrivals',
            href:'/search?tag=new-arrival'
        },
        {
            name:'Featured Products',
            href:'/search?tag=featured'
        },
        {
            name:'Best Seller',
            href:'/search?tag=best-seller'
        },
        {
            name:'Browsing History',
            href:'/#browsing-history'
        },
        {
            name:'Customer Service',
            href:'/page/customer-service'
        },
        {
            name:'About Us',
            href:'/page/about-us'
        },
        {
            name:'Help',
            href:'/page/help'
        },
    ],
    carousels:[
        {
            title:'Most popular shoes for sale',
            buttonCaption:'Shop Now',
            image:'/images/banner3.jpg',
            url:'/search?catagory=Shoes',
            isPublished:true,
        },
        {
            title:"Best sellers in T-shirts",
            buttonCaption:'Shop Now',
            image:'/images/banner2.jpg',
            url:'/search?catagory=T-Shirts',
            isPublished:true,
        },
        {
            title:'Best deals on watches',
            buttonCaption:'See More',
            image:'/images/banner1.jpg',
            url:'/search?catagory=Watches',
            isPublished:true,
        },
       
    ]
}
export default data;