import React from 'react';
import Link from 'next/link';
import {Card, Img, Icon, Intro, Tag, TagList} from './BlogCardStyles';



const BlogCard = ({data}) => {

    return (
        <Link href={data.visit}>
            <Card background={data.background}>
            <Icon src={data.icon}/>
            <Img src={data.image}/>
            <Intro>{data.title}</Intro>
            <TagList>
                {data.tags.map((tag, index)=> {
                   
                    return <Tag key={index}>{tag}</Tag>
                })}
            </TagList>
            
            </Card> 
        </Link>
        
    )
}

export default BlogCard
