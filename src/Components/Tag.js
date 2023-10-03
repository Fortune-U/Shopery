

export default function Tag (props) {
    return (<div className="tag-ctn"> 
        <div  className="tag">
        {props.card.tagName}
        </div>
     
    </div>);
}