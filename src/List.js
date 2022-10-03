import './List.css';

function List(props){
    const deleteitem=(key)=>{
    const newList= props.itemList.filter( itemObj=>{
      return itemObj.key!==key
     });
     props.updateList(newList);
    };
    return(
        <div className="list">
            {props.itemList.map(itemObj=>{
             return <div className="item"><p>{itemObj.item}</p>
             <button>up</button>
             <button>down</button>
             <button className=" delete" onClick={()=>deleteitem(itemObj.key)}>Delete</button>
             </div>
            })}
        </div>
    );
}
export default List;