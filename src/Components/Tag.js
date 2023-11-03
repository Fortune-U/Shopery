import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { newTag } from "../features/tag";



export default function Tag (props) {
    const [tags,setTags] = useState([]);
    const [selectedTag,setSelectedTag] = useState([]);
    const [oneTag,setOneTag] = useState([]);
    const dispatch = useDispatch();

    const getOneTag = `https://shopery.onrender.com/api/v1/tag/${selectedTag}`;
    

  useEffect(() => {
     // Fetch tags
    fetch('https://shopery.onrender.com/api/v1/tag')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
      setTags(data);
    })
    .catch((error) => {
      console.error('API Error:', error);
    });

    fetch(getOneTag)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
      setOneTag(data);
    })
    .catch((error) => {
      console.error('API Error:', error);
    });
  },[oneTag])

  useEffect(()=>{
    dispatch(newTag(oneTag))
   },[dispatch]);

  const handleTagClick = (tagName) => {
    setSelectedTag(tagName);
  };

  return (
    <div className="tag-ctn" >
      {tags.map((tag) => (
        <div 
        key={tag.id} 
        onClick={() => handleTagClick(tag.tagName)}
        className="tag">
          {tag.tagName}
        </div>
      ))}
    </div>
  );
}