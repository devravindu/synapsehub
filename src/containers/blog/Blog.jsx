import React from 'react';
import './blog.css';
import Article from '../../components/article/Article';
import {blog01, blog02, blog03, blog04, blog05} from './import'

const Blog = () => {
  return (
    <div className='synapsehub__blog section__padding' id='blog'>
    <div className='synapsehub__blog-heading'>
      <h1 className='gradient__text'>
      A lot is happening, We are blogging about it.
      </h1>
    </div>
    <div className='synapsehub__blog-container'>
      <div className='synapsehub__blog-container_groupA'>
        < Article imgURL={blog01} date='Sep 26, 2021' title='SynapseHub and Open AI is the future. Let us exlore how it is?'/>
      </div>
      <div className='synapsehub__blog-container_groupB'>
        < Article imgURL={blog02} date='Sep 26, 2021' title='SynapseHub and Open AI is the future. Let us exlore how it is?'/>
        < Article imgURL={blog03} date='Sep 26, 2021' title='SynapseHub and Open AI is the future. Let us exlore how it is?'/>
        < Article imgURL={blog04} date='Sep 26, 2021' title='SynapseHub and Open AI is the future. Let us exlore how it is?'/>
        < Article imgURL={blog05} date='Sep 26, 2021' title='SynapseHub and Open AI is the future. Let us exlore how it is?'/>
      </div>
    </div>
    </div>
  )
}

export default Blog