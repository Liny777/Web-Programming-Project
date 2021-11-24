import PostThumbnail from "./PostThumbnail";
import DataList from '../posts';
import './index.css'
function Main() { 
  return (
    <div className="dada">
        {DataList.map((number=>
          <PostThumbnail className="PostThumbnail" numbers={number}></PostThumbnail>
          ))}
    </div>
  );
}

export default Main;
